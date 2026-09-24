# Maintaining the portfolio from ChatGPT or Codex

The source of truth is `main` in
`beingrazuahmed/beingrazuahmed.github.io`. This is a static HTML, CSS, and
JavaScript site hosted by GitHub Pages. There is no npm build or dependency
installation required for the maintenance commands below.

## Starting a future task

Use a coding session with the GitHub connection available and say:

> Update beingrazuahmed/beingrazuahmed.github.io. Read AGENTS.md and
> docs/MAINTENANCE.md from the latest main, make the requested changes, validate,
> publish them, and verify GitHub Pages. The requested changes are: …

Repository instructions travel with a checkout. They do not install an app,
authorize an account, or guarantee that a different chat has the same tools.

## Connection diagnosis

1. Check the authenticated GitHub login and access to this exact repository.
2. Read the current branch head and a known repository file.
3. Inspect the actual error before changing connection settings.

| Symptom | Appropriate next step |
| --- | --- |
| File output stops in the middle | Read the complete structured tool result or use a complete Git checkout. Print only the relevant section. Do not replace the source from an excerpt. |
| Authenticated account cannot access this repository | Inspect the app's selected repository access and the actual authorization error. Reauthorization may require the account owner. |
| Shell network access fails but the GitHub app works | Use the connected app's supported repository operations. Shell networking and connected-app authorization are separate. |
| Branch moved while editing | Fetch the new head, preserve others' changes, reapply the intended patch, and validate. Never force the branch back. |
| Commit exists but the live page is old | Check the Pages run for that exact commit, then check changed asset version queries and the live page. |
| A new chat lacks GitHub tools | Enable the GitHub connection in a supported coding/Work session. Repository files cannot change that chat's available tools. |

The 24 September 2026 maintenance session successfully retrieved the complete
`v2-data.js` source and published repository updates using the connected GitHub
app. A clipped display of that file was not evidence of an authorization failure.

## Complete-file editing

With a local checkout, inspect its status before fetching:

```bash
git status --short
git fetch origin main
```

If the checkout is clean and can advance without losing work, use
`git merge --ff-only origin/main`. Otherwise use an isolated worktree based on
the latest remote head. Do not discard another task's changes.

Read small, relevant sections instead of printing an entire bundle:

```bash
node scripts/portfolio.mjs people
node scripts/portfolio.mjs person abdur-rakib
rg -n 'abdur-rakib|cardPortraitPosition' v2-data.js
```

The person command reads the full source from disk and returns one complete
record. An unknown ID fails explicitly; it never guesses a person or overwrites
anything. With connector-only access, retain the complete structured file
content programmatically and select the needed excerpt for review. If a complete
response is unavailable, use another supported complete-file route before editing.

## Validate and publish

```bash
node scripts/portfolio.mjs check
git diff --check
git diff --stat
```

The check validates root JavaScript files, the four data files in browser load
order, inline JSON-LD, local HTML script/stylesheet/image references, unique
Network IDs, profile data shapes, local portraits and full-profile routes. It
does not test external websites, CSS rendering, interactive behavior, or factual
claims. Check the affected page in the browser for those concerns.

When a front-end asset changes, update its version query in every HTML consumer.
Keep unrelated content, original evidence, publication status, and current versus
historical roles intact.

For a supported GitHub connector, use one tree and commit containing only the
intended changed paths. Base it on the latest remote tree and commit. Update
`main` with a non-forced reference update. Keep large payloads programmatic;
avoid printing the entire source into chat. If a write is denied, report the
specific rejection and use an allowed route; do not bypass the access control.

After publishing, confirm the Pages workflow's head SHA matches the new commit
and its conclusion is `success`. Then verify the live affected page. A successful
commit alone is not a successful deployment.

## Relevant official documentation

- [Project instructions with AGENTS.md](https://learn.chatgpt.com/docs/agent-configuration/agents-md)
- [Work execution, connected apps, and permissions](https://learn.chatgpt.com/docs/enterprise/chatgpt-work-overview)
