---
title: Design Gate
slug: design-gate
order: 7
description: No spec, no code — hard gate on R1/R2 implementation
---

# Design Gate

Hard gate on implementation without design. If the spec doesn't exist, the code doesn't start.

## What

The most expensive bugs are architecture bugs — wrong abstractions, wrong boundaries, wrong assumptions baked into code before anyone questioned them. Design Gate enforces a simple rule: before writing code for anything costly to reverse, write down what you're building and why.

Not a 20-page design doc. Three sentences is fine for small changes. The point is forcing the decision to be conscious, not automatic.

## When

- **R0 (fully reversible)** — No gate. Just do it.
- **R1 (costly to reverse)** — Write 3 sentences minimum: what, why, what it touches.
- **R2 (hard to reverse)** — Full design doc with failure modes and alternatives considered.

## How

1. Run Guard to classify the change as R0, R1, or R2
2. If R0 — proceed, no gate
3. If R1 — write a minimal spec: what's changing, why, files affected
4. If R2 — full design doc with failure modes and rollback path
5. Save the spec as a persistent file, not just conversation context
6. Run Dissent on the spec before implementation begins

## Example

```
User: "Let's add WebSocket support for live bet updates"

AI with Design Gate:
Guard classify: R1 (new endpoint, client-side changes, state management)

BLOCKED — no spec found for this change.

Before coding, write:
- What: WebSocket endpoint for real-time bet status updates
- Why: Polling every 5s creates unnecessary load, users want instant feedback
- Touches: backend/ws-gateway, frontend/hooks, nginx config

Write the spec, then we build.
```
