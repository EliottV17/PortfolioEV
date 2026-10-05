# Telescope responsive scroll lock

## Goal
Prevent the portfolio page/document from scrolling behind the Telescope modal at responsive widths (including touch devices), while preserving scrolling within the modal's own list and preview panes.

## Finding
At `max-width: 1340px`, `src/styles/responsive.css` sets `overflow-y: auto` on both `html` and `body`. `openModal()` currently sets inline `overflow: hidden` only on `body`, leaving the document element scrollable. This makes the existing page lock ineffective for the root scroll container.

## Scope
- Lock both `document.documentElement` and `document.body` while the modal is open.
- Restore prior inline overflow state on close to avoid clobbering unrelated styles.
- Prevent overscroll chaining from the fixed overlay into the page; retain internal modal scrolling.
- Do not change unrelated source edits, commit, or adjust unrelated responsive styles.

## Verification
- No browser test suite is configured. `bun run check` passed (0 errors/warnings/hints); `bun run build` passed (both routes); `git diff --check` passed.
- Static inspection confirmed prior inline overflow values and priorities are restored, overlay overscroll is contained, and list/preview internal scroll containers remain. Actual browser/device gestures remain unverified.

## Commits
No commit requested or created.
