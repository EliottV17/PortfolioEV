# Shared Project Content Migration

## Goal
Store Sentinel, Gym Buddy, and TenantInbox project data in root `content/projects.yaml` while preserving exact current EN/ES output and UI behavior. Do not alter unrelated UI labels or sections; do not commit.

## Tasks
1. Inspect existing Gym Buddy and TenantInbox metadata, diagrams, stack, and EN/ES copy. **Done.**
2. Extend the existing typed YAML loader to return all three localized project view models. **Done.**
3. Move exact project data into YAML and eliminate hardcoded project definitions from `Projects.astro`. **Done.**
4. Remove only their migrated `projects.gymBuddy.*` and `projects.tenantInbox.*` translations; retain generic project/telescope UI keys. **Done.**
5. Run Astro check/build, inspect all three projects in both generated locales, and run `git diff --check`. **Done.**

## Evidence
- Branch: `feat/sentinel-shared-content`; user explicitly requested no commit.
- `Projects.astro` obtains all three ordered projects through `getProjects(lang)`; no hardcoded project definitions remain.
- YAML carries metadata, links, stack, colors, icons, diagrams, and localized detail/highlights. Existing view-model mapping preserves displayed stack separator and TenantInbox filename.
- `web/src/i18n/ui.ts` retains generic `projects.*` and all `telescope.*` labels; only migrated project-specific keys were removed.
- `bun run --cwd web check`: passed, 0 errors/warnings/hints.
- `bun run --cwd web build`: passed; generated EN and ES pages verified for all three projects and exact text/links/stacks/diagrams/highlights.
- Gym Buddy/TenantInbox EN/ES output compared against HEAD baseline; unchanged apart from source location.
- `git diff --check`: passed.
- No commit created.
