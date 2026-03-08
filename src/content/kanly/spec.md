---
title: Spec
slug: spec
order: 4
description: Define contracts before implementation
---

# Spec

No code before contracts. Define system boundaries, data flow, and failure cases explicitly before writing a single line of implementation.

## What

Spec protocol enforces architecture-first thinking. Before implementing a feature, define:
- What the system does (behavior)
- What it accepts (inputs)
- What it returns (outputs)
- What it assumes (dependencies)
- What breaks it (failure modes)

## When

Use Spec when:
- Starting a new feature or module
- Architecture is unclear
- Multiple approaches exist and choice isn't obvious
- Integration points need to be defined
- User says "spec", "define", or "what's the contract"

## How

1. **Stop implementation** — No code until structure is clear
2. **Define boundaries** — What's in scope, what's out
3. **Define contracts** — Input/output types, API shapes, event schemas
4. **Define data flow** — How information moves through the system
5. **Define failure modes** — What can go wrong, how to handle it
6. **Get approval** — Confirm the spec before building

## Example

```
User: "Add real-time notifications"

AI with Spec:
SPEC REQUIRED — Architecture unclear

Before implementing, define:

1. **Trigger**: What events cause notifications?
   - New message? New follower? System alert?

2. **Delivery**: How do notifications reach users?
   - WebSocket? Server-sent events? Polling?

3. **Storage**: Where are notifications persisted?
   - Database table? Redis? In-memory only?

4. **Read state**: How do we track read/unread?
   - Per-user flag? Separate table?

5. **Failure mode**: What if delivery fails?
   - Queue for retry? Log and drop? Fallback to email?

Let's define these before writing code. Start with trigger events?
```
