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
**Repo (private UTS GitLab):** `https://code.research.uts.edu.au/144164/aisea-lab-website.git`
**Active branch:** `main` (protected, Maintainer-only push, force-push disabled)
**Latest commit:** `688ff5c` — "Add Astro site source, lockfile, CI pipeline and deployment
config" (fast-forwarded from GitLab's initial `a7131fb` default README commit; no force-push).
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

---

## Status Snapshot (as of Nov 18 2026)
- Website: built, type-checked, previewed — 0 errors, 0 vulnerabilities (astro upgraded
  6.4.8 → 7.4.12 to fix a critical RCE + XSS advisories).
- GitLab: source pushed, pipeline `build` job verified **success** via a temporary
  self-hosted project-level runner (registered and later fully unregistered/deleted per user
  decision — no persistent runner exists; future pushes will NOT auto-build until a runner is
  available again).
- Azure: subscription (`Azure subscription 1`, UTS tenant) confirmed technically eligible for
  Static Web Apps Free (user is subscription Owner, PayAsYouGo quota, no blocking policy/
  locks/budgets found) — **nothing provisioned**, pending UTS hosting clearance + user
  go-ahead.
- Domain: not yet chosen/ordered.
- Content: People page has 4 real profiles (Fang Chen, YiFei Dong, Kun Yu, Nick Qi — see
  `productContext.md`). Publications page has 45 real papers (2024–2026, all three people,
  deduplicated, unfiltered by topic). Projects page still placeholder (no individual projects
  added yet). Contact email live: `yifei.dong@uts.edu.au`.
