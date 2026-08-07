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

- [x] **Step 1: Run a rendered-page check that demonstrates the feature is absent**

```powershell
# Terminal A: keep this process running through Step 4.
$env:PORT = '3100'
npm run dev
```

After Next.js reports that the server is ready, run in Terminal B:

```powershell
$html = (curl.exe --silent --show-error --max-time 20 http://127.0.0.1:3100/) -join "`n"
if ($LASTEXITCODE -ne 0) { throw 'Rendered page request failed' }
$rendered = $html -replace '<!--.*?-->', ''
if ($rendered -notmatch 'Mateusz Polniak') { throw 'Rendered project is missing' }
if ([regex]::Matches($rendered, 'class="project-row"').Count -ne 6) { throw 'Rendered project count is not six' }
if ($rendered -notmatch '01 — 06') { throw 'Rendered range label is incorrect' }
```

Expected: the Terminal B command fails with `Rendered project is missing` because the new entry is not yet present.

- [x] **Step 2: Insert the new project at the beginning of the array**

Add this object immediately after `const projects = [` in `app/page.tsx`:

```tsx
  {
    name: "Mateusz Polniak",
    tag: "Web · Portfolio",
    desc: "Portfolio for a multidisciplinary graphic designer — branding, 3D, motion, video and print.",
    url: "https://mateuszpolniak.pl/",
  },
```

- [x] **Step 3: Derive the section count from the array**

Replace the hard-coded range label with:

```tsx
<span className="mono index">
  01 — {projects.length.toString().padStart(2, "0")}
</span>
```

- [x] **Step 4: Re-run the rendered-page check**

```powershell
$html = (curl.exe --silent --show-error --max-time 20 http://127.0.0.1:3100/) -join "`n"
if ($LASTEXITCODE -ne 0) { throw 'Rendered page request failed' }
$rendered = $html -replace '<!--.*?-->', ''
if ($rendered -notmatch 'Mateusz Polniak') { throw 'Rendered project is missing' }
if ([regex]::Matches($rendered, 'class="project-row"').Count -ne 6) { throw 'Rendered project count is not six' }
if ($rendered -notmatch '01 — 06') { throw 'Rendered range label is incorrect' }
```

Expected: the command exits successfully.

- [x] **Step 5: Run the production build**

```powershell
npm run build
```

Expected: Next.js completes compilation, type checking, and static-page generation successfully.

- [x] **Step 6: Stop the development server and inspect the final diff**

```powershell
# Stop the Terminal A development server with Ctrl+C.
git diff --check
git diff -- app/page.tsx
```

Expected: no whitespace errors; the diff contains only the new project object and the dynamic range label.

- [x] **Step 7: Commit the implementation**

```powershell
git add -- app/page.tsx
git commit -m "Add Mateusz Polniak to selected work"
```
