---
title: "L3.1: The Cost of No Specs"
---

<div class="lesson-badges">
  <span class="badge-time">5 min</span>
  <span class="badge-module">Module 3 — Spec-Driven Development</span>
</div>

# L3.1: The Cost of No Specs

## The Problem

The L1.1 runs were unpredictable because there were no specs. You probably felt that. But "unpredictable" is vague. The actual costs of no specs are specific and measurable:

- **Rework time**: code generated from vague prompts often needs to be partially or fully rewritten. That's new generation time, plus review time, plus integration time.
- **Scope creep**: without defined acceptance criteria, "done" is a moving target. Copilot will keep adding things. You'll keep accepting them. The feature will grow until something breaks.
- **Integration failures**: code that looks correct in isolation — wrong types, wrong shape, incompatible interfaces — fails at integration. Finding that later costs more than preventing it with a spec.
- **Lost decisions**: when you don't write down what a feature should do, you make the same decisions multiple times across prompts, across sessions, across team members.

The spec-driven workflow exists to eliminate all four of these costs.

## The Solution

You write the spec before the code. The spec defines:
1. What the feature does (goal + acceptance criteria)
2. What it does not do (out of scope)
3. How "done" is verified (definition of done)

With that in place, every code generation prompt becomes a reference to the spec — not an open-ended request.

::: bad-practice
"I'll add a spec if the feature turns out to be complex." Complexity is discovered during implementation when it's expensive. Specs expose complexity before implementation when it's cheap.
:::

::: best-practice
Write the spec first, always. For simple features, it takes five minutes and costs nothing. For complex features, it saves hours. The spec-kit tool makes this fast.
:::

## Exercise

### Step 1 — Install spec-kit

Open a terminal in your project root and run:

```bash
npm install -g @github/spec-kit
```

Verify the installation:

```bash
speckit --version
```

- Expected result: version number printed to terminal.
- Why this matters: spec-kit is the scaffolding tool for the spec-driven workflow. All subsequent exercises in M3 use it.

> **Note**: If `@github/spec-kit` is not yet available, check the [spec-kit repository](https://github.com/github/spec-kit) for the correct package name or install instructions. The package may be published under a different name.

### Step 2 — Create your first feature spec

Open Copilot Chat in VS Code and enter this slash command there. Do not run it in the terminal.

```text
/speckit.specify Add study session tracking
```

- Expected result: spec-kit creates a new feature branch and a `specs/<feature-branch>/spec.md` file populated from the feature-spec template.
- Why this matters: this is the documented entry point for the workflow. You start from a feature specification, not from a custom `init` scaffold.

### Step 3 — Calculate your rework estimate

Look at the two runs from L1.1.

For each run, estimate:
- How many lines of code were generated?
- How many lines were in the wrong shape, wrong type, or wrong behavior and would need to be changed?
- What percentage of the generated code was rework?

Write a single sentence: `In my L1.1 runs, approximately __% of generated code would have required rework without specs.`

- Expected result: you have a concrete number, even if approximate.
- Why this matters: the spec-driven workflow is justified by this number. Keep it. Reference it in M5 when you compare the spec-driven approach.

## Checkpoint

- [ ] I installed spec-kit and confirmed the version
- [ ] I ran `/speckit.specify` and have a generated `specs/<feature-branch>/spec.md`
- [ ] I estimated the rework percentage from my L1.1 runs
- [ ] I understand the four specific costs of building without specs

---

[← Module 3 Overview](/module3/) · [Next Lesson: L3.2 Writing Specs That Guide AI →](/module3/L3-2-writing-specs)
