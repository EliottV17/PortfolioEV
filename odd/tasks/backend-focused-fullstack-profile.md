# Backend-focused Full Stack profile

## Objective
Align bilingual portfolio content with the new English and Spanish CVs: Full Stack developer with a strong backend focus and frontend knowledge.

## Scope and constraints
- Edit only content/about.yaml, content/skills.yaml, content/experience.yaml.
- Preserve all pre-existing PDF, contact, i18n and style changes.
- Separate Backend and Frontend tools; include React, Next.js, Tailwind CSS and shadcn/ui in Frontend.
- Update backend-only profile/project/Meevent titles to Full Stack, retaining backend emphasis and factual descriptions. Preserve the Frontend internship title.
- No application/schema/layout changes or new claims beyond CV evidence and explicitly requested tools.
- Do not commit or publish without explicit user request.

## Tasks
- [x] T1 (done): Update bilingual profile, skill categories and experience titles; validate parsing, localized content, Astro diagnostics and static build.

## Acceptance criteria and checks
- EN/ES roles and bios clearly identify Full Stack with strong backend focus and frontend knowledge.
- Frontend is a distinct category with React, Next.js, Tailwind CSS and shadcn/ui.
- Relevant experience titles use Full Stack; backend construction emphasis remains.
- YAML parses; focused content assertions pass; `cd web && bunx astro check` and `cd web && bun run build` pass.
- No edits to unrelated dirty files.

## Verification evidence
Writer: YAML parse and bilingual assertions passed; Astro check passed with 0 errors/warnings/hints; production build passed (2 pages). Parent: git diff --check passed and read back all three content diffs. Native assessment was unassessable due to untracked scope; inspect included unrelated pre-existing changes, so no START was attempted. Independent verifier first attempt failed without diagnostics; retry passed git diff --check, Astro check (0 errors/warnings/hints), build (2 pages), and inspection of generated EN/ES HTML. Test-first RED is not applicable to passive content copy updates; structural content checks and production build verified integration.

## Progress and next step
Content implementation and independent verification completed. Existing dirty files preserved. Ready for user review; native review not completed because its workspace scope included unrelated changes.
Commit: not requested; pending explicit user authorization.
