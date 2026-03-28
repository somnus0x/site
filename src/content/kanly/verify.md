---
title: Verify
slug: verify
order: 11
description: No completion claims without fresh verification evidence
---

# Verify

No completion claims without fresh verification evidence. Run the command, show the output, then claim success.

## What

"Should work now" is not verification. "Looks correct" is not verification. "I'm confident" is not verification. Verify enforces a single rule: if you claim something works, show the output that proves it. In the same message. Fresh.

## When

Always. Before any claim that work is complete, fixed, passing, or shipped.

## How

1. Identify the command that proves the claim
2. Run the full command — not a subset, not a partial run
3. Capture and show the output
4. Only then make a status claim based on what the output shows

## Example

```
User: "Is the deposit flow working?"

Without Verify:
"Yes, I updated the service and controller. Should work now."

With Verify:
VERIFY: npm test deposit.service.spec.ts
Exit: 0

  ✓ createIntent returns valid intent object (3ms)
  ✓ processIntent transitions pending → confirmed (12ms)
  ✓ rejects zero amount deposits (2ms)

3 tests passed. Deposit flow verified.
```
