# Website Analytics — Cloudflare Web Analytics

**Implementation status (2026-10-09):** Cloudflare JavaScript beacon installed on all 38 non-redirect HTML pages of the portfolio, using the owner-provided site token for `beingrazuahmed.github.io`. Deployment and dashboard data reception must be verified separately.

The portfolio continues to use GitHub Pages; no Cloudflare DNS or hosting migration is needed. Site metrics are available privately in Cloudflare Web Analytics, with no public country-flag visitor counter. The prior shared Flag Counter ID `SCyQ` is not used.

## Installed script

The same account-specific Cloudflare dashboard-provided `type="module"` snippet is included **once**, just before `</body>`, in each normal HTML page, including `index.html`, `contact.html`, `privacy.html`, and `404.html`. A redirect-only file, `dashboard.html`, is deliberately excluded to avoid counting a redirect and the destination page as separate visits. The destination `dashboard-live.html` is instrumented.

Cloudflare's site token inside this public browser snippet identifies a website; it is not an administrator API key or authentication secret. Never commit Cloudflare account credentials or API tokens.

## Verify after deployment

1. Check GitHub Pages build and deployment for the exact published Git commit; it must complete successfully.
2. Open https://beingrazuahmed.github.io/ in a normal browser, then visit `contact.html` and another content page.
3. In browser developer tools, inspect the page for exactly one `static.cloudflareinsights.com/beacon.min.js` module script. If necessary, check the Network panel for a beacon request to `cloudflareinsights.com/cdn-cgi/rum` after navigating away.
4. Open https://dash.cloudflare.com/ → Observability → Analytics → Web Analytics → `beingrazuahmed.github.io`. Check for page views and performance reporting after a few minutes. Browser tracking blockers or disabled JavaScript may suppress collection.
5. Do not display these totals publicly or claim the number of countries/unique people is exact.
6. When adding new HTML pages, include the same site-specific beacon once, before `</body>`, except on redirect-only pages. Update `privacy.html` if the analytics provider or data processing changes.

Documentation: https://developers.cloudflare.com/web-analytics/get-started/ and https://developers.cloudflare.com/web-analytics/faq/

## Contact routes

- Website form: `contact.html` → `contact-page.js` → FormSubmit → academic email. A successful service response confirms request acceptance, not guaranteed final inbox delivery.
- Direct email: the `mailto:` action opens the visitor's configured email handler; Copy Address is available as another route.
- Privacy: `privacy.html` explains the external enquiry forwarding and Cloudflare Web Analytics.
