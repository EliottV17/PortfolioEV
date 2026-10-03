# Project health fixes

## Goal
Resolve the five project findings reported in the portfolio audit, in requested order, preserving pre-existing working-tree work.

## Scope and guardrails
- Add `@astrojs/check` and `typescript` as development tooling plus a `check` script; run diagnostics and build.
- Correct Telescope modal reopen selection after search has filtered the list.
- Remove the redundant localized title conditional while retaining the current title text.
- Remove only confirmed unused exports/translation keys/CSS, and relocate imported SVG component assets out of `public/` if references confirm no public-URL dependency.
- Add useful project onboarding content to the currently empty README.
- Do not alter unrelated user changes. Initial working tree already contained changes in `src/components/Projects.astro`, `src/i18n/ui.ts`, `src/pages/[...lang].astro`, several stylesheets, plus untracked `src/scripts/telescope.ts`, `src/styles/telescope.css`, and `.codegraph/`.
- No commit or delivery action without explicit user authorization; preserve user-controlled commit decision.

## Tasks and evidence
1. [x] Add Astro check tooling/script. `bun run check` passed (11 files, 0 errors/warnings/hints); `bun run build` passed (2 pages). TypeScript 7 was incompatible with Astro check's required programmatic API, so TypeScript 6 was installed instead.
2. [x] Fix Telescope open ordering: clear search/filter before resolving target ID and refresh selection/preview. `bun run check` and `bun run build` passed. No browser test suite exists, so live interaction remains unverified.
3. [x] Simplify identical title branches, retaining the current English/Spanish title. Both generated pages contain the expected title; `bun run check` and `bun run build` passed.
4. [x] Removed unused `languages`, `TELESCOPE_STACKED_BREAKPOINT`, `skills.designPattern`, and orphaned `.telescope-trigger-btn`, `.skill-spaced`, `.status-mode`; preserved both distinct `#nvim-cursor` rules. Moved six imported icons to `src/assets/icons/` and removed unreferenced public duplicates. `bun run check` passed with 0 diagnostics; `bun run build` passed for both routes.
5. [x] Populated `README.md` with project overview, quick start, directory map, and commands. Prettier check passed after formatting. Final `bun run check` (11 files, 0 diagnostics), `bun run build` (2 routes), and `git diff --check` passed.

## Commits
No commits created; user did not request committing.
