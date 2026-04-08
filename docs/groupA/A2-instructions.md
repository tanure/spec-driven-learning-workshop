---
layout: lesson
title: "A2: Meet .instructions.md"
lesson_id: A2
group: A
group_size: 5
lesson_number: 2
duration: 5
prev: /groupA/A1-vibing
next: /groupA/A3-respects
---

Instructions tell Copilot how your team works.

<div class="bad-practice">
<strong>Bad Practice</strong><br>
Repeating stack and style constraints in every prompt:
"Use TypeScript", "use zod", "no classes", "named exports" every time.
</div>

<div class="best-practice">
<strong>Best Practice</strong><br>
Define standards once in <code>.instructions.md</code>. Copilot loads them automatically.
</div>

```markdown
# Project Instructions

## Stack
- TypeScript 5 strict
- Node.js 20
- zod for input validation
- Functional style

## Code Patterns
- Use async/await
- Use named exports
- Validate input before business logic
```

<div class="exercise">
<strong>Try it now</strong>
<ol>
<li>Fork <code>hackathon-learning-starter</code>.</li>
<li>Edit <code>.instructions.md</code> with your stack and style.</li>
<li>Commit changes with message: <code>feat: configure project instructions</code>.</li>
</ol>
</div>

<div class="checkpoint">
<label><input type="checkbox" class="checkpoint-check"> I forked the starter repository.</label><br>
<label><input type="checkbox" class="checkpoint-check"> I committed a customized .instructions.md file.</label>
</div>
