---
title: Review
slug: review
order: 9
description: Cross-terminal spec compliance and code quality review
---

# Review

After R1 changes ship, write a review dispatch so another terminal can verify spec compliance and code quality. The agent that built it shouldn't be the only one who checks it.

## What

Three terminals working on the same codebase means three agents making independent decisions. When one ships an R1 change, the others have no structured way to verify it matches the spec. Review creates that verification loop with a fresh pair of eyes.

## When

- **R0** — No review. Too small to justify.
- **R1** — Yes. Costly to reverse — worth a second check.
- **R2** — Optional. Already requires human approval via Guard.

## How

1. After an R1 change ships, create a review dispatch
2. Include: the spec, the diff, and a review checklist
3. Another terminal picks up the dispatch and checks:
   - Does the code match the spec? (not more, not less)
   - Are there untested edge cases?
   - Does this increase coupling?
   - Are there hardcoded assumptions?
4. Report: APPROVED, CONCERNS, or BLOCKED
5. Archive the review — audit trail matters

## Example

```
User ships deposit flow, then:

AI with Review:
Review dispatch written → ~/.claude/handoffs/review-deposit-intent.md

Checklist:
- [ ] Code matches deposit-intent spec
- [ ] Edge cases: zero amount, duplicate intent, expired intent
- [ ] No new coupling between deposit and notification modules
- [ ] Intent timeout is configurable, not hardcoded

Dispatched for cross-terminal review.
```
