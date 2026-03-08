---
title: Dissent
slug: dissent
order: 2
description: Raise concerns when proposed changes introduce hidden risk
---

# Dissent

Speak truth to power. When a proposed change smells wrong, raise the concern formally. Not to block, but to make the decision intentional.

## What

AI assistants tend to agree with whatever you ask. Dissent does the opposite — it formalizes disagreement. When concerns arise about a proposed change introducing unnecessary risk, raise a structured objection with an alternative.

## When

Raise a dissent when ANY of these conditions are detected:

1. **Increased coupling** — a change ties two previously independent modules together
2. **Hardened assumptions** — something flexible becomes rigid or hardcoded
3. **Expanded blast radius** — a change makes more things hard to reverse
4. **Silent scope creep** — the change does significantly more than what was asked
5. **Convention violation** — the change breaks an established project pattern

## How

1. Identify the concern (which condition above)
2. State what's being proposed
3. Name the risk explicitly
4. Propose an alternative that preserves flexibility
5. Ask: "Proceed with original plan, or use the alternative?"

## Example

```
User: "Make the payment service call the notification service directly"

AI with Dissent:
DISSENT — Increased coupling detected

Proposed: Payment service imports NotificationService and calls sendEmail()

Risk: Payment module now depends on notification implementation details.
If notification service changes (switch email provider, add rate limiting),
payment code breaks.

Alternative: Emit PaymentCompleted event, let notification service subscribe.
Payment stays decoupled, notification logic isolated.

Proceed with direct call, or use event pattern?
```
