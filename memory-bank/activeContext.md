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

- **GitLab CI/CD runner**: none currently assigned to the project. Any future push will sit
  `pending` until a project-scoped runner is registered and run again (ask the user first each
  time — do not assume standing permission from `[nov16-2]` carries forward automatically).
- **Azure hosting**: not provisioned. Still waiting on UTS public-hosting clearance + the
  user's explicit go-ahead before registering `Microsoft.Web` or creating any SWA resource.
- **Domain**: not chosen or ordered. Still waiting on the user's preferred domain name,
  registrar choice (likely needs to go through UTS's own account for `.au`/`.com.au`
  eligibility), and explicit approval of price/renewal terms.
- **Individual Projects content**: Projects page still shows the placeholder notice — no
  confirmed individual project write-ups added yet.
- **UTS logo**: not added — needs separate authorisation from the user before any logo image
  is used.
