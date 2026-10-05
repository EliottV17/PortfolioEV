# Shared About Content Migration

## Goal
Move reusable bilingual profile copy into root `content/about.yaml` and render it through About.astro without changing text, UI, or unrelated sections. No commit.

## Tasks
1. Inspect About component, current EN/ES copy, and page metadata use. **Done.**
2. Add typed profile YAML loader using existing Vite raw YAML pattern. **Done.**
3. Adapt About.astro to consume locale-specific profile fields and remove only migrated About keys. **Done.**
4. Run Astro check/build, verify EN/ES output and `git diff --check`. **Done.**

## Decision
Kept `page.title` and `page.description` in `ui.ts`: repository usage shows they are consumed only for HTML `<title>` and `<meta name="description">` in `web/src/pages/[...lang].astro`. They are web document metadata, not reusable profile presentation fields.

## Evidence
- Branch: `feat/shared-about-content`, based on committed project and experience migrations.
- `content/about.yaml` stores the exact profile name and all five profile fields in EN/ES.
- `web/src/lib/about.ts` parses root YAML through Vite `?raw` and returns current-locale fields.
- `About.astro` uses the profile loader while retaining `useTranslations` only for the section's `nav.about` label; markup preserved.
- `web/src/i18n/ui.ts` removes only the five About keys per locale; page metadata and other keys remain.
- `bun run --cwd web check`: passed (0 errors, warnings, hints).
- `bun run --cwd web build`: passed; EN and ES output verified for exact text and section structure.
- `git diff --check`: passed.
- No commit created.
