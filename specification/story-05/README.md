# Story 05: Module 5 Detailed Specification

## Goal
Define the complete, implementation-ready specification for Module 5 as a bonus/advanced integration module covering full workflow simulation, hackathon use-case kickoff with 3 predefined templates, and progressive automation.

## Scope
- Define Module 5 positioning: bonus/advanced, flexible timing
- Specify objectives, exercises, and expected outputs for L5.1, L5.2, L5.3
- Define recommended pacing: L5.1 ~4 min, L5.2 ~7 min, L5.3 ~4 min
- Define 3 predefined hackathon templates with kickoff checklist
- Define progressive automation path (baseline mandatory + advanced optional)
- Update M5 details inside specification/spec.md

## Out of Scope
- Writing lesson files under docs/module5/
- Defining M1–M4 content (covered in Stories 01–04)

## Acceptance Criteria
- [x] M5 is explicitly bonus/advanced with flexible timing
- [x] M5 motivation theme is explicit: win faster by reducing chaos and increasing confidence
- [x] 3-lesson structure: L5.1 core integration, L5.2 use-case kickoff, L5.3 automation bonus
- [x] Recommended pacing is explicit: 4 + 7 + 4 min
- [x] L5.1 simulation workflow is step-by-step with expected result per step
- [x] L5.2 lists exactly 3 templates: Certification Study Tracker, WorkIQ Productivity Dashboard, Team Retrospective Tool
- [x] L5.2 kickoff checklist is explicit: first objective, first feature scope, first task candidate, first review gate
- [x] L5.3 progressive structure is explicit: baseline mandatory + advanced optional
- [x] M5 final checkpoint lists all required artifacts
- [x] M5 TBD item in Section 8 is updated to reflect finalized decisions

## Dependencies
Stories 01–04 (M1–M4 specifications) should be complete.

## Estimated Effort
M = 1-3hr
**Details**:
- Define M4 as two lessons only:
  - L4.1: MCP concepts + GitHub MCP setup
  - L4.2: GitHub MCP in practice (write + read loop)
- Set explicit timing:
  - L4.1 ~5 min
  - L4.2 ~5 min
- Confirm total M4 duration is ~10 min

**Definition of Done**:
- [ ] M4 lesson structure is explicit and complete
- [ ] Timing is explicit and sums to ~10 min

### Task 2: Define L4.1 content (concept + setup)
**File(s)**: specification/spec.md
**Action**: Edit
**Details**:
- Add conceptual MCP explanation at practical depth:
  - What MCP is
  - Why it matters for AI-agent workflows
  - Concrete examples of MCP-enabled integrations
- Add hands-on setup steps for GitHub MCP:
  - Configure MCP server
  - Authenticate
  - Verify connection works
- Keep the lesson concise and step-by-step

**Definition of Done**:
- [ ] MCP concept section is practical and understandable
- [ ] Setup instructions are step-by-step and actionable
- [ ] Verification step is included

### Task 3: Define L4.2 write workflow (spec-kit artifacts to GitHub Issues)
**File(s)**: specification/spec.md
**Action**: Edit
**Details**:
- Specify that participants push only key artifacts:
  - Epic
  - Tasks
- Use GitHub MCP to create/update Issues from these artifacts
- Keep this aligned with study planner artifacts produced in M3
- Include expected result after each step

**Definition of Done**:
- [ ] Write workflow includes Epic + Tasks only
- [ ] Workflow is tied to M3 artifacts and study planner context
- [ ] Expected results are explicit

### Task 4: Define L4.2 read workflow (Issues back to Copilot context)
**File(s)**: specification/spec.md
**Action**: Edit
**Details**:
- Add the read-back flow:
  - Select one created GitHub Issue
  - Pull relevant Issue context via MCP
  - Use that context in Copilot for one implementation step
- Clarify this closes the loop:
  spec -> Issue -> Copilot context -> implementation action

**Definition of Done**:
- [ ] Read workflow is explicit and step-by-step
- [ ] One implementation step from Issue context is required
- [ ] Closed-loop narrative is clearly documented

### Task 5: Define M4 checkpoint and scope boundary
**File(s)**: specification/spec.md
**Action**: Edit
**Details**:
- Add final M4 checkpoint:
  - GitHub MCP configured
  - Epic + Tasks pushed to Issues
  - One Issue used as Copilot context for implementation
- Add explicit scope boundary:
  automatic Code Reviewer agent wiring into spec-kit is deferred to M5 or post-workshop extension

**Definition of Done**:
- [ ] M4 checkpoint is concrete and measurable
- [ ] Deferral note is explicit and unambiguous

### Task 6: Update TBD status for M4
**File(s)**: specification/spec.md
**Action**: Edit
**Details**:
- Update Section 8 M4 item from broad placeholder to finalized or narrowed state
- If any command-level details need verification, capture them as NEEDS CLARIFICATION items

**Definition of Done**:
- [ ] M4 TBD status reflects actual decisions
- [ ] Any unresolved technical details are flagged clearly
- [ ] No contradiction remains between Module 4 section and Section 8