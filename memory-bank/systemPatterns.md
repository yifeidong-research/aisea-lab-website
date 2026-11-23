# AI-SEA Lab Website — System Patterns

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
