# Premium Academic Editorial design system — 2026-10-09

This is the **shared visual layer** for Md. Razu Ahmed's public research portfolio. The content, data sources, GitHub Pages hosting, contact form, Cloudflare beacon, Network records, verified evidence and constellation implementation remain unchanged.

## Source files

- `premium-design.css`: palette tokens, Manrope heading hierarchy, page surfaces, navigation dropdown, hero refinement, responsive design, accessibility and reduced-motion refinements.
- `premium-theme-boot.js`: synchronously selects the stored color palette and display mode before painting site content.
- `v2-app.js`: appearance palette choices, legacy preference migration and desktop More navigation menu.
- The existing `v2.css`, `v2-extra.css`, component-specific styles and all data files remain in place as the existing layout foundation.

The premium stylesheet is included **last inside the head** for the 37 standard portfolio pages, so the design system can refine both shared and page-specific rules. `404.html` uses its existing standalone styles and `dashboard.html` remains a redirect-only page.

## Theme palette

| Theme | Light surface | Text | Accent | Dark background | Dark accent |
|---|---|---|---|---|---|
| Midnight Sapphire (default) | #FFFFFF | #10263F | #2C5FC4 | #0C1627 | #8AB9FF |
| Executive Forest | #FFFFFF | #132B29 | #166B60 | #0C1C1A | #8ADBC2 |
| Editorial Monochrome | #FFFFFF | #22272B | #303B47 | #151718 | #E0E6EB |

Headings: **Manrope**; body/UI: **Inter**; infrequent labels and identifiers: **JetBrains Mono**. Fonts are loaded with display=swap, and fall back to system fonts if blocked.

## Preserved preferences

- `mra-theme`: midnight / forest / editorial, migrating scientific→midnight, executive→forest, quantum→midnight, mono→editorial.
- `mra-mode`: system / light / dark, including OS synchronization.
- `mra-motion`: balanced / reduced, with OS-reduced-motion support.
- `mra-text-scale`: 90 / 100 / 110 / 120.

On desktop (>1080px), the main navigation shows the seven most requested destinations. The **More** menu groups the remaining academic and resource pages and provides CV/Ask AI links. On tablets and phones (≤1080px), the existing full mobile panel is retained, including its stacking-context fixes and keyboard controls.

## Recommended review after deployment

- Widths 360, 390, 480, 768, 1024, 1440 and 1920 pixels; both landscape and portrait where supported.
- Homepage hero, research/publications card grids, Academic, Experience, Network list and full profiles, dashboard, contact form and footer.
- All three themes in Light and Dark, plus OS System mode; check text contrast and background accents.
- Theme buttons / preference persistence after navigation and reload, keyboard escape/outside click for More, menu open/close, text scaling, reduced motion.
- Confirm Cloudflare beacon still present exactly once in each normal HTML page and contact submissions remain connected.
- Browser visual testing is required to confirm there are no unintended device-specific layout interactions.

## Maintainability

Make all future site-wide palette/typography adjustments in `premium-design.css` rather than appending more patches to the already long legacy CSS. Keep page-specific content and images in the original files. When editing the shared JS or CSS, update their query-string revisions across their HTML consumers and validate before publishing.
