# Shared Contact Content Migration — ODD mirror

Goal: Move only reusable contact facts to root `content/contact.yaml`; preserve web UI and labels. No commit.

Tasks:
1. Inspect Contact component and i18n values. **Done.**
2. Add compact typed YAML loader. **Done.**
3. Wire contact facts into Contact.astro while preserving icons, markup/classes, labels, and CV curl copy. **Done.**
4. Remove only copy/locationValue/statusValue from i18n. **Done.**
5. Run check/build, inspect locales and links/downloads, run diff check. **Done.**

Schema: localized copy/location/status, email, socials as ordered id/name/url entries, and locale-specific resume path/filename; interface labels remain in ui.ts.

Validation: Astro check/build passed; both locale pages verified for exact contact copy, links, labels, CV download attributes, and curl presentation; `git diff --check` passed. No commit.
