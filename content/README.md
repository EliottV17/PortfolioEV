# Shared Content

This directory is the source of truth for reusable portfolio information shared by the Web, TUI, and SSH experiences. Keep facts and domain content here; each interface decides how to present them.

## Files

- `about.yaml` — profile name and localized profile copy (eyebrow, role, bio, location, status).
- `contact.yaml` — reusable contact details: email, social accounts and URLs, localized contact copy/location/status, and resume paths/filenames.
- `experience.yaml` — ordered professional experience entries with localized dates, roles, and descriptions.
- `projects.yaml` — ordered project metadata and links, stacks, diagrams, and localized details/highlights.
- `skills.yaml` — ordered skill categories, groups, and items; values are localized only when the displayed text differs by language.

## Bilingual text

Use `en` and `es` values when wording differs between languages, for example:

```yaml
copy:
  en: Let's talk.
  es: Hablemos.
```

For labels or names identical in both languages, use one plain string rather than duplicating it in both locale fields. Preserve existing order where the sequence is meaningful (such as projects, experience, categories, groups, and skills).

## Keep interface presentation out

Do not put interface-only presentation in this directory, including:

- Pure UI labels, navigation text, and ARIA labels.
- Metadata exclusive to the website, such as HTML `<title>` and meta description.
- View-specific decoration or copy whose purpose is only to operate a particular UI.
- Icons, layout, CSS classes, or visual component state.

These belong in the relevant interface layer (for example, `web/src/i18n/ui.ts`, components, styles, or assets). Shared content should remain usable without depending on Astro or a specific interface's layout.
