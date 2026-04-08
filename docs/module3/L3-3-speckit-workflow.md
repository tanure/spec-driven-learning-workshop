---
title: "L3.3: The Spec-Kit Workflow"
---

<div class="lesson-badges">
  <span class="badge-time">12 min</span>
  <span class="badge-module">Module 3 — Spec-Driven Development</span>
</div>

# L3.3: The Spec-Kit Workflow

## The Problem

You have a feature specification. You can't generate all of it at once — Copilot doesn't have unlimited context, and a full feature implemented in a single prompt is a recipe for tangled, hard-to-review code. You need a way to break the feature into tasks that are small enough to generate individually, coherent enough to integrate, and specific enough that "done" is unambiguous.

## The Solution

Spec-kit automates the feature spec → plan → tasks breakdown. The workflow is:

1. **`/speckit.plan`** — Analyzes the feature spec and generates an implementation plan: ordered phases, dependencies, technical translation, and supporting design documents.
2. **`/speckit.tasks`** — Breaks the plan into atomic tasks. Each task has a scope boundary and a DoD.

The output is a task list you can hand directly to Agent Mode. No more open-ended prompts.

::: bad-practice
Generating the implementation plan in chat, accepting Copilot's breakdown without reviewing it, then running Agent Mode on a task description that was generated from a vague plan. The error compounds at every step.
:::

::: best-practice
Run `/speckit.plan` to generate the plan, review it against your feature spec, edit anything that doesn't match your intent, then run `/speckit.tasks`. Treat the generated plan as a draft, not a final decision.
:::

## Exercise

### Step 1 — Generate the implementation plan

In Copilot Chat, enter:

```text
/speckit.plan WebSocket for session updates, file-based storage for persistence
```

Spec-kit reads your feature spec and constitution, then generates an implementation bundle in `specs/<feature-branch>/`.

- Expected result: `specs/<feature-branch>/plan.md` exists along with supporting documents such as `research.md`, `data-model.md`, `contracts/`, and `quickstart.md` where applicable.
- Why this matters: the plan exposes implicit ordering dependencies. If "session list UI" appears before "session storage", that's wrong — storage must come first.

### Step 2 — Review and edit the plan

Open `specs/<feature-branch>/plan.md`. Check:

1. Are the phases in the right order? (Data model before storage, storage before UI.)
2. Does the plan include anything that's in your feature spec's "out of scope" section? Remove it.
3. Are there phases that are too large? (A phase that says "implement everything" is not a phase.) Break them down.

Edit `plan.md` directly until you're satisfied.

- Expected result: a plan that you would give to a developer and they would know exactly what order to work in.
- Why this matters: spec-kit generates a starting point. Your judgment improves it. Both are required.

### Step 3 — Generate tasks from the plan

In Copilot Chat, enter:

```text
/speckit.tasks
```

Spec-kit reads the plan and related design documents and generates `specs/<feature-branch>/tasks.md`.

- Expected result: a set of tasks, each with a clear scope and a definition of done.
- Why this matters: these tasks are the input to Agent Mode in L3.5. Each task generates one focused implementation — not a sprawling feature.

### Step 4 — Verify task granularity

Review the generated tasks. For each task, check:

- Can this task be implemented and reviewed in a single Agent Mode session? (If not, split it.)
- Does the DoD have at least one verifiable criterion? (Not "code is clean" — but "function returns expected value for known inputs".)
- Does this task describe what to build, not how to build it? (Implementation details belong in the code, not the spec.)

Edit any tasks that fail these checks.

- Expected result: a task list where every task is atomic, verifiable, and implementation-agnostic.
- Why this matters: properly-scoped tasks are the foundation of the code generation step. Over-scoped tasks produce over-generated code that fails review.

## Checkpoint

- [ ] I ran `/speckit.plan` and have a `plan.md` with ordered phases
- [ ] I reviewed and edited the plan to remove out-of-scope items and fix ordering
- [ ] I ran `/speckit.tasks` and have a task list derived from the plan
- [ ] I verified each task is atomic, has a verifiable DoD, and does not encode implementation details
- [ ] I understand the full feature spec → plan → tasks breakdown

---

[← Previous Lesson: L3.2 Writing Specs](/module3/L3-2-writing-specs) · [Next Lesson: L3.4 Clarification Before Code →](/module3/L3-4-clarification)
