---
title: Handoff
slug: handoff
order: 5
description: Package context for the next session
---

# Handoff

End sessions cleanly. Package context for your future self (or your team) so the next session starts with full context, not from scratch.

## What

Context decay is expensive. When you stop working mid-task, critical decisions and reasoning get lost. Handoff protocol creates a structured summary of:
- What was done
- Why decisions were made
- What's left to do
- What to watch out for

## When

Use Handoff:
- At end of work session (before closing terminal)
- When switching tasks mid-flow
- When about to commit partial work
- When user says "handoff", "summarize", or "I'm stopping here"

## How

1. **State completed** — What shipped this session
2. **State reasoning** — Why key decisions were made (not what, but why)
3. **State next steps** — Concrete actions for next session
4. **State warnings** — Known issues, blockers, things to watch

## Example

```
User: "I need to stop here, picking this up tomorrow"

AI with Handoff:
HANDOFF — Payment flow refactor

## Completed
- Migrated payment processing from Firebase Functions to NestJS service
- Added Stripe webhook handler for payment.succeeded
- Created PaymentService with createCharge() and refundCharge() methods

## Key Decisions
- Used event-driven pattern (payment events → notification service) instead of direct calls
  → Keeps payment logic decoupled, easier to test
- Stored Stripe customer ID in users table instead of separate payments table
  → Reduces joins, acceptable since 1:1 relationship

## Next Session
1. Add error handling for webhook signature verification
2. Test refund flow (currently untested)
3. Update frontend to poll PaymentIntent status instead of relying on webhook

## Warnings
- Webhook endpoint is live but not validated yet — verify signature before merging
- Old Firebase function still active — disable after confirming new service works
- Refund logic exists but stripe.refunds.create() is commented out (waiting for test API key)

Resume from: error handling in webhook controller
```
