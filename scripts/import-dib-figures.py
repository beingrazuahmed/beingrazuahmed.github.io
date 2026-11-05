#!/usr/bin/env python3
"""Retrieve the seven published Data in Brief figures using PMC's 2026 Cloud Service.

Yeasmin et al. (2026), Data in Brief 69, 113262,
https://doi.org/10.1016/j.dib.2026.113262
Dataset: https://doi.org/10.17632/fn6yhzjz83.2

This script does not mirror or alter the Mendeley research dataset.
"""
from __future__ import annotations

import io
import json
import re
from pathlib import Path
from urllib.parse import quote, urlparse
from urllib.request import Request, urlopen
from xml.etree import ElementTree as ET

from PIL import Image, ImageOps

PMCID = "PMC13629197"
ARTICLE_DOI = "10.1016/j.dib.2026.113262"
S3 = "https://pmc-oa-opendata.s3.amazonaws.com"
OUT = Path("assets/academic/projects/pust-food-dataset")
FILES = {
    1: "fig01-meal-platter-examples.webp",
    2: "fig02-class-distribution-before.webp",
    3: "fig03-class-distribution-after.webp",
    4: "fig04-class-distribution-splits.webp",
    5: "fig05-detection-segmentation-annotations.webp",
    6: "fig06-dataset-directory-structure.webp",
    7: "fig07-dataset-preparation-workflow.webp",
}
XHREF = "{http://www.w3.org/1999/xlink}href"


def get(url):
    if not url.startswith(S3 + "/"):
        raise RuntimeError("Only the official PMC AWS open-data source is permitted")
    req = Request(url, headers={"User-Agent": "Research-portfolio-figure-mirror/1.0",
                                "Accept": "application/json,application/xml,image/*,*/*"})
    with urlopen(req, timeout=80) as response:
        data = response.read()
    if not data:
        raise RuntimeError("Empty response for " + url)
    return data


def node_name(el):
    return el.tag.rsplit("}", 1)[-1]


def article_metadata():
    query = f"{S3}/?list-type=2&prefix={quote(PMCID + '.')}&delimiter=%2F"
    root = ET.fromstring(get(query))
    prefixes = [x.text for x in root.iter() if node_name(x) == "Prefix"
                and x.text and re.fullmatch(re.escape(PMCID) + r"\.[0-9]+/", x.text)]
    if not prefixes:
        raise RuntimeError(f"PMC cloud data does not contain {PMCID}: {ET.tostring(root, encoding='unicode')[:650]}")
    versions = sorted(set(x.rstrip("/") for x in prefixes),
                      key=lambda x: int(x.rsplit(".", 1)[-1]), reverse=True)
    for version in versions:
        candidate = f"{S3}/metadata/{version}.json"
        try:
            meta = json.loads(get(candidate))
        except Exception as ex:
            print("Metadata unavailable for", version, str(ex)[:130])
            continue
        if ARTICLE_DOI.lower() not in str(meta.get("doi", "")).lower():
            print("Skip non-matching DOI:", version, meta.get("doi"))
            continue
        if str(meta.get("is_manuscript", "")).lower() == "yes":
            continue
        license_code = str(meta.get("license_code") or "").lower()
        if not license_code.startswith("cc"):
            raise RuntimeError(f"Artwork redistribution license not established: {license_code}")
        xmlurl = meta.get("xml_url") or f"{S3}/{version}/{version}.xml"
        if not str(xmlurl).startswith(S3 + "/"):
            raise RuntimeError("Unexpected metadata XML source")
        print("PMC article version:", version, "license:", license_code,
              "media objects:", len(meta.get("media_urls") or []))
        return meta, xmlurl, version
    raise RuntimeError(f"No licensed, DOI-matching article version found for {PMCID}")


def figure_graphics(xml):
    root = ET.fromstring(xml)
    mappings = {}
    for elem in root.iter():
        if node_name(elem) != "fig":
            continue
        label = next((x for x in elem if node_name(x) == "label"), None)
        label_str = "".join(label.itertext()) if label is not None else elem.attrib.get("id", "")
        m = re.search(r"(?<!\d)([1-7])(?!\d)", label_str)
        if not m:
            m = re.search(r"(?<!\d)([1-7])(?!\d)", elem.attrib.get("id", ""))
        if not m:
            continue
        number = int(m.group(1))
        names = [x.attrib.get(XHREF, x.attrib.get("href", ""))
                 for x in elem.iter() if node_name(x) in ("graphic", "inline-graphic")]
        if names:
            mappings[number] = names
    return mappings


def image_url(number, names, media_urls):
    choices = []
    for row in media_urls:
        url = row if isinstance(row, str) else row.get("url", "")
        if not url or not url.startswith(S3 + "/"):
            continue
        path = Path(urlparse(url).path)
        if path.suffix.lower() not in (".jpg", ".jpeg", ".png", ".tif", ".tiff", ".webp"):
            continue
        name = path.stem.lower()
        matches = any(name == Path(g).stem.lower() or name == Path(g).name.lower()
                      for g in names)
        if not matches:
            continue
        choices.append((len(url), url))
    if not choices:
        raise RuntimeError(f"Cannot locate original figure {number} in PMC media inventory: {names}")
    return sorted(choices)[0][1]


def main():
    meta, xmlurl, version = article_metadata()
    graphic_map = figure_graphics(get(xmlurl))
    print("Figure graphics:", graphic_map)
    if set(FILES) - set(graphic_map):
        raise RuntimeError("Missing figure mappings: " + str(sorted(set(FILES) - set(graphic_map))))
    media = meta.get("media_urls") or []
    if not media:
        raise RuntimeError("PMC article metadata does not expose figure media")
    OUT.mkdir(parents=True, exist_ok=True)
    output = []
    for number, filename in FILES.items():
        url = image_url(number, graphic_map[number], media)
        raw = get(url)
        im = Image.open(io.BytesIO(raw))
        im = ImageOps.exif_transpose(im)
        if im.mode not in ("RGB", "RGBA"):
            im = im.convert("RGB")
        if im.width > 2800 or im.height > 2800:
            im.thumbnail((2800, 2800), Image.Resampling.LANCZOS)
        path = OUT / filename
        im.save(path, "WEBP", quality=88, method=6)
        if path.stat().st_size < 3500:
            raise RuntimeError("Image unexpectedly small: " + filename)
        output.append({"figure": number, "file": filename, "size": [im.width, im.height],
                       "bytes": path.stat().st_size, "source_url": url})
        print(f"Figure {number}: {im.size}, {path.stat().st_size} bytes")
    (OUT / "figure-manifest.json").write_text(json.dumps({
        "source": "NIH NLM NCBI PMC AWS Article Datasets",
        "pmcid": PMCID, "version": version, "license": meta.get("license_code"),
        "journal_article_doi": ARTICLE_DOI,
        "dataset_doi": "10.17632/fn6yhzjz83.2",
        "figures": output,
    }, indent=2) + "\n", encoding="utf-8")
    print("Imported all seven publisher-deposited figures with provenance.")


if __name__ == "__main__":
    main()
