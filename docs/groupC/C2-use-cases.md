---
layout: lesson
title: "C2: Use Cases and High-Level Plans"
lesson_id: C2
group: C
group_size: 2
lesson_number: 2
duration: 8
prev: /groupC/C1-together
next:
---

Here are use cases you can adopt immediately after the workshop.

## Use Case 1: Certification Study Tracker

**Goal**: Track study sessions, quiz readiness, and exam deadlines.

High-level plan:
1. Constitution: stack, team norms, DoD.
2. Spec: Epic for tracker outcomes.
3. Clarify: define pass-probability rules.
4. Plan: features (session logging, quiz, dashboard).
5. Analyze: data model and scaling risk.
6. Tasks: API, UI, tests.
7. Implement: start tasks in branches.

## Use Case 2: Productivity Dashboard with Microsoft WorkIQ

**Goal**: Visualize team productivity and quality metrics from WorkIQ.

High-level plan:
1. Constitution: API auth policy, metrics naming standards.
2. Spec: Epic for dashboard outcomes.
3. Clarify: metric definitions and refresh interval.
4. Plan: connectors, filters, charts, exports.
5. Analyze: API limits, caching strategy.
6. Tasks: connector, chart components, CSV export.
7. Implement: branch-by-task and reviewer agent checks.

## Use Case 3: Team Retrospective Tool

**Goal**: Real-time retrospectives with voting and action items.

High-level plan:
1. Constitution: real-time conventions and privacy rules.
2. Spec: Epic for session lifecycle.
3. Clarify: voting model and moderation rules.
4. Plan: session management, board, votes, history.
5. Analyze: socket event contracts and race conditions.
6. Tasks: event handlers, persistence, tests.
7. Implement: incremental task delivery.

<div class="best-practice">
Use this pattern for all projects: Constitution → Spec → Clarify → Plan → Analyze → Tasks → Implement.
</div>

<div class="checkpoint">
<label><input type="checkbox" class="checkpoint-check"> I selected at least one use case and can start with the spec-kit flow.</label>
</div>

<a class="btn btn-success" href="https://YOUR-ORG.github.io/hackathon-docs">Join the main hackathon</a>
