# Skills localization and layout

## Objective
Correct the bilingual skills prompt, prevent directory labels and slashes wrapping, and organize skills without language duplication.

## Scope and constraints
Branch: `fix/skills-localization-layout`, created from local `main` with a clean worktree.
Use six ordered groups from the user's guide: languages, backend, databases, infrastructure, testing, engineering. Spanish category names remain translated. Keep existing skill evidence; Linux replaces Ubuntu, REST APIs replaces REST. No vertical separators. EN prompt stays `$ ls ~/skills`; ES becomes `$ ls ~/habilidades`.
No push, PR, or merge. Commits are pending explicit user authorization per the active safety contract.

## Tasks
- [x] T1 (verified implementation; commit awaiting authorization): Update shared bilingual skill data, localized prompt, and responsive label sizing. Route: delegated worker; three non-trivial source files trigger delegation. Read existing project guidance before edits.
- [x] T2 (follow-up verified; commit awaiting authorization): Verify production output and both locales at responsive widths; complete native review if consented. Route: writer self-checks plus independent browser verifier and native review.

- [x] T3 (implemented; commit awaiting authorization): User follow-up: align the technology start position across every side-by-side row using a common label column; preserve stacked mobile layout and unbroken slashes. Replace MySQL with MongoDB. Route: delegated writer (two source files).

## Acceptance and checks
Six groups in requested order; Go only in languages, Go testing in testing; databases/bases de datos replace data/datos. All labels including infraestructura/ stay on one line without horizontal overflow at 320, 375, 640, 641, 768, 1440, 1441, 1920px. Locale-appropriate prompt. No added separators.
Run `cd web && bun run check`, `bun run build`, and scoped Prettier check with content YAML's repository-root path. Browser CDP checks both generated routes.
Use browser assertions to observe pre-fix failures before editing and post-fix success where possible; no configured unit test runner, so do not invent unit RED/GREEN evidence.

## Progress and evidence
Exploration mapped content/skills.yaml, web/src/components/Skills.astro, web/src/styles/components.css; prompt is hardcoded and labels use overflow-wrap:anywhere with a narrow first grid column.
T1 source changes implemented. Writer: Astro check passed with 0 diagnostics; production build and scoped Prettier check passed; generated HTML assertions confirmed bilingual prompts and six categories. Pre-change source inspection documented defects but is not executed RED test evidence. Independent verifier passed scoped formatting and Chromium CDP on EN/ES at all eight widths (16 combinations): localized prompts, six ordered groups, one-line labels, no overlap/clipping/horizontal overflow, no separators. Native review review-8f62d775d0b844ac approved and exact acknowledgement burned authority for the three-source-file candidate. ASSESS failed because it requires an explicit untracked declaration (the tracking document); risk unassessable was treated as high, with writer checks plus independent verification already completed. Firefox/WebKit and physical devices were not checked. Commit evidence: none; awaiting explicit authorization.

## Next step
T3 uses 8rem common label column and MongoDB. Astro check (0 diagnostics), build and scoped Prettier passed. No pre-change executed RED test. Follow-up browser verification passed all 16 locale/width combinations: all technology lists have equal left edges (0px difference), labels single-line, stacked mobile preserved, no overlap/clipping/overflow. MongoDB present and MySQL absent in both locales. Independent formatting passed. Updated native review review-f4e56669ff656e50 approved and exact acknowledgement burned authority. Chromium only; Firefox/WebKit and physical devices untested. No commits without explicit request. Implementation complete; await user delivery instructions.
