# AI-SEA Lab Website — Tech Context

## Tech Stack
- **Framework:** Astro 7.4.12 (static output, `trailingSlash: 'always'`)
- **Language:** TypeScript (strict, via `astro/tsconfigs/strict`)
- **Fonts:** `@fontsource-variable/geist` (body), `@fontsource-variable/newsreader` (display/
  serif headings)
- **No UI framework** — plain `.astro` components, no React/Vue/Svelte
- **CI:** GitLab CI (`.gitlab-ci.yml`) — `build` stage (npm ci/check/build) always runs;
  `deploy_azure` stage gated behind protected branch + `AZURE_SWA_URL` CI/CD variable existing
- **Hosting target:** Azure Static Web Apps, Free plan, "Other" deployment source (not yet
  provisioned)
- **Node:** `>=22.12.0` (per `package.json` engines)

## Setup & Run
```bash
cd /Users/144164/Workspace/aisea-lab-website
npm ci
npm run check    # astro check — must show 0 errors before any commit
npm run build    # astro build → dist/
npm run preview  # astro preview --port 4321 (or specify another --port)
npm run dev      # astro dev, live-reload
```

## Repo layout
```
src/
  content/site.ts       # ALL content — single source of truth
  layouts/Base.astro     # shared head/header/footer
  components/            # Brand.astro, PageIntro.astro
  pages/                 # index/research/people/publications/projects/contact/404 .astro
  styles/global.css      # all CSS
public/
  people/*.jpg           # profile photos
  staticwebapp.config.json
  favicon.svg
scripts/verify-deployment.mjs
.gitlab-ci.yml
```

## GitLab access
- Remote: `https://code.research.uts.edu.au/144164/aisea-lab-website.git`, project id `3643`.
- Push auth: cached via macOS `osxkeychain` credential helper (HTTPS, no prompt needed for
  `git fetch`/`push` from this machine).
- API auth (for visibility/variables/runner checks): a GitLab Personal Access Token was
  provided by the user in-session (not stored in any file) — if API checks are needed again in
  a future session, ask the user for a fresh token rather than assuming one is cached anywhere.
- `main` is protected: push/merge require Maintainer role; force-push disabled. User (144164)
  holds Owner (access_level 50).

## Azure access
- `az` CLI (Homebrew-installed, `/opt/homebrew/bin/az`) — **device-code login is blocked by a
  UTS Conditional Access policy**; use `az login` (interactive browser flow) instead, which
  works. Always `az logout` at the end of any session that used it.
- Subscription: `Azure subscription 1`, id `ea7d81c3-ed81-411c-bdad-3dc386360b02`, UTS tenant
  (`e8911c26-cf9f-4a9c-878e-527807be8791`). User is subscription Owner.
- No AWS tooling is relevant to this project — this is an Azure-only deployment target, despite
  AWS tools being present in the general environment.

## Shell/tooling notes
- `curl`/`sips`/`file` used to download and verify profile photos before referencing them from
  `site.ts` (always verify `HTTP 200` + valid image dimensions before wiring a photo in).
- When editing `site.ts` with programmatic string replacement (not the `editor` tool), watch for
  literal `\u2019`-style escape sequences being written as literal text instead of being
  interpreted — verify rendered output, not just that the edit "succeeded" with no diff shown.
- Multiple editor-tool calls may be needed for large array insertions in `site.ts` — the editor
  tool has a ~6000-character `new_text` limit per call; split large data additions into several
  sequential small edits rather than one big one.
