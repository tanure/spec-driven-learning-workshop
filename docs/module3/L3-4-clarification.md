---
title: "L3.4: Clarification Before Code"
---

<div class="lesson-badges">
  <span class="badge-time">8 min</span>
  <span class="badge-module">Module 3 — Spec-Driven Development</span>
</div>

# L3.4: Clarification Before Code

## The Problem

Even a well-written feature spec has gaps. Not because the author was careless, but because it's impossible to anticipate every edge case and ambiguity before implementation begins. The risk is that those gaps get filled during code generation — by Copilot, without your input. The result is code that's internally consistent but contradicts your intent.

## The Solution

Resolve ambiguity in the spec, not in the code.

The documented spec-kit pattern is to mark uncertainty explicitly with `[NEEDS CLARIFICATION: ...]` in the spec, resolve those markers before planning or implementation, and only then continue.

This separates the "what" question (spec work) from the "how" question (code generation). When those get mixed — when you're answering "what should this do?" while reviewing generated code — you're doing the most expensive version of requirements work.

::: bad-practice
Discovering a requirement ambiguity during code review: "Wait, what should happen if the user tries to log a session for a topic that doesn't exist?" Now you're making a product decision while reviewing a diff. The answer you give in that moment may not be the answer you'd give with more thought.
:::

::: best-practice
Run a clarification pass on the spec before generation. Replace `[NEEDS CLARIFICATION: ...]` markers with decisions in the spec. When that same edge case comes up during code review, the answer is already written — Copilot already has it.
:::

## Exercise

### Step 1 — Review the spec for clarification markers

Open `specs/<feature-branch>/spec.md` and scan for any `[NEEDS CLARIFICATION: ...]` markers.

- Expected result: a list of questions about edge cases, missing definitions, or unstated behavior in your spec.
- Why this matters: these are exactly the questions Copilot will silently answer — by making a choice — when generating code from the task. Better to answer them now.

### Step 2 — Answer the questions

For each question, decide: does this answer belong in the constitution, the feature spec, or a specific task?

- **Constitution**: if the answer is a project-wide decision (e.g., "how do we handle errors globally?")
- **Feature spec**: if the answer clarifies a feature-level behavior (e.g., "what happens when the user stops a session they didn't start?")
- **Task**: if the answer is specific to one implementation unit (e.g., "what field name should the session ID use?")

Update the appropriate document. Do not answer the question in chat — write it into the spec.

- Expected result: the `[NEEDS CLARIFICATION: ...]` markers have answers written into spec documents.
- Why this matters: the next time you or a teammate generates code from this spec, the clarifications are already there. You don't re-answer them.

### Step 3 — Re-read the spec

Read the spec again after your edits and verify that every critical ambiguity is now resolved or explicitly deferred.

- Expected result: fewer questions, or no questions, depending on how thorough your answers were.
- Why this matters: this loop — clarify → answer → re-clarify — converges the spec toward completeness. You stop when you're satisfied the remaining questions are acceptable unknowns (genuinely undecided, not overlooked).

### Step 4 — Mark acceptable unknowns

For any questions that remain after your second pass that you intentionally are not answering yet, add a comment in the relevant spec document:

```markdown
<!-- OPEN QUESTION: [question text] — decision deferred until [reason] -->
```

- Expected result: all remaining open questions are explicitly marked and explained in the spec.
- Why this matters: marking an open question is a decision. It says: "I know this is undefined, and I've chosen to defer it." That's different from missing it. Copilot will still make a choice for unmarked gaps — but at least you can find the deferral point when you need to revisit it.

## Checkpoint

- [ ] I reviewed my spec for `[NEEDS CLARIFICATION: ...]` markers and gaps
- [ ] I answered each question by updating the appropriate spec document (constitution, feature spec, or task)
- [ ] I re-read the spec and confirmed it converged toward completeness
- [ ] Any remaining open questions are marked with `<!-- OPEN QUESTION: -->` comments
- [ ] I can explain why "answer in the spec, not in the code" prevents a specific class of rework

---

[← Previous Lesson: L3.3 Spec-Kit Workflow](/module3/L3-3-speckit-workflow) · [Next Lesson: L3.5 From Specs to Code →](/module3/L3-5-spec-to-code)
