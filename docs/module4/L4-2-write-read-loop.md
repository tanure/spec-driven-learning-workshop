---
title: "L4.2: The Write-Read Loop"
---

<div class="lesson-badges">
  <span class="badge-time">12 min</span>
  <span class="badge-module">Module 4 — GitHub MCP Integration</span>
</div>

# L4.2: The Write-Read Loop

## The Problem

Your spec lives in `specs/<feature-branch>/`. Your team's tasks live in GitHub Issues. They're separate. When requirements change in GitHub, you have to remember to update the spec. When the spec updates, you have to remember to update the issue. Eventually they drift. Nobody knows which is authoritative.

## The Solution

The **write-read loop** keeps spec and tracker in sync by using MCP as the bridge:

1. **Write**: push spec tasks to GitHub Issues directly from Copilot (using MCP)
2. **Read**: generate code using a GitHub Issue number as context (Copilot reads the issue via MCP)
3. **Update**: when an issue changes, reflect the change in the spec

The spec is the source of truth. GitHub Issues are the tracker. MCP is the sync mechanism.

::: bad-practice
Maintaining two separate documents — a spec in your repo and issues in GitHub — and updating them manually. Within a week they will diverge. Within a month, neither will be trusted.
:::

::: best-practice
Push from spec to GitHub. Implement from GitHub. The spec is written first, the issue mirrors it, and the implementation references the issue. One direction, traceable end-to-end.
:::

## Exercise

### Step 1 — Push a feature spec to GitHub Issues

Open Copilot Chat in Agent Mode (with GitHub MCP active).

Pick the feature spec from L3.2. Ask:

```
Create a GitHub Issue for the following feature specification. 
Use the feature title as the issue title.
Include the goal, acceptance criteria, and definition of done in the issue body.
Format the acceptance criteria as a task list.

[paste your feature spec content here]
```

- Expected result: Copilot creates a GitHub Issue in your repository. The issue body contains the goal, a checklist of AC items, and the DoD.
- Why this matters: the issue is now the single place where stakeholders can see the work, comment on requirements, and track progress. It mirrors your spec exactly.

Note the issue number (e.g., `#12`). This is the parent feature issue.

### Step 2 — Push your tasks to Issues

For each task in your task list, create a GitHub Issue:

```
Create a GitHub Issue for the following task from the study planner spec.
Title: [task title]
Body: include the scope, definition of done, and link to the parent feature issue #[feature issue number].

[paste task content here]
```

Run this for your first two tasks.

- Expected result: two task issues created, each linking back to the parent feature issue.
- Why this matters: the task issue is the unit of implementation. When you implement, you reference the task issue. When the task is done, you close the issue. The parent feature issue tracks its children.

### Step 3 — Generate code from an issue

Open a new Agent Mode chat. Ask:

```
Implement GitHub Issue #[task issue number] from the [your-username]/[your-repo] repository.
Reference the workspace instructions for stack and conventions.
```

- Expected result: Copilot reads the issue content directly via MCP, then generates code scoped to that task's requirements.
- Why this matters: you did not paste the task content. Copilot fetched it. The issue is the context. If the issue has comments with requirement updates, Copilot sees those too.

### Step 4 — Close the issue on completion

After the Code Reviewer passes (from L2.2), ask Copilot:

```
Close GitHub Issue #[task issue number] with a comment: "Implemented in [file names], reviewed by Code Reviewer agent."
```

- Expected result: the issue is closed with a comment linking to the implementation.
- Why this matters: closed issues with implementation comments are documentation. They answer "why does this code look this way?" for everyone who reads the commit history.

### Step 5 — Reflect on the loop

Look at what you just built:
- Spec → Issue (write)
- Issue → Code (read)
- Code review → Issue closed (update)

This is the write-read loop. It's not magic — it's a discipline. The MCP connection makes it faster, but the practice is what makes it consistent.

Write one sentence: what gets worse when you skip any step in this loop?

- Expected result: one sentence, e.g., "Skipping the write step means implementation has no traceable requirement, so there's no way to know if what was built is what was intended."
- Why this matters: you'll defend this discipline in M5 when you're presenting the workshop outcomes.

## Checkpoint

- [ ] I pushed a feature spec to a GitHub Issue using Copilot + MCP
- [ ] I pushed at least two tasks to GitHub Issues with links to the parent feature issue
- [ ] I generated code using a GitHub Issue number as the only context reference
- [ ] I closed the task issue with an implementation comment after the Code Reviewer passed
- [ ] I can explain the write-read loop and what breaks when a step is skipped

---

[← Previous Lesson: L4.1 What Is MCP](/module4/L4-1-what-is-mcp) · [Next Module: M5 Putting It All Together →](/module5/)
