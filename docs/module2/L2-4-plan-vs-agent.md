---
title: "L2.4: Plan Mode vs. Agent Mode"
---

<div class="lesson-badges">
  <span class="badge-time">10 min</span>
  <span class="badge-module">Module 2 — Copilot Best Practices</span>
</div>

# L2.4: Plan Mode vs. Agent Mode

## The Problem

Copilot has two modes that behave very differently. Most people use one without thinking about it — or switch between them without knowing why. Using the wrong mode for the wrong task wastes time: you either get a plan when you need code, or you get code when you needed to think first.

## The Solution

| Mode | What it does | Use it when |
|------|-------------|-------------|
| **Plan Mode** | Thinks through the problem, asks clarifying questions, proposes an implementation approach | You have a fuzzy requirement and need to de-risk before writing code |
| **Agent Mode** | Executes directly — reads files, writes code, runs commands | You have a clear, defined task and want it done, not discussed |

The workflow is: **Plan Mode → get a clear implementation approach → Agent Mode → execute it**.

Building something without planning first produces vibing. Planning without committing to execution produces nothing. The divide between the two modes is deliberate.

::: bad-practice
Using Agent Mode on a vague requirement: "Build a daily goal reminder feature." Agent Mode will make decisions for you — about what "daily" means, what "reminder" looks like, where the data goes. Some of those decisions will be wrong, and they'll be buried in files you have to hunt down and fix.
:::

::: best-practice
Use Plan Mode first to surface the assumptions — "Should the reminder be in-app, email, or browser notification? Should goals be recurring or one-time?" Once those are answered, switch to Agent Mode and execute with precision.
:::

## Exercise

You're building and extending the study planner. This exercise builds a **daily goal reminder** feature in two explicit steps.

### Step 1 — Plan Mode: surface the requirements

Open Copilot Chat and switch to **Plan Mode**.

Type:

```
I want to add a daily goal reminder to the study planner. 
The reminder should tell me how many study topics are left for today.
Plan the implementation.
```

- Expected result: Copilot asks clarifying questions or proposes a structured plan with assumptions listed. It should NOT write code.
- Why this matters: Plan Mode is designed to expose ambiguity before you commit. If Copilot jumps straight to code here, switch back to Plan Mode — you're in Agent Mode.

Read the plan. Answer any clarifying questions Copilot asks. Confirm the approach or request a change.

### Step 2 — Lock the requirements

Before moving to Agent Mode, you need a locked set of requirements. Write (or confirm from the Copilot plan) the following:

```
Daily goal reminder feature — locked requirements:
- Show remaining topics for today on the planner home screen
- "Today's goal" is a configurable number stored in config (default: 3 topics)
- Remaining count = today's goal minus topics completed today
- Display "All done for today!" when remaining count reaches 0
- No notifications — in-app display only
```

This step is manual. Write it in a comment, a note, or just keep it in the chat. You will hand this to Agent Mode.

### Step 3 — Agent Mode: execute the plan

Switch to **Agent Mode** in Copilot Chat.

Paste the locked requirements and add:

```
Implement the daily goal reminder feature using the locked requirements above.
Use the workspace instructions for stack and conventions.
After implementation, run the Code Reviewer agent on the new code.
```

- Expected result: Copilot writes and wires up the feature — configuration entry, progress calculation update, and display update — without asking further questions.
- Why this matters: Agent Mode on a locked requirement is fast and predictable. Agent Mode on a vague requirement is fast and surprising.

### Step 4 — Review and compare

After Agent Mode completes:

1. Look at the list of files changed. Were there any surprises?
2. If you ran the Code Reviewer (optional): were there issues flagged?
3. Compare the output to what Plan Mode described. Did they match?

- Expected result: the feature is working, the file changes make sense, and the output matches the plan you locked in Step 2.
- Why this matters: the Plan → Agent workflow is testable. You have a written spec (the locked requirements) and you can verify the output against it. This is the smallest version of the spec-driven workflow you'll expand in Module 3.

## Checkpoint

- [ ] I used Plan Mode to surface assumptions before writing code
- [ ] I locked requirements explicitly before switching to Agent Mode
- [ ] I ran Agent Mode on the locked requirements and got a complete, non-surprising implementation
- [ ] I can explain when each mode is appropriate
- [ ] I notice the parallel: locked requirements in Plan→Agent is the same idea as specs in M3

---

[← Previous Lesson: L2.2 Agents](/module2/L2-2-agents) · [Next Module: M3 Spec-Driven Development →](/module3/)
