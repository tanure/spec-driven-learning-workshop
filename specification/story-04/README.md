# Story 04: Module 4 Detailed Specification

## Goal
Define the complete, implementation-ready specification for Module 4 (L4.1 and L4.2), focused on MCP fundamentals and practical GitHub MCP usage to bridge spec-kit outputs with GitHub Issues and Copilot implementation context.

## Scope
- Define Module 4 final lesson structure (2 lessons, ~10 min total)
- Specify objectives, exercises, and expected outputs for L4.1 and L4.2
- Define time allocation: L4.1 ~5 min, L4.2 ~5 min
- Cover MCP concepts at a practical level with concrete examples
- Cover GitHub MCP setup, authentication, and verification
- Define write and read workflows with GitHub Issues:
  - Write: push Epic + Tasks to Issues via MCP
  - Read: use an Issue as Copilot context for implementation
- Align M4 with M3 continuity (study planner + spec-kit artifacts)
- Update M4 details inside specification/spec.md

## Out of Scope
- Automatic wiring of Code Reviewer agent into spec-kit commands
- Full MCP protocol deep dive (server internals/protocol specification)
- Writing module lesson files under docs/module4/
- Defining M5 content details

## Acceptance Criteria
- [x] M4 lesson structure is finalized: 2 lessons, ~10 min total
- [x] L4.1 includes conceptual MCP explanation with examples
- [x] L4.1 includes hands-on GitHub MCP setup (configure, authenticate, verify)
- [x] L4.2 is hands-on and uses study planner artifacts from M3
- [x] L4.2 pushes Epic + Tasks to GitHub Issues via MCP
- [x] L4.2 demonstrates reading an Issue back into Copilot context for one implementation step
- [x] M4 checkpoint is explicit: MCP configured + Issues created + Issue used as implementation context
- [x] M4 clearly states Code Reviewer automatic wiring is deferred to M5 or post-workshop extension
- [x] M4 TBD in specification/spec.md is updated to resolved or narrowed status

## Dependencies
Story 03 (M3 specification) should be complete.

## Estimated Effort
M = 1-3hr