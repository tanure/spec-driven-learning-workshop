---
title: Quick Reference Cheatsheet
---

# Quick Reference Cheatsheet

## The Spec-Driven Workflow

```
Constitution → /speckit.specify → resolve [NEEDS CLARIFICATION] markers
→ /speckit.plan → /speckit.tasks → Task-by-task: Agent Mode → Code Reviewer → mark done
→ Push to GitHub Issues (MCP) → Generate from Issue
```

## spec-kit Slash Commands

Use these in Copilot Chat in VS Code, not in the terminal.

| Command | Purpose |
|---------|---------|
| `/speckit.specify <feature description>` | Create a numbered feature branch and `specs/<feature-branch>/spec.md` |
| `/speckit.plan <implementation direction>` | Generate `plan.md` plus supporting design docs from the feature spec |
| `/speckit.tasks` | Generate `tasks.md` from `plan.md` and related design documents |

## File Locations

| File | Path | Purpose |
|------|------|---------|
| Workspace instructions | `.github/copilot-instructions.md` | Global project context for all Copilot interactions |
| File-specific instructions | `.github/instructions/*.instructions.md` | Context scoped by `applyTo` glob pattern |
| Agent | `.github/agents/<name>.agent.md` | Specialized Copilot persona |
| Prompt | `.github/prompts/<name>.prompt.md` | Reusable prompt workflow (invoke from Copilot Chat by name) |
| MCP config | `.vscode/mcp.json` | MCP server configuration |
| Constitution | `memory/constitution.md` | Project-wide decisions and values |
| Feature spec | `specs/<feature-branch>/spec.md` | Feature goal, AC, DoD, clarifications |
| Plan | `specs/<feature-branch>/plan.md` | Ordered implementation phases |
| Tasks | `specs/<feature-branch>/tasks.md` | Atomic implementation units |

> **Prompt files** are covered in [L5.3](/module5/L5-3-automation). Unlike agents (which define a persistent persona), prompt files define a one-shot reusable workflow — for example, "run the Code Reviewer against the latest implementation". Create them at `.github/prompts/<name>.prompt.md` and invoke from Copilot Chat.

## Feature Spec Template

```markdown
# Feature Specification: [Feature Name]

## Goal
[One sentence: what will the user be able to do when this is done]

## Acceptance criteria
- [ ] [Verifiable behavior from the outside]
- [ ] [Another verifiable behavior]

## Out of scope
- [Explicit non-goal 1]
- [Explicit non-goal 2]

## Definition of done
- All acceptance criteria pass
- Unit tests cover [specific functions]
- No TypeScript errors
```

## Task Template

```markdown
# Task: [Task Name]

## Scope
[One paragraph: what this task implements and nothing more]

## Definition of done
- [ ] [Verifiable criterion 1]
- [ ] [Verifiable criterion 2]
```

## Code Reviewer Agent Prompt Pattern

```
Review the code just generated for [task name].
Check: Stack compliance, Error handling, Quality.
For each issue: File/Location, Category, Issue, Fix.
If no issues: state what you checked.
```

## MCP Setup (`.vscode/mcp.json`)

```json
{
  "servers": {
    "github": {
      "type": "stdio",
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-github"],
      "env": {
        "GITHUB_PERSONAL_ACCESS_TOKEN": "${env:GITHUB_TOKEN}"
      }
    }
  }
}
```

Set environment variable:
```bash
# PowerShell
$env:GITHUB_TOKEN = "ghp_your_token"
# bash
export GITHUB_TOKEN="ghp_your_token"
```

## Failure Category → Practice Map (M1)

| Failure category | Practice that fixes it | Module |
|-----------------|----------------------|--------|
| Requirements gap | Instructions | M2 L2.1 |
| Technical mismatch | Agents | M2 L2.2 |
| Quality/risk issue | Specs | M3 |

## Plan Mode vs. Agent Mode Quick Guide

| Use Plan Mode when... | Use Agent Mode when... |
|-----------------------|----------------------|
| Requirement is fuzzy | Requirement is locked |
| You need to surface assumptions | You need code, not discussion |
| First encounter with a feature | Implementing from a spec task |

## Module Navigation

| Module | First lesson | Duration |
|--------|-------------|----------|
| [M1](/module1/) | [L1.1 The Vibing Trap](/module1/L1-1-vibing) | ~15 min |
| [M2](/module2/) | [L2.1 Instructions](/module2/L2-1-instructions) | ~25 min |
| [M3](/module3/) | [L3.1 Cost of No Specs](/module3/L3-1-cost-no-specs) | ~45 min |
| [M4](/module4/) | [L4.1 What Is MCP](/module4/L4-1-what-is-mcp) | ~20 min |
| [M5](/module5/) | [L5.1 Full Simulation](/module5/L5-1-full-workflow) | ~35 min |

