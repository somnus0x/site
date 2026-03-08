---
title: Scope
slug: scope
order: 3
description: Track stated goals vs actual execution, flag drift
---

# Scope

Keep work aligned with intent. Track what was asked vs what's being built. Flag when "just one more thing" accumulates into scope creep.

## What

Scope drift happens silently. You start fixing a bug, end up refactoring a module. You ask for a feature, get three. Scope protocol tracks the original ask and flags when execution expands beyond it.

## When

Use Scope whenever:
- A task description exists (bug report, feature request, ticket)
- Work has been in progress for >1 session
- "Just one more thing" gets said
- Implementation feels heavier than the ask

## How

1. **At task start**: State the goal explicitly
2. **During work**: Track what's being built vs what was asked
3. **On expansion**: Flag when work diverges from stated goal
4. **On flag**: Ask whether to expand scope or stay focused

## Example

```
User: "Fix the login redirect bug"

AI with Scope:
[After 20 minutes of work]

SCOPE CHECK

Original ask: Fix login redirect bug
Current work:
- ✓ Fixed redirect logic
- ⚠ Refactored entire AuthService
- ⚠ Added OAuth flow (not mentioned in ask)
- ⚠ Rewrote session handling

Drift detected: Started as bug fix, became auth module rewrite.

Options:
1. Stay focused: Commit redirect fix only, file separate tasks for auth improvements
2. Expand scope: Acknowledge this is now "Auth module overhaul" and continue

Which direction?
```
