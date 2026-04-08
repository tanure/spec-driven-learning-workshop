# Tasks - Story 02: Module 2 Detailed Specification

## Context
This story finalizes Module 2 in the master specification. The only file in scope is specification/spec.md. Output must be precise enough to hand over to Agent Mode for implementation of lesson content under docs/module2/ later.

## Tasks

### Task 1: Update Module 2 table and lesson structure
**File(s)**: specification/spec.md
**Action**: Edit
**Details**:
- Update M2 time from ~25 min (implicit 4 lessons) to explicit 25 min with 3 lessons
- Set exact time per lesson: L2.1 ~7 min, L2.2 ~8 min, L2.4 ~10 min
- Remove or defer L2.3 reference with clear note: "L2.3 Skills deferred to extension beyond 90-min workshop"
- Preserve consistency with module table structure

**Definition of Done**:
- [x] M2 structure shows 3 lessons only
- [x] Time allocation is explicit
- [x] L2.3 deferral is stated clearly

### Task 2: Define M2 primary outcome and pedagogical direction
**File(s)**: specification/spec.md
**Action**: Edit
**Details**:
- State M2 primary outcome: environment/project preparation, setup mechanisms (high-level), decision-making patterns for choosing right primitives
- Emphasize: best practices before coding with AI, not spec-driven yet
- Confirm step-by-step, actionable learning requirement
- State continuous study planner use case from M1

**Definition of Done**:
- [x] M2 outcome is explicit and contrasts with M1 (failure first) and M3 (spec-driven)
- [x] Best-practices framing is clear
- [x] Study planner continuity is stated

### Task 3: Define L2.1 Instructions lesson details
**File(s)**: specification/spec.md
**Action**: Edit
**Details**:
- L2.1 objective: create and understand workspace + file-specific instructions
- Exercise: create `.github/copilot-instructions.md` (workspace) + `.github/instructions/config.instructions.md` (file-specific)
- Include pre-built prompt to accelerate creation
- Teach when/why to use each type of instruction
- Time: ~7 min
- Output: two instruction files configured for study planner project

**Definition of Done**:
- [x] L2.1 objectives and outputs are explicit
- [x] Both instruction file types are named correctly
- [x] File locations align with GitHub Copilot standards

### Task 4: Define L2.2 Agents lesson details
**File(s)**: specification/spec.md
**Action**: Edit
**Details**:
- L2.2 objective: create and understand when to use custom agents
- Exercise: create two agents:
  1. Code Reviewer (`.github/agents/code-reviewer.agent.md`)
  2. Testing Advocate (`.github/agents/testing-advocate.agent.md`)
- Teach decision patterns: when to create role-specific agents
- Time: ~8 min
- Output: two configured agents for study planner project

**Definition of Done**:
- [x] L2.2 objectives and agent roles are explicit
- [x] Agent file names and locations correct
- [x] Decision-making patterns for agent use are stated

### Task 5: Define L2.4 Plan vs Agent Mode lesson details
**File(s)**: specification/spec.md
**Action**: Edit
**Details**:
- L2.4 objective: understand when to use Plan Mode vs Agent Mode through hands-on experience
- Exercise: mini-task with two steps:
  1. Use Plan Mode to plan a feature for study planner
  2. Use Agent Mode to implement the planned feature
- Time: ~10 min (expanded from original 3 min due to L2.3 deferral)
- Teach workflow: Plan for strategy, Agent for execution
- Output: one mini-feature completed via both modes

**Definition of Done**:
- [x] L2.4 objectives and mini-task are explicit
- [x] Both Plan Mode and Agent Mode are required
- [x] Expected output is concrete

### Task 6: Define M2 overall checkpoint and continuity
**File(s)**: specification/spec.md
**Action**: Edit
**Details**:
- State complete M2 output/checkpoint: participants have configured workspace + file instructions, two agents, and one mini-feature implemented via Plan+Agent Mode
- Confirm all work is on the study planner project (continuation from M1)
- State participants are ready for M3 (spec-driven development)
- Reinforce step-by-step, actionable learning standard

**Definition of Done**:
- [x] M2 checkpoint lists all required artifacts
- [x] Study planner continuity is explicit
- [x] M3 readiness is stated
- [x] Actionable learning rule is restated for M2

### Task 7: Mark M2 TBD as resolved
**File(s)**: specification/spec.md
**Action**: Edit
**Details**:
- Update Section 8 TBD item for M2 to mark as resolved or narrowed
- If keeping open, specify only unresolved details

**Definition of Done**:
- [x] M2 TBD status reflects current finalized decisions
- [x] No contradiction between M2 section and Section 8