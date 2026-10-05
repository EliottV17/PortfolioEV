# Shared Skills Content Migration — ODD mirror

Goal: Move all skills categories/groups/items into root `content/skills.yaml`, preserve exact bilingual display/order/UI, and do not commit.

Tasks:
1. Inspect current markup, items, and localized labels. **Done.**
2. Add simple typed YAML loader following established `?raw` pattern. **Done.**
3. Render categories/groups/items from data without changing CSS classes. **Done.**
4. Remove only seven `skills.*` keys; retain `nav.skills`. **Done.**
5. Check/build; verify both locales, order, contents, and diff. **Done.**

Schema: ordered `skills[]` categories, each with localized-or-shared category label, ordered groups, and ordered localized-or-shared item labels; plain strings are used for language-neutral text.

Validation: Astro check passed with zero diagnostics; build generated EN/ES pages; all category/group/item text/order verified (including Microservices/Microservicios), CSS classes retained, `nav.skills` preserved, and `git diff --check` passed. No commit.
