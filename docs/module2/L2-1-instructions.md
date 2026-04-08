---
title: "L2.1: Instructions That Actually Work"
---

<div class="lesson-badges">
  <span class="badge-time">7 min</span>
  <span class="badge-module">Module 2 — Copilot Best Practices</span>
</div>

# L2.1: Instructions That Actually Work

## The Problem

Every time you open a new chat, Copilot starts with no context about your project. It doesn't know your stack, your conventions, your "never do this" rules, or the purpose of the repo. So it guesses — and you spend time correcting the guesses instead of getting work done.

## The Solution

Instructions files give Copilot persistent context. They are loaded automatically on every interaction in the workspace — no prompt required. Two types exist:

- **Workspace instructions** (`.github/copilot-instructions.md`): Always active. Used for project-wide context: stack, conventions, structure, boundaries.
- **File-specific instructions** (`.github/instructions/*.instructions.md`): Activate based on a file glob pattern in frontmatter. Used for rules that only apply to certain file types.

::: bad-practice
Including instructions in the chat prompt every session: "Remember, we're using TypeScript, no any, use Zod for validation…". This works once. It's invisible to everyone else. It disappears when the chat closes.
:::

::: best-practice
Write instructions files once. Keep them in the repo. They stay in sync as the project evolves, they're visible to the whole team, and they load automatically — so every Copilot interaction starts with accurate project context.
:::

## Exercise

You're building the study planner. These exercises put the context files in place.

### Step 1 — Create the workspace instructions file

Create a new file at `.github/copilot-instructions.md` in your project root.

Paste the following content (adjust the stack lines to match your actual project if needed):

```markdown
# Copilot Workspace Instructions

## Project
This is a study planner application with progress tracking.

## Stack
- TypeScript (no `any`, use `unknown` when type is uncertain)
- Node.js backend
- Simple HTML/CSS frontend (no framework unless explicitly requested)
- Zod for runtime validation

## Conventions
- Functions: camelCase
- Files: kebab-case
- Exported types: PascalCase
- Always add JSDoc to exported functions

## Boundaries
- Never generate placeholder data in production code paths
- Never use `console.log` in production code — use a logger
- All user input must be validated before processing
```

- Expected result: the file exists at `.github/copilot-instructions.md`.
- Why this matters: every Copilot interaction in this workspace will now start knowing the stack, conventions, and boundaries you just defined.

### Step 2 — Test the workspace instructions

Open Copilot Chat. Without mentioning the stack in the prompt, type:

```
Add a function to calculate the percentage of completed study topics.
```

- Expected result: Copilot generates TypeScript with proper types, no `any`, following the naming conventions you specified.
- Why this matters: if the output matches your instructions, the file is working. If it doesn't, check that the file is saved and the path is exactly `.github/copilot-instructions.md`.

### Step 3 — Create a file-specific instructions file

Create a file at `.github/instructions/config.instructions.md`:

```markdown
---
applyTo: "**/*.config.{ts,js,json}"
---

# Config File Instructions

When working with configuration files in this project:
- Use environment variables for all secrets and environment-specific values
- Never hardcode API keys, passwords, or URLs
- Validate config values at startup using Zod
- Export a typed config object, not raw `process.env` values
- Add a comment for any non-obvious config key explaining what it controls
```

- Expected result: the file exists at `.github/instructions/config.instructions.md`.
- Why this matters: config file instructions only activate when Copilot is working on a config file. This keeps your instructions focused and prevents irrelevant rules from confusing Copilot in non-config files.

### Step 4 — Verify the scope

Open a config file (e.g., `tsconfig.json` or create a `config.ts`). Ask Copilot to add something:

```
Add a config entry for the maximum number of study sessions per day.
```

Then open a non-config file (e.g., a TypeScript source file) and ask the same general question. Note whether Copilot's behavior differs between the two.

- Expected result: in config files, Copilot applies the config-specific rules (env vars, Zod validation). In other files, it doesn't inject config-specific guidance.
- Why this matters: file-scoped instructions scale to large repos where different parts of the codebase need different rules.

## Checkpoint

- [ ] I created `.github/copilot-instructions.md` with project, stack, conventions, and boundaries
- [ ] I tested the workspace instructions and confirmed Copilot used the defined stack
- [ ] I created `.github/instructions/config.instructions.md` with the `applyTo` frontmatter pattern
- [ ] I understand the difference between workspace-scoped and file-scoped instructions

---

[← Module 2 Overview](/module2/) · [Next Lesson: L2.2 Agents and Decision Patterns →](/module2/L2-2-agents)
