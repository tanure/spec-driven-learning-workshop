---
title: FAQ and Troubleshooting
---

# FAQ and Troubleshooting

## Setup

### spec-kit isn't installing

spec-kit is a Python CLI tool, not an npm package. Install it with [uv](https://docs.astral.sh/uv/):

```bash
uv tool install specify-cli --from git+https://github.com/github/spec-kit.git
```

Verify with:
```bash
specify check
```

If `uv` is not installed, see [L3.1](/module3/L3-1-cost-no-specs) for platform-specific install instructions. The spec-kit CLI requires Python 3.11+ and Git; `specify check` will report any missing dependencies.

### Copilot ignores my workspace instructions

- Confirm the file is at exactly `.github/copilot-instructions.md` (case-sensitive on Linux/macOS)
- The file must be in the **root** of the workspace, not in a subdirectory
- Reload VS Code window (`Ctrl+Shift+P` → "Developer: Reload Window") after creating the file

### My agent file is not detected

- Confirm the file path is `.github/agents/<name>.agent.md`
- Check the YAML frontmatter — it must be valid YAML with a `name` and `description` field
- Ensure there are no tabs in the frontmatter (YAML requires spaces)

---

## MCP and GitHub Integration

### The GitHub MCP server isn't connecting

1. Confirm the `GITHUB_TOKEN` environment variable is set in the **current** terminal session (not a different one)
2. Confirm the token has `repo` and `read:org` scopes — check at [github.com/settings/tokens](https://github.com/settings/tokens)
3. Confirm `.vscode/mcp.json` exists in the project root
4. Check the VS Code Output panel for MCP server error messages

### Copilot can't find my repository when using MCP

Specify the owner and repository explicitly in your prompt:
```
List issues from the [owner]/[repo] repository.
```
If you're in an organization, also ensure the token has `read:org` scope.

### I accidentally committed my GitHub token

Immediately revoke it at [github.com/settings/tokens](https://github.com/settings/tokens) and generate a new one. Never hardcode tokens in files that are committed to a repository.

---

## Spec-Driven Workflow

### Where should I write the constitution vs. the feature spec?

**Constitution**: project-wide decisions that apply to every feature. Stack, values, out-of-scope at the project level.

**Feature spec**: feature-level decisions. What this feature does, what it does not do, how done is verified.

When in doubt: if the decision applies to more than one feature, it belongs in the constitution.

### How specific do acceptance criteria need to be?

Each AC item should be verifiable from the outside without knowing how it was implemented. If you can verify it by running the application or running a test, it's specific enough. If you need to read the code to verify it, rewrite it.

### What if my spec still has `[NEEDS CLARIFICATION]` markers and I can't answer yet?

Mark it explicitly:
```markdown
<!-- OPEN QUESTION: [question text] — deferred because [reason] -->
```
Don't leave it unmarked. An unmarked gap will be silently answered by Copilot during code generation.

### How many tasks should a feature produce?

Depends on feature size. A good task takes 5–15 minutes in Agent Mode. If a task would take longer, split it. If a task takes under 2 minutes, consider whether it's its own task or part of a larger one.

---

## Plan Mode vs. Agent Mode

### When should I use Plan Mode?

When you have a fuzzy requirement and need to surface assumptions before committing to code. Plan Mode asks questions — use it to get those questions answered in the spec, not improvised during code review.

### Agent Mode keeps asking clarifying questions instead of writing code

You're handing it a vague requirement. Give it the locked requirements from your spec task. The more specific the task content, the less Agent Mode will need to clarify.

---

## Module Navigation

### Can I skip Module 1 and 2?

If you already use Copilot instructions and agents regularly, yes — start at [Module 3](/module3/). M1 and M2 build the vocabulary that M3 relies on, but they're not gate-locked.

### Is L2.3 (Skills) part of the workshop?

No. L2.3 (Skills/Prompt files) is deferred and not covered as a standalone session today.

**What are Skills/Prompt files?** Prompt files (`.github/prompts/<name>.prompt.md`) are reusable, version-controlled prompts that define multi-step workflows you can invoke by name in Copilot Chat. Unlike agents (which define a persistent persona), prompt files run once and terminate — they're good for things like "run the code reviewer, check tests, then update the spec status".

**Why deferred?** The core spec-driven workflow (constitution → spec → plan → tasks → code) is teachable and immediately useful without prompt file automation. Introducing a fourth artifact type during the same session would dilute the learning. Prompt files are introduced briefly in [L5.3: Progressive Automation](/module5/L5-3-automation) as a Level 1 automation pattern. A dedicated session is planned for a future workshop edition. The [L2.3 placeholder page](/module2/L2-3-skills) has more details.

### Do I need to complete the workshop in order?

M1 → M2 → M3 → M4 → M5 is the intended order. M4 and M5 depend on having a spec from M3. M2 builds tools (Code Reviewer agent) that M3 uses. M1 is independent but sets context for everything else.

