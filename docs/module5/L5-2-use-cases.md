---
title: "L5.2: Real-World Use Cases"
---

<div class="lesson-badges">
  <span class="badge-time">10 min</span>
  <span class="badge-module">Module 5 — Putting It All Together</span>
</div>

# L5.2: Real-World Use Cases

## The Problem

You built a study planner. The workflow you used works on the study planner. But you need to know it works on your actual project — which is probably not a study planner. Without concrete application to different project types, the workflow stays a workshop exercise.

## The Solution

Three project templates — each pre-scoped so you can start a spec immediately. Plus a kickoff checklist that covers the first 30 minutes of any new project regardless of type.

::: bad-practice
Waiting until you're starting a real project to figure out how to adapt the workflow. You'll be under pressure, the new project will have its own complexity, and "let me adapt the workshop workflow" becomes "I'll do it properly next time."
:::

::: best-practice
Pick the template closest to your next real project now. Sketch its constitution and first feature spec. You don't have to finish — you need to discover where the workflow fits naturally and where you have to adapt.
:::

## Templates

### Template 1: Certification Study Tracker

**Project type**: Learning management, personal productivity

```markdown
# Constitution
Project: A certification study tracker that organizes exam objectives,
tracks study progress, and surfaces weak areas.

Core values: Objective-first (tied to exam syllabus), measurable progress,
no gamification.

Stack: [your choice]

Out of scope: Social features, content hosting, exam simulation.
```

**First feature spec idea**: Import exam objectives from a structured text format (CSV or JSON), display them grouped by domain, mark individual objectives as studied.

**Differentiating AC to write**:
- [ ] Objectives display with domain grouping and progress percentage per domain
- [ ] Marking an objective as studied does not affect other objectives in the same domain
- [ ] Importing the same file twice does not create duplicates

---

### Template 2: WorkIQ Productivity Dashboard

**Project type**: Personal analytics, work journaling

```markdown
# Constitution
Project: A daily work journal that captures tasks completed, blockers,
and mood, and surfaces weekly patterns.

Core values: Friction-free entry (entry should take < 30 seconds),
honest data (no inferred or auto-filled entries), private by default.

Stack: [your choice]

Out of scope: Team features, integrations during initial build,
AI-generated journal entries.
```

**First feature spec idea**: Daily entry form with task list + optional blocker note + mood rating (1–5), stored with date.

**Differentiating AC to write**:
- [ ] Entry for today can be created, edited, and saved within a single screen
- [ ] Two entries cannot exist for the same calendar date
- [ ] Mood is optional; entries without a mood rating are stored and displayed correctly

---

### Template 3: Team Retrospective Tool

**Project type**: Collaboration, process improvement

```markdown
# Constitution
Project: A lightweight retrospective board for teams running async or
sync retros — capturing what went well, what didn't, and action items.

Core values: Simple to moderate (no login walls), time-boxed by design
(retro closes after X hours), action-item ownership.

Stack: [your choice]

Out of scope: Video integration, anonymous voting, enterprise auth.
```

**First feature spec idea**: Create a retro session with a name and expiry time. Participants add cards to three columns: Went Well, Improve, Action Items.

**Differentiating AC to write**:
- [ ] Session expires at the configured time; expired sessions are read-only
- [ ] Cards in the Action Items column require an owner (name field, not optional)
- [ ] A session can have multiple participants adding cards concurrently

---

## The Kickoff Checklist

Use this on the first 30 minutes of any new spec-driven project:

```markdown
## Spec-Driven Project Kickoff Checklist

### Constitution (10 min)
- [ ] One-sentence project description written
- [ ] Core values defined (2–4 items)
- [ ] Stack decisions locked
- [ ] Top 3 out-of-scope items identified

### First Feature Spec (15 min)
- [ ] Feature selected (not the whole product — one slice)
- [ ] One-sentence goal written
- [ ] AC written (minimum 4, all verifiable from outside)
- [ ] Out-of-scope items for this feature (minimum 2)
- [ ] Definition of done with at least one non-trivial criterion

### Tools Setup (5 min)
- [ ] `/speckit.specify <feature description>` run in Copilot Chat
- [ ] `.github/copilot-instructions.md` created
- [ ] Code Reviewer agent created
- [ ] GitHub MCP configured (if using GitHub Issues)
```

## Exercise

Pick one of the three templates (or your own next project). Using the kickoff checklist, complete:
- A constitution
- One first feature spec with full AC

**Time target**: 20 minutes.

This is not a throwaway exercise. If you pick your real next project, you leave this workshop with the first spec already written.

- Expected result: completed constitution + first feature spec for a project you will actually build.
- Why this matters: a spec you wrote for a real project is immediately more valuable than workshop notes you might read later.

## Checkpoint

- [ ] I reviewed all three templates and identified which is closest to my next real project
- [ ] I completed the kickoff checklist for a real (or the template) project
- [ ] I have a constitution and first feature spec ready to use
- [ ] I can walk someone through the kickoff checklist in under 30 minutes

---

[← Previous Lesson: L5.1 Full Workflow Simulation](/module5/L5-1-full-workflow) · [Next Lesson: L5.3 Progressive Automation →](/module5/L5-3-automation)
