---
title: "L3.5: From Specs to Code"
---

<div class="lesson-badges">
  <span class="badge-time">10 min</span>
  <span class="badge-module">Module 3 — Spec-Driven Development</span>
</div>

# L3.5: From Specs to Code

## The Problem

You have a complete, clarified spec. Now you need to generate code from it — and do it in a way that's reviewable, task-by-task, with the Code Reviewer from M2 as the quality gate. The risk here is treating the spec as a prompt and generating everything at once. That's just a more structured version of vibing.

## The Solution

Implement one task at a time. For each task:

1. Reference the specific task + the constitution in your Agent Mode prompt
2. Generate the code
3. Run the Code Reviewer
4. Accept or revise
5. Mark the task done
6. Move to the next task

This loop produces code that is reviewed, scoped, and traceable to a specific spec requirement. It also produces a natural commit boundary: one task, one commit.

::: bad-practice
Generating all tasks at once with a single prompt: "Implement the entire session tracking feature." Copilot will attempt to build everything, make integration decisions without spec guidance, and produce a diff that is too large to meaningfully review.
:::

::: best-practice
One task at a time. Each task generates code that is small enough to read in a session, tied to a specific DoD, and independently reviewable. The integration happens incrementally — you catch mismatches before they compound.
:::

## Exercise

### Step 1 — Implement the first task

Open GitHub Copilot Chat in **Agent Mode**.

Pick the first task from your task list. Paste its content into the prompt, preceded by:

```
Implement the following task from the study planner spec.
Reference: memory/constitution.md for stack and conventions.

[paste task content here]
```

- Expected result: Copilot implements exactly the scope defined in the task — no more, no less.
- Why this matters: "exactly the scope" is the test. If Copilot generates more than the task defines, your task scope is too vague. Edit the task and regenerate.

### Step 2 — Run the Code Reviewer

Open a new chat. Switch to the **Code Reviewer agent** you built in L2.2.

Ask: `Review the code just generated for the [task name] task.`

- Expected result: structured review with Stack compliance / Error handling / Quality categories, or a clean pass with explanation.
- Why this matters: the review loop closes the quality gate on each task before you accumulate unreviewed code.

### Step 3 — Apply fixes and mark done

If the Code Reviewer flagged issues:
1. Fix them (either manually or by asking Agent Mode to apply the specific fix)
2. Re-run the Code Reviewer on the changed code
3. When the reviewer passes, mark the task as done in your task file

If the Code Reviewer found no issues:
1. Mark the task as done in your task file

- Expected result: first task is implemented, reviewed, and marked done in the spec.

### Step 4 — Repeat for the next task

Implement the second task using the same prompt pattern. Run the reviewer. Mark done.

After two tasks, look at the accumulating code:
- Is the integration clean?
- Are types shared correctly between tasks?
- Is there unexpected duplication?

If something is off at integration, the spec task that defines the shared type or interface needs to be clearer. Edit it, then continue.

- Expected result: two tasks implemented, reviewed, and done, with clean integration between them.
- Why this matters: integration issues caught at task 2 are infinitely cheaper than integration issues caught at task 10.

### Step 5 — Compare to L1.1

You've now implemented using both approaches: the vibe (L1.1) and the spec (L3.5).

Write two sentences:
- What was different about the code generation experience this time?
- Was the output more or less predictable? Why?

Keep these notes. You'll use them in L5.1 and L5.2.

- Expected result: two comparison sentences written and saved (anywhere).
- Why this matters: the comparison is the evidence. M5 uses it.

## Checkpoint

- [ ] I implemented at least two tasks from the spec using Agent Mode with explicit task references
- [ ] I ran the Code Reviewer after each task and resolved any issues before marking done
- [ ] I caught and addressed any integration issues between tasks
- [ ] I wrote the two comparison sentences from Step 5
- [ ] I can describe the spec-driven loop: task → generate → review → mark done → next task

---

[← Previous Lesson: L3.4 Clarification](/module3/L3-4-clarification) · [Next Module: M4 GitHub MCP →](/module4/)
