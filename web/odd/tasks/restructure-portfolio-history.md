# Restructure Portfolio Git History

## Goal
Create a guarded Bash script that can turn the 34-commit linear `main` history into four chronological feature branches, with each feature merged into `main` using `--no-ff`, while preserving the final tree exactly.

## Current evidence
- Initial commit: `fa537b7` (`Initial commit from Astro`)
- Current `main` tip: `93df506` (`fix(ui): update role copy and fix sys-info label width for localized text`)
- `main` has exactly 34 commits and the worktree is clean (`main...origin/main`).
- `origin` is configured; the script must not push or alter remote refs.
- Four groups: setup (`d52a8c8`); core portfolio UI/mobile (`e2c61f7`–`4a33d18`); i18n/SEO/runtime (`ae954ed`–`b0e12e0`); content/CV/interface polish (`9e206dd`–`93df506`). The initial commit remains the common root.

## Tasks
1. [x] Record and encode exact chronological groups; make script preflight fail closed unless on clean `main`, expected tip/count, and `backup-main` absent. The preflight permits only this script, this task document, and the observed `.codegraph/.gitignore` metadata file to be untracked; all staged/modified paths and every other untracked path abort. Create the requested backup with `git checkout -b backup-main` before reset, require explicit typed confirmation, and refuse existing target feature branches.
2. [x] Reset only local `main` to the initial commit in the script, create each feature branch from the preceding `main` merge, cherry-pick that group's original commits in order, and merge with `--no-ff`.
3. [x] Verify the script's structure, exact ordered commit coverage (1+9+8+15 = 33 non-root commits), backup-before-reset ordering, four `--no-ff` merges, and final tree/diff checks. Run `bash -n` only; never execute the script.

## Safety / delivery
- Do not execute the restructuring script in this session.
- Do not commit, push, or alter remote refs.
- `backup-main` must preserve the original tip so local recovery remains available.
- Any mismatch aborts before reset; any failure after reset stops immediately and leaves `backup-main` intact for manual recovery.
- The script, this task file, and the observed `.codegraph/.gitignore` metadata file are allowed as untracked files so the requested script can run without requiring a commit; no other untracked or modified files are allowed.

## Evidence
- Explorer handoff: four coherent chronological groups; binary CV changes are concentrated in the final content/polish group.
- Script: `restructure_portfolio.sh` at repository root.
- Verification delegated to `gentle-ai-verify`: `bash -n restructure_portfolio.sh` exited 0; structural review confirmed all 33 non-root commits are assigned once in chronological order (group sizes 1, 9, 8, 15), `git checkout -b backup-main` precedes `git reset --hard`, all four groups merge with `--no-ff`, and final tree equality plus `git diff --exit-code` are present.
- The destructive script was not executed; runtime outcome remains for the user to verify after manual execution.
- Native review preflight is blocked pending the human's intended-untracked selection; eligible paths reported were `.codegraph/.gitignore`, `odd/tasks/restructure-portfolio-history.md`, and `restructure_portfolio.sh`. No review START or capture was performed.
- Script preflight permits only these three observed untracked paths; all other staged, modified, or untracked paths abort.
- Commit identity: not committed (no explicit commit request).
