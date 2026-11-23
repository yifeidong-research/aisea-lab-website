# AI-SEA Lab Website — Active Context

> **This file updates most frequently.** It captures the last 2 session-days as a compact INDEX
> (one line per unit of work, with a stable ID). Full narrative detail for each unit is written
> ONCE, directly into `memory-bank/progress/<month>.md` at the time the unit is resolved — never
> duplicated here. Only units that are **still open** (have an unresolved "Not yet done") keep
> full detail in this file; once resolved, they collapse to their index line. When a 3rd
> session-day would be added, the oldest day's index lines are dropped (nothing is lost — the
> detail already lives in `progress/`). See `memory-bank/progress/INDEX.md` for the full
> cross-month table of contents.

## Nov 23 2026 — Index

- `[nov23-10]` Expanded Collaborate page to 6 categories (added "Evaluation and assurance
  audits" + a workshop note) after a brainstorm prompt — done → `progress/2026-11.md#nov23-10`
- `[nov23-9]` Added a new Collaborate page with 5 risk-screened collaboration categories, after
  reviewing an external lab's collaboration page as a reference point — done →
  `progress/2026-11.md#nov23-9`
- `[nov23-8]` Removed role/leadership attribution from all 14 Projects entries — page now
  frames as the lab's project examples, not individual CV credits — done →
  `progress/2026-11.md#nov23-8`
- `[nov23-7]` Populated the Projects page with 14 sanitized entries from the user's internal
  project-list document (client identities/dollar values/tech details stripped) — done →
  `progress/2026-11.md#nov23-7`
- `[nov23-6]` Purchased `aisealab.org`, wired to GitHub Pages with auto HTTPS (verified live),
  removed local GitLab remote so GitHub is sole git storage — done → `progress/2026-11.md#nov23-6`
- `[nov23-5]` Migrated to a new public GitHub repo (`yifeidong-research/aisea-lab-website`) with
  GitHub Actions → GitHub Pages auto-deploy; GitLab kept as fallback — done (core migration), but
  see open items below → `progress/2026-11.md#nov23-5`
- `[nov23-4]` People page converted to a collapsible accordion (native `<details>`/`<summary>`)
  — compact list, click to expand bio — done → `progress/2026-11.md#nov23-4`
- `[nov23-3]` "Started YYYY" now shows "Starting YYYY" for future entry years (dynamic
  current-year comparison) — done → `progress/2026-11.md#nov23-3`
- `[nov23-2]` Entry year now visibly displayed on the People page ("Started YYYY" appended to
  role) for PhD Students / Master of Research Students — done → `progress/2026-11.md#nov23-2`
- `[nov23-1]` Added Zehui Cao as a new PhD Students entry (entryYear 2027) — done →
  `progress/2026-11.md#nov23-1`

## Nov 21 2026 — Index

- `[nov21-9]` Added `entryYear` field to `Profile`; PhD Students / Master of Research Students
  now ordered by entry year (earliest first, stable tie-break on array order) — done →
  `progress/2026-11.md#nov21-9`
- `[nov21-8]` Added Remya Sasi Valsala as a new PhD Students entry (first real use of
  `add-person.md`) — done → `progress/2026-11.md#nov21-8`
- `[nov21-7]` Created `.clinerules/workflows/add-person.md`, a single shared workflow for adding
  any People-page entry (replaces the idea of per-category skills) — done →
  `progress/2026-11.md#nov21-7`
- `[nov21-6]` Research page layout fix: diagram now embedded beside text (image right, text
  left) instead of a full-width banner — done → `progress/2026-11.md#nov21-6`
- `[nov21-5]` Added YiRan Guo's bio, resolving the open item from `[nov21-3]` — done →
  `progress/2026-11.md#nov21-5`
- `[nov21-4]` Added an AI-generated research-cycle diagram to the Research page — done →
  `progress/2026-11.md#nov21-4`
- `[nov21-3]` Added Yuhong Shi (dual Core Member + PhD Student), 3 more PhD Students, and a new
  "Master of Research Students" category with Peng Qian — done → `progress/2026-11.md#nov21-3`
- `[nov21-2]` Reordered People page categories: "PhD Students" now renders last, after
  "Collaborators" — done → `progress/2026-11.md#nov21-2`
- `[nov21-1]` Moved Nick Qi from Core Members to Collaborators; added Prof Tieling Zhang (UOW) as
  a new Collaborator — done → `progress/2026-11.md#nov21-1`

### Open items carried forward from Nov 21/23

- **🔴 GitHub credential rotation (security-sensitive, still open)**: the user's actual GitHub
  account password and a Personal Access Token were both pasted directly in chat during the
  Nov 23 migration/domain work (`[nov23-5]`, `[nov23-6]`). The PAT is still valid/was reused as
  recently as the domain-wiring step. Cline has repeatedly advised rotating the password and
  revoking/regenerating the PAT — **not confirmed done**. Ask about this proactively next
  session if it hasn't come up.
- **Individual Projects content**: Projects page still shows the placeholder notice — no
  confirmed individual project write-ups added yet.
- **UTS logo**: not added — needs separate authorisation from the user before any logo image
  is used.
- **Future personal website**: user mentioned wanting a personal site on the same GitHub
  account eventually — unblocked (1 user/org site + unlimited project sites per account
  confirmed), but not started.
- **UTS GitLab project**: still exists remotely (untouched, just no longer referenced by the
  local clone). No decision requested yet on whether to ever formally delete it.
- **Azure**: no longer the active plan (GitHub Pages is live and working) — only relevant again
  if the user explicitly wants to add/switch to Azure in the future; not a pending blocker.
