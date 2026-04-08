---
title: "A4: Custom Copilot Agents"
---

<div class="lesson-badges"><span class="badge group-a">Group A</span><span class="badge-time">7 min</span></div>

# A4: Custom Copilot Agents

Instructions define style. Agents define role.

<div class="bad-practice">
<strong>Bad Practice</strong><br>
Use one chat thread for coding, reviewing, testing, and documentation. Context shifts reduce quality.
</div>

<div class="best-practice">
<strong>Best Practice</strong><br>
Create role-focused agents:
<ul>
<li><code>code-generator.agent.md</code></li>
<li><code>code-reviewer.agent.md</code></li>
<li><code>documentation.agent.md</code></li>
</ul>
</div>

```yaml
---
description: Code Reviewer - find security issues, edge cases, and bugs.
tools:
  - read_file
  - grep_search
  - semantic_search
---
```

<div class="exercise">
<strong>Try it now</strong>
<ol>
<li>Create <code>.github/agents/my-reviewer.agent.md</code>.</li>
<li>Add at least 3 review behaviors specific to your project.</li>
<li>Commit the file.</li>
</ol>
</div>

<div class="checkpoint">
<label><input type="checkbox" class="checkpoint-check"> I created a custom agent with at least 3 behaviors.</label>
</div>

<div class="navigation-footer">
  <a class="btn btn-secondary" href="/groupA/A3-respects">← Previous</a>
  <a id="next-btn" class="btn btn-primary" href="/groupA/A5-skills">Next →</a>
</div>
