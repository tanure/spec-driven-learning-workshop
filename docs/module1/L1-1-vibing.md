---
title: "L1.1: The Vibing Trap"
---

<div class="lesson-badges">
  <span class="badge-time">5 min</span>
  <span class="badge-module">Module 1 — The AI Development Problem</span>
</div>

# L1.1: The Vibing Trap

## The Problem

Most developers use GitHub Copilot the same way they use a search engine: type something in, hope something useful comes back, and iterate until it stops changing. This is called **vibing** — prompting without structure, context, or intent. It feels fast, but the results are unpredictable: the same prompt run twice produces wildly different code, and neither version is what you actually need.

The trap is that it *sometimes works*. When Copilot guesses right, you get a confidence boost. That makes you less likely to question the output next time — and more surprised when it breaks. By the end of this lesson, you'll have concrete evidence of why vibing fails.

## The Solution

The only way to understand why structure matters is to feel the absence of it. This lesson uses a fixed prompt — no instructions, no agents, no specs — run twice. You observe, compare, and record.

::: bad-practice
Running the same prompt twice and getting different results, then picking whichever you like better. This is vibing. You haven't learned anything about the output — you've just gotten lucky (or not).
:::

::: best-practice
Run the fixed prompt. Record exactly what you got, what was missing, and how confident you feel. Do it again. Compare the two runs. The gap between "what I expected" and "what I got" is the lesson.
:::

## Exercise

**Required**: Complete both runs fully. Do not skip, shorten, or iterate mid-run.

### Step 1 — Prepare your environment

1. Open VS Code in a new or empty workspace.
2. Open GitHub Copilot Chat. Switch to **Agent Mode**.
3. Confirm: no custom instructions file, no custom agents loaded, no `specs/` files or `memory/constitution.md` open.
   - Expected result: plain default Copilot with no project context.
   - Why this matters: you are replicating the vibing starting condition — no setup, just a prompt.

### Step 2 — Run 1

1. Paste the following prompt into Copilot Agent Mode **exactly as written**. Do not modify it.

   ```
   Build a study planner with progress tracking.
   ```

2. Let Copilot run. Do not add follow-up prompts, do not clarify, do not iterate.
3. When Copilot finishes, write your Run 1 follow-up note using this format:

   ```
   Run 1 follow-up note:
   - Output summary: [1–2 sentences describing what Copilot generated]
   - Mismatch: [What was missing, wrong, or unexpected vs. a real usable study planner]
   - Confidence: [1–5]
   ```

   **Confidence scale**: 1 = mostly unusable or unclear output, 5 = felt correct and complete. Use intermediate values.

   - Expected result: a note with all three fields filled in.
   - Why this matters: articulating the mismatch is what converts "bad output" into usable evidence.

### Step 3 — Run 2

1. Start a **fresh Copilot conversation** (do not continue the Run 1 thread).
2. Paste the identical prompt again:

   ```
   Build a study planner with progress tracking.
   ```

3. Let Copilot run without any follow-up.
4. Write your Run 2 follow-up note:

   ```
   Run 2 follow-up note:
   - Output summary: [1–2 sentences describing what Copilot generated]
   - Mismatch: [What was missing, wrong, or unexpected vs. a real usable study planner]
   - Confidence: [1–5]
   ```

   - Expected result: a second note. It will likely differ from Run 1 in meaningful ways.
   - Why this matters: identical prompt, different output = proof that the input was underspecified.

### Step 4 — Compare

1. Read both notes side by side.
2. Note at least one thing that was different between the two runs (structure, stack, features, file layout, or assumptions).
   - Expected result: you can name one concrete difference.
   - Why this matters: that difference is exactly what instructions, agents, and specs are designed to eliminate.

## Checkpoint

- [ ] I ran the fixed prompt exactly twice with no modifications
- [ ] I wrote a follow-up note (Output summary, Mismatch, Confidence) after each run
- [ ] I identified at least one concrete difference between the two runs

---

[← Module 1 Overview](/module1/) · [Next Lesson: L1.2 The Three Pillars →](/module1/L1-2-three-pillars)
