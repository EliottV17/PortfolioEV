# Shared About Content Migration — ODD mirror

Goal: Move reusable bilingual profile presentation into root `content/about.yaml` and preserve exact UI/text. No commit.

Tasks:
1. Inspect About source and page metadata usage. **Done.**
2. Add typed YAML loader using established `?raw` convention. **Done.**
3. Adapt About.astro and remove only migrated About keys. **Done.**
4. Check/build and verify EN/ES output plus diff. **Done.**

Decision: Keep `page.title` and `page.description` in `ui.ts`; repository usage shows they feed only HTML title and meta description in `web/src/pages/[...lang].astro`, so they are site metadata rather than shared profile presentation.

Validation: Astro check passed with zero diagnostics; Astro build generated English and Spanish pages; exact profile text and DOM structure verified in both locales; `git diff --check` passed. No commit.
