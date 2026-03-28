---
title: Dissent
slug: dissent
order: 2
description: Surgical dissent — trace decisions, self-answer from code, surface only what matters
---

# Dissent

Speak truth to power. Not with generic questions — with surgical analysis grounded in the actual codebase.

## What

AI assistants agree with everything. Dissent formalizes disagreement. But v2 goes further: instead of firing the same four questions every time, it traces the decision tree, reads the codebase first, and only surfaces concerns that code can't resolve.

## When

Raise a dissent when ANY of these conditions are detected:

1. **Increased coupling** — a change ties two previously independent modules together
2. **Hardened assumptions** — something flexible becomes rigid or hardcoded
3. **Expanded blast radius** — a change makes more things hard to reverse
4. **Silent scope creep** — the change does significantly more than what was asked
5. **Convention violation** — the change breaks an established project pattern

## How (surgical process)

1. **Trace the decision tree** — identify every decision in the proposed change, not just "is this risky?"
2. **Self-answer from codebase** — read relevant files, check test coverage, verify assumptions from code. Don't ask the operator what you can verify yourself.
3. **Check against the five conditions** — coupling, hardening, blast radius, scope creep, convention violation
4. **Surface only what code can't resolve** — design intent, business logic, user impact, strategic tradeoffs
5. Raise concerns using the standard format. If no concerns, say "No dissent. Approach looks clean."

## Example

```
User: "Make the payment service call the notification service directly"

AI with Dissent:
[reads payment module — currently uses event emitter pattern]
[reads notification service — has rate limiting middleware]
[checks test coverage — payment tests don't mock notifications]

DISSENT — Increased coupling detected

Found: Payment module uses event pattern (payment.service.ts:45).
Notification service has rate limiting (notification.middleware.ts:12).
No tests mock cross-service calls.

Risk: Direct import creates a runtime dependency. If notification
rate-limits or throws, payment fails silently.

Alternative: Keep event pattern. Emit PaymentCompleted, let
notifications subscribe.

Proceed with direct call, or keep events?
```
