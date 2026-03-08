---
title: Learn
slug: learn
order: 6
description: Capture mistakes so they don't repeat
---

# Learn

Mistakes are data. Capture what went wrong, why it happened, and how to prevent it next time. Build institutional knowledge instead of repeating failures.

## What

Learn protocol formalizes learning from mistakes. When something breaks, gets reverted, or causes unexpected behavior:
1. Log what happened
2. Identify root cause
3. Define correct behavior
4. Store it for future sessions

## When

Use Learn after:
- A bug is fixed (especially recurring bugs)
- A decision is reversed
- Unexpected behavior is discovered
- A pattern failure is identified
- User says "remember this" or "don't do this again"

## How

1. **Describe what happened** — The symptom/failure
2. **Identify root cause** — Why it happened (not just what broke)
3. **Define correct behavior** — How it should work instead
4. **Log to memory** — Store in project memory or documentation
5. **Apply immediately** — Fix the current instance using the new pattern

## Example

```
User: "The API keys are exposed in the git logs again"

AI with Learn:
LEARN — Pattern failure detected

## What Happened
API keys committed to git (3rd occurrence this month)
Files: .env, src/config/secrets.ts

## Root Cause
.env file not in .gitignore, developers editing config files with inline keys
instead of referencing environment variables.

## Correct Behavior
1. NEVER commit .env files (add to .gitignore)
2. Config files should ONLY reference process.env.X, never hardcode keys
3. Use .env.example with dummy values for documentation
4. Pre-commit hook: fail if files contain patterns like "sk-", "Bearer ", etc.

## Logged To
- Updated .gitignore
- Added pre-commit hook (scripts/pre-commit-check.sh)
- Documented in CONTRIBUTING.md

## Immediate Action
- Removing keys from current commit
- Rotating exposed API keys (Stripe, OpenAI)
- Running git filter-repo to purge from history

This pattern is now in project memory. Won't repeat.
```
