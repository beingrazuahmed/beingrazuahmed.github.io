#!/usr/bin/env python3
"""Import seven published open-access figures from the official PMC OA package.

Source: Yeasmin et al., Data in Brief 69 (2026) 113262,
DOI: 10.1016/j.dib.2026.113262.
Authors' uploaded screenshots are NOT used as a remote URL; we retrieve only
the openly licensed figures accompanying the same published article.
Original datasets are retained at Mendeley Data V2 (DOI 10.17632/fn6yhzjz83.2).
"""
from __future__ import annotations

import io
import json
import re
import tarfile
import time
from pathlib import Path
from urllib.request import Request, urlopen
from urllib.parse import urlparse
from xml.etree import ElementTree as ET

from PIL import Image, ImageOps

PMCID = "PMC13629197"
OUT = Path("assets/academic/projects/pust-food-dataset")
NAMES = {
    1: "fig01-meal-platter-examples.webp",
    2: "fig02-class-distribution-before.webp",
    3: "fig03-class-distribution-after.webp",
    4: "fig04-class-distribution-splits.webp",
    5: "fig05-detection-segmentation-annotations.webp",
    6: "fig06-dataset-directory-structure.webp",
    7: "fig07-dataset-preparation-workflow.webp",
}
XHREF = "{http://www.w3.org/1999/xlink}href"


def fetch(url: str) -> bytes:
    if not url.startswith(("https://", "http://")):
        raise ValueError("Only HTTP(S) article resources may be downloaded")
    req = Request(url, headers={
        "User-Agent": "RazuAcademicPortfolio/1.0 (citation: doi:10.1016/j.dib.2026.113262)",
        "Accept": "*/*",
    })
    with urlopen(req, timeout=90) as response:
        content = response.read()
    if not content:
        raise RuntimeError(f"Empty response: {url}")
    return content


def package_url() -> str:
    endpoint = f"https://www.ncbi.nlm.nih.gov/pmc/utils/oa/oa.fcgi?id={PMCID}"
    root = ET.fromstring(fetch(endpoint))
    links = []
    for node in root.iter():
        if node.tag.lower().endswith("link"):
            href = node.attrib.get("href", "")
            if href and (node.attrib.get("format") in ("tgz", "tar.gz")):
                links.append(href)
    if not links:
        raise RuntimeError("No openly downloadable PMC article package: " +
                           ET.tostring(root, encoding="unicode")[:700])
    url = links[0].replace("ftp://ftp.ncbi.nlm.nih.gov/", "https://ftp.ncbi.nlm.nih.gov/")
    if not url.startswith("https://ftp.ncbi.nlm.nih.gov/"):
        raise RuntimeError(f"Unexpected OA package host: {url}")
    return url


def local_name(xml: bytes, archive: dict[str, bytes]) -> dict[int, bytes]:
    root = ET.fromstring(xml)
    figs: dict[int, bytes] = {}
    for fig in root.iter():
        if fig.tag.rsplit("}", 1)[-1] != "fig":
            continue
        label = next((x for x in fig if x.tag.rsplit("}", 1)[-1] == "label"), None)
        label_text = "".join(label.itertext()) if label is not None else fig.attrib.get("id", "")
        m = re.search(r"(?<!\\d)([1-7])(?!\\d)", label_text)
        if not m:
            m = re.search(r"(?<!\\d)([1-7])(?!\\d)", fig.attrib.get("id", ""))
        if not m:
            continue
        number = int(m.group(1))
        graphics = [x.attrib.get(XHREF, x.attrib.get("href", ""))
                    for x in fig.iter() if x.tag.rsplit("}", 1)[-1] in ("graphic", "inline-graphic")]
        for name in graphics:
            stem = Path(name).name.lower().rsplit(".", 1)[0]
            candidates = [(key, data) for key, data in archive.items()
                          if Path(key).stem.lower() == stem and Path(key).suffix.lower()
                          in (".jpg", ".jpeg", ".png", ".tif", ".tiff")]
            if not candidates:
                continue
            candidates.sort(key=lambda row: (
                Path(row[0]).suffix.lower() in (".png", ".tif", ".tiff"), len(row[1])
            ), reverse=True)
            figs[number] = candidates[0][1]
            break
    return figs


def main() -> None:
    target = package_url()
    print("Downloading publisher-deposited OA package from:", target)
    tarbytes = fetch(target)
    if len(tarbytes) < 10000:
        raise RuntimeError("Publisher OA package unexpectedly small")
    archive = {}
    with tarfile.open(fileobj=io.BytesIO(tarbytes), mode="r:*") as tf:
        for m in tf.getmembers():
            if not m.isfile() or m.size > 250_000_000:
                continue
            if not Path(m.name).suffix.lower() in (".xml", ".nxml", ".jpg", ".jpeg", ".png", ".tif", ".tiff"):
                continue
            fh = tf.extractfile(m)
            if fh:
                archive[m.name] = fh.read()
    print("Package files:", sorted(archive)[:45])
    xmls = [(k, v) for k, v in archive.items() if k.endswith((".xml", ".nxml"))]
    xmls.sort(key=lambda x: len(x[1]), reverse=True)
    figmap: dict[int, bytes] = {}
    for filename, blob in xmls:
        try:
            result = local_name(blob, archive)
            if len(result) > len(figmap):
                figmap = result
                print("Figure mapping from", filename, sorted(figmap))
        except ET.ParseError:
            continue
    if len(figmap) < len(NAMES):
        print("WARNING: XML did not resolve all seven figures; trying conventional Elsevier graphic names")
        for i in NAMES:
            if i in figmap:
                continue
            for key, data in archive.items():
                if re.search(rf"(?:^|[/_-])gr{i}(?:\\.|[_-])", key.lower()) and Path(key).suffix.lower() in (".jpg", ".jpeg", ".png", ".tif", ".tiff"):
                    figmap[i] = data
                    break
    if set(figmap) != set(NAMES):
        raise RuntimeError("Missing article figures: " + str(sorted(set(NAMES) - set(figmap))))
    OUT.mkdir(parents=True, exist_ok=True)
    results = []
    for number, filename in NAMES.items():
        image = Image.open(io.BytesIO(figmap[number]))
        image = ImageOps.exif_transpose(image)
        if image.mode not in ("RGB", "RGBA"):
            image = image.convert("RGB")
        if image.width > 2800:
            image.thumbnail((2800, 2800), Image.Resampling.LANCZOS)
        dest = OUT / filename
        image.save(dest, "WEBP", quality=88, method=6)
        if dest.stat().st_size < 3500:
            raise RuntimeError(f"Converted figure appears invalid: {dest}")
        results.append({"figure": number, "file": filename, "width": image.width,
                        "height": image.height, "bytes": dest.stat().st_size})
    (OUT / "figure-manifest.json").write_text(json.dumps({
        "article_doi": "10.1016/j.dib.2026.113262",
        "dataset_doi": "10.17632/fn6yhzjz83.2",
        "source": target,
        "license": "Article open-access terms; attribution required",
        "figures": results,
    }, indent=2) + "\n", encoding="utf-8")
    print("Successfully prepared", len(results), "publication figures:", results)


if __name__ == "__main__":
    main()
