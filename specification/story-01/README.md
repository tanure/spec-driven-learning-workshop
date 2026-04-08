# Story 01: Module 1 Detailed Specification

## Goal
Define the complete, implementation-ready specification for Module 1 (L1.1 and L1.2) using the shared study planner use case and failure-first learning flow.

## Scope
- Finalize detailed objectives for L1.1 and L1.2.
- Define step-by-step hands-on flow for L1.1 with a fixed wrong-way script.
- Define structured reflection flow for L1.2.
- Set observable expected results for each step.
- Align M1 outcomes with later modules (Instructions, Agents, Skills, Specs).
- Update M1 details inside specification/spec.md.

## Out of Scope
- Writing module lesson files under docs.
- Defining Module 2+ content details.
- VitePress navigation or infrastructure changes.

## Acceptance Criteria
- [x] specification/spec.md contains explicit M1 lesson split: L1.1 = wrong-way build attempt, L1.2 = gap analysis mapped to practices.
- [x] L1.1 includes fixed prompt text: Build a study planner with progress tracking.
- [x] L1.1 requires exactly 2 runs with the same prompt and no extra context.
- [x] L1.1 requires a follow-up note after each run with: Output summary, Mismatch, Confidence (1-5).
- [x] Confidence guidance is light: 1 = low confidence, 5 = high confidence.
- [x] L1.2 requires at least 3 failure signals.
- [x] L1.2 requires one signal from each category: requirements gap, technical mismatch, quality/risk issue.
- [x] L1.2 reflection format is bullet list with fields: Category, Observation, Why it happened, Which practice fixes it.
- [x] No explicit transition checkpoint is required at the end of L1.2.
- [x] M1 time split is 5 minutes for L1.1 and 5 minutes for L1.2.
- [x] M1 instructions emphasize fully actionable step-by-step learning with expected results and meaning.

## Dependencies
None

## Estimated Effort
M = 1-3hr