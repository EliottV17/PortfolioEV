# Viewport-aware pane redistribution

## Objective
Redistribute desktop height for browsers with top chrome, prevent unreachable experience clipping, and remove redundant Contact system info while preserving the approved compact ls Skills design.

## Scope and constraints
- Branch `fix/laptop-scroll-1440`, HEAD73c78f8; existing uncommitted skills changes in YAML, Skills.astro, components.css, responsive.css must be preserved.
- Source edits: `web/src/styles/layout.css`, `web/src/styles/components.css`, `web/src/styles/responsive.css` only if necessary for natural-flow overrides, `web/src/components/Contact.astro`; user explicitly approved `web/src/components/Experience.astro` for timeline tabindex="0" keyboard accessibility.
- Remove Contact system info heading/location/status only; keep copy, mailto, socials and EN/ES CV downloads.
- Preserve palette/typography, line-free8row Skills, all content/PDF/project data, <=1440 document-scroll cutoff, existing desktop column placements.
- Slight skills row-spacing compaction allowed to redistribute space; never reduce font sizes or re-add separators.
- No dependencies, JS, device-specific breakpoints or unsupported palette tokens. No commit/push without explicit user request.

## Tasks
- [x] T1 Redistribute rows, simplify Contact and make Experience overflow reachable. Status: done; writer checks passed; commit pending user request.
- [ ] T2 Verify desktop/short-browser/laptop/mobile in EN/ES, regression integrity and native review disposition. Status: in_progress.

## Acceptance and checks
- Pre-edit browser RED at1512x850 confirms unreachable third experience item; post-edit GREEN all entries reachable with natural flow or keyboard-accessible scroll.
- Desktop rows favor upper content over prior1fr/0.92fr; start around1.3fr/1fr but tune only from measured layout, not theoretical fit claims.
- Skills and Contact fit without unnecessary internal scroll at practical standard heights; at constrained heights every row/link remains reachable.
- Preserve natural page scroll<=1440; no nested timeline trapping or rigid heights in natural-flow mode.
- No horizontal overflow at1512x982/850/800,1728x1117/980/900,1441x900/700,1440x900/780,375x667 in both locales.
- About/Projects content also reachable and no regressions in Telescope, Contact links/CV download attributes or line-free Skills.
- Run Astro check/build, focused Prettier, diff check and browser CDP; inspect vertical reachability and keyboard scroll, not only widths.

## Evidence and progress
- Explorer identified shared lower-row height coupling: Skills8rows impose larger minimum than simplified Contact.
- Known Experience clipping caused by hidden pane overflow without a flex/scroll timeline.
- CV descriptions longer in ES; both locales required. Exact explorer predicted fit remains unverified until browser measurements.

- Writer partial implementation: desktop rows1.3fr/1fr, Contact duplicate system info removed, desktop About/Experience scrolling, natural-flow timeline<=1440, Skills6px row padding. Source content/PDF hashes preserved.
- Browser pre-edit RED observed1512x850 clipping; pointer reachability fixed in22locale/viewport cases, no horizontal overflow. Skills scroll remained1512x800; About scroll at constrained desktop. Astro check/build/format/diff passed.
- Blocker: keyboard test1512x850 failed, timeline tabIndex-1 and ArrowDown scrollTop unchanged. Full GREEN not achieved. Writer needs scoped Experience.astro tabindex0 edit authorization. IntelDigest modal browser regression not yet checked.

- User selected Approve for scoped Experience.astro tabindex="0" change. Apply and retest sequential keyboard focus/ArrowDown; no other scope expansion.

- Follow-up writer added explicit timeline tabindex0 and passed actual Tab/ArrowDown last-entry checks1512x850 EN/ES. Initial claimed keyboard failure was not reproducible when testing actual Tab sequence: Chromium can focus overflow even with DOM tabIndex-1. Retain explicit attribute for intentional cross-engine focus contract; do not falsely claim behavioral RED for that attribute. Original pre-layout clipping RED remains valid.
- Writer22case matrix passed, natural-flow<=1440 verified, About keyboard reachability and IntelDigest text-only EN/ES verified. Skills needs scroll1512x800, none1512x850/982; Contact none sampled.
- Astro check/build and scoped format passed. Whole-file Experience.astro Prettier mismatch preexists on HEAD and remains untouched; authorized attribute matches formatted output.

- Native review review-82b8934e1317ac63 approved and acknowledgement burned authority for candidate sha256:d574fc4af8d5102fcfe7e779de13d7b1030e44712c55a466693d2285d1fbc171.
- ASSESS unavailable due untracked declaration; conservative plan requires independent verifier. Launched mv3gwzij-g-n85m for final functional matrix.

- Independent verifier mv3gwzij-g-n85m stalled at59turns60toolslastbash across repeated user-requested checks. Parent cancelled it after user reported almost1hour delay; no final independent report admitted.
- Process inspection found long-lived headless Chromium test instances; exact stalled command/root cause not established. Do not kill unrelated or user browser processes without confirming ownership.
- Working tree now additionally shows content/contact.yaml and content/projects.yaml changes not part of this layout writer's surfaces; preserve these newer changes and do not attribute or overwrite them. Earlier native approval only covers its exact frozen target.

## Next step
Report implementation/writer checks/native approval separately from incomplete independent verification. Diagnose tooling hang before any new test delegation; do not rerun full matrix or claim verification complete. No commit/push without user request.
