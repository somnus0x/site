---
title: Replace
slug: replace
order: 3
description: Kill-and-prove protocol for full replacements
---

# Replace

Full replacement of old behavior. The old path must become unreachable. Not "deprecated," not "unused" — provably dead.

## What

The most dangerous refactor is the one that leaves old code alive alongside new code. Callers split between paths. Bugs hide in the old path nobody tests anymore. Replace ensures that when you swap something out, the old version is actually gone.

## When

- Swapping an old implementation for a new one
- Migrating from one data source to another
- Replacing an endpoint, handler, or service
- Moving from one library/SDK to another

## How

1. **Confirm intent** — full replacement, old behavior becomes unreachable
2. **Map the blast radius** — all old entrypoints, all consumers, cross-repo exposure
3. **Choose kill mechanism** — delete (preferred), throw, rename, or single switch
4. **Execute replacement** — write new, migrate consumers, apply kill mechanism
5. **Prove the kill** — verify zero references to old symbol. DEAD or GHOST only.
6. **Report** — kill mechanism, consumers migrated, proof type, guard verify status

## Example

```
User: "Replace the Firestore queries with API calls"

AI with Replace:
REPLACE MAP: Firestore → REST API

Old entrypoints (3):
  - home-feed.ts:12 — onSnapshot query
  - profile.ts:45 — Firestore query
  - ticker.ts:8 — onSnapshot query

Kill mechanism: DELETE (remove all Firestore imports)

After migration:
Guard verify: DEAD ✓ — zero Firestore references remaining
```
