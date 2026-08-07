# Mateusz Polniak project entry

## Goal

Add `mateuszpolniak.pl` as the first item in the portfolio's **Selected Work** section without removing any existing project.

## Content

- Name: `Mateusz Polniak`
- Tag: `Web · Portfolio`
- Description: `Portfolio for a multidisciplinary graphic designer — branding, 3D, motion, video and print.`
- URL: `https://mateuszpolniak.pl/`

The description reflects the published site's focus and stays consistent with the short English descriptions used by the existing portfolio entries.

## Implementation

Insert the new object at the beginning of the `projects` array in `app/page.tsx`. Keep the existing project-row component, interaction, responsive behavior, and external-link handling unchanged.

Replace the manually maintained `01 — 05` label with a value derived from `projects.length`, formatted as two digits. With the new entry, the section header will display `01 — 06` and remain accurate when projects are added or removed later.

## Verification

- Run the production build.
- Confirm the new project renders as item `01` and links to `https://mateuszpolniak.pl/` in a new tab.
- Confirm the former first project becomes item `02` and no existing project is removed.
- Confirm the section counter reads `01 — 06`.
