# Hackathon Learning Workshop — Overhaul Specification

> **Status**: COMPLETE — Stories 01–05 done; all docs/module files implemented  
> **Version**: 0.7.0  
> **Last updated**: 2026-04-09

---

## 1. Mission & Goals

The workshop teaches hackathon participants how to develop software effectively using AI Agents (primarily GitHub Copilot), by applying:

- **Best practices**: Instructions, Agents (custom modes), and Skills (repeatable workflows)
- **Spec-Driven Development**: using GitHub Spec-Kit as the framework to move from vague ideas to structured, implementable specifications

### Goals

- Replace "vibing coding" (ad-hoc, inconsistent prompting) with a reliable, predictable AI-assisted development workflow
- Teach participants how to use Copilot's full capability stack: Instructions → Agents → Skills
- Demonstrate spec-driven development end-to-end: from problem statement to working code via spec-kit
- Include hands-on GitHub MCP usage (issues, PRs, branches)
- Provide 3 ready-to-start hackathon project use cases

---

## 2. Target Audience & Prerequisites

### Audience

- Developers attending a 1-day hackathon
- Mixed experience levels (junior to senior)
- Familiar with VS Code and GitHub basics

### Prerequisites

- VS Code with GitHub Copilot extension installed
- GitHub account with access to a repository
- Node.js installed (for spec-kit CLI)
- GitHub CLI (`gh`) installed and authenticated

---

## 3. Current State

The workshop lives at `docs/` — a VitePress site deployed to GitHub Pages.

### What exists today

| Group | Lessons | Duration | Content |
|-------|---------|----------|---------|
| Group A | A1–A5 | ~30 min | Copilot foundation — instructions, agents, skills |
| Group B | B1–B6 | ~45 min | Spec-driven development — spec writing, spec-kit workflow |
| Group C | C1–C2 | ~13 min | Integration + use cases |

### Known problems with current content

- Shallow lessons — mostly conceptual, light on hands-on depth
- No coverage of MCP (Model Context Protocol)
- No coverage of Plan Mode vs Agent Mode distinction
- Parallel A/B group entry is confusing; users don't know where to start
- spec-kit installation and setup steps are missing entirely
- Starter template `spec-driven-learning-template` is referenced but never linked
- No real integration between Groups A and B (they feel disconnected)

---

## 4. Vision — New Workshop Structure

### Format

- **Linear progression** as the primary path (start from Module 1)
- **Optional jump-in** at Module 3 (Spec-Driven Development) for experienced Copilot users
- **Total time**: ~90 minutes
- Deployed as a VitePress site on GitHub Pages

### Module Breakdown

| Module | Title | Duration | Description |
|--------|-------|----------|-------------|
| M1 | The AI Development Problem | ~10 min | The vibing trap; preview of the three pillars |
| M2 | GitHub Copilot Best Practices | ~25 min | Instructions, Agents, Skills, Plan vs Agent Mode |
| M3 | Spec-Driven Development | ~30 min | Full spec-kit workflow — also a standalone entry point |
| M4 | Extending with MCP | ~10 min | What is MCP; GitHub MCP hands-on |
| M5 | Integration & Use Cases | ~15 min | End-to-end workflow; 3 hackathon project templates |

### Navigation Design

- Home page: two primary CTAs — "Start from the beginning" (→ M1) and "Jump to Spec-Driven Dev" (→ M3)
- Each module has clear prev/next lesson navigation
- Resources (cheatsheet, FAQ) accessible from all pages via top nav

### Target File Structure (docs/)

```
docs/
├── index.md                      # Home — dual entry CTAs, module overview
├── package.json                  # VitePress config (no changes)
├── .vitepress/
│   └── config.js                 # Sidebar + nav rewrite (group → module structure)
├── module1/
│   ├── index.md
│   ├── L1-1-vibing.md            # ✅ implemented
│   └── L1-2-three-pillars.md    # ✅ implemented
├── module2/
│   ├── index.md
│   ├── L2-1-instructions.md      # ✅ implemented
│   ├── L2-2-agents.md            # ✅ implemented
│   ├── L2-3-skills.md            # deferred — not created
│   └── L2-4-plan-vs-agent.md    # ✅ implemented
├── module3/
│   ├── index.md
│   ├── L3-1-cost-no-specs.md     # ✅ implemented
│   ├── L3-2-writing-specs.md     # ✅ implemented
│   ├── L3-3-speckit-workflow.md  # ✅ implemented
│   ├── L3-4-clarification.md     # ✅ implemented
│   └── L3-5-spec-to-code.md     # ✅ implemented
├── module4/
│   ├── index.md
│   ├── L4-1-what-is-mcp.md       # ✅ implemented
│   └── L4-2-write-read-loop.md  # ✅ implemented
├── module5/
│   ├── index.md
│   ├── L5-1-full-workflow.md     # ✅ implemented
│   ├── L5-2-use-cases.md        # ✅ implemented
│   └── L5-3-automation.md       # ✅ implemented
└── resources/
    ├── cheatsheet.md             # ✅ rewritten
    └── faq.md                    # ✅ rewritten
```

---

## 5. Technical Stack

| Layer | Technology | Notes |
|-------|-----------|-------|
| Site generator | VitePress ^1.6.4 | Already in use — keep as-is |
| Hosting | GitHub Pages | Already configured |
| CI/CD | GitHub Actions | Trigger: push to `main` touching `docs/` |
| Content format | Markdown (`.md`) | VitePress frontmatter |
| Package manager | npm | `docs/package.json` |

---

## 6. Content Standards

### Lesson Template

Every lesson must follow this structure:

```markdown
---
title: "LX.Y: Lesson Title"
---

<div class="lesson-badges">
  <span class="badge-time">X min</span>
  <span class="badge-module">Module N — Title</span>
</div>

# LX.Y: Lesson Title

## The Problem

[1–2 paragraphs framing the concrete problem this lesson solves]

## The Solution

[Core teaching — explanation, mental model, code examples]

::: bad-practice
[Pattern to avoid — with explanation of why]
:::

::: best-practice
[Pattern to follow — with explanation of why it works]
:::

## Exercise

[Numbered step-by-step hands-on activity — must be concrete and completable]

## Checkpoint

- [ ] I can [measurable outcome 1]
- [ ] I [completed concrete action 2]

---

[← Previous Lesson](/moduleN/LN-x-prev) · [Next Lesson →](/moduleN/LN-x-next)
```

### CSS Classes (existing — keep using)

| Class | Usage |
|-------|-------|
| `.bad-practice` | Negative example blocks |
| `.best-practice` | Positive example blocks |
| `.exercise` | Exercise section |
| `.checkpoint` | Checkbox-based checkpoint |
| `.lesson-badges` | Time + module badge row |
| `.navigation-footer` | Prev/Next navigation |
| `.needs-clarification` | Spec clarification highlights |

### Tone & Style

- Direct, action-oriented — no filler or fluff
- Every lesson has a concrete, mandatory exercise
- Time estimate visible on every lesson via badge
- Code examples must be complete and copyable
- Use concrete examples (not abstract "your app")

---

## 7. Story & Task Format

Stories and tasks are the output of the planning process. They live in `specification/story-[N]/`.

### Story — `specification/story-[N]/README.md`

```markdown
# Story [N]: [Story Title]

## Goal
One sentence describing what this story delivers.

## Scope
- [In-scope item 1]
- [In-scope item 2]

## Out of Scope
- [Explicitly excluded item]

## Acceptance Criteria
- [ ] [Measurable criterion 1]
- [ ] [Measurable criterion 2]

## Dependencies
Story [X] must be complete before this starts. (or: None)

## Estimated Effort
[S = <1hr | M = 1–3hr | L = 3hr+]
```

### Tasks — `specification/story-[N]/tasks.md`

```markdown
# Tasks — Story [N]: [Story Title]

## Context
[1–2 sentences for Agent Mode: what this story is about and which files are in scope]

## Tasks

### Task 1: [Task title]
**File(s)**: `path/to/file.md`
**Action**: Create | Edit | Delete
**Details**:
- [Specific requirement 1]
- [Specific requirement 2]

**Definition of Done**:
- [ ] File exists at correct path
- [ ] Content matches specification

### Task 2: ...
```

---

## 8. TBD — Pending Specification

> Use `.github/prompts/workshop-overhaul-planning.prompt.md` in VS Code Copilot to discuss and fill these sections.  
> Each item below should become one or more stories in `specification/story-[N]/`.

- [x] **M1 detailed content** — Specified in Section 10. L1.1 = wrong-way build attempt (fixed prompt, 2 runs, follow-up notes). L1.2 = gap analysis with 3 categorized failure signals mapped to practices. _(Story 01 — done)_
- [x] **M2 detailed content** — Specified in Section 11. 3 lessons (L2.1 Instructions ~7 min, L2.2 Agents ~8 min, L2.4 Plan vs Agent Mode ~10 min). L2.3 Skills deferred. All exercises use study planner continuity. _(Story 02 — done)_
- [x] **M3 detailed content** — Specified in Section 12. 5 lessons (L3.1 setup ~7 min, L3.2 Constitution ~5 min, L3.3 full workflow ~10 min, L3.4 clarification ~4 min, L3.5 spec-to-code ~4 min). NEEDS CLARIFICATION flags on exact spec-kit commands. _(Story 03 — done)_
- [x] **M4 detailed content** — Specified in Section 13. 2 lessons (L4.1 MCP concepts + setup ~5 min, L4.2 write/read loop ~5 min). Push Epic + Tasks to Issues; read Issue as Copilot context. _(Story 04 — done)_
- [x] **M5 detailed content** — Specified in Section 14. 3 lessons: L5.1 full simulation ~4 min, L5.2 use-case kickoff ~7 min, L5.3 progressive automation bonus ~4 min. 3 templates: Certification Study Tracker, WorkIQ Productivity Dashboard, Team Retrospective Tool. _(Story 05 — done)_
- [x] **Resources rewrite** — Cheatsheet rewritten (module-aligned quick reference); FAQ rewritten (setup, MCP, spec workflow, navigation). _(docs implementation — done)_
- [x] **VitePress config** — Sidebar/nav updated to M1–M5 + Resources structure; group A/B/C removed. _(docs implementation — done)_
- [ ] **GitHub Actions** — Confirm or update deployment workflow for new structure
- [x] **Home page rewrite** — Dual entry CTAs (Start from Beginning / Jump to Spec-Driven Dev), 5 module feature cards, workshop flow table. _(docs implementation — done)_
- [ ] **Starter template** — Decide linking / creation strategy for `spec-driven-learning-template`
- [x] **Old content removal** — `docs/groupA/`, `docs/groupB/`, `docs/groupC/` deleted. _(docs implementation — done)_

---

## 10. Module 1 — Detailed Design

### Overview

| Lesson | Title | Duration | Focus |
|--------|-------|----------|-------|
| L1.1 | The Vibing Trap | 5 min | Wrong-way hands-on build attempt |
| L1.2 | The Three Pillars | 5 min | Gap analysis mapped to practices |

### Lesson Responsibilities

- **L1.1 — Wrong-way hands-on**: Participants experience unpredictable AI output firsthand by running a fixed prompt with no instructions, agents, or specs. The lesson reveals the vibing trap through lived experience, not lecture.
- **L1.2 — Reflection and mapping**: Participants analyze what went wrong in L1.1, categorize failure signals, and map each signal to the practice that would fix it (Instructions, Agents, Skills, or Specs).

### Pedagogical Constraint

Every step in M1 must define:

1. What to do (exact action)
2. Expected result (what to look for)
3. What the result means (why it matters)

No step should be open-ended or optional.

---

### L1.1 — The Vibing Trap: Fixed Script and Run Protocol

#### Fixed Prompt (verbatim — do not modify)

```
Build a study planner with progress tracking.
```

#### Run Protocol

1. Open GitHub Copilot Agent Mode (no custom instructions, no agents, no specs loaded).
2. Paste the fixed prompt exactly as written.
3. Run it. Do not add context, clarify, or iterate.
4. Write a follow-up note (see format below).
5. Repeat steps 2–4 a second time with the same prompt and no changes.

**Requirement**: Exactly **2 runs** with the identical prompt and no added context between runs.

#### Follow-Up Note Format (required after each run)

```
Run [1 or 2] follow-up note:
- Output summary: [1–2 sentences describing what Copilot generated]
- Mismatch: [What was missing, wrong, or unexpected vs. a real usable study planner]
- Confidence: [1–5]
```

**Confidence guidance**: 1 = very low confidence (output was mostly unusable or unclear), 5 = high confidence (output felt correct and complete). Use intermediate values as needed.

---

### L1.2 — The Three Pillars: Reflection Structure

#### Failure Signal Requirements

- Identify a **minimum of 3 failure signals** from the L1.1 runs.
- Include **at least one signal from each of the following categories**:
  - **Requirements gap** — The prompt lacked specificity; AI had to guess intent.
  - **Technical mismatch** — The generated code or structure was inconsistent, incorrect, or didn't match the expected tech stack.
  - **Quality/risk issue** — The output had quality problems: missing error handling, security concerns, no tests, or brittle structure.

#### Reflection Format

For each failure signal, write one bullet entry using this format:

```
- Category: [Requirements gap | Technical mismatch | Quality/risk issue]
  Observation: [What you noticed in the output]
  Why it happened: [Root cause — what was missing from the prompt or context]
  Which practice fixes it: [Instructions | Agents | Skills | Specs]
```

**Requirement**: Each signal must map to exactly one practice: Instructions, Agents, Skills, or Specs.

#### No Transition Checkpoint

L1.2 does **not** end with an explicit transition checkpoint. The reflection exercise is the terminal activity of M1; participants move directly to M2 without a formal sign-off step.

---

## 11. Module 2 — Detailed Design

### Overview

| Lesson | Title | Duration | Focus |
|--------|-------|----------|-------|
| L2.1 | Instructions | ~7 min | Workspace + file-specific instruction setup |
| L2.2 | Agents | ~8 min | Custom agent creation and role decision patterns |
| L2.4 | Plan vs Agent Mode | ~10 min | Hands-on mini-feature via Plan then Agent Mode |

**Total: ~25 min — 3 lessons**

> **Note**: L2.3 Skills is deferred. Skills content is out of scope for the 90-minute workshop and will be addressed in an optional extension module.

---

### M2 Primary Outcome and Pedagogical Direction

**Primary outcome**: By the end of M2, participants have a properly configured working environment for AI-assisted development — workspace instructions, file-specific instructions, two custom agents, and one mini-feature implemented using Plan Mode + Agent Mode.

**Framing**: M2 teaches best practices *before* spec-driven thinking. This is intentional: participants should know how to configure the AI environment reliably before they learn to drive it with specs (M3). M2 is about setup, not strategy.

**Contrast**:
- M1 = failure first (vibing trap, no setup)
- M2 = best-practices setup (instructions, agents, decision patterns)
- M3 = spec-driven development (structured workflow with spec-kit)

**Study planner continuity**: All M2 exercises build on the study planner project started in M1. Participants improve the same project rather than starting from scratch.

**Pedagogical constraint**: Every M2 step must define what to do, expected result, and what the result means — same rule as M1.

---

### L2.1 — Instructions: Lesson Details

**Objective**: Create and understand the two types of GitHub Copilot instructions — workspace-level and file-specific — and know when to use each.

**Time**: ~7 min

**Exercise — two-part**:

1. Create `.github/copilot-instructions.md` (workspace-level instructions):
   - Use the pre-built prompt below to generate initial content:
     ```
     Generate a GitHub Copilot workspace instructions file for a study planner project.
     The project uses TypeScript. Include: project goals, tech stack, coding standards,
     and what Copilot should always/never do.
     ```
   - Review the output and adjust to match the actual study planner project context.
   - Save the file.

2. Create `.github/instructions/config.instructions.md` (file-specific instructions):
   - This file should contain instructions for configuration files only (e.g., `*.config.ts`, `*.json`).
   - Use frontmatter to scope it: `applyTo: '**/*.config.ts,**/*.json'`
   - Add at least 2 concrete rules relevant to config files in the study planner.

**When to use each type**:
- Workspace instructions (`.github/copilot-instructions.md`): always active for all files in the project — for project-wide standards, stack, and never-do rules.
- File-specific instructions (`.github/instructions/*.instructions.md`): scoped to specific file types — for targeted rules that only apply in a limited context.

**Expected output**: Two instruction files, both configured for the study planner project.

---

### L2.2 — Agents: Lesson Details

**Objective**: Create two custom agents and understand when to create role-specific agents instead of using default Copilot.

**Time**: ~8 min

**Exercise — create two agents**:

1. **Code Reviewer** — file: `.github/agents/code-reviewer.agent.md`
   - Role: reviews code for quality, readability, and adherence to project standards.
   - Must include: model, description, and system prompt scoped to the study planner codebase.

2. **Testing Advocate** — file: `.github/agents/testing-advocate.agent.md`
   - Role: suggests tests, identifies untested logic, and writes test scaffolding.
   - Must include: model, description, and system prompt focused on test coverage for the study planner.

**Decision patterns — when to create a custom agent**:
- A task requires consistent, repeatable behavior that default Copilot doesn't enforce.
- The task has a well-defined role with specific constraints (e.g., "only suggest tests, never modify implementation").
- The task will be reused across sessions or by multiple team members.

**Expected output**: Two `.agent.md` files committed to the study planner project repository.

---

### L2.4 — Plan vs Agent Mode: Lesson Details

**Objective**: Experience the difference between Plan Mode (strategy) and Agent Mode (execution) in a single hands-on mini-task.

**Time**: ~10 min

**Exercise — two-step mini-task**:

1. **Plan Mode step** — plan a new feature for the study planner:
   - Open Copilot Plan Mode.
   - Prompt: `Plan how to add a daily goal reminder feature to the study planner. List the files to create or modify and the steps in order.`
   - Review the plan. Do not implement yet.
   - Expected result: A numbered list of implementation steps with file references.

2. **Agent Mode step** — implement the plan:
   - Switch to Agent Mode.
   - Instruct Copilot to implement the plan from step 1.
   - Let it execute. Review each change before accepting.
   - Expected result: The daily goal reminder feature is partially or fully implemented across the files referenced in the plan.

**Workflow rule**: Plan Mode is for strategy and validation. Agent Mode is for execution. Never jump to Agent Mode without a plan for non-trivial features.

**Expected output**: One mini-feature (daily goal reminder) completed on the study planner project using both modes in sequence.

---

### M2 Checkpoint

At the end of M2, participants must have all of the following:

| Artifact | File path | Status |
|----------|-----------|--------|
| Workspace instructions | `.github/copilot-instructions.md` | Created |
| File-specific instructions | `.github/instructions/config.instructions.md` | Created |
| Code Reviewer agent | `.github/agents/code-reviewer.agent.md` | Created |
| Testing Advocate agent | `.github/agents/testing-advocate.agent.md` | Created |
| Mini-feature | Daily goal reminder on study planner | Implemented |

All artifacts are part of the study planner project. Participants completing M2 are ready to enter M3 (Spec-Driven Development), where they will apply a structured workflow to extend the same project with a proper specification.

---

---

## 12. Module 3 — Detailed Design

### Primary Outcomes

By the end of M3, participants will:
1. Understand spec-driven development and why it produces more predictable AI output than ad-hoc prompting.
2. Write specs using spec-kit's native structure starting from Constitution.
3. Run the full spec-kit lifecycle end-to-end: Constitution → Epic → Plan → Tasks → Implement.

**Standalone entry point**: M3 is valid as a jump-in point for participants who already know Copilot basics. L3.1 includes a 1-minute context-setter for these participants.

**Study planner continuity**: M3 uses the same study planner project and same repository as M1/M2. Participants extending the same project rather than starting from scratch.

**Storage model**: Markdown-first — spec-kit artifacts (Constitution, Epic, Tasks) are local markdown files committed to the repository.

> **NEEDS CLARIFICATION**: Verify spec-kit's actual storage format — local markdown files only, GitHub Issues integration, or both. Resolve before writing lesson files under `docs/module3/`.

---

### Overview

| Lesson | Title | Duration | Focus |
|--------|-------|----------|-------|
| L3.1 | Cost of No Specs + spec-kit Setup | ~7 min | Context-setter (for jump-in) + install and configure spec-kit |
| L3.2 | Writing Specs — The Constitution | ~5 min | spec-kit native structure; drafting a Constitution |
| L3.3 | The spec-kit Workflow | ~10 min | Full lifecycle hands-on: Constitution → Epic → Plan → Tasks → Implement |
| L3.4 | The Clarification Step | ~4 min | Built-in spec-kit clarification; run → read → resolve → record |
| L3.5 | From Spec to Code | ~4 min | speckit implement + Agent Mode + Code Reviewer agent |

**Total: ~30 min — 5 lessons**

---

### L3.1 — Cost of No Specs + spec-kit Setup: Lesson Details

**Objective**: Provide context for standalone entrants, then install and configure spec-kit on the study planner repository.

**Time**: ~7 min

**Part 1 — Context-setter (~1 min, standalone entrants only)**:
- What spec-driven development is: writing structured specs before generating code, so the AI has unambiguous instructions instead of guesses.
- Why it matters: reduces output variance, makes AI output reviewable and traceable.
- How M3 fits: M3 is the spec-driven development module — by the end, participants have run a complete spec-kit workflow on a real project.

**Part 2 — spec-kit Installation and Configuration (~6 min)**:

1. Install spec-kit globally:
   ```bash
   npm install -g @github/spec-kit
   ```
   Expected result: `speckit` command is available. Verify with `speckit --version`.

2. Initialize spec-kit in the study planner repository:
   ```bash
   speckit init
   ```
   Expected result: a `specification/` directory is created with a starter `spec.md` file.

3. Confirm the initialization was successful by opening `specification/spec.md` and verifying its contents match the spec-kit starter template.

> **NEEDS CLARIFICATION**: Verify exact install command (`@github/spec-kit` vs `spec-kit` vs another package name) and exact init command. Confirm what files `speckit init` creates. Resolve before writing L3.1 lesson file.

**Expected output**: spec-kit installed and scaffolded in the study planner repository. Participant is ready to write their first Constitution.

---

### L3.2 — Writing Specs — The Constitution: Lesson Details

**Objective**: Understand spec-kit's native spec structure and draft a Constitution for the study planner project.

**Time**: ~5 min

**The spec-kit structure hierarchy**:
- **Constitution** — the team agreement: project goals, principles, tech stack, non-negotiables. Anchors all other spec artifacts.
- **Epic** — a major deliverable scoped to a theme (e.g., "Progress Tracking Feature").
- **Feature** — a smaller slice of an Epic (defined and consumed inside L3.3).
- **Task** — an atomic, implementable unit produced from running the spec-kit plan command.

**Exercise**:
1. Open `specification/spec.md` (created by `speckit init`).
2. Fill in the Constitution section for the study planner:
   - Project name and one-sentence goal.
   - Tech stack (TypeScript, Node.js, or as appropriate).
   - At least 2 non-negotiable principles (e.g., "All features must have tests", "No external APIs without explicit approval").
3. Save and review — the Constitution is now the anchor for the full L3.3 workflow.

> **NEEDS CLARIFICATION**: Verify exact spec-kit markdown format and required sections for Constitution, Epic, Feature, and Task. Confirm whether `speckit init` pre-populates headings/frontmatter or creates an empty file. Resolve before writing L3.2 lesson file.

**Expected output**: A completed Constitution section in `specification/spec.md` for the study planner project.

---

### L3.3 — The spec-kit Workflow: Lesson Details

**Objective**: Run every step of the spec-kit lifecycle hands-on, applied to the study planner project.

**Time**: ~10 min (core lesson of M3)

**Full workflow — all steps are mandatory**:

1. **Constitution** — already drafted in L3.2. Use it as the anchor.
   - Expected result: `specification/spec.md` has a complete Constitution section.
   - Meaning: every downstream artifact is consistent with this agreement.

2. **Epic** — create an Epic for the study planner:
   ```bash
   speckit epic "Progress Tracking Feature"
   ```
   Expected result: an Epic file is created under `specification/` linked to the Constitution.
   Meaning: the work is scoped to a named deliverable, not a vague goal.

3. **Plan** — break the Epic into Features:
   ```bash
   speckit plan
   ```
   Expected result: a set of Feature definitions is generated under the Epic.
   Meaning: the AI has proposed a work breakdown; participants review and accept or edit before moving forward.

4. **Tasks** — generate atomic, implementable tasks from the Features:
   ```bash
   speckit tasks
   ```
   Expected result: a `tasks.md` (or equivalent) is created with individual tasks, each with a clear scope.
   Meaning: tasks are now ready to hand to Copilot Agent Mode one at a time.

5. **Implement** — run the first task through spec-to-code (handled in L3.5).
   - At this step: confirm the task list is complete and at least one task is selected for L3.5.

> **NEEDS CLARIFICATION**: Verify exact command names for `speckit epic`, `speckit plan`, `speckit tasks`. Confirm output file paths and formats. Resolve before writing L3.3 lesson file.

**Expected output**: Participants have run all 5 steps at least once and have a complete spec-kit artifact set (Constitution, Epic, Features, Tasks) for the study planner project.

---

### L3.4 — The Clarification Step: Lesson Details

**Objective**: Run spec-kit's built-in clarification step to identify and resolve ambiguities in the spec before implementation.

**Time**: ~4 min

**How clarification works**:
- The clarification step is **automatic and built into spec-kit** — it is not a manual annotation pattern.
- spec-kit analyzes the spec artifacts and flags items that are ambiguous, underspecified, or contradictory.
- Participants do not need to write `:::needs-clarification:::` blocks manually.

**Exercise workflow** — run → read → resolve → record:

1. **Run** the clarification step:
   ```bash
   speckit clarify
   ```
   Expected result: a list of flagged items is output, each with a short explanation of why it needs clarification.

2. **Read** each flagged item and understand what is underspecified.

3. **Resolve** at least 1 flagged item by making a decision and updating the spec artifact (e.g., add specificity to a Feature definition).

4. **Record** the decision back in the spec — update the relevant section so the ambiguity is gone.

> **NEEDS CLARIFICATION**: Verify exact clarification command name (`speckit clarify` vs `speckit review` vs agent-invoked). Confirm whether output is printed to terminal, written to a file, or both. Resolve before writing L3.4 lesson file.

**Expected output**: Participants have run the clarification step, identified at least one ambiguity in their study planner spec, and resolved it.

---

### L3.5 — From Spec to Code: Lesson Details

**Objective**: Implement one study planner task from the spec-kit task list using speckit implement, Copilot Agent Mode, and the Code Reviewer agent from M2.

**Time**: ~4 min

**Three-step implementation flow** — all steps are mandatory:

1. **Run speckit implement** to begin a task:
   ```bash
   speckit implement
   ```
   Expected result: spec-kit activates the selected task and provides its context to Copilot.

   > **NEEDS CLARIFICATION**: Verify exact command: `speckit implement`, `speckit start`, `speckit run`, or other. Confirm whether the command opens Agent Mode automatically or requires manual switch. Resolve before writing L3.5 lesson file.

2. **Implement using Copilot Agent Mode** with the task spec as context:
   - Switch to Copilot Agent Mode if not already active.
   - The task spec (from spec-kit) is the only context — do not add extra prompts.
   - Let Agent Mode execute the implementation. Review each file change before accepting.
   - Expected result: the task is implemented across the relevant study planner files.

3. **Run the Code Reviewer agent** (created in M2) to validate the output:
   - Invoke the Code Reviewer agent on the changed files.
   - Review its feedback and address any blocking issues before accepting the implementation.
   - Expected result: implementation passes Code Reviewer review.

**Future extension (not in M3 scope)**: The Code Reviewer agent can be wired into spec-kit automatically via GitHub MCP so it runs after each `speckit implement` invocation without manual invocation. This is covered in M4 or as a post-workshop extension.

**Expected output**: One study planner task implemented from spec, reviewed by the Code Reviewer agent, and committed to the repository.

---

### M3 Checkpoint

At the end of M3, participants must have all of the following:

| Artifact | Description | Status |
|----------|-------------|--------|
| spec-kit installed | `speckit --version` succeeds | Done |
| Constitution | Drafted in `specification/spec.md` | Done |
| Epic | Created via `speckit epic` | Done |
| Features + Tasks | Generated via `speckit plan` + `speckit tasks` | Done |
| Clarification run | At least 1 ambiguity resolved | Done |
| Implemented task | One task completed with Agent Mode + Code Reviewer | Done |

Participants completing M3 are ready for M4 (GitHub MCP), where they will push spec-kit artifacts to GitHub Issues and use Issues as Copilot implementation context.

---

## 13. Module 4 — Detailed Design

### Overview

| Lesson | Title | Duration | Focus |
|--------|-------|----------|-------|
| L4.1 | What is MCP | ~5 min | MCP concepts + GitHub MCP setup and verification |
| L4.2 | GitHub MCP in Practice | ~5 min | Push spec-kit artifacts to Issues; read Issue back as Copilot context |

**Total: ~10 min — 2 lessons**

**Study planner continuity**: M4 uses the spec-kit artifacts produced in M3 (Epic, Tasks) applied to the same study planner repository.

---

### L4.1 — What is MCP: Lesson Details

**Objective**: Understand what MCP is at a practical level and configure GitHub MCP in VS Code.

**Time**: ~5 min

**Conceptual MCP explanation**:

- **What MCP is**: Model Context Protocol (MCP) is an open standard that lets AI agents connect to external tools and data sources through a structured server interface. Instead of copy-pasting context into prompts, MCP servers expose actions (read, write, query) that Copilot can call directly.

- **Why it matters for AI-agent workflows**: MCP closes the gap between where your work lives (GitHub Issues, Jira, databases) and what your AI agent knows. With MCP, Copilot can create Issues from a spec, read an Issue for implementation context, or check PR status — without leaving the editor.

- **Concrete examples**:
  - GitHub MCP: create and read Issues, manage PRs, list branches — all from Copilot chat.
  - Database MCP: query a live database schema to generate accurate SQL or migration files.
  - Jira MCP: read a ticket and use it as implementation context without copy-paste.

**Hands-on GitHub MCP setup**:

1. **Configure the MCP server** — add GitHub MCP to your VS Code MCP configuration:
   ```json
   {
     "mcpServers": {
       "github": {
         "command": "npx",
         "args": ["-y", "@modelcontextprotocol/server-github"],
         "env": {
           "GITHUB_PERSONAL_ACCESS_TOKEN": "<your-token>"
         }
       }
     }
   }
   ```
   Add this to `.vscode/mcp.json` in the study planner repository.

2. **Authenticate** — create a GitHub Personal Access Token (PAT) with `repo` scope and add it to the configuration above.

3. **Verify connection** — in Copilot chat (Agent Mode), ask:
   ```
   List the open Issues in this repository.
   ```
   Expected result: Copilot lists Issues (or confirms the repository is empty) without leaving VS Code.
   Meaning: GitHub MCP is configured and working.

**Expected output**: GitHub MCP configured, authenticated, and verified in the study planner repository.

---

### L4.2 — GitHub MCP in Practice: Lesson Details

**Objective**: Push spec-kit artifacts (Epic + Tasks) to GitHub Issues via MCP, then read one Issue back as Copilot implementation context.

**Time**: ~5 min

**Write workflow — push spec-kit artifacts to GitHub Issues**:

1. Open Copilot Agent Mode with GitHub MCP active.
2. Push the Epic as a GitHub Issue:
   - Prompt Copilot: `Create a GitHub Issue for the Epic from our spec-kit specification. Use the Epic title and description.`
   - Expected result: a new Issue is created in the repository with the Epic's title and body.
   - Meaning: the Epic is now tracked in GitHub and visible to the full team.

3. Push the Tasks as GitHub Issues:
   - Prompt Copilot: `Create GitHub Issues for each task in our spec-kit tasks list. Use the task title and scope as the Issue body.`
   - Expected result: one Issue per task is created.
   - Meaning: each task is now an independently trackable unit of work.

**Read workflow — use an Issue as Copilot implementation context**:

1. Select one of the Task Issues just created.
2. Pull the Issue context into Copilot:
   - Prompt: `Read Issue #[N] and use it as context for the next implementation step.`
   - Expected result: Copilot confirms it has read the Issue and is ready to implement based on that context.
3. Ask Copilot to implement one small change based solely on the Issue context:
   - Expected result: Copilot produces an implementation diff tied to the Issue content.
   - Meaning: the loop is closed — spec → Issue → Copilot context → implementation action.

**Scope boundary**:
- Automatic wiring of the Code Reviewer agent into spec-kit commands via MCP is **deferred to M5 or post-workshop extension**. In M4, Code Reviewer invocation remains manual.

**Expected output**:

| Artifact | Status |
|----------|--------|
| GitHub MCP configured | Done (L4.1) |
| Epic pushed to Issues | Done |
| Tasks pushed to Issues | Done |
| One Issue used as Copilot context | Done |

Participants completing M4 are ready for M5 (Integration & Use Cases), where they will run a complete end-to-end workflow and choose a hackathon project template to kick off.

---

## 14. Module 5 — Detailed Design

### Positioning

M5 is a **bonus/advanced module** with flexible timing. It is the last module in the workshop but is designed to be valuable even if participants only complete part of it.

**Motivation theme**: Win faster by reducing chaos and increasing confidence. Every step in M5 adds structure that makes the next action clearer, the AI output more predictable, and the review process faster.

**Priority**: concept clarity first, hands-on second, achievable outcomes always. No step should leave participants stranded or require knowledge not covered in M1–M4.

---

### Overview

| Lesson | Title | Recommended Duration | Focus |
|--------|-------|---------------------|-------|
| L5.1 | Full Workflow Integration | ~4 min | End-to-end simulation: spec → plan → task → implement → review |
| L5.2 | Hackathon Use-Case Kickoff | ~7 min | Choose a template, complete kickoff checklist |
| L5.3 | Progressive Automation (Bonus) | ~4 min | Baseline automation + optional advanced extension |

**Total recommended: ~15 min** — times are guidance, not strict limits.

---

### L5.1 — Full Workflow Integration: Lesson Details

**Objective**: Run a complete compressed end-to-end simulation of the M1–M4 workflow on the study planner project, cementing the connection between each step.

**Time**: ~4 min

**Simulation workflow** — each step has an expected result and rationale:

1. **Spec** — confirm the study planner has a complete spec-kit Constitution and at least one Epic in `specification/`.
   - Expected result: `specification/spec.md` exists with a filled Constitution.
   - How this reduces chaos: everyone working on the project starts from the same agreement.

2. **Plan** — run `speckit plan` and confirm Features and Tasks are up to date.
   - Expected result: tasks list reflects the current Epic.
   - How this increases confidence: the AI has a work breakdown, not a vague directive.

3. **Task** — select one open task from the tasks list to implement.
   - Expected result: one task is identified and its spec is clear.
   - How this reduces chaos: scope is explicit — one thing at a time.

4. **Implement** — run `speckit implement` and use Copilot Agent Mode to execute the task.
   - Expected result: task is implemented and diff is staged.
   - How this increases confidence: implementation is driven by spec, not by prompt instinct.

5. **Review** — invoke the Code Reviewer agent on the staged changes.
   - Expected result: Code Reviewer feedback is reviewed; any blocking issues addressed before commit.
   - How this reduces chaos: review is structured and repeatable, not ad hoc.

**Expected output**: One task completed through the full spec → implement → review loop on the study planner.

---

### L5.2 — Hackathon Use-Case Kickoff: Lesson Details

**Objective**: Choose one of the three predefined hackathon project templates and complete the kickoff checklist for it.

**Time**: ~7 min

**The three predefined templates**:

| # | Template Name | Theme |
|---|---------------|-------|
| 1 | Certification Study Tracker | Track progress through a certification curriculum with milestones |
| 2 | WorkIQ Productivity Dashboard | Visualize team productivity metrics and highlight blockers |
| 3 | Team Retrospective Tool | Facilitate structured retrospectives with action tracking |

**Kickoff checklist** — required for each template, completed hands-on:

For the chosen template, define and write down:

1. **First objective** — one sentence: what is the single most important thing this project must do?
2. **First feature scope** — what is the first feature to build? Describe it in 2–3 sentences.
3. **First task candidate** — what is the smallest atomic unit of work inside that feature?
4. **First review gate** — what condition must the first task satisfy before it is considered done?

**Hands-on requirement**: Participants must select a template, complete all four checklist items in writing, and confirm their kickoff is ready to hand to spec-kit (i.e., the first objective and feature scope are specific enough to become a Constitution + Epic).

**Expected output**: One template selected, kickoff checklist completed, ready to run `speckit init` on the new project.

---

### L5.3 — Progressive Automation Bonus: Lesson Details

**Objective**: Configure baseline post-implementation automation and optionally extend to a full review → traceability loop.

**Time**: ~4 min

**Progressive path — two levels**:

**Level 1 — Baseline automation (mandatory for this lesson)**:
- Configure the Code Reviewer agent to run automatically after each `speckit implement` completes.
- Implementation: add a VS Code task or Copilot instruction that triggers the Code Reviewer on the most recently changed files after any `speckit implement` invocation.
- Expected outcome: Code Reviewer runs without manual invocation after every implementation step.

**Level 2 — Advanced extension (optional)**:
- Extend the automation loop to include:
  - After implementation → auto Code Reviewer review.
  - After review passes → auto update the linked GitHub Issue status via MCP (mark as "In Review" or close).
  - After Issue update → traceability log appended to `specification/` showing the spec → task → implementation → review chain.
- Expected outcome: the full loop from spec artifact to GitHub Issue to implementation to review to traceability is automated.

**Mandatory vs Optional**:
- Level 1 (auto Code Reviewer trigger): **mandatory** for L5.3.
- Level 2 (full loop automation): **optional** — for participants who complete Level 1 with time remaining.

**Expected output (Level 1)**: Code Reviewer runs automatically post-implementation on the chosen project.
**Expected output (Level 2)**: Full automation loop configured; spec artifacts, Issues, and implementation are traceable end-to-end.

---

### M5 Checkpoint

At the end of M5, participants have:

| Artifact | Status |
|----------|--------|
| Full workflow simulation completed | Done (L5.1) |
| Hackathon template selected | Done (L5.2) |
| Kickoff checklist completed | Done (L5.2) |
| Baseline automation configured | Done (L5.3) |
| Advanced loop (optional) | Optional |

**Handoff readiness**: Participants leaving M5 have a selected project, a completed kickoff plan, and a working automated review loop. They are ready to run a spec-driven hackathon project from the first day.

---

## 9. Definition of Done (Workshop)

The overhaul is complete when:

- [ ] All 5 modules are live on GitHub Pages with correct content
- [ ] Both home entry points route correctly (M1 and M3)
- [ ] All lessons have working prev/next navigation
- [ ] VitePress builds without errors (`npm run docs:build`)
- [ ] GitHub Actions deploys automatically on push to `main`
- [ ] All old group A/B/C content is removed
- [ ] Resources (cheatsheet, FAQ) reflect new module structure
