# Tasks - Story 04: Module 4 Detailed Specification

## Context
This story finalizes Module 4 in the master specification. The primary file in scope is specification/spec.md. The module is intentionally concise: MCP concepts + GitHub MCP setup in L4.1, and spec-kit-to-Issues plus Issues-to-Copilot context loop in L4.2.

## Tasks

### Task 1: Finalize M4 structure and timing
**File(s)**: specification/spec.md
**Action**: Edit
**Details**:
- Define M4 as two lessons only:
  - L4.1: MCP concepts + GitHub MCP setup
  - L4.2: GitHub MCP in practice (write + read loop)
- Set explicit timing:
  - L4.1 ~5 min
  - L4.2 ~5 min
- Confirm total M4 duration is ~10 min

**Definition of Done**:
- [x] M4 lesson structure is explicit and complete
- [x] Timing is explicit and sums to ~10 min

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
- [x] MCP concept section is practical and understandable
- [x] Setup instructions are step-by-step and actionable
- [x] Verification step is included

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
- [x] Write workflow includes Epic + Tasks only
- [x] Workflow is tied to M3 artifacts and study planner context
- [x] Expected results are explicit

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
- [x] Read workflow is explicit and step-by-step
- [x] One implementation step from Issue context is required
- [x] Closed-loop narrative is clearly documented

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
- [x] M4 checkpoint is concrete and measurable
- [x] Deferral note is explicit and unambiguous

### Task 6: Update TBD status for M4
**File(s)**: specification/spec.md
**Action**: Edit
**Details**:
- Update Section 8 M4 item from broad placeholder to finalized or narrowed state
- If any command-level details need verification, capture them as NEEDS CLARIFICATION items

**Definition of Done**:
- [x] M4 TBD status reflects actual decisions
- [x] Any unresolved technical details are flagged clearly
- [x] No contradiction remains between Module 4 section and Section 8
