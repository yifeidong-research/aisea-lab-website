# Workflow: Add a Person to the People Page

Use this workflow whenever adding a Core Member, Collaborator, PhD Student, Master of Research
Student, or any future category to the People page. The procedure is identical regardless of
category — only the `category` field value differs — so this is one shared workflow, not one
per category.

## Relevant files
- `src/content/site.ts` — `Profile` type + `people` array (all content lives here)
- `src/pages/people.astro` — rendering + `categoryOrder` (controls section order on the page)
- `public/people/` — photo assets

## Steps

1. **Gather confirmed facts only.** Ask the user for: full name, role/title, category, bio
   text (if any), photo (if any), profile URL (if any). Per the project's standing rule, never
   fabricate or embellish bio content — if no bio is supplied yet, omit the `bio` field entirely
   rather than inventing placeholder text (`people.astro` already renders gracefully without one:
   photo/name/role only).

2. **Check the `category` value against the existing union** in `src/content/site.ts`:
   ```ts
   category: 'Core Members' | 'PhD Students' | 'Master of Research Students' | 'Collaborators';
   ```
   - If the requested category already exists in this union, use it as-is.
   - If it's a **new** category, you must also:
     a. Add the new string literal to this union type.
     b. Add it to `categoryOrder` in `src/pages/people.astro` at the position the user specifies
        (ask where it should render relative to existing categories if not stated).

3. **Handle the photo (optional).**
   - If a photo file is provided, save it to `public/people/` using a
     `firstname-lastname.ext` filename convention (match the casing style of existing files,
     e.g. `fang-chen.jpg`, `megan-zhou.png`).
   - Reference it from the `Profile` entry as `photo: '/people/firstname-lastname.ext'`.
   - If no photo yet, omit the `photo` field — `people.astro` falls back to a placeholder
     (first-letter avatar).

4. **Check for a dual-role situation.** If the person holds two distinct roles at the lab at
   once (e.g. an industry Core Member who is also a PhD researcher — see Megan (Ying) Zhou,
   Yuhong Shi in `site.ts`), the established pattern is **two separate `Profile` entries**
   sharing the same `name` and `photo`, one per category, each with a bio tailored to that role
   (not one merged entry). `Profile` has no uniqueness constraint on `name`, so this is
   supported without special-casing.

5. **Append the new `Profile` object(s)** to the `people` array in `src/content/site.ts`. Match
   the existing style:
   - `bio` as a `string[]` (one paragraph per array element) when multi-paragraph, or a single
     `string` for a short one-liner — follow what's already used for similarly-detailed entries.
   - Keep `profileUrl` only if the user supplies a real UTS profile link (or similar) — don't
     invent one.

6. **Verify.** Run `npm run check && npm run build` (optionally `npm run preview` to eyeball the
   People page) to confirm the TypeScript type and the Astro build both succeed before
   considering the task done.

7. **Update the memory bank** per `.clinerules/memory-bank.md` — this is a standard content
   change and should get its own unit-of-work entry (ID, index line, progress/ detail), noting
   who was added, which category, and whether any open item (missing bio/photo) was created.
