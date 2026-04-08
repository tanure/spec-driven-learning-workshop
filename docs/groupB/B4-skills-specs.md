---
layout: lesson
title: "B4: Skills That Make Specs Smarter"
lesson_id: B4
group: B
group_size: 6
lesson_number: 4
duration: 5
prev: /groupB/B3-speckit-flow
next: /groupB/B5-from-specs-to-code
---

Skills can improve specification quality before planning.

## Skill use case: spec-clarify
- Reads Epic or Feature text
- Detects ambiguity
- Adds <span class="needs-clarification">NEEDS CLARIFICATION</span> items
- Uses multi-question form when available, otherwise sequential one-by-one questions

```markdown
Trigger: clarify spec / clarify Epic#42

Workflow:
1. Find vague terms and missing constraints
2. Mark with NEEDS CLARIFICATION
3. Ask targeted questions
4. Record final decisions
```

<div class="exercise">
<strong>Try it now</strong>
Create <code>.github/skills/spec-clarify/SKILL.md</code> and run it against your Epic from B3.
</div>

<div class="checkpoint">
<label><input type="checkbox" class="checkpoint-check"> I created and applied a spec-clarify skill.</label>
</div>
