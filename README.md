# Md. Razu Ahmed — Academic & Research Portfolio

Production repository for the public academic portfolio of Md. Razu Ahmed.

## Current architecture

- `index.html` — main portfolio experience
- `v2-data.js` — active Network profiles, academic records and composed page data
- `v2-app.js` — active page rendering, navigation, profiles, search and interactions
- `v2.css` + `v2-extra.css` — active responsive visual system
- `data.js` — shared public research, conference, recognition and gallery records
- `extra-data.js` — dashboard metrics, latest updates, ongoing work, research evolution and skills
- `coursework-data.js` — coursework and curriculum data
- `collection-views.js` + `collection-views.css` — collection layouts and view controls
- `network.html` + `network-*.html` — Network cards and individual academic profiles
- `dashboard-live.html` — current research/impact dashboard
- `search.html` — global portfolio search
- `research.html?id=<record-id>` — dynamic public research detail page
- `cv.html` — print-friendly public CV view
- `copyright.html` — current copyright and reuse page
- `script.js`, `styles.css`, `enhancements.css`, `dashboard.html`, `privacy.html` — legacy/supporting files; inspect actual page references before changing
- `asset-manifest.json` — canonical binary-asset locations and privacy exclusions
- `robots.txt`, `sitemap.xml`, `site.webmanifest`, `favicon.svg` — production/SEO support

## Public content coverage

The structured site covers published/online articles, accepted work, public-safe submitted manuscripts, the Mendeley dataset, conference contributions, presentations, awards, training/certificates, research experience, education, academic guidance, collaborators, junior research network, scholarly service, academic/scientific engagement, ongoing work, technical skills, research evolution, metrics and gallery/evidence records.

## Asset policy

Verified original visual assets should be stored under `assets/` following `asset-manifest.json`. The website intentionally uses graceful placeholders if a referenced binary has not yet been uploaded. Do not substitute generic or inferred images for research evidence.

## Privacy

The public repository intentionally excludes confidential manuscripts, reviewer reports, editorial correspondence, manuscript IDs, phone numbers, private files and collaborator material that could reveal non-public research. In particular, the confidential BDHS cesarean manuscript and related figures are not part of this repository.

## Deployment

Primary GitHub Pages URL:

https://beingrazuahmed.github.io/

Production updates publish from `main` through GitHub Pages. Verify the Pages run
for the exact commit before reporting that a change is live.

## Maintenance with ChatGPT or Codex

Read [AGENTS.md](AGENTS.md) and the [maintenance guide](docs/MAINTENANCE.md).
Use the full current source; never replace a bundled file from a truncated chat
excerpt. These local commands require Node.js and no package installation:

```bash
node scripts/portfolio.mjs check
node scripts/portfolio.mjs people
node scripts/portfolio.mjs person abdur-rakib
```

The guide explains connection diagnosis, complete-file editing, concurrent
updates, asset cache refreshes and deployment verification.

© 2026 Md. Razu Ahmed. All rights reserved.
