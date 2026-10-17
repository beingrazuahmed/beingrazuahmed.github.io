# BazarBondhu AI | Team SocioNova

**AI Navigator Autumn 2026 · AU26SA2 (L2) · Trainer: Sharif Anowar**

**Live app:** https://beingrazuahmed.github.io/bazarbondhu-ai/

**Team leader:** Md. Razu Ahmed (Statistics and Data Science, PUST)  
**Team member:** Muhammad Ziaul Haque (Mathematics, PUST)

## Working capabilities

The browser-based educational prototype calculates grocery affordability from income, essential commitments and a savings goal. The grocery planner has 16 synthetic sample items, editable quantities/prices/priorities, and a bounded mathematical allocation algorithm (not a dietary optimizer). It has three illustrative same-product seller comparisons, a hypothetical 0–50% price-increase stress test, and CSV export.

**New Price evidence feature:** a user can enter an item unit price, observation date, market, source category and reference, and optionally apply that value to the current basket. It can export a local evidence CSV. Entries are **user-reported and never independently authenticated by the site**. Manually changing a recorded price removes its applied source label.

The in-app assistant uses **offline character n-gram TF-IDF intent matching**, with pre-defined English/Bangla examples and replies assembled from deterministic calculations. No external generative model, grocery price feed or remote database is connected.

## Evidence and limitations

**All starter prices are fictional illustrations**. DAM and TCB links are research pointers, not integrated live feeds. The national context statistic is BBS food inflation **7.22% in September 2026**, reported by BSS on 7 Oct: https://www.bssnews.net/business/432352. No completed household-savings trial or verified market-price audit is claimed. Nutrition adequacy, digital exclusion and language fairness need field validation.

## Responsible AI

No login or account, tracker, cloud storage or remote household-data upload. User-entered financial information stays in the browser session; users can export selected CSV files. Do not treat priority-based quantity reductions as healthy diet instructions. AI tools assisted development and slide/report preparation; the team must understand and defend the code.

## Five-minute pitch (main 8 slides)

| Slides | Speaker | Seconds |
|---|---|---:|
| 1–3: Introduction, need, solution | Md. Razu Ahmed | 100 |
| 4–6: Planner, scenarios, AI | Muhammad Ziaul Haque | 140 |
| 7–8: Ethics, evidence and close | Md. Razu Ahmed | 60 |
| **Total** | | **300** |

Slide 9 (QR code) is an optional appendix, excluded from the five minutes.

## Testing and demo readiness

The delivered offline package contains the Node regression suite with **38 passing deterministic checks**, a manual QA checklist, full report, slide notes, and source/data collection templates. The current browser test environment blocked local navigation, so a successful new end-to-end browser test is **not claimed**. Team members must verify navigation, the Price evidence entry/apply/export flow and mobile layout on their own browser before Capstone Day.

**Offline backup:** Download the package and open `index.html` locally (no credentials, build step or API keys needed).
