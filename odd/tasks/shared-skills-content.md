# Shared Skills Content Migration

## Goal
Move all skill categories, groups, and items from `Skills.astro` into root `content/skills.yaml`; preserve exact content, order, classes, and bilingual labels. No commit.

## Tasks
1. Inspect current Skills markup/data and exact EN/ES UI labels. **Done.**
2. Add compact YAML schema and typed loader using the existing Vite `?raw` + `yaml` pattern. **Done.**
3. Render categories/groups/items from the loader without changing class names or visible content. **Done.**
4. Remove only the seven migrated `skills.*` keys from `ui.ts`, keeping `nav.skills`. **Done.**
5. Run check/build, inspect EN/ES output/order/content, and run `git diff --check`. **Done.**

## Schema
`skills[]` has ordered `category` values (plain string if shared, `{en, es}` if translated), ordered `groups` with similarly localized `name`, and ordered `items` using plain strings or localized maps only where needed. This stays simple to consume from Go.

## Evidence
- Branch: `feat/shared-skills-content`; prior shared-content migrations are committed.
- `Skills.astro` renders every category/group/item from `getSkills(lang)` and retains existing CSS classes and nested markup.
- `web/src/i18n/ui.ts` removes only `skills.languages`, `skills.databases`, `skills.architecture`, `skills.cloud`, `skills.tagArchitecture`, `skills.microservices`, `skills.tools`; `nav.skills` remains.
- `bun run --cwd web check`: passed (0 errors, warnings, hints).
- `bun run --cwd web build`: passed; English/Spanish outputs verified for all category, group, and item labels/order, including localized Architecture and Microservices.
- `git diff --check`: passed.
- No commit created.
