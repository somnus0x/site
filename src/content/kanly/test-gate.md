---
title: Test Gate
slug: test-gate
order: 10
description: Tests required before R1 changes are marked complete
---

# Test Gate

R1 changes require at least one test covering the changed behavior before marking complete. Not TDD. Not full coverage. Just proof that the change is testable and tested.

## What

Tests happen when they happen — which means they often don't. Test Gate adds a simple requirement: before an R1 change is done, at least one test must cover the changed behavior. Not test-first, not 100% coverage — just "does a test exist that would catch a regression?"

## When

- **R0** — No test requirement. Move fast.
- **R1** — At least one test covering the changed behavior.
- **R2** — Add "are there tests?" to the human review checklist.

## How

1. Identify changed files from the diff
2. Search for corresponding test files
3. Check if any test exercises the changed behavior
4. If covered — run tests, show output, confirm passing
5. If uncovered — blocked until a test exists or operator overrides

## Example

```
User: "Done with the deposit intent flow"

AI with Test Gate:
Test check: deposit intent flow

COVERED:
  ✓ createIntent() — tested by deposit.service.spec.ts:42

UNCOVERED:
  ✗ processIntent() — no test found
  ✗ POST /deposit/create-intent — no integration test

BLOCKED — 2 changed behaviors have no tests.
Write tests for processIntent and the endpoint, or override.
```
