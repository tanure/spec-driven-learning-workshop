# Tasks - Story 01: Module 1 Detailed Specification

## Context
This story finalizes Module 1 in the master specification. The only file in scope is specification/spec.md. Output must be precise enough to hand over to Agent Mode for implementation of lesson content later.

## Tasks

### Task 1: Add a dedicated M1 detail subsection in spec
**File(s)**: specification/spec.md
**Action**: Edit
**Details**:
- Add a clearly titled section for Module 1 detailed design.
- Include explicit lesson split responsibilities: L1.1 wrong-way hands-on, L1.2 reflection and mapping to practices.
- Keep consistency with the existing module table.

**Definition of Done**:
- [x] M1 has a dedicated detailed section in specification/spec.md.
- [x] Lesson responsibilities are explicit and unambiguous.

### Task 2: Define L1.1 fixed script and run protocol
**File(s)**: specification/spec.md
**Action**: Edit
**Details**:
- Add the fixed prompt: Build a study planner with progress tracking.
- Require two runs with identical prompt and no added context.
- Add mandatory follow-up note after each run with: Output summary, Mismatch, Confidence (1-5).
- Add confidence guidance: 1 low confidence, 5 high confidence.

**Definition of Done**:
- [x] Prompt text is exact and fixed.
- [x] Two-run requirement is explicit.
- [x] Follow-up note format is explicit.
- [x] Confidence guidance is present.

### Task 3: Define L1.2 reflection structure and evidence categories
**File(s)**: specification/spec.md
**Action**: Edit
**Details**:
- Require minimum three failure signals.
- Enforce one signal per category: requirements gap, technical mismatch, quality/risk issue.
- Require bullet-list reflection format with fields: Category, Observation, Why it happened, Which practice fixes it.
- Require mapping to one practice per signal: Instructions, Agents, Skills, or Specs.

**Definition of Done**:
- [x] Minimum signal count is specified.
- [x] Category constraints are specified.
- [x] Reflection format and fields are specified.
- [x] Practice mapping requirement is specified.

### Task 4: Define timing and pedagogical constraints
**File(s)**: specification/spec.md
**Action**: Edit
**Details**:
- Set M1 time split to 5 min L1.1 and 5 min L1.2.
- State no explicit transition checkpoint at L1.2 end.
- Reinforce actionable learning rule: every step must define what to do, expected result, and what the result means.

**Definition of Done**:
- [x] Time split appears in M1 details.
- [x] No-transition-checkpoint rule is explicit.
- [x] Actionable step rule is explicit for M1.

### Task 5: Mark M1 TBD item as resolved or narrowed
**File(s)**: specification/spec.md
**Action**: Edit
**Details**:
- Update Section 8 TBD item for M1 to reflect that M1 specification is now detailed.
- If keeping item open, narrow it to any remaining unresolved M1 detail only.

**Definition of Done**:
- [x] M1 TBD status reflects current decisions accurately.
- [x] No contradiction remains between M1 section and Section 8.