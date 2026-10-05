# Shared Experience Content Migration

## Goal
Move all current bilingual professional experience data from `web/src/i18n/ui.ts` into root `content/experience.yaml`, render it through the Experience section, and preserve exact order, UI, and text. No commit.

## Tasks
1. Inspect the existing Experience component and exact EN/ES data. **Done.**
2. Add `content/experience.yaml` and a small typed loader using the established Vite raw YAML import pattern. **Done.**
3. Adapt `Experience.astro` to render the loaded localized entries without changing markup classes or order. **Done.**
4. Remove only obsolete `exp.*` keys from `ui.ts`. **Done.**
5. Run Astro check/build, verify both locale outputs, and run `git diff --check`. **Done.**

## Evidence
- Branch: `feat/shared-experience-content`, clean at start from commit `658c52a`.
- `content/experience.yaml` contains all three entries in source order, with exact EN/ES dates, roles, and descriptions.
- `web/src/lib/experience.ts` parses the root YAML through Vite `?raw` and returns current-locale data.
- `Experience.astro` renders the same section and timeline elements; the first item alone retains `current`.
- `web/src/i18n/ui.ts` removes only `exp.*`; navigation and other labels remain.
- `bun run --cwd web check`: passed (0 errors, warnings, hints).
- `bun run --cwd web build`: passed; English and Spanish Experience sections verified against exact copy and ordering.
- `git diff --check`: passed.
- No commit created.
