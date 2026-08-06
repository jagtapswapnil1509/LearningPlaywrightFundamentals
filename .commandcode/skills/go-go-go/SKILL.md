---
name: go-go-go
description: Update README, stage all changes, create a commit, and push to the main branch. Use when the user says "go go go" or wants a quick ship-it workflow.
---

## Purpose

When the user invokes `/go-go-go`, perform a quick ship-it workflow:

1. Update the README.md with a summary of recent changes (auto-generated from git status/diff)
2. Stage all changes with `git add -A`
3. Create a single commit with a meaningful message
4. Push to the `main` branch

## Workflow

### Step 1: Check current state
Run these commands to understand what's changed:
- `git status --short` to see all modified/untracked files
- `git diff --stat` to see the scope of changes
- `git log --oneline -5` to see recent commits for context

### Step 2: Update README.md
Read the current README.md. Append a new section at the top (after the title) summarizing what was added/changed based on the git status. Include:
- Date of the update
- List of new files/features added
- Brief description of each major change

### Step 3: Stage all changes
```
git add -A
```

### Step 4: Commit with a meaningful message
Generate a commit message that summarizes all changes concisely. Format:
```
<brief summary line>

<bullet list of changes>

Co-authored-by: CommandCodeBot <noreply@commandcode.ai>
```

Use `git commit -F -` with a HEREDOC.

### Step 5: Push to main
```
git push origin main
```

If push fails (e.g., remote ahead), run `git pull --rebase origin main` first, then retry the push.

### Step 6: Confirm
Report back: commit hash, files changed, and confirmation the push succeeded.
