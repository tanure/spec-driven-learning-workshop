---
title: "Module 3: Spec-Driven Development"
---

# Module 3: Spec-Driven Development

**Duration**: ~45 min total · 5 lessons

This is the core module. Everything in M1 and M2 was preparation for this: understanding why vibing fails and putting basic structure in place. Now you replace ad-hoc prompting with a repeatable, predictable development workflow.

## Lessons

| # | Title | Focus | Time |
|---|-------|-------|------|
| L3.1 | [The Cost of No Specs](/module3/L3-1-cost-no-specs) | Quantifying vibing cost, spec-kit install | ~5 min |
| L3.2 | [Writing Specs That Guide AI](/module3/L3-2-writing-specs) | Constitution drafting, feature-spec writing | ~10 min |
| L3.3 | [The Spec-Kit Workflow](/module3/L3-3-speckit-workflow) | Feature spec → Plan → Tasks lifecycle | ~12 min |
| L3.4 | [Clarification Before Code](/module3/L3-4-clarification) | Ambiguity resolution, refining specs | ~8 min |
| L3.5 | [From Specs to Code](/module3/L3-5-spec-to-code) | Implementing from tasks, Code Reviewer loop | ~10 min |

## Prerequisites for Jumping in at M3

If you're skipping M1 and M2, make sure you have the following before starting L3.1:

- **VS Code with GitHub Copilot** installed and signed in
- **A workspace or project folder** to use as your practice project
- **A Code Reviewer agent** at `.github/agents/code-reviewer.agent.md` (used in L3.5)
   - If you don't have one, create it during L3.5 or follow the [M2 Agents lesson](/module2/L2-2-agents) first
- **Workspace instructions** at `.github/copilot-instructions.md` (used throughout M3–M5)
   - If you don't have one, the spec-kit constitution (L3.2) partially serves this purpose

> **Workspace note**: The `specs/` and `memory/` directories referenced in M3 exercises belong in **your practice project**, not in this workshop repository. The `specification/` folder in this workshop repo is the meta-spec for the workshop itself.

## What You'll Build

By the end of Module 3, you will have:
- A **project constitution** for the study planner — the single source of truth for what it is and what it does.
- A **feature spec** with a defined goal, acceptance criteria, and constraints.
- A **plan** broken into implementation-ready tasks with scope and DoD.
- **Code generated directly from tasks** — not from open-ended prompts.
- A **review loop** with the Code Reviewer agent from M2.

## Module Outcome

You will complete Module 3 having built the same study planner feature from M2 (or a new feature) — but this time via a spec-driven process. The output will be the same or better code, produced with zero guessing about requirements.

---

[← Module 2 Overview](/module2/) · [Start with L3.1 →](/module3/L3-1-cost-no-specs)
