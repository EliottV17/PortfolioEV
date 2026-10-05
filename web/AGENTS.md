# Project guidance

## Project overview

- This is a statically generated, bilingual (English/Spanish) portfolio built with Astro, TypeScript, and Tailwind CSS v4.
- Astro routes are defined in `src/pages/`; the catch-all page `src/pages/[...lang].astro` renders `/` (English) and `/es` (Spanish).
- Reusable UI is implemented as Astro components in `src/components/`. Translation strings and locale helpers live in `src/i18n/ui.ts`.
- Client-side behavior is framework-free TypeScript in `src/scripts/`; global and component styles are organized under `src/styles/` and imported through `global.css`.
- Static files such as downloadable CVs and public assets live in `public/`.
- Astro is configured in `astro.config.mjs`, including the sitemap integration and Tailwind's Vite plugin.

## Development

- Use Bun for dependency management and project commands; the package declares Node.js `>=22.12.0`.
- Start the development server in background mode:

  ```sh
  astro dev --background
  ```

- Manage that server with `astro dev stop`, `astro dev status`, and `astro dev logs`.
- Build the static site with `bun run build`; inspect the generated site with `bun run preview`.
- `bun run format` applies Prettier to the whole workspace. For a non-mutating format check, use `bunx prettier --check <changed-files>`.
- There is currently no configured test runner or lint script. For meaningful code changes, at minimum run the production build; use `bunx astro check` when validating Astro/TypeScript diagnostics if available in the installed toolchain.

## Conventions

- Keep locale-aware text in `src/i18n/ui.ts` and use the existing translation helper rather than hard-coding interface copy in components.
- Preserve the existing Astro-first, no-client-framework approach unless a requirement clearly calls for a framework integration.
- Keep styles in the existing modular stylesheets and follow the established responsive/layout patterns.
- When changing interactive browser behavior, verify both keyboard interaction and narrow-screen behavior where applicable.
- Do not overwrite unrelated user changes in the working tree.

## Documentation

Full Astro documentation: https://docs.astro.build

Consult the relevant guides before making related changes:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding or using styles](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)
