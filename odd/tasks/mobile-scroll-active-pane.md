# Mobile Scroll-Active Pane

- **Branch:** `feat/mobile-scroll-active-pane` (created from clean `main`)
- **Objective:** On touch/mobile layouts, apply the existing pane hover treatment to the pane most visible in the viewport while scrolling.
- **Problem / why:** Touch screens lack persistent pointer hover; current `.pane` hover styling is scoped to `(hover: hover)`, so panes lose the emphasis available on desktop.
- **Scope:** Add mobile/touch scroll-active pane detection and reuse the existing visual treatment. Preserve desktop pointer hover. Recompute after resize/orientation and media-query changes. Do not change desktop layout or interaction.
- **Constraints:** User approved creating a commit in this turn; do not push or publish. Keep writes single-threaded. Technical artifacts remain English.
- **Delivery strategy:** Local work-unit commit authorized by user; no push/publishing authorized.
- **Forecast:** Small, likely under 100 authored changed lines.

## Tasks

- [x] **T1 — Implement visible-pane activation.** Add viewport-based active-pane selection for touch layouts and style the selected pane consistently with desktop hover. Preserve hover behavior on pointer devices. **Completed:** added touch-layout `IntersectionObserver` selection by greatest visible area, matching active styling, and a guarded resize/orientation recomputation.
  - Route: delegated bounded worker (multi-file implementation trigger).
  - Acceptance: at most one pane is active; the pane with the greatest viewport visibility receives the effect; state updates during scroll, resize/orientation, and media-query changes; desktop hover remains unchanged; use the observer rather than a persistent scroll listener.
  - Checks: post-fix independent `bun run build` passed. No browser UI runner is configured, so live device interaction could not be exercised.
  - Status: complete.
- [x] **T2 — Verify and report.** Review the implementation, run applicable checks, and report any failures or limitations without committing. **Completed:** independent verifier confirms behavior review and `bun run build` passed; parent confirmed intended files and branch before the commit attempt.
  - Route: delegated verifier where applicable, then parent read-only spot check.
  - Acceptance: production build passes; source changes are limited to intended files; preserve the user's no-push constraint.
  - Status: complete.

- [ ] **T3 — Create the approved work-unit commit.** Commit the verified implementation and task record on the feature branch using a Conventional Commit. Do not push.
  - Status: blocked/in progress; attempted `git commit -m "feat: highlight the most visible pane on mobile"`, but the repository pre-commit hook (`gga run`) failed because its Codex provider exited 1 with no output. No commit was created; staged changes are preserved. Do not bypass the hook.

## Progress / evidence

- Explored: hover styles are in `src/styles/responsive.css` under `@media (hover: hover)`; all pane sections use `.pane`; mobile layout becomes vertically scrollable below 1340px in the same stylesheet. Existing client behavior is in `src/scripts/status-bar.ts`.
- Git: initial working tree was clean on `main`; feature branch `feat/mobile-scroll-active-pane` was created from that `main`. Changes are staged. Commit attempt failed in the mandatory GGA pre-commit review hook; `git log -1` confirms no new commit.
- Checks: post-fix independent verifier ran `bun run build` successfully; generated both `/` and `/es`. No configured browser UI/test runner exists, so live mobile scrolling/orientation behavior was not exercised in a browser; meaningful RED/GREEN evidence was unavailable.
- Commit blocker: `.git/hooks/pre-commit` runs `gga run || exit 1`; provider returned exit code 1 and no output. Preserve staging and do not bypass the hook.

## Next step

Retry the approved commit only when the mandatory GGA provider review is available; do not bypass the hook. Do not push. Browser/device-level validation remains unavailable because no runner is configured.