# Shared Project Content Migration — ODD mirror

Goal: Put Sentinel, Gym Buddy, and TenantInbox data in root `content/projects.yaml`, preserve EN/ES output and UI behavior, and do not commit.

Tasks:
1. Inspect existing Gym Buddy/TenantInbox data and translations. **Done.**
2. Generalize the typed loader for all three projects. **Done.**
3. Migrate exact project metadata/content to YAML and remove the component's hardcoded project definitions. **Done.**
4. Remove only project-specific translations for migrated projects; retain generic UI labels. **Done.**
5. Run Astro check/build, verify both locales and all project data, and run `git diff --check`. **Done.**

Validation: `bun run --cwd web check` passed with zero diagnostics; `bun run --cwd web build` generated EN and ES successfully; all three project outputs were verified against prior source. `git diff --check` passed. No commit.
