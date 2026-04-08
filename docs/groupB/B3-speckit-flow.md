---
layout: lesson
title: "B3: The Full Spec-Kit Journey"
lesson_id: B3
group: B
group_size: 6
lesson_number: 3
duration: 20
prev: /groupB/B2-writing-specs
next: /groupB/B4-skills-specs
---

This is the complete spec-kit flow you should practice during the workshop.

| Step | Action | Output |
|---|---|---|
| 1 | Constitution | Team agreement issue |
| 2 | Spec | Epic and Architecture issues |
| 3 | Clarify | <span class="needs-clarification">NEEDS CLARIFICATION</span> decisions |
| 4 | Plan | Feature issues linked to Epic |
| 5 | Analyze | Risk and complexity assessment |
| 6 | Tasks | Task issues with Definition of Done |
| 7 | Implement | Branch and coding start |

## 1) Constitution
Create team agreements before any feature coding.

```bash
gh issue create \
  --title "[CONSTITUTION] Team Working Agreement" \
  --label "type:constitution" \
  --body "Spec-first, issues-first, DoD rules"
```

Suggested sections: stack, team norms, DoD, branch naming.

## 2) Spec

```bash
speckit spec
```

Example project for this lesson: Certification Study Tracker.

Expected output:
- Epic issue created
- Architecture issue created

## 3) Clarify
Review Epic content and annotate unclear parts.

<div class="best-practice">
<strong>Use explicit clarification tags</strong><br>
Add comments like:
<ul>
<li><span class="needs-clarification">NEEDS CLARIFICATION</span>: Does "study progress" mean hours, quiz score, or both?</li>
<li><span class="needs-clarification">NEEDS CLARIFICATION</span>: How should pass-probability be calculated?</li>
</ul>
Resolve each item with a concrete decision in issue comments.
</div>

## 4) Plan

```bash
speckit plan
```

Create features and link to Epic.
Example features:
- Study Session Tracking
- Quiz Engine
- Progress Dashboard

## 5) Analyze
Ask Copilot to analyze each feature for complexity and risks.

Prompt example:
```text
Analyze Feature#101 for implementation complexity, data model risks, and edge cases.
```

## 6) Tasks

```bash
speckit tasks
```

Create task issues per feature with clear DoD checklists.

## 7) Implement

```bash
speckit start Task#211
```

If prompted, create branch and begin coding with Copilot using your `.instructions.md` context.

<div class="exercise">
<strong>Hands-on (required)</strong>
<ol>
<li>Create 1 Epic with <code>speckit spec</code>.</li>
<li>Add at least 1 <span class="needs-clarification">NEEDS CLARIFICATION</span> item and resolve it.</li>
<li>Create at least 2 Feature issues with <code>speckit plan</code>.</li>
<li>Create tasks for one feature with <code>speckit tasks</code>.</li>
<li>Start implementation with <code>speckit start Task#N</code>.</li>
</ol>
</div>

<div class="checkpoint">
<label><input type="checkbox" class="checkpoint-check"> I completed Constitution setup for my project.</label><br>
<label><input type="checkbox" class="checkpoint-check"> I created Epic/Architecture with speckit spec.</label><br>
<label><input type="checkbox" class="checkpoint-check"> I resolved at least one NEEDS CLARIFICATION item.</label><br>
<label><input type="checkbox" class="checkpoint-check"> I reached tasks and start implementation steps.</label>
</div>
