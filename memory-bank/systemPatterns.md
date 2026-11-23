# AI-SEA Lab Website — System Patterns

## Hosting/VCS: GitHub-only (GitLab local remote removed), live at a custom domain (Nov 2026)
After researching how two comparable lab sites are hosted (`hcai-lab.com` → Netlify,
`fmlab.org` → GitHub Pages, both found via `whois`/`dig`/HTTP-header inspection — a reusable
technique for this kind of due-diligence), and with the Azure/UTS hosting-clearance path still
pending indefinitely, the user migrated deployment to their own personal GitHub account
(`yifeidong-research/aisea-lab-website`, public repo, GitHub Actions → GitHub Pages auto-deploy
on push to `main`). Initially UTS GitLab was kept as a fallback remote; **later the same
session, the user explicitly said "we only need github as the git storage" and the local
GitLab `origin` reference was removed** (`git remote remove origin` → renamed the `github`
remote to `origin` → fixed the `main` branch's upstream tracking). The GitLab *project itself*
was not deleted (no credentials to do so, and it's irreversible) — it's simply dormant,
unreferenced by this local clone. **GitHub is now the sole, single source of truth** for both
code storage and deployment. A custom domain, `aisealab.org` (purchased from Porkbun, a
director-approved lab expense), is fully wired to the GitHub Pages site with automatic Let's
Encrypt HTTPS — this resolved the interim subpath-breakage issue that existed while the site
was only reachable at `yifeidong-research.github.io/aisea-lab-website/` (absolute root paths
like `/_astro/...`/`/people/` don't work under a subpath, only under a true domain root).
Revisit Azure only if the user explicitly asks to add/switch to it later — it is not a pending
blocker on anything anymore.

## GitHub token handling: never persist in remote URLs, remove immediately after use (Nov 2026)
When a user-supplied fine-grained PAT is needed for a one-off push or API call (e.g. the GitHub
migration, or configuring Pages' custom domain/HTTPS), the pattern for *git* operations
specifically is: `git remote add <name> https://<token>@github.com/...` → `git push` →
**immediately** `git remote remove <name>` → re-add a clean credential-free
`https://github.com/<owner>/<repo>.git` remote for future reference. This avoids the token
sitting in `.git/config` (a plaintext file) any longer than the single push requires. (Note:
git's `osxkeychain` credential helper will still cache the token in the user's macOS Keychain
after first successful auth over HTTPS — this is normal/expected git behavior, not a leak
caused by Cline, but worth mentioning to the user as part of a full credential-rotation
cleanup.) For *REST API* calls (e.g. `PUT /repos/.../pages`), the token is passed only as an
`Authorization` header per-request — never written to any file at all. Separately flagged to
the user: GitHub fine-grained PATs need an explicit **"Workflows: Read and write"** repository
permission (distinct from Contents/Administration/Pages) to push anything under
`.github/workflows/**` — a push without it is rejected with `refusing to allow a Personal Access
Token to create or update workflow ... without workflow scope`; this is editable on the existing
token in place (no need to regenerate a new token string). If a user pastes their actual account
password (not a token) into chat, treat that as a security incident requiring an explicit
recommendation to rotate the password immediately, separate from whatever the original request
was — a password cannot be used for git/API auth anyway (GitHub removed that in 2021), so there
is no technical reason to ever ask for one. **As of Nov 23 2026 this remains an open item** —
the user has not yet confirmed rotating the password or revoking the PAT shared earlier in the
session, despite repeated reminders; keep raising it.

## Domain purchasing: independent registrar, not Azure App Service Domains (Nov 2026)
Even though `.org` is one of the few TLDs Azure App Service Domains supports
(`com/net/co.uk/org/nl/in/biz/org.uk/co.in`), it was explicitly ruled out for this project:
(1) it requires a *paid* App Service plan tier, incompatible with the Static Web Apps Free plan
this project was originally scoped around; (2) it requires removing the subscription spending
limit / having sufficient billing history; (3) most importantly, it provides no actual benefit
once hosting moved to GitHub Pages — DNS still needs the same manual A-record/CNAME pointing at
GitHub regardless of which registrar sold the domain. Used **Porkbun** instead (free WHOIS
privacy + SSL bundled, transparent pricing) — any ICANN-accredited registrar would have worked
equally well; Porkbun was simply the first one researched that had no pricing-upsell friction.
`.org` was chosen over `.au`/`.com.au` specifically to avoid auDA eligibility requirements
(ABN/Australian-presence proof) that would otherwise apply.

## Projects page: sanitize client identity, dollar values, and technical detail from source
documents before publishing (Nov 2026)
User supplied a detailed internal project-list document (full client names, exact contract
dollar values, technical architecture/vendor/model names) and asked for the public Projects
page to be populated from it. Before implementing, Cline asked clarifying questions rather than
assuming scope, since the source document was clearly written for internal/grant-reporting
purposes, not public disclosure. **User's explicit instructions: (1) never release customer/
client credentials (names/identities) on the page; (2) never release technical implementation
details; (3) omit dollar values entirely, for every project regardless of whether the funder is
a government body or a private company.** Resulting rule, applied to all current and future
Projects entries: **government/public funders keep their real organisation name** (CSIRO, NSW
Dept of Premier & Cabinet, Digital Health CRC, Dept of Industry Innovation & Science, UTS
Collaboration/UTS CRB) since these are already public-record grants; **commercial/industry
partners are described only by a generic sector phrase** (e.g. "Industry partner, property
management sector") rather than the real company name; **no dollar amounts appear anywhere**,
for any project; **descriptions are rewritten to describe outcomes/purpose only**, stripping any
mention of specific cloud platforms, LLM/model names, frameworks, or vendor tools named in the
source material. The `Project` type was extended from `{ title, description, url? }` to
`{ title, funder, period, role, description, url? }` to support this structured, consistently
sanitized format. See `productContext.md` for the full source-document → published-entry mapping
(useful if the user ever adds more projects from the same internal document and needs the same
sanitization pattern reapplied consistently).

**Follow-up (same day): removed individual role/leadership attribution entirely.** After the
initial import, the user asked to drop "Project Leader"/"Chief Investigator"/etc. from each
entry, framing the point explicitly: "these projects should be a lab's project examples" — i.e.
the Projects page represents the **lab's** portfolio/track record, not a personal CV credit
list for whoever happened to lead each project. `Project` was reduced from `{ title, funder,
period, role, description, url? }` back to `{ title, funder, period, description, url? }`,
removing the field from the type and all 14 entries (and from `projects.astro`'s render). This
is now the durable convention for the Projects page specifically — unlike the People page,
where individual role/title *is* the point.


## Content management: single TypeScript data file, no CMS (Nov 2026)
All editable content (mission, research themes, people, publications, projects, contact email)
lives in `src/content/site.ts`, imported by the `.astro` page templates. Deliberately chosen over
a CMS (SaaS or git-based like Decap/TinaCMS) because: (1) content update frequency is low for a
small, newly-launched lab; (2) the Azure Static Web Apps Free plan is static-only, and a CMS adds
either a SaaS dependency or a backend server that doesn't fit that plan; (3) the user has
consistently wanted a review/approval gate before anything goes public (confirmed content only,
no fabrication, authorisation needed for UTS logo) — a CMS web-editor UI would make it easier to
bypass that gate. Revisit only if a concrete pain point emerges (e.g. someone else needs to edit
content independently of the developer).

## Visual design: editorial/minimal academic style, not a "generated-looking" marketing site
(Nov 2026)
Original build used a forest-green/lime colour scheme with rounded cards, a colored "flagship
programme" box, and a decorative abstract hero graphic (rotating ellipses/glowing dots) — user
explicitly disliked this as "developed by ChatGPT"-looking. Redesigned to a monochrome
ink-on-white palette (serif `Newsreader` display font, sans `Geist` body), hairline-rule-based
section dividers instead of colored boxes/cards, no decorative hero graphic, square (not rounded)
photo corners with a subtle grayscale filter — closer to how MIT CSAIL/Stanford HAI/DeepMind
research pages read. All content/structure preserved; this was a CSS + minimal markup pass only.
Responsive breakpoints: 53rem, 43rem, 25rem (defined in `src/styles/global.css`).

## Research page diagram: AI-generated minimal line-art, embedded beside text not as a
standalone banner (Nov 2026)
First visual element added to the Research page (previously 100% text). Given the earlier
rejection of "developed by ChatGPT"-looking graphics (see the visual-design decision above),
Cline wrote the image-generation prompt deliberately targeting a **flat black-ink line diagram
on white, no color/gradients/3D/photorealism** — explicitly described in the prompt as
"academic/editorial style like a diagram from an MIT or Stanford research page — not a glossy
tech-startup illustration" — rather than letting the user's own phrasing drift toward a more
typical AI-generated hero-graphic look. Concept: the lab's three research themes (Systems
Engineering, Reliability & Evaluation, Assurance & Governance) shown as a continuous triangular
cycle with connecting arrows, reinforcing the "lifecycle" framing already used in the lab's own
copy (`lab.aim`/`lab.approach`). User generated the image externally (ChatGPT) and placed it at
`public/images/research-cycle.png`; Cline resized it (1448×1086 → 1200×900 via `sips`).

**Layout revision (same day):** the image was first wired in as a full-width standalone
`<figure>` between the `lab.aim` paragraph and the "Research areas" heading, with its own
top/bottom hairline border — functioning as a section-break banner. User felt this made the
image "occupy a whole section" and asked for it to be embedded beside text instead (left/right
of a paragraph), like a typical editorial figure. Cline (after a plan-mode discussion) chose
**image on the right, text on the left** — standard LTR editorial convention, and reuses the
page's own `.content-row` two-column grid (already used for the three research-theme rows below)
rather than inventing a new layout primitive. Implementation: `<section class="content-row
research-row">` wraps both the `lab.aim` `<p>` and the `<figure>` side by side;
`.research-row` sets `grid-template-columns: 1.15fr 1fr` (text column slightly wider than the
image, since the image is a supporting visual, not the main content) and `align-items: center`.
Because `.content-row` was already included in the `43rem` mobile breakpoint's
single-column-stacking rule, no new media query was needed — the row collapses to one column on
narrow screens with the text paragraph rendering first and the image below it (confirmed via a
Playwright `boundingBox()` check at a 480px viewport, since this session's image-viewer tool
could not reliably render screenshots back into the conversation).

## People page: collapsible accordion per person, not a full always-expanded list (Nov 2026)
As the People page grew (17+ entries across 4 categories), the always-expanded list required too
much scrolling to find a specific person. User asked for a compact list that expands full detail
on click; left the interaction pattern choice to Cline's judgement. **Decision: native HTML
`<details>`/`<summary>` accordion**, one per person — not a dedicated per-person routed page
(`[slug].astro`) and not a JS modal. Rationale: this is a static site with no client-side JS
framework and a deliberately minimal/editorial aesthetic (see the visual-design decision above);
`<details>` needs zero custom JavaScript, works with JS disabled, and is natively
keyboard/screen-reader accessible with no ARIA/focus-trap code to write. A routed per-person page
would add real routing complexity for content that's only a few short paragraphs; a modal would
need escape/backdrop/focus-trap JS that doesn't exist anywhere else in this codebase and reads
more "app-like" than the site's editorial tone. Implementation: the always-visible `<summary>`
holds photo + name + role (+ entryYear suffix); the `<div class="person-detail-body">` inside
holds the `profileUrl` link (moved from the name itself, where it used to live, into the
expanded body as a "UTS profile ↗" line) and bio paragraphs, plus a "Bio coming soon." fallback
for anyone with no bio yet. A CSS-only `+`/`−` toggle glyph is driven by the `[open]` attribute
selector — no JS. All entries render independently collapsed by default (not one-at-a-time
accordion exclusivity) since `<details>` elements are independent by default and there was no
request to make opening one close the others.

## People page: grouped by category, no "Leadership" hierarchy (Nov 2026)
`Profile` type has a `category` field (`'Core Members'` at the time of this decision — a
`'Leadership'` category existed briefly but was removed; `'PhD Students'` and `'Collaborators'`
were added later, see the dedicated section below). **Decision: no leadership titles (Director/
Duty Director/Management Committee Member) are used.** Rationale (user's own): the lab is actively
trying to recruit more senior academics, who may be reluctant to join under a hierarchy where
existing members hold leadership titles over them. All current members (Fang Chen, YiFei Dong,
Kun Yu, Nick Qi) are labelled with **real-world title + institutional affiliation** instead (e.g.
"Founder, AI-SEA Lab; Executive Director, Data Science Institute") — not a lab-internal rank.
Display order is **seniority-aware, not alphabetical or founder-primacy**: Fang Chen (the user's
own director at the Data Science Institute) is listed first, ahead of the user himself, as a
deliberate courtesy/respect signal — "Founder" credit for both is equal regardless of list
position. `people.astro` renders one `<section>` per category in `categoryOrder`, each with its
own `<h2>` group heading — easy to extend with more categories (`'PhD Students'`,
`'Collaborators'`, `'Alumni'`) later, following the HCAI Lab team-page pattern
(`https://hcai-lab.org/team.html`) the user referenced, without reintroducing a leadership tier.

## Publications sourcing: CrossRef API (ORCID-filtered), not UTS profile pages (Nov 2026)
UTS profile pages (`profiles.uts.edu.au/<Name>/publications`) could not be fully scraped — the
fetch tool hard-truncates large HTML pages at a fixed byte offset regardless of prompt phrasing,
and pagination is client-side JS (URL query params like `?page=2` are ignored server-side,
always return page 1). **Switched to CrossRef's public API filtered by ORCID ID**
(`api.crossref.org/works?filter=orcid:<id>[,from-pub-date:...,until-pub-date:...]&select=...`),
which returns compact JSON with no truncation problem and supports real `rows`/`offset`
pagination. This is the reliable method for this lab going forward — reuse it for any future
publication-list updates rather than re-attempting UTS profile scraping. Caveat: CrossRef only
indexes DOI-registered works (misses some books/non-DOI items) — a known, accepted gap, not a
bug to "fix" by switching sources again. Current scope: ALL 2024–2026 papers for all three
people (no topic filtering), duplicates removed when a paper is co-authored by two+ AI-SEA
people (counted once).

## Home page hero: UTS building photo background + explicit DSI affiliation (Nov 2026)
User asked to visually emphasise that AI-SEA Lab sits under the UTS Data Science Institute, and
to add a UTS building photo as the hero background. Decisions made:
- **Eyebrow text** changed from `{lab.affiliation} · {lab.faculty}` to `Part of the
  {lab.affiliation}` (i.e. "Part of the UTS Data Science Institute") — a clearer, more explicit
  framing of the lab's place inside UTS than the previous plain affiliation line.
- **Background photo (current, as of the user's follow-up request)**: `University of Technology
  Sydney, Central Building (Building 2) - 2022.jpg` — UTS Central (Building 2), photographer
  Robertsky, **CC BY-SA 4.0** on Wikimedia Commons
  (`commons.wikimedia.org/wiki/File:University_of_Technology_Sydney,_Central_Building_(Building_2)_-_2022.jpg`).
  Unlike the first candidate photo, this licence **requires attribution** — handled with a small
  `.hero-credit` caption in the hero's bottom-right corner, linking to the CC BY-SA 4.0 licence
  text. Saved at `public/images/uts-central.jpg` (resized to 2200px wide via macOS `sips`).
  Superseded an earlier choice, the CC0 Dr Chau Chak Wing Building photo (`uts-campus.jpg`,
  deleted), per the user's explicit follow-up request to use this specific UTS Central image
  instead (same processing procedure reapplied: resize, grayscale/contrast filter, gradient
  overlay — only the source photo and licence-driven credit line differ).
- **Treatment, to keep the existing monochrome editorial style rather than clash with a colour
  photo**: `.hero` is `position: relative` with a `.hero-bg` absolutely-positioned layer
  (`z-index: -1`) carrying the photo via `background: url(...) center 60% / cover`, filtered with
  `grayscale(.55) contrast(1.05)` so it desaturates toward the site's ink-on-white palette rather
  than looking like an unrelated colour photo. A `::after` pseudo-element on `.hero-bg` adds a
  left-to-right white gradient overlay (`linear-gradient(100deg, ...)`, opaque near the text,
  fading out toward the right) so the hero text (dark ink on white) stays fully legible over the
  image, strongest where the `<h1>`/lead text sits and fading out to show more of the photo on
  the right side of the hero.
- No change to `lab.faculty` field itself — it's still used on the Contact page; only the home
  hero's eyebrow text stopped referencing it.

## People page: Core Members, PhD Students, Master of Research Students and Collaborators
categories (Nov 2026)
Extended the `Profile.category` union from `'Core Members' | 'Collaborators'` to add `'PhD
Students'`, then later `'Master of Research Students'`. On-page order (`people.astro`'s
`categoryOrder`) is `['Core Members', 'Collaborators', 'PhD Students', 'Master of Research
Students']` — PhD Students renders after Collaborators, per the user's explicit ordering
request (initially added between Core Members and Collaborators, then moved to last), and
Master of Research Students renders last of all (added after PhD Students when introduced).
First dual-role use case: Megan (Ying) Zhou holds both an industry-background "Core Member &
Primary Contact" role and a PhD-researcher role at the lab simultaneously — rather than merging
these into one entry/bio, the user explicitly chose **two separate `Profile` entries sharing the
same photo** (`/people/megan-zhou.png`): one under `'Core Members'` with a bio written from her
industry background (20+ years enterprise software engineering/QA/AIOps experience — Microsoft,
CA Technologies, Broadcom, Robotic Cell Technology), and one under `'PhD Students'` with a bio
written from her research topic (LLM Agent Assurance, reliability/safety/robustness/verification
of agentic AI systems). Yuhong Shi follows the identical dual-entry pattern (Research Assistant
under Core Members, PhD Candidate under PhD Students, same photo, industry-vs-research bios).
This establishes the pattern for any future person who holds dual roles at the lab: prefer two
distinct category entries with tailored bios over one entry trying to serve both audiences, as
long as the data model (`Profile` has no uniqueness constraint on `name`) supports it without
special-casing. Also establishes the "missing bio" convention: when a person is added without a
bio (e.g. YiRan Guo temporarily, until her bio was supplied in a follow-up — see
`[nov21-5]`), the `bio` field is simply omitted rather than inventing placeholder text —
`people.astro` already handles an absent `bio` gracefully (renders photo/name/role only), per the
project's standing "never fabricate content" rule.

## PhD Students / Master of Research Students: ordered by `entryYear`, not array order (Nov 2026)
Added an optional `entryYear?: number` field to `Profile` (only meaningful for the `'PhD
Students'` and `'Master of Research Students'` categories). `people.astro` now sorts members of
just those two categories by `entryYear` ascending (earliest cohort first) before rendering,
using `Array.prototype.sort`'s stability to preserve the existing `people` array order as the
tie-break when two people share the same `entryYear` (or both lack one) — so same-year ordering
is controlled by where the entries sit in `site.ts`, not by a second explicit sort key. `Core
Members` and `Collaborators` are intentionally left unsorted (array order = editorial order, no
`entryYear` concept applies). Entry years must be supplied by the user per-person (never
inferred/estimated) — as of Nov 23 2026: Yuhong Shi 2024; Torsten Tiltack 2025; Remya Sasi
Valsala 2025; YiRan Guo 2026; Ranzheng Lin 2026; Peng Qian 2026; Megan (Ying) Zhou (PhD entry)
2027; Zehui Cao 2027.

**Also visibly displayed, not just an internal sort key (added same day, follow-up):** initially
`entryYear` only drove sort order and was never rendered as text — when the user asked to "see"
each student's entry year, Cline first just read the raw field from `site.ts` into chat, then the
user clarified they meant on the live page itself. `people.astro` now appends `· {verb}
{entryYear}` to the role line, gated on the same `sortableByEntryYear` category check (and a
truthy `entryYear`) so Core Members/Collaborators, and any future PhD/MRes entry added without a
confirmed year, render unaffected. The verb is computed per-person via `const currentYear = new
Date().getFullYear()`: `entryYear > currentYear` → "Starting" (a cohort that hasn't joined yet —
e.g. Megan Zhou/Zehui Cao, both `entryYear: 2027` while the current year is 2026), otherwise →
"Started". This is evaluated dynamically at build/request time (not a hardcoded "as of" check),
so it keeps working correctly as real time passes with no manual update needed when 2027
arrives.

UTS GitLab has no runner currently assigned to this project (confirmed via `GET
/projects/:id/runners` → `[]`, and `GET /runners/all` → 403 for a non-admin token). The user
explicitly does NOT want to ask any UTS GitLab administrator to register/assign one. The only
available path is a **project-scoped runner registered via the GitLab API** (requires only
project-Owner access, not instance-admin) and run locally (e.g. via Docker executor on a dev
machine) — this was done once to verify the pipeline, then fully unregistered + deleted
afterward per user decision. **Do not assume a runner persists between sessions** — if a
pipeline needs verifying again, this same register-run-unregister cycle must be repeated, and
the user should be asked first each time since it's a conscious choice to run CI compute locally
rather than wait for an official UTS runner.

## Azure/domain: no provisioning or spending without explicit per-step authorisation (Nov 2026)
This project involves real infrastructure/money decisions (Azure resource creation, domain
registration) that must never be done unilaterally, even if technically straightforward. Each of
these requires the user's explicit go-ahead, re-confirmed at the time, not just a standing
instruction from an earlier session:
- Registering the `Microsoft.Web` resource provider or creating any Azure resource.
- Setting `SWA_CLI_DEPLOYMENT_TOKEN`/`AZURE_SWA_URL` in GitLab CI/CD variables (this would make
  the `deploy_azure` pipeline stage live on the next protected-branch push).
- Ordering any domain, choosing any registrar, or agreeing to any price/renewal term.
