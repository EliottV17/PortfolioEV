# Compact desktop panels and authentic CV downloads

## Objective
Reduce excess empty space in the desktop bottom row and replace decorative curl commands with a terminal-style listing of real downloadable CV files.

## Scope
Branch: feat/compact-panels-cv-download, from main bd61eba6d7c529da7811e23b978852cdc0252633; initially clean.
Change desktop (>1440px) workspace rows to approximately 2fr / 1fr. Keep fullscreen terminal appearance, existing skills content/alignment and <=1440px natural flow. CV listing shows `$ ls ~/cv`, exact asset filenames, localized download actions, real semantic download links and visible keyboard focus. No fake command, cursor, progress or success state. Shared YAML and PDF assets unchanged. No commit without explicit request; no push or PR.

## Tasks
- [x] T1 (implemented; commit awaiting authorization): Implement desktop ratio and bilingual accessible terminal CV listing. Delegated worker: four non-trivial edit surfaces.
- [x] T2 (contact labels verified; commit awaiting authorization): Independently verify layout, downloads and keyboard behavior; native review under enabled user switch. Delegated verifier: browser/CDP checks.

- [x] T3 (implemented; commit awaiting authorization): Add consistent category-label spans for Email/Correo and Resume/CV alongside existing Network/Redes. Preserve user-added CV span but replace incorrect network key. Route: bounded worker for component, translations and label spacing.

## Allowed implementation surfaces
- web/src/styles/layout.css
- web/src/styles/components.css
- web/src/components/Contact.astro
- web/src/i18n/ui.ts

## Acceptance and checks
Desktop row ratio near 2:1; narrower layouts unchanged. Both CV links use existing exact paths and filenames, localized accessible labels, hreflang and download attributes. Keyboard focus visible and reachable even when Contact scrolls. Both PDFs reachable and valid. No horizontal overflow, unscrollable clipping or skills alignment regression.
Writer runs cd web && bunx astro check; bun run build; bunx prettier --check src/styles/layout.css src/styles/components.css src/components/Contact.astro src/i18n/ui.ts.
Independent Chromium verification on both locales at 1920x1080, 1512x982, 1441x700, 1440x900, 375x667. Add shorter desktop height if needed to exercise overflow/focus scrolling. No configured unit runner; use meaningful pre-change failing DOM assertions before edits when practical, never call source inspection executed RED.

## Evidence
Implementation uses desktop 2fr/1fr and semantic bilingual CV download listing with filenames and focus outline. Writer-added 700px minimum terminal height was removed after parent review; original fullscreen sizing preserved. Astro check: 0 diagnostics; build and scoped formatting passed twice. Generated HTML assertions passed. No pre-change executed RED test; ordinary structural/functional verification used (no configured unit runner). Independent Chromium passed both locales at seven viewports: 1920x1080,1512x982,1441x700,1920x600,1440x900,375x667,320x640. Desktop row ratio ~2:1, fullscreen/status visible down to 600px height, natural narrow flow, skills alignment intact, no horizontal overflow. Genuine Tab showed focus outline and auto-scrolled CV links into view. Both PDF downloads completed (click EN, Enter ES), HTTP200 and %PDF signatures validated. Shared YAML/PDFs unchanged. Independent Prettier passed. Native review review-d00293091dab5bc3 approved and exact acknowledgement burned authority. Firefox/WebKit/live deployment not tested. No commits.

## Next step
T3 implemented Email/Correo, Network/Redes, Resume/CV labels and primary block display. Astro 0 diagnostics, build, formatting and both-locale generated label assertions passed. Independent Chromium verified both locales at five viewports (1920x1080,1920x600,1440x900,375x667,320x640): labels above content, matching typography, no overlap/overflow/clipping, Tab focus/scroll reachability preserved. Existing download attributes/PDFs preserved. Native review for updated candidate declined via host; no lineage created. ASSESS unavailable due to untracked declaration, conservative writer plus independent verification already fulfilled. Earlier approved review does not cover updated labels. Firefox/WebKit untested. Work complete. No commit/push/PR without request.
