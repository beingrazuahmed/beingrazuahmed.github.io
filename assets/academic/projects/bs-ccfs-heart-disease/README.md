# BS-CCFS Heart Disease — Research Figure Gallery

**Manuscript:** BS-CCFS: Bootstrap-Stable Consensus Feature Selection Across Multiple Causal Discovery Algorithms for Interpretable Heart Disease Prediction

**Status:** Submitted to PLOS ONE on 2 November 2026; peer-review and publication outcomes are **not** claimed. There is no published article DOI at present. Razu Ahmed is **second author**.

**Authors:** Jannatul Mauya, Md. Razu Ahmed, Md. Shamim Reza, Sabba Ruhi, Md. Aminul Hoque.

## Figure asset publication and provenance

**All 11 figure assets are uploaded and connected to the live portfolio gallery.** They were converted from the authors' 300-DPI TIFF sources into full-pixel-resolution WebP previews, with one image per paper panel. Each displayed figure links to its own source file at its complete available resolution.

The accompanying [figure-manifest.json](figure-manifest.json) preserves original TIFF filenames, panel labels, image dimensions, byte sizes, captions and SHA-256 checksums. The GitHub Actions [BS-CCFS figure validator](https://github.com/beingrazuahmed/beingrazuahmed.github.io/actions/workflows/bsccfs-figure-check.yml) checks all 11 names, file signatures and the manifest.

The original source TIFFs should be preserved separately and not redistributed without agreement from all relevant rights holders. This directory is a research-image gallery, **not** an approved public deposit of patient-level data or complete model-training code.

| Figure | Exact hosted filename | Content |
|:--|:--|:--|
| 1 | `fig01-complete-methodology.webp` | Complete workflow schematic |
| 2 | `fig02-causal-discovery-graphs.webp` | Causal discovery graphs |
| 3 | `fig03-threshold-sensitivity.webp` | Consensus-threshold sensitivity |
| 4 | `fig04-mixed-type-validity.webp` | Mixed-type validity check |
| 5 | `fig05-model-roc-curves.webp` | ROC comparisons |
| 6 | `fig06-shap-explainability.webp` | SHAP explanation |
| 7A | `fig07a-confusion-matrix.webp` | Holdout confusion matrix |
| 7B | `fig07b-calibration.webp` | Calibration curve |
| 7C | `fig07c-precision-recall.webp` | Precision–recall curve |
| S1 | `figs1-correlation-matrix.webp` | Input-feature correlation heatmap |
| S2 | `figs2-leakage-aware-preprocessing.webp` | Preprocessing and imputation workflow |

## Research and validation notes

- The study data comprise **920 observations**, split stratified into **736 training and 184 test** records.
- The 13 initial predictors are compared to the five-variable BS-CCFS consensus set.
- The causal discovery engines are PC, FCI and NOTEARS, with **30 bootstrap** perturbations reported in the manuscript metadata.
- Training-fitted iterative imputation and fold-confined model operations are central to leakage control; the figures do not by themselves prove external validation.
- A previous controlled, untuned XGBoost feature-set comparison reports ROC-AUC **0.894** for the BS-CCFS set and **0.890** for all 13 variables. This differs from the separately tuned classifier comparison.
- These observations are **research results**, not patient-specific medical advice, clinical deployment or evidence of a prospectively validated causal effect.
- The author-supplied figures remain subject to underlying authorship and eventual publication rights; the site's code license (if any) does not independently license these figures.

## Portfolio

[Visit the heart disease research project](https://beingrazuahmed.github.io/projects.html#heart-bsccfs-project)

For source files, preprocessing and training code, wait for the authors' approved public code release; this directory hosts only research-figure previews, not an independently rerun code pipeline.
