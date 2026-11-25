# AGENTS.md - Agent Working Guidelines & Directives

This document defines mandatory protocols for any AI agent or developer session working in this repository.

---

## 1. Mandatory Session Startup Protocol

> **CRITICAL**: Before starting ANY work, planning changes, or modifying files, you MUST ALWAYS read the following three documents in order:
> 1. `docs/PROJECT_STATE.md` — Current project goals, architecture, completed features, and "Do Not Redo" specifications.
> 2. `docs/DECISIONS.md` — Architectural and design decision records.
> 3. `docs/TASK_LOG.md` — History of completed tasks, changes made, and recent session notes.

---

## 2. Core Operational Rules

1. **Do NOT Redo Completed Work**:
   - Check `docs/PROJECT_STATE.md` (specifically the **Do Not Redo** section) before implementing or modifying any component or page.
   - Do not rebuild or reimplement existing features, components, or styling without explicit user direction.

2. **Always Inspect Files Before Editing**:
   - Always read and inspect existing code, data contracts, and imports before proposing or applying any edits.
   - Respect established patterns, design tokens, and naming conventions.

3. **Make Small, Scoped Changes**:
   - Keep diffs focused strictly on the user's specific request.
   - Do not perform broad unsolicited refactors, format changes across unrelated files, or modify unrelated application logic.

4. **Update `docs/TASK_LOG.md` After Every Task**:
   - Log completed tasks using the standard template in `docs/TASK_LOG.md`. Include date, task description, summary of changes, files changed, tests/validation run, results, and next steps.

5. **Update `docs/PROJECT_STATE.md` for Major Architectural Changes**:
   - If a new route, core module, data model, or integration is added or modified, update `docs/PROJECT_STATE.md` to reflect the current state.

6. **Follow Strict Safety Rules**:
   - Never delete, rename, or overwrite existing files without explicit user consent.
   - Never remove existing user-approved content.
   - Do not install new dependencies without clear user approval or requirement.

---

## 3. Discovered Commands & Tooling

| Task | Command | Description |
| :--- | :--- | :--- |
| **Development Server** | `npm run dev` | Starts Next.js development server (default port 3000, or `npx next dev -p 3100`) |
| **Production Build** | `npm run build` | Builds optimized Next.js production bundle |
| **Type Check** | `npx tsc --noEmit` | Validates TypeScript types across the entire project |
| **Linting** | `npm run lint` | Runs Next.js ESLint validation |
| **Start Production** | `npm run start` | Runs built Next.js application |

---

## 4. Standard Task Completion Checklist

Before declaring any task complete, verify:
- [ ] Requirements from the user prompt are fully addressed without scope creep.
- [ ] TypeScript compilation passes cleanly (`npx tsc --noEmit`).
- [ ] ESLint validation passes cleanly (`npm run lint`).
- [ ] No regression or accidental deletion of previously existing components or data contracts.
- [ ] Design and styling match the established Atlantis Security luxury navy/gold aesthetic and responsive layout standards.
- [ ] `docs/TASK_LOG.md` is updated with an entry documenting the task and changes.
- [ ] `docs/PROJECT_STATE.md` is updated if any feature state or architectural detail changed.
