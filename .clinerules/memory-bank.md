# Cline Memory Bank Instructions

## At the start of EVERY session

### Step 0 — Check whether the memory bank exists

Before doing anything else, check if `memory-bank/projectbrief.md` exists.

**If it does NOT exist** (new project):
1. Tell the user: "No memory bank found. I'll initialize one for this project."
2. Create the `memory-bank/` folder and these files:
   - `projectbrief.md` — project name, purpose, tech stack, repo URL, run command
   - `activeContext.md` — current focus and what's next (start with today's session, index-first
     format — see "End of EVERY session" below)
   - `systemPatterns.md` — architecture overview and key design decisions
   - `productContext.md` — pages/sections, key files, content ownership
   - `techContext.md` — tech stack, dependencies, shell rules, setup steps
   - `progress/INDEX.md` — empty table of contents (one line per session unit, newest first)
   - `progress/<YYYY-MM>.md` — empty monthly shard for the current month (full session detail
     lives here, sharded by month so no single file grows unbounded)
3. Create `.clinerules/memory-bank.md` with these instructions (copy this file)
4. Ask the user to confirm or add any missing project details before proceeding

**If it DOES exist** — continue to Step 1 below.

---

### Step 1 — Read the memory bank

Read these files in order before doing anything else:

1. `memory-bank/projectbrief.md` — project overview, infrastructure, indexes
2. `memory-bank/activeContext.md` — last 2 session-days as a compact index + any still-open items
3. `memory-bank/systemPatterns.md` — architecture, conventions, next steps

Only read these if you need them for the specific task:
- `memory-bank/productContext.md` — pages/sections, content ownership, key files
- `memory-bank/techContext.md` — tech stack, shell command rules, build/deploy steps
- `memory-bank/progress/INDEX.md` — full cross-month table of contents of past sessions; use
  this to find the right monthly shard/ID before opening a full shard file
- `memory-bank/progress/<YYYY-MM>.md` — full narrative detail for a specific past session/unit
  of work, found via its ID (e.g. `[nov18-3]`) from `activeContext.md` or `progress/INDEX.md`.
  Read only when you need deep background on a specific past decision — never read a whole
  month's shard just to skim it.

---

## At the end of EVERY session

`activeContext.md` is an **index of units of work**, not a narrative log. A "unit of work" is
one coherent session or follow-up (e.g. one content change, one feature, one investigation) — a
single session can produce several units.

For each unit of work completed this session:

1. **Assign a stable ID**: `<mon><day>-<n>` (e.g. `nov18-3`) — 3-letter month, 2-digit day,
   sequence number within that day across ALL units logged that day (continue the existing
   day's counter if adding a later unit on the same calendar day).
2. **Write the full narrative detail ONCE**, directly into
   `memory-bank/progress/<YYYY-MM>.md` (the shard matching the unit's month) as a new
   `## [id] Title` section. This is the only place full detail is ever written — never
   duplicate it into `activeContext.md`.
3. **Add one line to `activeContext.md`**'s index for today, under a `## <Mon> <Day> <Year> —
   Index` heading: `` `[id]` short title — status (done/blocked/code-complete-not-verified) →
   `progress/<YYYY-MM>.md#id` ``.
4. **If the unit has a genuinely unresolved "Not yet done"**, add a short bullet for it under
   that day's `### Open items carried forward from <Day>` subsection in `activeContext.md` —
   this is the ONLY place `activeContext.md` keeps prose instead of just an index line. Once
   the item is resolved in a later session, remove it from "Open items" (the resolution gets
   its own new ID + index line + progress/ detail instead).
5. **Add one line to `memory-bank/progress/INDEX.md`** (top of the correct month's section):
   `` `[id]` Title → `memory-bank/progress/<YYYY-MM>.md` ``.
6. **When a 3rd session-day would be added to `activeContext.md`**, drop the oldest day's index
   lines (nothing is lost — the detail already lives in `progress/`), but first re-check that
   day's "Open items" bullets are still genuinely unresolved, carrying forward any still-
   relevant (don't silently lose a real open item).
7. **If a new calendar month starts**, create a new `memory-bank/progress/<YYYY-MM>.md` shard
   with the same header format as existing shards, and start writing new units there.
8. Update `memory-bank/projectbrief.md` → "Latest commit" hash if a commit was made.

Update other files only if their content changed:
- `systemPatterns.md` — if architecture, conventions, or a durable design **decision**
  changed. Prefer putting durable decisions here (condensed, no play-by-play) rather than only
  in `progress/` — `systemPatterns.md` should stay small and be the "why we chose X" reference
  that survives long after the session narrative is archived.
- `productContext.md` — if pages/sections or key files changed
- `techContext.md` — if tech stack, dependencies, or shell rules changed

When writing a `progress/<YYYY-MM>.md` entry, it's fine to shorten "what changed" to a commit
hash reference (e.g. "see commit `abc1234`") instead of re-describing every file/line changed —
git already carries that detail; the memory bank should focus on the *why* and *what was learned*
that isn't otherwise recoverable from the diff alone.

---

## Key commands
- "follow your custom instructions" → read Memory Bank and continue where you left off
- "update memory bank" → full review and update of all files
- "initialize memory bank" → for new projects only (do NOT run on this project)

---

## Notes
- All active context is in `memory-bank/` files
- This project has no recurring external customer-reporting cadence, so there is no
  `memory-bank/milestones.md` file — do not create one unless that changes
