---
title: "L1.2: The Three Pillars"
---

<div class="lesson-badges">
  <span class="badge-time">5 min</span>
  <span class="badge-module">Module 1 — The AI Development Problem</span>
</div>

# L1.2: The Three Pillars

## The Problem

You have two runs and two notes from L1.1. The outputs were unpredictable. The mismatches were real. But "it was bad" is not actionable — you need to know *why* it failed and *what specifically* would fix it. Without that mapping, you'll keep vibing and hoping, just with more awareness.

## The Solution

Every failure from the L1.1 runs falls into one of three categories, and each category maps directly to a practice that fixes it:

| Failure category | Root cause | Practice that fixes it |
|-----------------|-----------|----------------------|
| **Requirements gap** | The prompt lacked specificity; Copilot guessed intent | **Instructions** — tell Copilot what the project is, what stack to use, what to never do |
| **Technical mismatch** | The generated code was inconsistent, wrong stack, or mismatched structure | **Agents** — create role-specific agents with constrained context |
| **Quality/risk issue** | Missing tests, error handling, security gaps, or brittle architecture | **Specs** — define acceptance criteria and task scope before generating code |

These are the **three pillars**:
1. **Instructions** — set the context and boundaries Copilot always operates within
2. **Agents** — create specialized roles for specific, repeatable tasks
3. **Specs** — define what done means before writing a line of code

> **Note**: A fourth practice — **Skills/Prompt files** — extends the workflow with reusable automated sequences. It is not taught as a dedicated session but is introduced briefly in L5.3.

::: bad-practice
Treating every Copilot failure as a prompt problem and trying to fix it by rephrasing. This is pattern-matching on symptoms. The root cause is missing structure — and rephrasing doesn't add structure.
:::

::: best-practice
Categorize the failure, identify the root cause, and map it to the pillar that addresses it. Then build that pillar so the failure can't recur.
:::

## Exercise

Use your two follow-up notes from L1.1.

### Step 1 — Identify failure signals

Review your Run 1 and Run 2 notes. Identify a **minimum of 3 failure signals** — specific things that went wrong, were missing, or were unexpected.

- Expected result: a list of at least 3 concrete observations pulled from your notes.
- Why this matters: generic complaints ("it was wrong") don't drive improvement; specific observations ("it generated React but I needed vanilla TypeScript") do.

**Requirement**: You must include at least one signal from each of the following categories:
- Requirements gap
- Technical mismatch
- Quality/risk issue

### Step 2 — Write your reflection

For each failure signal, write one bullet entry using this format:

```
- Category: [Requirements gap | Technical mismatch | Quality/risk issue]
  Observation: [What you noticed in the output]
  Why it happened: [Root cause — what was missing from the prompt or context]
  Which practice fixes it: [Instructions | Agents | Specs]
```

**Requirement**: Each signal maps to exactly one practice.

Example:

```
- Category: Requirements gap
  Observation: Copilot generated a React app, but I didn't specify a framework
  Why it happened: The prompt said "study planner" with no tech stack context
  Which practice fixes it: Instructions — add a workspace instructions file specifying the stack
```

- Expected result: 3 or more reflection bullets, each with all four fields filled.
- Why this matters: this reflection is the plan for Module 2. Each "which practice fixes it" entry is a thing you will build.

### Step 3 — Preview what's next

Look at your reflection bullets. Count how many map to each pillar:
- Instructions → you'll build those in L2.1
- Agents → you'll build those in L2.2
- Specs → you'll build those in M3

- Expected result: you have at least one entry pointing to each module.
- Why this matters: the rest of the workshop is designed to fix exactly what you just documented.

## Checkpoint

- [ ] I identified at least 3 failure signals from my L1.1 runs
- [ ] I included at least one signal from each category: requirements gap, technical mismatch, quality/risk issue
- [ ] I wrote a reflection entry for each signal with all four fields: Category, Observation, Why it happened, Which practice fixes it
- [ ] I can name which module fixes each of my recorded failures

---

[← Previous Lesson: L1.1 The Vibing Trap](/module1/L1-1-vibing) · [Next Module: M2 Copilot Best Practices →](/module2/)
