# Shared Contact Content Migration

## Goal
Move only reusable contact information to root `content/contact.yaml`; preserve exact Contact UI, text, links, downloads, and behavior. Keep interface labels in `ui.ts`. No commit.

## Tasks
1. Inspect Contact markup and existing content/i18n split. **Done.**
2. Add simple contact YAML schema and typed loader using existing Vite `?raw` + `yaml` pattern. **Done.**
3. Adapt Contact.astro to load reusable data while retaining imported SVGs, UI labels, and the existing curl download presentation. **Done.**
4. Remove only `contact.copy`, `contact.locationValue`, and `contact.statusValue` from `ui.ts`. **Done.**
5. Run Astro check/build, verify EN/ES output, links and CV targets, and run `git diff --check`. **Done.**

## Evidence
- Branch: `feat/shared-contact-content`; prior shared-content migrations are committed.
- `content/contact.yaml` holds localized copy/location/status, email, socials, and locale-specific resume path/filename.
- `web/src/lib/contact.ts` loads typed YAML via root `?raw` and resolves the current locale.
- `Contact.astro` consumes the reusable fields; keeps SVG imports, interface labels, and fixed curl display strings in the web component.
- `ui.ts` removes only the three requested value keys; all specified UI labels remain.
- `bun run --cwd web check`: passed (0 errors, warnings, hints).
- `bun run --cwd web build`: passed; both locale pages verified for exact visible text, email, social links, resume links/download names/titles, and unchanged curl commands.
- `git diff --check`: passed.
- No commit created.
