---
title: "L2.3: Skills and Prompt Files (Deferred)"
---

<div class="lesson-badges">
  <span class="badge-time">deferred</span>
  <span class="badge-module">Module 2 — Copilot Best Practices</span>
</div>

# L2.3: Skills and Prompt Files

> **This session is not part of today's workshop.**
>
> Skills and prompt files are covered briefly in **[L5.3: Progressive Automation](/module5/L5-3-automation)**, which introduces the auto-review prompt pattern. A dedicated session on building reusable prompt workflows is planned for a future workshop edition.

## What are Skills / Prompt Files?

Prompt files (`.github/prompts/<name>.prompt.md`) are reusable, version-controlled prompts you can invoke from Copilot Chat by name. They extend an agent's behavior without modifying the agent file itself.

Use prompt files when:
- You have a multi-step workflow you run repeatedly (e.g., "review this code, check tests, update the spec")
- You want to share a workflow with your team in a single file
- You want to trigger a workflow without re-typing instructions every time

## Key Difference from Agents

| | Agents (`.github/agents/`) | Prompt files (`.github/prompts/`) |
|--|--|--|
| **Purpose** | Define a role/persona | Define a reusable workflow |
| **Invocation** | Select from Copilot Chat dropdown | `#<name>` reference or select at @workspace |
| **State** | Persists for the session | Runs once per invocation |
| **Best for** | Code Reviewer, Testing Advocate | Auto-review loop, spec update, kickoff sequence |

## Where to Learn More

- The [spec-kit cheatsheet](/resources/cheatsheet) shows the prompt file location and template.
- L5.3 walks through creating an auto-review prompt file from scratch.
- The [VS Code Copilot documentation](https://code.visualstudio.com/docs/copilot/copilot-customization) covers the full reference.

---

[← Previous: L2.2 Agents and Decision Patterns](/module2/L2-2-agents) · [Next: L2.4 Plan Mode vs. Agent Mode →](/module2/L2-4-plan-vs-agent)
