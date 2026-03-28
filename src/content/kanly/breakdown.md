---
title: Breakdown
slug: breakdown
order: 8
description: File-level task plans before implementation
---

# Breakdown

Break R1/R2 work into concrete, dispatchable tasks before touching code. Not micro-steps — file-level plans that another agent could execute without asking questions.

## What

When a feature touches multiple files, the agent makes scope decisions on the fly — which file first, what changes where, what depends on what. Those decisions are invisible. Breakdown makes the plan explicit before implementation starts.

## When

- **R0** — No breakdown needed. Small enough to hold in your head.
- **R1** — Yes. Multiple files, dependencies between changes, worth planning.
- **R2** — Yes. Critical changes — every file touch should be deliberate.

## How

1. Confirm a design spec exists (Design Gate)
2. List every file that will be created, modified, or deleted
3. Order by dependency — what must change first
4. For each file, describe the specific change
5. Add a verification step for each task
6. No placeholders — concrete enough for another agent to execute

## Example

```
User: "Build the deposit intent flow"

AI with Breakdown:
Breakdown: Deposit Intent Flow
Spec: spec/designs/deposit-intent.md

Tasks (in order):

1. src/deposit/deposit.service.ts
   Action: modify
   Change: Add createIntent() method — validate amount, create DB record, return intent ID
   Depends on: none
   Verify: Unit test — createIntent returns valid intent object

2. src/deposit/deposit.controller.ts
   Action: modify
   Change: Add POST /deposit/create-intent endpoint, wire to service
   Depends on: Task 1
   Verify: curl POST returns 201 with intent ID

3. src/deposit/deposit.service.ts
   Action: modify
   Change: Add processIntent() — check on-chain deposit, update status
   Depends on: Task 1
   Verify: Unit test — status transitions from pending → confirmed
```
