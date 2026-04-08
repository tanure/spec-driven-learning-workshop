---
title: "L4.1: What Is MCP and Why It Matters"
---

<div class="lesson-badges">
  <span class="badge-time">8 min</span>
  <span class="badge-module">Module 4 — GitHub MCP Integration</span>
</div>

# L4.1: What Is MCP and Why It Matters

## The Problem

Copilot's context is local. It knows what's in your workspace, what's in the open files, and what's in the chat. It doesn't know what's in GitHub Issues, what PRs are open, what comments were left on a review, or what your team decided in a discussion thread. All of that context lives outside VS Code — and without a bridge, you have to copy it manually.

## The Solution

**MCP (Model Context Protocol)** is a standard that lets Copilot reach outside the IDE and retrieve context from external tools. With the GitHub MCP server configured, Copilot can:

- Read and create GitHub Issues
- Read pull request comments and diffs
- Search repositories
- Reference discussions

This means your spec tasks can live in GitHub Issues, and Copilot can generate code with the Issue as its context — without you having to paste anything.

::: bad-practice
Copying an issue description from GitHub into a chat prompt every time you want to generate code from it. This is manual, error-prone (you might copy an outdated version), and breaks the traceability chain between the issue and the generated code.
:::

::: best-practice
Configure MCP once. Then tell Copilot: "Implement GitHub Issue #42." Copilot reads the issue directly, uses its full content as context, and you have a direct line from issue to code.
:::

## Exercise

### Step 1 — Understand the MCP architecture

Before configuring, understand what you're setting up:

- **MCP server**: a local process that exposes GitHub's API to Copilot in a standardized format
- **`.vscode/mcp.json`**: the configuration file that tells VS Code which MCP servers to run and how to connect to them
- **Token**: a GitHub Personal Access Token (PAT) that gives the MCP server permission to read and write GitHub data on your behalf

The PAT needs these scopes: `repo`, `read:org` (if using org repos).

### Step 2 — Create a GitHub Personal Access Token

1. Go to [github.com/settings/tokens](https://github.com/settings/tokens)
2. Click **Generate new token (classic)**
3. Set expiration to: **30 days** (this workshop token, not a permanent one)
4. Select scopes: `repo` (all), `read:org`
5. Click **Generate token**
6. Copy the token — you will not see it again

> **Security note**: Treat this token like a password. Do not commit it to the repo. Do not paste it into a chat prompt that gets saved to history. You will reference it via an environment variable in the next step.

### Step 3 — Configure the GitHub MCP server

Create `.vscode/mcp.json` in your project root:

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

Set the environment variable in your terminal:

```bash
# Windows (PowerShell)
$env:GITHUB_TOKEN = "ghp_your_token_here"

# macOS / Linux
export GITHUB_TOKEN="ghp_your_token_here"
```

> **Note**: Set this variable in each new terminal session. Do not hardcode the token in the JSON file.

- Expected result: `.vscode/mcp.json` exists. VS Code detects the MCP server configuration.
- Why this matters: this is the one-time setup. All subsequent Copilot interactions in this workspace can now reach GitHub.

### Step 4 — Verify the connection

Open Copilot Chat in Agent Mode. Ask:

```
What is the name of the currently authenticated GitHub user?
```

- Expected result: Copilot returns your GitHub username using the MCP server.
- Why this matters: this confirms the token is valid and the MCP server is running. If you get an error, check that the environment variable is set in the current terminal session.

## Checkpoint

- [ ] I understand the three components: MCP server, `.vscode/mcp.json`, and PAT
- [ ] I created a GitHub PAT with `repo` and `read:org` scopes
- [ ] I created `.vscode/mcp.json` with the GitHub server configuration
- [ ] I set the `GITHUB_TOKEN` environment variable (not hardcoded in JSON)
- [ ] I verified the connection by asking Copilot the current GitHub username

---

[← Module 4 Overview](/module4/) · [Next Lesson: L4.2 The Write-Read Loop →](/module4/L4-2-write-read-loop)
