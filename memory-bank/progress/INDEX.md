# AI-SEA Lab Website — Progress Index

> One line per session/follow-up unit, newest month first. Use the ID to jump directly
> to the full detail in the matching monthly shard (`grep '\[id\]' memory-bank/progress/<month>.md`).

## 2026-11
- `[nov23-4]` Nov 23 2026 — People page converted to a collapsible accordion (native
  `<details>`/`<summary>`): compact one-line summary per person, click/tap to expand full bio —
  addresses "too much scrolling" with many people now added →
  memory-bank/progress/2026-11.md#nov23-4
- `[nov23-3]` Nov 23 2026 — "Started YYYY" now reads "Starting YYYY" for future entry years
  (computed dynamically from the current date, not hardcoded) →
  memory-bank/progress/2026-11.md#nov23-3
- `[nov23-2]` Nov 23 2026 — entry year is now visibly displayed on the People page (e.g. "PhD
  Candidate, UTS · Started 2025") for PhD Students / Master of Research Students, after user
  clarified an earlier internal-only sort field wasn't actually shown →
  memory-bank/progress/2026-11.md#nov23-2
- `[nov23-1]` Nov 23 2026 — added Zehui Cao as a new PhD Students entry (entryYear 2027, ties
  with Megan Zhou and sorts after her by array order) → memory-bank/progress/2026-11.md#nov23-1
- `[nov21-9]` Nov 21 2026 — added `entryYear` to `Profile`; PhD Students / Master of Research
  Students now sort by entry year (earliest first) instead of array order →
  memory-bank/progress/2026-11.md#nov21-9
- `[nov21-8]` Nov 21 2026 — added Remya Sasi Valsala as a new PhD Students entry, using the
  `add-person.md` workflow → memory-bank/progress/2026-11.md#nov21-8
- `[nov21-7]` Nov 21 2026 — created `.clinerules/workflows/add-person.md`, a single shared
  workflow for adding any People-page entry (Core Member/Collaborator/PhD Student/Master of
  Research Student), after a plan-mode discussion on whether per-category skills would help →
  memory-bank/progress/2026-11.md#nov21-7
- `[nov21-6]` Nov 21 2026 — Research page layout fix: research-cycle diagram embedded beside the
  `lab.aim` text (image right, text left) instead of as a full-width banner, after a plan-mode
  review → memory-bank/progress/2026-11.md#nov21-6
- `[nov21-5]` Nov 21 2026 — added YiRan Guo's bio (resolves the open item tracked since
  `[nov21-3]`) → memory-bank/progress/2026-11.md#nov21-5
- `[nov21-4]` Nov 21 2026 — added an AI-generated minimal line-art diagram (research themes as a
  continuous cycle) to the Research page, after a plan-mode options discussion →
  memory-bank/progress/2026-11.md#nov21-4
- `[nov21-3]` Nov 21 2026 — added Yuhong Shi (dual Core Member + PhD Student entry), 3 more PhD
  Students (Torsten Tiltack, YiRan Guo — no bio, Ranzheng Lin), and a new "Master of Research
  Students" category with Peng Qian → memory-bank/progress/2026-11.md#nov21-3
- `[nov21-2]` Nov 21 2026 — reordered People page categories so "PhD Students" renders last,
  after "Collaborators" → memory-bank/progress/2026-11.md#nov21-2
- `[nov21-1]` Nov 21 2026 — moved Nick Qi from Core Members to Collaborators; added Prof Tieling
  Zhang (University of Wollongong) as a new Collaborator → memory-bank/progress/2026-11.md#nov21-1
- `[nov19-7]` Nov 19 2026 — added Megan (Ying) Zhou as two separate People entries (Core Member +
  PhD Student, same photo, industry-focused vs. research-focused bios); new `'PhD Students'`
  category added to the `Profile` type and `people.astro` → memory-bank/progress/2026-11.md#nov19-7
- `[nov19-6]` Nov 19 2026 — added physical address (Level 12, Building 2, UTS) to the Contact
  page → memory-bank/progress/2026-11.md#nov19-6
- `[nov19-5]` Nov 19 2026 — swapped home hero background to UTS Central (Building 2) photo per
  user's follow-up link, added required CC BY-SA 4.0 attribution caption → restarted local
  preview server (had stopped after prior session's verification) →
  memory-bank/progress/2026-11.md#nov19-5
- `[nov19-4]` Nov 19 2026 — home page hero redesign: emphasised UTS Data Science Institute
  affiliation in the eyebrow text, added a CC0 UTS building photo (Dr Chau Chak Wing Building)
  as a grayscale/gradient-overlaid hero background → memory-bank/progress/2026-11.md#nov19-4
- `[nov19-3]` Nov 19 2026 — reordered Collaborators list so Prof RenPing Liu appears before Dr Xu
  Wang (pure array reorder, no content change) → memory-bank/progress/2026-11.md#nov19-3
- `[nov19-2]` Nov 19 2026 — added Prof RenPing Liu as a second "Collaborators" person; discussed
  and declined a strict "UTS staff = Core Member" rule (would flip Xu Wang and Nick Qi
  inconsistently) → memory-bank/progress/2026-11.md#nov19-2
- `[nov19-1]` Nov 19 2026 — added Dr Xu Wang as a new "Collaborators" category person on the
  People page (new category added to `Profile` type), photo converted from WebP to JPEG via
  `sips` → memory-bank/progress/2026-11.md#nov19-1
- `[nov18-4]` Nov 18 2026 — memory bank initialized for this project, modelled on
  `pia_copilot_backend`'s indexing method (projectbrief/activeContext/systemPatterns/
  productContext/techContext + progress/<month>.md shards + progress/INDEX.md) →
  memory-bank/progress/2026-11.md#nov18-4
- `[nov18-3]` Nov 18 2026 — removed the "Leadership" category entirely (user: senior academics
  may not want to join under existing members' leadership titles); all 4 people now "Core
  Members" with title+affiliation role text; final display order Fang Chen → YiFei Dong → Kun
  Yu → Nick Qi (Fang moved ahead of the user per his own request, out of respect for her being
  his DSI director) → memory-bank/progress/2026-11.md#nov18-3
- `[nov18-2]` Nov 18 2026 — People page restructured into categories (Leadership/Core Members);
  added Nick Qi as a Core Member (photo from hcai-lab.org), later rewrote his bio to third
  person + condensed to 3 paragraphs → memory-bank/progress/2026-11.md#nov18-2
- `[nov18-1]` Nov 18 2026 — Research page rewritten to mirror HCAI Lab's structure (aim/research
  areas/approach/partnership/recruitment contact box), using AI-SEA's own themes →
  memory-bank/progress/2026-11.md#nov18-1
- `[nov16-4]` Nov 16 2026 — People/Publications built up from empty to real content; publication
  sourcing switched from UTS profile scraping (truncation-limited) to CrossRef API by ORCID,
  ending at 45 deduplicated 2024–2026 papers (unfiltered by topic) →
  memory-bank/progress/2026-11.md#nov16-4
- `[nov16-3]` Nov 16 2026 — full visual redesign from forest-green/card-heavy style to a
  monochrome editorial/academic style, per explicit user dislike of the original "AI-generated"
  look → memory-bank/progress/2026-11.md#nov16-3
- `[nov16-2]` Nov 16 2026 — GitLab pipeline verified success via a temporary self-hosted
  project-scoped runner (registered + run + fully unregistered/deleted same session, per user
  decision to avoid any UTS-admin involvement) → memory-bank/progress/2026-11.md#nov16-2
- `[nov16-1]` Nov 16 2026 — initial handoff: astro security upgrade (6.4.8→7.4.12, 0
  vulnerabilities), GitLab source push (688ff5c, no force), Azure SWA Free eligibility confirmed
  (nothing provisioned), .au/.com.au domain registrar gap identified →
  memory-bank/progress/2026-11.md#nov16-1
