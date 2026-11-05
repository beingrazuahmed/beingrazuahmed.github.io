# PUST Cafeteria Food Image Dataset — Research Figure Gallery

This directory contains **web-optimized images of all seven figures from the published data article**, not the underlying food-image research dataset. It supports the professional [Data in Brief project case study](https://beingrazuahmed.github.io/projects.html#dib-food-dataset-project) on the academic portfolio.

## Research publication

Yeasmin, M., Ahmed, M. R., Kundu, P. R., Mauya, J., & Reza, M. S. (2026). *PUST Cafeteria Food Image Dataset: Real-world Bangladeshi meal-platter images with bounding-box and polygon annotations*. **Data in Brief, 69**, 113262. https://doi.org/10.1016/j.dib.2026.113262

## Authoritative open dataset

**Mendeley Data, Version 2 (published 28 August 2026):** https://data.mendeley.com/datasets/fn6yhzjz83/2

**Dataset DOI:** https://doi.org/10.17632/fn6yhzjz83.2

The V2 archive contains 720 original meal-platter photographs, 1,728 processed images, 6,297 annotated food instances, and 16 classes. Final partitions are 1,512 training / 108 validation / 108 testing images. Original images were separated before augmentation; augmentation was restricted to the training partition. YOLO detection TXT, YOLO segmentation TXT, and COCO JSON are parallel annotation views of the same 1,728-image collection.

## Figure files

| Paper figure | Hosted file | Contents |
| --- | --- | --- |
| Figure 1 | `fig01-meal-platter-examples.webp` | Examples of real cafeteria meal platters |
| Figure 2 | `fig02-class-distribution-before.webp` | Food-instance class distribution before augmentation |
| Figure 3 | `fig03-class-distribution-after.webp` | Food-instance class distribution after augmentation |
| Figure 4 | `fig04-class-distribution-splits.webp` | Class-wise distribution by train, validation, and test |
| Figure 5 | `fig05-detection-segmentation-annotations.webp` | Bounding-box and polygon annotations |
| Figure 6 | `fig06-dataset-directory-structure.webp` | Released dataset folder structure |
| Figure 7 | `fig07-dataset-preparation-workflow.webp` | Image-collection and dataset-preparation workflow |

Images were acquired from the publisher-deposited **NIH NLM NCBI PMC Article Datasets** (PMCID: PMC13629197), rendered as WebP for faster browsing, and attributed to the published research article. See `figure-manifest.json` for the precise original media links and image dimensions.

The published article is open access under **CC BY**. This attribution covers the optimized figure reproductions. The dataset itself is separately released under **CC BY 4.0** on Mendeley Data. Do not mistake the CC BY figure images for an MIT software project or for the complete released dataset.

The full data archive remains on Mendeley Data; this portfolio **does not mirror the dataset's original photos or annotation files**.

For accuracy and license conditions, always refer to the published source and the latest version of the Mendeley Data record.
