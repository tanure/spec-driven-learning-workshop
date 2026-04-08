---
title: "L2.2: Agents and Decision Patterns"
---

<div class="lesson-badges">
  <span class="badge-time">8 min</span>
  <span class="badge-module">Module 2 — Copilot Best Practices</span>
</div>

# L2.2: Agents and Decision Patterns

## The Problem

Instructions solve the "what project are we in" problem. They don't solve the "who is doing this task" problem. A code reviewer, a test writer, and a database designer think differently — they ask different questions, catch different risks, and produce different outputs. If every Copilot interaction uses the same generalist context, you get generalist output.

## The Solution

**Agents** are specialized Copilot personas that you define once and invoke by name. Each agent has:
- A specific **role** (what it does)
- A constrained **context** (what it knows, what files it focuses on)
- Defined **decision criteria** (when to proceed, when to flag, when to stop)

Two agents that every project should have — and that you'll build now:

| Agent | Role | Key behavior |
|-------|------|-------------|
| **Code Reviewer** | Reviews all generated code | Checks stack compliance, naming conventions, missing error handling, security gaps |
| **Testing Advocate** | Writes and reviews tests | Enforces coverage minimums, identifies untested edge cases, flags missing assertions |

::: bad-practice
Asking "review this code" in a general chat after generating it. Copilot will offer surface-level feedback — syntax, obvious naming — without knowing your standards or what specifically to look for in your project.
:::

::: best-practice
Run the Code Reviewer agent on every piece of generated code before accepting it. The agent knows the stack, knows the naming conventions, and has a defined checklist — so the review is consistent, not dependent on what's in your chat context that day.
:::

## Exercise

### Step 1 — Create the Code Reviewer agent

Create `.github/agents/code-reviewer.agent.md`:

```markdown
---
name: Code Reviewer
description: Reviews generated code for stack compliance, conventions, and quality standards
---

# Code Reviewer

You are a senior code reviewer for this project. You know the stack and conventions defined in the workspace instructions. When reviewing code:

## What to check

### Stack compliance
- Is typing correct? No `any`, `unknown` used where type is genuinely unknown
- Are naming conventions followed? (camelCase functions, PascalCase types, kebab-case files)
- Are imports correct and not importing unnecessary packages?

### Error handling
- Are all async operations wrapped with error handling?
- Are user-facing error messages generic (no internal details leaked)?
- Are all inputs validated before use?

### Quality
- Is there duplication that should be extracted?
- Are exported functions documented with JSDoc?
- Are magic numbers or strings extracted to named constants?

## How to respond

For each issue found, write one entry:
- **File/Location**: where the issue is
- **Category**: Stack compliance | Error handling | Quality
- **Issue**: what is wrong
- **Fix**: how to correct it

If no issues are found, state that clearly and explain what you checked.
```

- Expected result: file exists at `.github/agents/code-reviewer.agent.md`.
- Why this matters: you can now invoke the Code Reviewer on any generated code and get reviews that match your project's specific standards, every time.

### Step 2 — Create the Testing Advocate agent

Create `.github/agents/testing-advocate.agent.md`:

```markdown
---
name: Testing Advocate
description: Writes tests and reviews test coverage, enforcing defined coverage goals
---

# Testing Advocate

You are a testing advocate for this project. You write and review tests with the following goals:

## Coverage goals
- Unit tests: all exported functions must have tests
- Edge cases: empty input, null/undefined, boundary values, error conditions
- Integration tests: any function that touches I/O (file, network, database) must have an integration test

## How to write tests
- Use descriptive test names: `it("should return 0 when no topics are completed")`
- Arrange / Act / Assert structure — no mixed setup and assertion
- One logical assertion per test (multiple `expect` calls are fine if they verify one behavior)
- No test should depend on another test's state

## When reviewing coverage
- List functions that have no tests
- For each tested function, identify missing edge cases
- Flag any test that asserts the wrong thing (testing implementation instead of behavior)

## How to respond
- List gaps first (missing tests, missing edge cases)
- Then provide the test code for each gap
- End with: "Coverage status: [X functions tested / Y total]"
```

- Expected result: file exists at `.github/agents/testing-advocate.agent.md`.
- Why this matters: the Testing Advocate knows what "enough testing" means for this project, so you don't have to re-explain coverage goals each time.

### Step 3 — Run both agents on your study planner code

1. Open GitHub Copilot Chat in Agent mode.
2. Select the **Code Reviewer** agent.
3. Reference the progress calculation function you built in L2.1, Step 2.
4. Ask: `Review this function.`
   - Expected result: structured feedback using the categories defined in the agent (Stack compliance / Error handling / Quality), or a clear "no issues found" with explanation.

5. Switch to the **Testing Advocate** agent.
6. Ask: `Generate tests for the progress calculation function.`
   - Expected result: test file with named tests, Arrange/Act/Assert structure, edge cases included (zero topics, all completed, negative input if applicable).

## Checkpoint

- [ ] I created `.github/agents/code-reviewer.agent.md` with role, checklist, and response format
- [ ] I created `.github/agents/testing-advocate.agent.md` with coverage goals and response format
- [ ] I ran the Code Reviewer on at least one piece of generated code and received structured feedback
- [ ] I ran the Testing Advocate and received a test file with edge cases covered
- [ ] I can explain when to use an agent vs. a standard chat prompt

---

[← Previous Lesson: L2.1 Instructions](/module2/L2-1-instructions) · [Next Lesson: L2.4 Plan Mode vs. Agent Mode →](/module2/L2-4-plan-vs-agent)
