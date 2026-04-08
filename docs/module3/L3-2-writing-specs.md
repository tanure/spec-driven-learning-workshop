---
title: "L3.2: Writing Specs That Guide AI"
---

<div class="lesson-badges">
  <span class="badge-time">10 min</span>
  <span class="badge-module">Module 3 — Spec-Driven Development</span>
</div>

# L3.2: Writing Specs That Guide AI

## The Problem

Bad specs are worse than no specs. A vague spec gives Copilot false confidence — it thinks it knows what to build, but the definition it's working from is wrong. The output will be coherent-looking code that doesn't match what you actually need.

A good spec is not a requirements document. It's a communication artifact that answers exactly the questions Copilot will have when generating code.

## The Solution

A spec that guides AI generation has three components:

**1. A constitution** — what the project is, what it values, what it will never do. Written once. Referenced by all epics.

**2. An epic** — a feature or slice of work with:
- A one-sentence goal
- Acceptance criteria (what the user can do when it's done)
- Out-of-scope items (what this epic explicitly does not include)

**3. Tasks** — atomic units of implementation derived from the epic. Each task has a clear scope and a definition of done.

The constitution prevents drift. The epic prevents scope creep. The tasks prevent ambiguity during generation.

::: bad-practice
Writing acceptance criteria like: "The progress feature should work correctly and show the user's progress." This has three words doing no work: "correctly", "show", and "progress" are all undefined. Copilot will choose a definition.
:::

::: best-practice
Writing acceptance criteria like: "When a user marks a topic as complete, the progress bar percentage updates immediately without page reload. Progress is calculated as: (completed topics / total topics) × 100, rounded to nearest integer." Every word is defined. Copilot has no decisions to make.
:::

## Exercise

### Step 1 — Draft the project constitution

Open `specification/constitution.md` (or create it if spec-kit didn't scaffold it).

Write your constitution for the study planner using this structure:

```markdown
# Study Planner Constitution

## What this project is
A single-user study planner that tracks topics, completion status, and daily progress.

## Core values
- Simplicity over features: one way to do each thing
- Data integrity: no data loss on error
- Explicitness: nothing implicit in the UI or the data model

## Stack decisions
- TypeScript, Node.js backend, plain HTML/CSS frontend
- No framework unless a specific lesson requires it
- File-based storage (JSON) for this workshop — no database

## Out of scope for this project
- Multi-user support
- Authentication
- Cloud sync
- Native mobile app
```

Customize the content to match what you've been building. The structure matters more than these specific words.

- Expected result: `specification/constitution.md` contains a complete constitution with all four sections.
- Why this matters: every epic you write will reference this constitution. It prevents you from writing an epic that contradicts the project's core decisions.

### Step 2 — Write an epic

Use spec-kit to scaffold an epic:

```bash
speckit epic "Add study session tracking"
```

This creates a new epic file in `specification/`. Open it and fill in the structure:

```markdown
# Epic: Add Study Session Tracking

## Goal
Allow users to log study sessions with a start time, duration, and linked topic,
so they can see their total time invested per topic.

## Acceptance criteria
- [ ] User can start a session for a specific topic
- [ ] Session records start time (ISO 8601) and duration in minutes
- [ ] User can view total time spent per topic
- [ ] Session list is persisted between app restarts
- [ ] Stopping a session that was not started is a no-op (no error thrown)

## Out of scope
- Automatic time tracking
- Session categories beyond topic
- Editing past sessions

## Definition of done
- All acceptance criteria pass
- Unit tests cover the session start, stop, and total-time calculation
- No TypeScript errors
```

- Expected result: the epic file is complete with goal, AC, out-of-scope, and DoD.
- Why this matters: the AC list is what the Code Reviewer and Testing Advocate in M2 will verify against. The DoD is what "done" means — no ambiguity.

### Step 3 — Verify the spec is AI-ready

Read your AC items aloud. For each one, ask: "If Copilot generates code, can I verify this criterion without asking Copilot to explain what it meant?"

If the answer is no, rewrite that criterion until the answer is yes.

- Expected result: every AC item is verifiable from the outside — by running the app or running a test. No AC item depends on Copilot's interpretation.
- Why this matters: unverifiable criteria are not criteria. They're wishes.

## Checkpoint

- [ ] I wrote a constitution with: what the project is, core values, stack decisions, and out-of-scope
- [ ] I created an epic with: goal, acceptance criteria (each verifiable), out-of-scope, and definition of done
- [ ] I reviewed every AC item and confirmed each is verifiable without needing interpretation
- [ ] I understand the three-level structure: constitution → epic → tasks

---

[← Previous Lesson: L3.1 Cost of No Specs](/module3/L3-1-cost-no-specs) · [Next Lesson: L3.3 The Spec-Kit Workflow →](/module3/L3-3-speckit-workflow)
