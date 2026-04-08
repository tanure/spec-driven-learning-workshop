# Story 02: Module 2 Detailed Specification

## Goal
Define the complete, implementation-ready specification for Module 2 (L2.1, L2.2, L2.4) focusing on environment preparation, best-practice setup, and decision-making patterns using the shared study planner use case.

## Scope
- Define Module 2 final lesson structure (3 lessons, not 4 — L2.3 Skills deferred)
- Specify objectives, exercises, and expected outputs for L2.1 Instructions, L2.2 Agents, L2.4 Plan vs Agent Mode
- Define time allocation: L2.1 ~7 min, L2.2 ~8 min, L2.4 ~10 min
- Define file structure and naming for instructions, agents, prompts
- Set observable expected results for each M2 exercise
- Align M2 outcomes with M1 continuity (improve the study planner)
- Update M2 details inside specification/spec.md

## Out of Scope
- Writing module lesson files under docs
- Defining M3–M5 content
- Creating L2.3 Skills content (deferred to later extension)

## Acceptance Criteria
- [x] M2 lesson structure is finalized: 3 lessons, ~25 min total
- [x] L2.1 Instructions outcome: `.github/copilot-instructions.md` (workspace) + `.github/instructions/config.instructions.md` (file-specific)
- [x] L2.1 includes pre-built prompt to accelerate learning
- [x] L2.1 teaches when/why to use workspace vs file-specific instructions
- [x] L2.2 Agents outcome: Code Reviewer agent + Testing Advocate agent created
- [x] L2.2 participants learn decision patterns for choosing agent roles
- [x] L2.4 is hands-on: Plan Mode to plan feature, then Agent Mode to implement
- [x] M2 mini-feature is completed as joint Plan+Agent Mode output
- [x] All M2 exercises continue with the study planner project from M1
- [x] Instructions emphasize step-by-step, actionable learning
- [x] L2.3 Skills is marked as deferred in specification/spec.md
- [x] M2 TBD status in Section 8 is updated to reflect finalized content

## Dependencies
Story 01 (M1 specification) should be complete

## Estimated Effort
M = 1-3hr