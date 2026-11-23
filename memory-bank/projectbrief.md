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
**Repo (public GitHub, `origin`):** `https://github.com/yifeidong-research/aisea-lab-website.git`
— owner account `yifeidong-research` (user's personal GitHub). This is now the **sole** git
remote; UTS GitLab's local `origin` reference was removed on Nov 23 2026 (user: "we only need
github as the git storage"). The GitLab **project itself was NOT deleted** — it still exists on
UTS's servers at `https://code.research.uts.edu.au/144164/aisea-lab-website.git`, just no longer
referenced by this local clone; deleting the remote project would need separate action (UTS
GitLab credentials Cline doesn't have, and is irreversible) if the user ever wants that too.
**Active branch:** `main`, tracking `origin/main` (GitHub) — no branch protection configured.
**Latest commit:** `a178b28` — "Update memory bank: document GitHub migration and open security
items".
**Live site:** **https://www.aisealab.org** — custom domain fully configured and verified (Nov
23 2026): DNS at Porkbun (4 A records at apex → GitHub Pages IPs `185.199.108-111.153`; CNAME
`www` → `yifeidong-research.github.io.`), GitHub Pages custom domain set via API (`cname:
www.aisealab.org`), Let's Encrypt certificate auto-issued and `https_enforced: true`. Verified:
`http://aisealab.org` → 301 → `https://www.aisealab.org` → 200; CSS/images/nav all load
correctly now that the site is served from a domain root (resolves the subpath-breakage issue
noted during the interim `github.io/aisea-lab-website/` period). Auto-deployed via
`.github/workflows/deploy.yml` on every push to `main`.
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
- **GitHub repo must stay Public** (required for free GitHub Pages on a personal account) —
  this superseded the earlier "GitLab must stay Private" rule once the user migrated the active
  deployment target to GitHub (Nov 23 2026). The original UTS GitLab project (now unreferenced
  locally) should still be treated as Private if it's ever revisited.
- No Azure resource may be provisioned, and no `SWA_CLI_DEPLOYMENT_TOKEN`/`AZURE_SWA_URL`
  GitLab CI/CD variable may be set, without explicit user authorisation. **This is now largely
  moot** — the user migrated the live deployment to GitHub Pages (Nov 23 2026) rather than
  waiting on UTS Azure clearance; revisit only if the user explicitly wants to add/switch to an
  Azure deployment later.
- Domain registration must go through an independent registrar (Porkbun used, Nov 23 2026) —
  Azure App Service Domains was considered and explicitly ruled out: it requires a *paid* App
  Service tier (incompatible with the Static Web Apps Free plan this project was originally
  scoped for, and now moot since hosting moved to GitHub Pages anyway) and doesn't integrate
  with GitHub Pages hosting regardless.
- **GitHub Personal Access Tokens must never be embedded in git remote URLs or committed
  anywhere** — use `https://github.com/<owner>/<repo>.git` (no credentials in the URL) for the
  `origin` remote; authenticate interactively or via a one-off `-c credential.helper=` override
  per push if a token is needed again. User should revoke/rotate any PAT shared in chat once the
  immediate task is done (standing hygiene reminder, not a one-time fix — **still not confirmed
  done** as of Nov 23 2026, see Status Snapshot).
- Lab-related expenses (e.g. domain registration) require director approval before purchase —
  confirmed obtained from Fang Chen for the `aisealab.org` registration (Nov 23 2026); keep this
  precedent in mind for any future paid service (premium DNS, email hosting, etc.).

---

## Status Snapshot (as of Nov 23 2026)
- Website: built, type-checked, previewed — 0 errors, 0 vulnerabilities (astro upgraded
  6.4.8 → 7.4.12 to fix a critical RCE + XSS advisories).
- **Hosting: GitHub Pages, live at `https://www.aisealab.org`** (see projectbrief's Live site
  note above for full verification detail). This is now the lab's actual public website.
- **Git: GitHub only.** UTS GitLab project still exists remotely but is no longer referenced by
  this local clone (see Repo note above) — not deleted, just disconnected.
- **Domain: `aisealab.org` purchased** from Porkbun (Nov 23 2026; director-approved lab expense,
  paid via UTS card, registered under the user's personal email for administrative continuity)
  and fully wired to GitHub Pages with automatic HTTPS.
- Azure: subscription (`Azure subscription 1`, UTS tenant) was confirmed technically eligible for
  Static Web Apps Free earlier in the project, but **nothing was ever provisioned** — the user
  chose the GitHub Pages path instead rather than continuing to wait on UTS hosting clearance.
  Revisit only if the user explicitly asks to add/switch to Azure in the future.
- **Open security item**: the user's GitHub account password and a Personal Access Token were
  both pasted in chat during the Nov 23 migration. Repeatedly advised rotating/revoking both —
  **not yet confirmed done**. Keep raising this proactively until resolved.
- Content: People page now has 17 entries across 4 categories (Core Members, Collaborators, PhD
  Students, Master of Research Students) with a collapsible accordion UI and `entryYear`-based
  ordering — see `productContext.md` for the full roster. Publications page has 45 real papers
  (2024–2026). Projects page still placeholder. Contact email live: `yifei.dong@uts.edu.au`,
  physical address added (Level 12, Building 2, UTS).
