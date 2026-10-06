# Shared Content Layer Review — ODD mirror

Goal: Review five shared content files/loaders and main Astro composition, create content README, make only small justified fixes, validate both locales. No commit.

Tasks:
1. Audit YAML/loaders and page language integration. **Done.**
2. Document shared-content scope and authoring rules in `content/README.md`. **Done.**
3. Avoid broad structural refactors; use `defaultLang` for the page fallback and record deferred findings. **Done.**
4. Run check/build, verify root and `/es/`, and diff check. **Done.**

Findings: route passes one normalized currentLang to every content section. Keep page metadata, UI/ARIA labels, icons, status bar, and view presentation web-specific. Broader locale type/schema/runtime validation consistency improvements deferred.

Validation: check/build passed, `/` EN and `/es/` ES output verified with all section language props and selector links intact; `git diff --check` passed. No commit.
