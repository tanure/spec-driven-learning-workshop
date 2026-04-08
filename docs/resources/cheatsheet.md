---
layout: page
title: Quick Reference Cheatsheet
---

# Quick Reference Cheatsheet

## spec-kit Commands

| Command | Purpose |
|---|---|
| `speckit spec` | Create/update Epic and Architecture issues |
| `speckit plan` | Create/update Features linked to Epic |
| `speckit tasks` | Create/update Tasks with Definition of Done |
| `speckit sync` | Run spec, plan, tasks sequence |
| `speckit start` | Start implementation and optional branch creation |
| `speckit wiki-sync` | Produce wiki-source output from completed work |

## Where to Place Files

| File type | Path |
|---|---|
| Instructions | `.instructions.md` |
| Agent | `.github/agents/<name>.agent.md` |
| Skill | `.github/skills/<name>/SKILL.md` |

## Labels

- Type: `type:epic`, `type:feature`, `type:task`, `type:architecture`
- Phase: `phase:specification`, `phase:planning`, `phase:implementation`
- Status: `status:triage`, `status:in-progress`, `status:review`, `status:done`

## Full Workflow
1. Constitution
2. Spec
3. Clarify
4. Plan
5. Analyze
6. Tasks
7. Implement

## Clarification Format

```markdown
> NEEDS CLARIFICATION: <unclear statement>
> Questions:
> - <question 1>
> - <question 2>
> Decision: <final choice>
```
