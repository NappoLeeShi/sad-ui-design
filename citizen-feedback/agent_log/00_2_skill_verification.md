# Agent Log — Prompt 0, Skill Verification

- **Date:** 2026-11-05
- **Prompt:** Follow-up to `docs/prompts/prompt_0_onboarding.md`: "Missing skills have been added inside `.opencode/skills/`. Verify and do not proceed to the next prompt."
- **Response:** Verified the two previously missing skills, read both in full, and checked them against the project design system. No implementation started.
- **Changes:** No application code changed. Created this report; added a status pointer to `agent_log/00_onboarding_report.md`.

---

## 1. Verification result

| Skill | Required by | Status |
| --- | --- | --- |
| `app-design-system` | `AGENTS.md` (mandatory) | Present, previously read. |
| `frontend-design` | `AGENTS.md` (new interface design) | **Present, readable, valid frontmatter.** |
| `heydamir-unslop` | `AGENTS.md` (audit/polish) | **Present, readable, valid frontmatter.** |

Files found:

```text
.opencode/skills/frontend-design/SKILL.md
.opencode/skills/frontend-design/LICENSE.txt
.opencode/skills/heydamir-unslop/SKILL.md
.opencode/skills/heydamir-unslop/ADAPTATIONS.md
.opencode/skills/heydamir-unslop/CITATION.cff
.opencode/skills/heydamir-unslop/LICENSE
.opencode/skills/heydamir-unslop/references/{effects,refs,signs,tokens,visuals}.md
.opencode/skills/heydamir-unslop/examples/{dashboard,hero}.html
.opencode/skills/heydamir-unslop/scripts/{snapshot,story}.mjs
```

Both `SKILL.md` files declare `name` and `description` matching the IDs required by `AGENTS.md`, so they are discoverable by name. The earlier skill blocker is **resolved**.

Nothing was downloaded; `AGENTS.md` forbids that. The bundled scripts were not executed and need Playwright/ffmpeg, so they are treated as unavailable.

## 2. What each skill contributes

**`frontend-design`** — design direction, not implementation rules.
- Ground the design in the subject: VNeID, Vietnamese citizens across ages and education levels, one job = submitting and tracking a report.
- Make deliberate, non-templated choices for color, type, layout and copy; write a short plan (tokens, type roles, layout, principles) and critique it before coding.
- Typography carries personality; one family, or two clearly distinct; line length under ~80 characters.
- Structural devices (numbers, dividers, labels) must encode information, not decorate.
- Motion only when it explains a change; avoid entrance animation on every section.
- Restraint: one memorable element per screen; quality floor = mobile responsive, keyboard focus, reduced motion, accessible contrast.
- Copy: active voice, one action name per flow (button "Gửi phản ánh" → confirmation "Đã gửi phản ánh"), specific error text, empty states that invite action.

**`heydamir-unslop`** — audit and polish workflow, applied screen by screen.
- Write a five-line direction (product, character, world, moments, signature) before editing.
- Fix in nine ordered passes: spacing → color → icons → copy → type → layout → details → visuals → motion.
- Concrete rules worth enforcing from prompt 1: 4 px spacing grid, equal things equal sizes, aligned icon/label/number columns, one neutral ramp + three text roles + one accent, no hue gradients/glows/blob decoration, one icon set at one size/stroke, no emoji as icons, 400–600 weights only, sentence case (no tracked uppercase labels), tabular figures, nested radii, visible focus rings, one easing curve, no looping/`transition-all`/`hover:scale` motion.
- Explicitly: mock data must look plausible, no invented claims, no new features.

## 3. How the skills are constrained by the project

The project rules outrank generic advice, so the following skill suggestions are **not** adopted as written:

| Skill suggestion | Project constraint |
| --- | --- |
| Invent a palette / take an accent "from the world" | Palette is fixed by `app-design-system`; only MD3 roles from the approved palette. |
| Swap typefaces freely | Font must render Vietnamese well; adding a webfont needs approval, and no new dependency beyond Next font loading. |
| "Use the set the project already has, otherwise lucide" | No icon library is installed; use local inline SVG icons instead of adding `lucide`. |
| Gradients allowed as small neutral tone shifts | Avoid entirely; MD3 surfaces and state layers only. |
| Centered mobile column is discouraged (desktop-app guidance) | This is a mobile-first VNeID prototype at ~402–430 px; the app shell should stay phone-proportioned, not stretch to dashboard widths. |
| Story video / snapshot helpers | Out of scope; they need Playwright and ffmpeg and would add noise to coursework deliverables. |
| Bold aesthetic risk | Allowed only within the identity of an existing government service: calm, legible, trustworthy — not a redesign of VNeID's brand. |

Also noted: `heydamir-unslop` is licensed CC-BY-4.0 and requires keeping author credit in copies/adaptations. That applies to the skill files, not to project UI.

## 4. Consequence for the onboarding report

`agent_log/00_onboarding_report.md` items 1 and 3 listed these skills as missing. Item 3 is now outdated; it carries a pointer to this report. The rest of the onboarding report (architecture, routes, data layout, constraints, sequence) stands unchanged.

## 5. Status

- Skill blocker: **cleared**.
- Implementation: **not started**, per instruction.
- Still awaiting approval on: landing/history route separation, dependency-free mock map, Vietnamese webfont choice, and whether the `F2` lookup flow stays out of scope.
