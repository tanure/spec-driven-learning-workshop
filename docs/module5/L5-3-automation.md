---
title: "L5.3: Progressive Automation"
---

<div class="lesson-badges">
  <span class="badge-time">10 min</span>
  <span class="badge-module">Module 5 — Putting It All Together</span>
</div>

# L5.3: Progressive Automation

## The Problem

The spec-driven workflow involves manual steps. Some of those steps can be automated. But automating everything at once creates a system that's hard to debug when something goes wrong — and you won't know which automation broke the workflow because they all run together.

## The Solution

Two automation levels:

**Level 1 (Mandatory)**: Auto Code Reviewer — runs automatically after every implementation step. This is the one automation that pays for itself immediately because it catches issues before you move to the next task. There is no reason not to have this.

**Level 2 (Optional)**: Full loop automation — spec → plan → tasks → implement → review runs as a chained workflow. This is powerful when the workflow is mature and you trust every step. It is risky to adopt before you've run the workflow manually enough to know where it makes mistakes.

The rule: automate Level 1 immediately. Evaluate Level 2 after 3–5 real projects.

::: bad-practice
Automating the full loop on your first real project. If something goes wrong (wrong scope, wrong integration assumption, wrong stack decision), you won't know which automated step caused it. You'll spend more time debugging the automation than you saved running it.
:::

::: best-practice
Start with Level 1 only. Run Level 2 manually enough times to identify where your specific workflow makes mistakes. Then automate those specific steps, with explicit reviewpoints between them.
:::

## Exercise

### Step 1 — Set up Level 1: Auto Code Reviewer

Create a prompt file at `.github/prompts/auto-review.prompt.md`:

```markdown
---
name: Auto Code Review
description: Runs the Code Reviewer agent on the most recently generated code
---

You are running an automated code review step.

Context: The developer just implemented a Task using Agent Mode. 
Reference: specs/<feature-branch>/tasks.md for the task details and memory/constitution.md for standards.

Run the Code Reviewer agent on the changed files. 

If issues are found:
- List them by category (Stack compliance / Error handling / Quality)
- For each issue, provide the exact fix
- Do not mark the task as done until issues are resolved

If no issues are found:
- State clearly: "Auto review passed. Task is ready to mark done."
- List what was checked
```

- Expected result: the prompt file exists and is loadable from Copilot Chat.
- Why this matters: now, after every implementation, you run one command — the auto-review prompt — instead of manually navigating to the Code Reviewer agent. One step instead of three.

### Step 2 — Test Level 1

Take one of the tasks you implemented earlier. Open the auto-review prompt from Copilot Chat and run it against the already-implemented code.

- Expected result: same output quality as a manual Code Reviewer run, with no additional setup.
- Why this matters: if the output differs significantly from a manual review, the prompt needs tuning. Do that now, before you depend on it.

### Step 3 — Map your Level 2 candidates

Look at the full spec-driven workflow steps:

1. Draft feature spec
2. `/speckit.specify`
3. resolve `[NEEDS CLARIFICATION]` markers
4. `/speckit.plan`
5. `/speckit.tasks`
6. Implement task
7. Code Reviewer
8. Mark done → next task
9. Push to GitHub Issues
10. Close issues on completion

For each step, mark it as:
- **Automate**: step is mechanical and low-risk (same output regardless of project)
- **Review point**: step needs human judgment before continuing
- **Never automate**: step requires creative or contextual decision-making

Write your personal automation map.

- Expected result: a table or list showing which steps you'd automate and which you'd keep manual.
- Why this matters: your automation map is specific to your workflow, your risk tolerance, and your project type. There is no universal right answer. Building it yourself means you'll defend it.

### Step 4 — Decide your Level 2 threshold

Based on your automation map, write one sentence:

"I will consider adding Level 2 automation after [number] real projects when I have verified that [specific thing you need to trust]."

- Expected result: one sentence with a specific number and a specific verification criterion.
- Why this matters: automation without a maturity threshold is technical debt. You're setting the threshold now so it's not a decision you have to make under pressure on project 4.

## Checkpoint

- [ ] I created `.github/prompts/auto-review.prompt.md` and tested it
- [ ] I mapped each workflow step to: Automate / Review point / Never automate
- [ ] I wrote my Level 2 threshold sentence with a specific number and criterion
- [ ] I can explain why Level 1 automation is always worthwhile and Level 2 is conditional

---

[← Previous Lesson: L5.2 Real-World Use Cases](/module5/L5-2-use-cases) · [View the Cheatsheet →](/resources/cheatsheet)
