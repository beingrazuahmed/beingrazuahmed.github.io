# Portfolio maintenance

Repository: `beingrazuahmed/beingrazuahmed.github.io`. Production branch: `main`.
Public site: `https://beingrazuahmed.github.io/`.

## Start with the current source

- Inspect the working tree and fetch the latest `main` before editing. Preserve
  unrelated work; use an isolated worktree if needed. Do not overwrite concurrent
  changes or force-push.
- The active renderer is `v2-app.js`, with `v2.css` and `v2-extra.css`.
  Network profiles are in `v2-data.js`; shared base records are in `data.js`,
  `extra-data.js`, and `coursework-data.js`.
- Read `docs/MAINTENANCE.md` for the complete-file and publishing workflow.
  A truncated chat/tool display does not prove that GitHub is disconnected.
  Never rebuild or replace a source file from a truncated excerpt.
- Use a complete Git checkout or the complete structured file response from the
  connected GitHub tool. Inspect targeted sections with `rg`, or run
  `node scripts/portfolio.mjs person <id>`.

## Make focused changes

- Keep current appointments and historical roles distinct. Preserve supplied
  qualifications, publication status, paper IDs, and collaborator relationships.
  Resolve conflicting facts using the current request and its explicit qualifiers.
- Preserve the original portraits/evidence files and the separate
  `cardPortraitPosition` and `profilePortraitPosition` settings unless the task
  calls for changes. Use the existing Razu-name highlighting helper in new text.
- Keep confidential research records, credentials, and access tokens out of this
  public repository. Never put credentials in a URL or committed configuration.
- Refresh the changed JS/CSS asset's version query in its HTML consumers when
  publishing front-end changes.

## Validate and publish

- Run `node scripts/portfolio.mjs check` and `git diff --check` before publishing.
  The check covers syntax, data shape, profile routes, portraits, and local
  bootstrap assets; verify changed interactions/layouts in the browser as needed.
- Use the connected GitHub write tools when available. Publish only intended
  files in one commit based on the current remote head, updating the branch with
  `force: false`. If the head changes, reconcile and validate again.
- Follow the user's publishing scope and all applicable approval controls. This
  file does not grant access, bypass permissions, or authorize unrelated changes.
- Confirm GitHub Pages succeeds for the published commit and check the affected
  live page before describing the update as live.
