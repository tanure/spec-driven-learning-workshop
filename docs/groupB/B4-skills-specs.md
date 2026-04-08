---
title: "B4: Skills That Make Specs Smarter"
---

<div class="lesson-badges"><span class="badge group-b">Group B</span><span class="badge-time">5 min</span></div>

# B4: Skills That Make Specs Smarter

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

<div class="navigation-footer">
  <a class="btn btn-secondary" href="/groupB/B3-speckit-flow">← Previous</a>
  <a id="next-btn" class="btn btn-primary" href="/groupB/B5-from-specs-to-code">Next →</a>
</div>
