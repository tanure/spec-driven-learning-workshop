---
title: "L5.1: The Full Spec-Driven Simulation"
---

<div class="lesson-badges">
  <span class="badge-time">15 min</span>
  <span class="badge-module">Module 5 — Putting It All Together</span>
</div>

# L5.1: The Full Spec-Driven Simulation

## The Problem

You've run each part of the workflow separately. You haven't run the whole thing start to finish without scaffolding. The first time you do it without a lesson guiding each step is not the time to discover a step you never internalized.

## The Solution

Run the full spec-driven cycle on a new feature. Unassisted. Time it.

The workflow you'll run:

```
Update constitution if needed →
/speckit.specify →
resolve [NEEDS CLARIFICATION] markers →
/speckit.plan →
/speckit.tasks →
Implement task 1 → Code Reviewer → mark done →
Implement task 2 → Code Reviewer → mark done →
Push to GitHub Issues → generate from Issue →
Compare to L1.1 baseline
```

::: bad-practice
Treating this simulation as a demonstration. The point is not to show the workflow — it's to run it. Every step you skip or shortcut is a gap you'll hit on a real project.
:::

::: best-practice
Run every step, even the ones that feel unnecessary for a small feature. The workflow is meant to be fast for small features — the steps take minutes, not hours. If any step feels slow, that's a skills issue worth noting for later.
:::

## Exercise

### The feature

**Topic archiving**: The user can mark a study topic as "archived" so it disappears from the active list but is not deleted. Archived topics can be unarchived.

This is a new feature — not one you've built yet. Run the full workflow on it.

---

### Step 1 — Update the constitution (if needed)

Does "archiving" change any project-wide decisions? If yes, update `memory/constitution.md`. If no, note why not.

> **About time targets**: The targets below are aspirational goals for participants already comfortable with the workflow — not minimums. If you're running a step for the first time, it will take longer. That's expected. The goal is to internalize the workflow, not hit the clock.

**Time target**: 2 minutes.

---

### Step 2 — Create the feature spec

In Copilot Chat, enter:

```text
/speckit.specify Topic archiving for the study planner
```

Then refine the generated `specs/<feature-branch>/spec.md` so it contains:
- One-sentence goal
- Acceptance criteria (at least 4, all verifiable)
- Out-of-scope items (at least 2)
- Definition of done

**Time target**: 4 minutes.

---

### Step 3 — Plan and task breakdown

In Copilot Chat, enter these slash commands in sequence:

```text
/speckit.plan File-based archiving, no soft-delete database layer
/speckit.tasks
```

Review the output. Edit anything that's wrong. 

**Time target**: 3 minutes.

---

### Step 4 — Clarification pass

Review the generated spec and resolve or defer every `[NEEDS CLARIFICATION: ...]` marker before implementation.

**Time target**: 2 minutes.

---

### Step 5 — Implement and review

Pick the first two tasks. For each:
1. Agent Mode with the task as context
2. Code Reviewer
3. Mark done

**Time target**: 8 minutes (4 per task).

---

### Step 6 — Compare

Look at your notes from L1.1 (the two runs) and L3.5 (the comparison sentences).

Now add a third data point — this simulation. Answer:
- Was the output more predictable than L1.1? By how much?
- Did you have to correct the output? If so, how many corrections vs. L1.1?
- How long did the full workflow take end-to-end?

Write these as three sentences. Keep them.

- Expected result: a measurable comparison between vibing (L1.1), assisted spec-driven (L3.5), and unassisted spec-driven (this simulation).
- Why this matters: this comparison is the primary evidence for the workshop's claim. You experienced it. The numbers are yours.

## Checkpoint

- [ ] I completed all 6 steps of the simulation without skipping
- [ ] I have a feature spec, plan, tasks, and clarification pass for topic archiving
- [ ] I implemented two tasks with Code Reviewer on each
- [ ] I wrote the three comparison sentences
- [ ] I can run the spec-driven workflow end-to-end from memory

---

[← Module 5 Overview](/module5/) · [Next Lesson: L5.2 Real-World Use Cases →](/module5/L5-2-use-cases)
