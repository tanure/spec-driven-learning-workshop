# Tasks - Story 03: Module 3 Detailed Specification

## Context
This story finalizes Module 3 in the master specification. The only file in scope is specification/spec.md. It covers the full spec-kit lifecycle applied to the study planner use case. Several decisions are marked NEEDS CLARIFICATION pending verification of spec-kit's actual command names and file formats — these must be resolved before lesson content under docs/module3/ is written.

## Tasks

### Task 1: Add Module 3 overall direction and outcomes
**File(s)**: specification/spec.md
**Action**: Edit
**Details**:
- State M3 primary outcomes:
  1. Understand spec-driven development concepts and why they matter
  2. Write specs using spec-kit native structure starting from Constitution
  3. Run full spec-kit lifecycle end-to-end: Constitution → Epic → Plan → Tasks → Implement
- State M3 is a valid standalone entry point for participants who skip M1/M2
- State M3 uses same study planner project and same repository as M1/M2
- State M3 storage model: markdown-first (NEEDS CLARIFICATION: verify spec-kit actual storage format — local markdown files vs GitHub Issues vs both)

**Definition of Done**:
- [x] M3 outcomes are explicit and distinct from M1 (failure-first) and M2 (best practices)
- [x] Standalone entry point is stated
- [x] Storage model is stated with NEEDS CLARIFICATION flag

### Task 2: Define M3 lesson structure and time allocation
**File(s)**: specification/spec.md
**Action**: Edit
**Details**:
- Set M3 to 5 lessons, ~30 min total
- Define per-lesson time: L3.1 ~7 min, L3.2 ~5 min, L3.3 ~10 min, L3.4 ~4 min, L3.5 ~4 min
- Update M3 row in module table to reflect finalized description

**Definition of Done**:
- [x] 5 lessons listed with explicit time allocation
- [x] Times sum to ~30 min
- [x] Module table updated

### Task 3: Define L3.1 — Context-setter and spec-kit setup
**File(s)**: specification/spec.md
**Action**: Edit
**Details**:
- L3.1 has two parts:
  1. ~1 min context-setter for standalone entrants: what spec-driven development is, why it matters, how M3 fits the workshop
  2. Step-by-step spec-kit installation and configuration: install command, verify installation, configure for the study planner project
- Time: ~7 min
- Output: spec-kit installed and ready to use on the study planner repo

**Definition of Done**:
- [x] Both parts of L3.1 are explicit
- [x] Install and verify steps are required (not optional)
- [x] Expected output is concrete

### Task 4: Define L3.2 — Writing specs (spec-kit native structure)
**File(s)**: specification/spec.md
**Action**: Edit
**Details**:
- L3.2 teaches the spec-kit native spec structure starting from Constitution
- Constitution is the team agreement document that anchors the full spec-kit workflow
- Structure progression: Constitution → Epic → Features (taught conceptually, applied in L3.3)
- Add NEEDS CLARIFICATION: exact spec-kit markdown file format and required sections for Constitution, Epic, Feature, and Task must be verified against spec-kit documentation before L3.2 content is written
- Time: ~5 min
- Output: participants understand the Constitution structure and have drafted one for the study planner

**Definition of Done**:
- [x] L3.2 teaches Constitution as the starting point explicitly
- [x] NEEDS CLARIFICATION flag is present for spec-kit format
- [x] Expected output is concrete

### Task 5: Define L3.3 — Full spec-kit workflow (core lesson)
**File(s)**: specification/spec.md
**Action**: Edit
**Details**:
- L3.3 is the core lesson: participants run every step hands-on
- Steps: Constitution → Epic → Plan → Tasks → Implement
- All steps applied to the study planner project
- Each step must show expected result and what it means
- Time: ~10 min (longest lesson in M3)
- Output: participants have completed all spec-kit lifecycle steps at least once

**Definition of Done**:
- [x] All 5 lifecycle steps are listed explicitly
- [x] Fully hands-on requirement is stated (no guided-observation shortcuts)
- [x] Expected output per step is concrete

### Task 6: Define L3.4 — spec-kit clarification step
**File(s)**: specification/spec.md
**Action**: Edit
**Details**:
- L3.4 teaches the built-in spec-kit clarification step (automatic, not a manual annotation pattern)
- Participants run the clarification step, read the output, resolve flagged items, record decisions back in the spec
- Add NEEDS CLARIFICATION: exact spec-kit clarification command (speckit clarify or agent-based) must be verified before L3.4 content is written
- Time: ~4 min
- Output: participants have run clarification on study planner spec and resolved at least one flagged item

**Definition of Done**:
- [x] Clarification is described as automatic/built-in, not manual
- [x] Run → read → resolve → record workflow is explicit
- [x] NEEDS CLARIFICATION flag is present for exact command

### Task 7: Define L3.5 — Spec to code
**File(s)**: specification/spec.md
**Action**: Edit
**Details**:
- L3.5 teaches implementation starting from a spec-kit task
- Three-step flow:
  1. Run speckit implement/start command to begin a task (NEEDS CLARIFICATION: exact command name)
  2. Implement using Copilot Agent Mode with the task spec as context
  3. Run the Code Reviewer agent from M2 manually to validate the output
- Note as future extension: Code Reviewer can be wired into spec-kit automatically via GitHub MCP + custom integration (covered in M4 or post-workshop extension)
- Time: ~4 min
- Output: one study planner task implemented from spec, reviewed by Code Reviewer agent

**Definition of Done**:
- [x] Three-step implementation flow is explicit
- [x] Code Reviewer agent from M2 is referenced as a required step
- [x] Future wiring extension is noted (not in scope for M3)
- [x] NEEDS CLARIFICATION flag is present for exact speckit command

### Task 8: Define M3 overall checkpoint and continuity
**File(s)**: specification/spec.md
**Action**: Edit
**Details**:
- State complete M3 output: participants have spec-kit installed, a full spec-kit lifecycle completed for the study planner, clarifications resolved, and one task implemented using speckit implement + Agent Mode + Code Reviewer
- Confirm participants are ready for M4 (MCP + GitHub Issues extension)
- Reinforce step-by-step actionable learning standard for M3

**Definition of Done**:
- [x] M3 checkpoint
