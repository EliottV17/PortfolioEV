# Shared Experience Content Migration — ODD mirror

Goal: Move all current bilingual Experience data to root `content/experience.yaml`, keep exact UI/order/text, and do not commit.

Tasks:
1. Inspect Experience component and exact source copy. **Done.**
2. Add YAML content and a small typed loader with the established `?raw` pattern. **Done.**
3. Render Experience from localized shared content without changing markup/classes/order. **Done.**
4. Remove only obsolete `exp.*` keys from `ui.ts`. **Done.**
5. Run check/build, inspect EN/ES output, and run `git diff --check`. **Done.**

Validation: Astro check passed with zero diagnostics; Astro build generated both locale pages; exact experience copy/order and structure verified in EN and ES; `git diff --check` passed. No commit.
