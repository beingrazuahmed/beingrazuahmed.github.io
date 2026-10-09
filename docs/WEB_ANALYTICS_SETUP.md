# Portfolio visitor analytics — activation guide

Status: **Not activated** (2026-10-09). The previous shared Flag Counter `SCyQ` has been removed from the public footer. No replacement public counter or sample statistics are displayed.

## Recommended setup: private Cloudflare Web Analytics

The portfolio remains on GitHub Pages. Web Analytics works without moving DNS or hosting. **Cloudflare account access and a site-specific beacon token are required before activating it.** The website code cannot provision a Cloudflare property without the account owner's authorization.

1. Sign in to https://dash.cloudflare.com/ .
2. Open **Web Analytics**, choose **Add a site**, and register **beingrazuahmed.github.io**.
3. Copy the site's JavaScript beacon snippet from **Manage site**.
4. Add that genuine snippet to the portfolio's HTML pages (or a shared loader used by all relevant pages), then update asset versions when needed. Do not commit a placeholder or reuse another site's token.
5. Verify page views/visits and country breakdowns appear in the Cloudflare dashboard after deployment.
6. Before enabling the beacon, update `privacy.html` to disclose the provider and data categories. Keep the detailed analytics private; no automatically published geographic counts are available from Cloudflare's dashboard-only service.

Official documentation: https://developers.cloudflare.com/web-analytics/get-started/

## Contact routes

- Website form: `contact.html` → `contact-page.js` → verified FormSubmit AJAX response → the portfolio email. A success response confirms service acceptance, not guaranteed final inbox delivery.
- Direct email: `mailto:` opens the visitor's configured email app; a **Copy address** button is available as fallback.
- Privacy notice: `privacy.html` discloses FormSubmit, basic fields, and external handling.
- Test safely: do not send fake public enquiries or count test traffic as verified real visitors.

Do not re-add `SCyQ`: it originated as a shared counter ID and cannot be used to establish statistics exclusive to this portfolio.
