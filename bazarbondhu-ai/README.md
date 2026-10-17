# BazarBondhu AI · SocioNova

**AI Navigator Autumn 2026 Capstone | AU26SA2 (L2) | Trainer: Sharif Anowar**

**Live demonstration:** https://beingrazuahmed.github.io/bazarbondhu-ai/

Team: **Md. Razu Ahmed** (Team Leader, Statistics and Data Science, PUST); **Muhammad Ziaul Haque** (Mathematics, PUST).

## What it does

- Calculates household grocery allowance after bills and savings.
- Provides an editable 16-item sample grocery basket with prices, quantities, and priorities.
- Explores an explainable constrained spending allocation, *not* a nutritional recommendation.
- Compares **hypothetical alternative-seller prices** for three same-product, same-unit examples.
- Runs 0–50% what-if food-price increases, **not** a forecast.
- Reports illustrative per-person spending; household size does not drive nutrition quantities.
- Answers selected English and Bangla budget questions with **offline character n-gram TF-IDF matching**.
- Downloads a CSV spending summary.

## Start and demonstrate

Open `index.html` in a browser or use the public GitHub Pages link. No build environment or secret API keys are needed.

Demo sequence: **Dashboard → edit household income or rent → Grocery planner → change prices and compare seller options → Price scenarios (+10%) → AI assistant → CSV export**.

Example defaults: monthly income **BDT 30,000**, available grocery allowance **BDT 13,000**, basket **BDT 8,570**; available difference **BDT 4,430**. A hypothetical 10% uniform price increase makes the basket **BDT 9,427**.

## Transparency

Every seeded grocery price and alternative quote is an **invented demonstration value**, not a verified current price. DAM, TCB, and BBS are possible future data sources but **are not connected**.

There is **no live store comparison**, remote large-language-model API, tracking, login, cloud database, or household-data upload. Calculations and limited AI question matching run in the browser. The application does not establish nutritional sufficiency and should not be used as dietary, medical, or professional financial advice.

## Testing and AI-use declaration

Source includes arithmetic, bounded optimization, and a TF-IDF classifier; the team should be prepared to explain all three. ChatGPT assisted with planning, code generation, review and testing, and presentation preparation. Human review and testing remain necessary.

Educational project, not a deployed public-benefits or commercial service.