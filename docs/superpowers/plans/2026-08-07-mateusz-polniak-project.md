# Mateusz Polniak Project Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add mateuszpolniak.pl as the first Selected Work entry and keep the section count synchronized with the project array.

**Architecture:** Keep the existing data-driven project list and project-row component unchanged. Add one object to the `projects` array and derive the visible range label from `projects.length` so future list edits cannot leave the count stale.

**Tech Stack:** Next.js 15, React 19, TypeScript, PowerShell verification commands

## Global Constraints

- Do not remove or reorder any existing project relative to the other existing projects.
- Use the exact name `Mateusz Polniak`, tag `Web · Portfolio`, description `Portfolio for a multidisciplinary graphic designer — branding, 3D, motion, video and print.`, and URL `https://mateuszpolniak.pl/`.
- Preserve the existing project-row component, external-link behavior, responsive styles, and reveal animation.
- Format the project total as two digits.

---

### Task 1: Add and verify the Selected Work entry

**Files:**
- Modify: `app/page.tsx:3-34`
- Modify: `app/page.tsx:114`

**Interfaces:**
- Consumes: the existing `projects` array and its `{ name, tag, desc, url }` object shape
- Produces: a six-item `projects` array and a section range label derived from `projects.length`

- [ ] **Step 1: Run a source-level check that demonstrates the feature is absent**

```powershell
$source = Get-Content -Raw app/page.tsx
if ($source -notmatch 'name: "Mateusz Polniak"') { throw 'Mateusz Polniak project is missing' }
if ($source -notmatch 'projects\.length\.toString\(\)\.padStart\(2, "0"\)') { throw 'Dynamic project count is missing' }
```

Expected: the command fails because the new entry and dynamic count are not yet present.

- [ ] **Step 2: Insert the new project at the beginning of the array**

Add this object immediately after `const projects = [` in `app/page.tsx`:

```tsx
  {
    name: "Mateusz Polniak",
    tag: "Web · Portfolio",
    desc: "Portfolio for a multidisciplinary graphic designer — branding, 3D, motion, video and print.",
    url: "https://mateuszpolniak.pl/",
  },
```

- [ ] **Step 3: Derive the section count from the array**

Replace the hard-coded range label with:

```tsx
<span className="mono index">
  01 — {projects.length.toString().padStart(2, "0")}
</span>
```

- [ ] **Step 4: Re-run the source-level check**

```powershell
$source = Get-Content -Raw app/page.tsx
if ($source -notmatch 'name: "Mateusz Polniak"') { throw 'Mateusz Polniak project is missing' }
if ($source -notmatch 'projects\.length\.toString\(\)\.padStart\(2, "0"\)') { throw 'Dynamic project count is missing' }
```

Expected: the command exits successfully.

- [ ] **Step 5: Run the production build**

```powershell
npm run build
```

Expected: Next.js completes compilation, type checking, and static-page generation successfully.

- [ ] **Step 6: Inspect the final diff**

```powershell
git diff --check
git diff -- app/page.tsx
```

Expected: no whitespace errors; the diff contains only the new project object and the dynamic range label.

- [ ] **Step 7: Commit the implementation**

```powershell
git add -- app/page.tsx
git commit -m "Add Mateusz Polniak to selected work"
```
