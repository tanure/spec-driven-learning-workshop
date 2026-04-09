---
title: "Module 2: Copilot Best Practices"
---

# Module 2: Copilot Best Practices

**Duration**: ~25 min total · 3 lessons

You identified your failures. Now you fix them — by building the structure that prevents them.

Module 2 covers the two practices that shape every Copilot interaction: **Instructions** and **Agents**. You'll also experience the difference between Plan Mode and Agent Mode directly, so you know when to reach for each one.

## Lessons

| # | Title | Focus | Time |
|---|-------|-------|------|
| L2.1 | [Instructions That Actually Work](/module2/L2-1-instructions) | Workspace + file-specific instructions | ~7 min |
| L2.2 | [Agents and Decision Patterns](/module2/L2-2-agents) | Role-specific agents, when to use them | ~8 min |
| L2.3 | [Skills and Prompt Files](/module2/L2-3-skills) | Reusable prompt workflows *(deferred)* | — |
| L2.4 | [Plan Mode vs. Agent Mode](/module2/L2-4-plan-vs-agent) | Two-step feature development | ~10 min |

> **Note**: L2.3 (Skills) is a deferred session — it is not part of the workshop today. A brief reference page is provided for context.

## What You'll Build

By the end of Module 2, you will have:
- A **workspace instructions file** (`.github/copilot-instructions.md`) that sets the global context for all Copilot interactions.
- A **file-specific instructions file** (`.github/instructions/config.instructions.md`) that activates only for config files.
- A **Code Reviewer agent** (`.github/agents/code-reviewer.agent.md`) that checks output against your project standards.
- A **Testing Advocate agent** (`.github/agents/testing-advocate.agent.md`) that generates tests with defined coverage goals.
- One feature built via Plan Mode → Agent Mode — so you've experienced the divide firsthand.

## Module Outcome

When the module is done, the failures you mapped in L1.2 under "Requirements gap" and "Technical mismatch" will have a structural fix in place — not a better prompt, but enduring context files that persist across sessions.

---

[← Module 1 Overview](/module1/) · [Start with L2.1 →](/module2/L2-1-instructions)
