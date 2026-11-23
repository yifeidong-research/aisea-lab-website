# AI-SEA Lab Website — Project Brief

## What It Is
Static Astro + TypeScript website for the AI Systems Engineering & Assurance Lab (AI-SEA Lab) at
the UTS Data Science Institute. Professional, responsive academic site for researchers, students
and industry partners. Six pages (Home, Research, People, Publications, Projects, Contact) plus
a custom 404, all statically generated.

**Lab mission:** Advancing the engineering, reliability and trustworthiness of intelligent
systems in real-world environments. Research themes: systems engineering, reliability and
evaluation, assurance and governance. Flagship programme: "From GenAI Prototypes to
Production-Ready Systems."

**Local path:** `/Users/144164/Workspace/aisea-lab-website`
**Repo (private UTS GitLab, `origin`):** `https://code.research.uts.edu.au/144164/aisea-lab-website.git`
**Repo (public GitHub, `github`, added Nov 23 2026):**
`https://github.com/yifeidong-research/aisea-lab-website.git` — owner account `yifeidong-research`
(user's personal GitHub). GitLab (`origin`) was NOT deleted — user chose to keep it as a
fallback, decide on removal later. GitHub is now the active hosting target; GitLab has not
received any pushes since this migration (see commit note below) and will fall further behind
unless the user asks for ongoing dual-push, or decides to retire it.
**Active branch:** `main` on both remotes (GitLab's `main` is protected, Maintainer-only push,
force-push disabled; GitHub's `main` has no branch protection configured).
**Latest commit — GitHub (`github/main`), Nov 23 2026:** `9fd9243` — "Add all People/Research/Contact
content updates, memory bank, and GitHub Pages deploy workflow" (36 files; this was the first
time several sessions' worth of local-only changes — People accordion, entry years, Research
diagram, Contact address, memory-bank itself — were committed/pushed anywhere; they had never
reached GitLab).
**Latest commit — GitLab (`origin/main`):** still `688ff5c` — GitLab was deliberately NOT pushed
to during this migration (only GitHub was). GitLab is now **behind** GitHub by one commit
(missing all the content/memory-bank work above) until/unless the user asks for it to be synced
too.
**Hosting (live now):** GitHub Pages, `https://yifeidong-research.github.io/aisea-lab-website/`
— auto-deployed via `.github/workflows/deploy.yml` on every push to GitHub `main`. **Known
limitation, accepted by user:** the site uses absolute root paths everywhere (`/people/`,
`/_astro/...`, `/favicon.svg`), so at this subpath URL the CSS/images/nav all 404 — this will
self-resolve once a custom domain is attached (same as how `fmlab.org`/`hcai-lab.com` are hosted
on GitHub Pages/Netlify respectively, not at a subpath). No Astro `base` workaround was added;
user explicitly chose to leave it broken at the interim URL rather than add temporary config.
**Run command:** `npm ci && npm run check && npm run build && npm run preview` (Node ≥22.12.0)

---

## Core Requirements
- Keep the lab's research positioning broad (multiple AI technologies/domains), with
  "From GenAI Prototypes to Production-Ready Systems" as the initial flagship programme, not
  the lab's sole scope.
- All content lives in `src/content/site.ts` — a single TypeScript data file (no CMS; deliberate
  choice, see `systemPatterns.md`).
- People/Publications/Projects are added only with confirmed, real information — never
  fabricated. UTS logo requires separate authorisation (not yet added).
- GitLab project must stay **Private**; never force-push to `main`.
- No Azure resource may be provisioned, and no `SWA_CLI_DEPLOYMENT_TOKEN`/`AZURE_SWA_URL`
  GitLab CI/CD variable may be set, without explicit user authorisation (UTS public-hosting
  clearance still pending as of last status check).
- `.au`/`.com.au` domain registration cannot go through Azure App Service Domains (only
  com/net/co.uk/org/nl/in/biz/org.uk/co.in supported) — needs an auDA-accredited external
  registrar, likely under UTS's own account for eligibility.
- **GitHub Personal Access Tokens must never be embedded in git remote URLs or committed
  anywhere** — use `https://github.com/<owner>/<repo>.git` (no credentials in the URL) for the
  `github` remote; authenticate interactively or via a one-off `-c credential.helper=` override
  per push if a token is needed again. User should revoke/rotate any PAT shared in chat once the
  immediate task is done (standing hygiene reminder, not a one-time fix).

---

## Status Snapshot (as of Nov 23 2026)
- Website: built, type-checked, previewed — 0 errors, 0 vulnerabilities (astro upgraded
  6.4.8 → 7.4.12 to fix a critical RCE + XSS advisories).
- **GitHub (new, Nov 23 2026):** public repo `yifeidong-research/aisea-lab-website` created via
  the GitHub REST API using a user-supplied fine-grained PAT (Contents + Administration + Pages +
  Workflows: Read and write). All locally-uncommitted work pushed as commit `9fd9243`. GitHub
  Pages enabled with `build_type: workflow`; `.github/workflows/deploy.yml` (checkout → npm ci →
  `npm run check` → `npm run build` → upload-pages-artifact → deploy-pages) ran automatically on
  push and completed with `conclusion: success`. Live at
  `https://yifeidong-research.github.io/aisea-lab-website/` — HTML returns 200, but CSS/
  favicon/images/nav all 404 due to the site's absolute-root-path convention vs. this subpath
  URL (see `projectbrief.md`'s Hosting note above); user accepted this as temporary, pending a
  custom domain. The PAT used was shared directly in chat — user was advised to rotate the
  GitHub account password (was also pasted in chat) and revoke/regenerate the PAT once done;
  not confirmed done as of this session.
- GitLab: unchanged since Nov 18 — still at commit `688ff5c`, no runner currently assigned (see
  `systemPatterns.md`), kept as a fallback per user's explicit choice not to delete it yet.
- Azure: subscription (`Azure subscription 1`, UTS tenant) confirmed technically eligible for
  Static Web Apps Free (user is subscription Owner, PayAsYouGo quota, no blocking policy/
  locks/budgets found) — **nothing provisioned**, pending UTS hosting clearance + user
  go-ahead. GitHub Pages is now a live, working alternative/parallel path while that's pending.
- Domain: not yet chosen/ordered. Once chosen, DNS should point at GitHub Pages (A records to
  GitHub's fixed IPs `185.199.108-111.153` for the apex + CNAME to
  `yifeidong-research.github.io` for `www`) rather than Azure, unless the user later decides to
  switch the live site back to Azure SWA.
- Content: People page now has 17 entries across 4 categories (Core Members, Collaborators, PhD
  Students, Master of Research Students) with a collapsible accordion UI and `entryYear`-based
  ordering — see `productContext.md` for the full roster. Publications page has 45 real papers
  (2024–2026). Projects page still placeholder. Contact email live: `yifei.dong@uts.edu.au`,
  physical address added (Level 12, Building 2, UTS).
