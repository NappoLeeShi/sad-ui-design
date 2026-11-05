# Agent Log — Prompt 0, Icon Library

- **Date:** 2026-11-05
- **Prompt:** "Install a recommended icon library for development. Do not proceed to the next prompt. Write the report with 00_3 prefix."
- **Response:** Installed `lucide-react` and verified it renders icons under React 19 / Next.js 16.
- **Changes:** `package.json` + `bun.lock` updated. No application code changed.

---

## 1. Choice

**`lucide-react@1.69.0`** — the icon set recommended by the loaded `heydamir-unslop` skill, and the de-facto default for Next.js + Tailwind projects.

Why it fits:

- Peer dependency supports React 19 (`^19.0.0`), matching this project.
- `sideEffects: false` plus per-icon ES modules (`lucide-react/icons/*`) — only imported icons are bundled.
- Plain SVG components with no hooks or browser APIs, so they work in both Server and Client Components.
- `strokeWidth`, `size`, `color` props map directly to the styling rules from `app-design-system` (24 px grid, 1.5 stroke) and the skill rules (one set, one size, one stroke).
- Tree-shakeable SVG, no runtime CSS injection, no font files.

## 2. Install

```text
bun add lucide-react        →  lucide-react@1.69.0
```

`package.json` dependency added as `^1.69.0`; `bun.lock` saved.

## 3. Verification

- Package metadata: `sideEffects: false`, React `^19.0.0` in `peerDependencies`, 4,050 exported icon declarations.
- Server render test through `react-dom/server` (no files created): `House`, `MapPin`, `ChevronLeft`, `Camera`, `TriangleAlert` all rendered valid `<svg>` output with `stroke="currentColor"`, `stroke-width="1.5"`, `aria-hidden="true"`.
- Icons are aliased names (`lucide-house lucide-home`), so renamed icons keep a compatible export.

## 4. Usage rules for implementation

These follow from the project design system and `heydamir-unslop`; they are not optional suggestions.

- Import named icons only: `import { MapPin } from "lucide-react"`. Never the dynamic loader or a barrel re-export of all icons.
- One size per context, 16–18 px in dense rows, 20–24 px for standalone actions; stroke `1.5` throughout.
- Color comes from the text role (`currentColor` inheriting `text-on-surface-variant`, `text-primary`, etc.). No per-icon color props and no filled/duotone variants.
- Icons never appear alone as the only label for a destructive or ambiguous action. Vietnamese label stays visible or an `aria-label` is provided.
- Decorative icons get `aria-hidden` (the library sets it by default); informative icons need an accessible name.
- No emoji as icons anywhere in the UI.

## 5. Notes and trade-offs

- `AGENTS.md` advises minimal libraries and prompt 0 says "avoid unnecessary dependencies". This dependency is user-approved and replaces the previous plan of hand-written inline SVGs, which is lower-risk than maintaining dozens of icon paths by hand.
- Constraint 11 in `agent_log/00_onboarding_report.md` ("no icon library") is now superseded; the earlier report is left as a historical record.
- The install adds ~49 MB to `node_modules`, but bundled output is limited to the icons actually imported.
- Nothing else was installed: no map, form, or class-name utilities.

## 6. Status

- Icon library: **installed and verified**.
- Implementation: **not started**, per instruction.
- Still awaiting approval on: landing/history route separation, dependency-free mock map, Vietnamese webfont choice, and whether the `F2` lookup flow stays out of scope.
