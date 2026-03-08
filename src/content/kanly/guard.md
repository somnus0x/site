---
title: Guard
slug: guard
order: 1
description: Classify decisions by reversibility before committing
---

# Guard

Test every decision before you commit. Classify how reversible it is, enforce safety gates, and stop before the point of no return.

## What

Software changes vary in how easily they can be undone. A CSS tweak is trivial to revert. A database migration on production data is not. Guard classifies changes into three tiers and enforces appropriate caution for each.

## Reversibility Classes

**R0 (Fully reversible)** — Move fast. No gate needed.
- Examples: Rename variable, CSS tweak, add logging, refactor internal function

**R1 (Costly to reverse)** — Proceed with caution. Document the decision.
- Examples: Config change, dependency upgrade, feature flag toggle, new DB index

**R2 (Hard or impossible to reverse)** — STOP. List what goes wrong if this is wrong. Get explicit approval.
- Examples: Schema migration, money flow change, contract deploy, public API change, auth flow change

## When

Use Guard before any non-trivial change. Especially when touching:
- Database schemas
- Money/payment logic
- Smart contracts
- Public APIs
- Auth flows

## How

1. Look at what's about to change
2. Check against R2 tripwire domains (money, contracts, auth, public APIs, irreversible state)
3. Assign R0, R1, or R2 with reasoning
4. For R2: list failure modes and get explicit approval before proceeding

## Example

```
User: "Let's add a required field to the users table"

AI with Guard:
**R2** (database schema) — Adding required field to production table
without default value will fail on existing rows.

Failure modes:
- Production writes fail until all rows backfilled
- Rollback requires another migration
- Downtime if migration takes >1min

Alternative: Add field as nullable first, backfill, then add constraint.
Proceed with original plan?
```
