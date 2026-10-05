# Remediate GGA Findings

## Goal
Resolve the blocking findings reported by Gentleman Guardian Angel so the staged portfolio change can be committed.

## Tasks

- [x] Localize Telescope UI and accessibility labels; replace inline visibility styles with component classes.
- [x] Review the cursor CSS finding and run the production build and applicable UI checks.
- [x] Move locale-specific page title/description and project highlights into the translation catalog.
- [x] Re-run checks and retry the requested commit.

## Constraints

- Preserve all existing staged portfolio changes and keep `odd/` ignored/uncommitted.
- Do not remove either `#nvim-cursor` rule without evidence; they may style distinct contexts.
- Commit only after checks pass; use a Conventional Commit message.

## Evidence

- GGA reported hardcoded localized UI labels and inline styles in `src/components/Projects.astro`.
- GGA reported a duplicate `#nvim-cursor` selector in `src/styles/components.css`; prior inspection indicates the selectors may serve distinct layout contexts.
- Production build passed before remediation; keyboard and narrow-screen behavior still requires verification.
- Remediation implemented in `Projects.astro`, `i18n/ui.ts`, `telescope.css`, and `telescope.ts`; dynamic diagram labels now use the page locale.
- The two cursor selectors are not duplicates in effect: the scoped rule controls location-field width/alignment, while the generic rule supplies base cursor styling.
- `bun run build`, Prettier check, and `git diff --check` passed; keyboard/touch/responsive paths were inspected in source, but live browser behavior remains unverified because no browser harness is configured.
- A later GGA retry successfully ran with OpenCode and rejected the commit for inline locale-specific page title/description and project highlight strings; moved these into the translation catalog in English and Spanish.
- `bun run build`, Prettier check, `git diff --check`, and translation key parity passed.
- GGA review passed; commit `0e8ca69` (`feat(portfolio): add telescope project browser`) created on `chore/portfolio-updates`; working tree is clean.
- Native Gentle review inspect returned `empty_candidate_base_ref_required` because the committed work unit leaves no current workspace diff; no native lineage was started.
