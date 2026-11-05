# Agent Log — Prompt 0 Onboarding

- **Date:** 2026-11-05
- **Prompt:** `docs/prompts/prompt_0_onboarding.md`
- **Response:** Completed a read-only project inspection and produced the onboarding report below.
- **Changes:** No application code changed. Created this report in `agent_log/`.

---

## 1. Framework and project architecture

| Item | Finding |
| --- | --- |
| Framework | Next.js **16.4.3**, App Router |
| UI runtime | React **19.3.0** |
| Language | TypeScript **5.9.3**, strict mode |
| Styling | Tailwind CSS **v4** via `@tailwindcss/turbopack` |
| Runtime / package manager | Node.js v26.12.1 / bun 1.4.4 |
| Path alias | `@/*` maps to the repository root |
| Next config | Turbopack; `cacheComponents: true`; `partialPrefetching: true`; `experimental.agentFeedback: true` |

Current source tree is still the create-next-app baseline:

- `app/layout.tsx` — root layout only, Geist fonts, `lang="en"`, default metadata.
- `app/page.tsx` — default Next.js starter page.
- `app/globals.css` — Tailwind import, default background/foreground tokens, automatic dark mode, Arial body font.
- No `src/`, `components/`, `lib/`, `data/`, `services/`, or API routes.
- No mock data, persistence layer, authentication session, or functional navigation.

Architecture implication: pages are Server Components by default. Any state, `localStorage`, file input, geolocation, map interaction, or event handler must live in Client Components marked `"use client"`. Since `cacheComponents` is enabled, request-time data should remain inside Suspense boundaries; this prototype can avoid that by keeping mock reads and persistence fully client-side.

## 2. Relevant `AGENTS.md` instructions

- Stay inside `citizen-feedback/`; do not modify files outside it.
- Treat `docs/prompts/references/` as visual references only, not ground truth. Reformat or improve them where needed.
- Use the project skills in `.opencode/skills/`; read the relevant `SKILLS.md` before implementing.
- The application design system is mandatory:
  - Never introduce colors outside the defined palette without approval.
  - Prefer semantic MD3 roles over raw hex values.
  - Existing design tokens take precedence over generic design advice.
- Keep user-facing text in Vietnamese; source/comments/docs may be English.
- Reuse existing components and routing conventions; avoid unnecessary dependencies.
- Use mock data only; no real authentication, backend submission, or external personal-data transmission.
- After each prompt, write a concise report in `agent_log/`.

## 3. Required skills identified and loaded

| Skill | Status |
| --- | --- |
| `app-design-system` | **Available and read.** Read `.opencode/skills/app-design-system/SKILLS.md` and `references/color-palette.md`. |
| `frontend-design` | Was missing at the time of this report. **Now present and verified** — see `agent_log/00_2_skill_verification.md`. |
| `heydamir-unslop` | Was missing at the time of this report. **Now present and verified** — see `agent_log/00_2_skill_verification.md`. |

The design-system palette is small and light-theme-only: dark red primary `#A51B1D`, light pink containers, bright/crimson red secondary/tertiary, grey outline `#858585`, light grey neutral `#F2F2F2`, error `#B3261E`, white surface, black on-surface. Dark theme is explicitly out of scope.

No downloads were attempted, per `AGENTS.md`. This blocker is now resolved; see `agent_log/00_2_skill_verification.md`.

## 4. Existing routes, pages, and wireframes

**Routes:** only `/` exists, showing the default Next.js starter page.

**Reference wireframes in `docs/prompts/references/`:**

| File | Content | Notes |
| --- | --- | --- |
| `login.html` | Login screen: selected account, masked phone, password field, forgot-password, change-account, support links | 402×874 Figma export; external `assets/*.svg` files are missing, only inline SVGs survive |
| `home.html` | VNeID home: profile header, QR cards, favourite utilities, reporting entry point, bottom navigation | Same export limitations |
| `feedback-selection.html` | Four category cards: infrastructure, individual/organisation, Party inspection, public services | Only the first two are functional in scope |
| `report-individual.html` | Long single-scroll form: reporter, reported subject (three conditional states), incident, location/map/current-location, evidence (max 3), summary/description, confirmation, back/submit | Primary form reference; reporter fields are editable here, which conflicts with the prompt |
| `report-individual-history.html` | Category landing page, not a history list: title, “Tạo yêu cầu mới”, “Lịch sử yêu cầu”, “Đường dây nóng” | History list design must be created |
| `report-individual-fullvisual.html` | Alternative full-visual reference | Explicitly not required; do not recreate |

All HTML references are fixed-size, absolutely positioned Figma exports. They cannot be copied directly into a responsive Next.js UI. There is no infrastructure form wireframe and no infrastructure history wireframe.

**Flow documents:**

- `F1` describes a multi-step submit flow: category → location → description → review → success, with validation/error branches.
- `F2` describes lookup by reference code.
- `F3` describes report details and processing history.

`F1`’s wizard structure conflicts with the single-scroll form in `report-individual.html` and prompts 5–6. `F2` lookup is not part of the journey defined in prompt 0. Recommend following the single-scroll form and treating the flows as UX evidence for validation, error, and history states, not as a route specification.

## 5. Existing components and utilities suitable for reuse

Practically none beyond framework primitives:

- Root layout in `app/layout.tsx`.
- Next.js `Link`, `Image`, font loading, App Router navigation.
- Tailwind v4 utility pipeline and `@/*` import alias.
- Default public SVG assets are starter assets, not part of the intended design.

The reference HTML provides visual direction only. Shared UI will need to be built locally:

- App shell / mobile frame, page header with back control, section headings.
- Buttons (primary, secondary, text), links, disabled states.
- Form controls: text input, select, textarea, checkbox, radio cards/segmented control, field-level validation.
- Read-only reporter information card.
- Image upload/preview/remove/replace control.
- Location field, map picker, current-location action.
- Status badge, history card, detail panel, empty state.
- Success dialog/toast and confirmation dialog.
- Loading and unavailable/disabled states.

## 6. Potential technical constraints and conflicts

1. **Skills (resolved).** `frontend-design` and `heydamir-unslop` were missing; both are now installed and verified in `agent_log/00_2_skill_verification.md`.
2. **Palette vs reference colors.** References use values outside the design-system palette (`#737373`, `#DFDFDF`, `#57616e`, `#EF4444`, etc.). They must be mapped to MD3 semantic roles, not copied.
3. **Dark mode conflict.** The starter CSS enables `prefers-color-scheme: dark`, while the design system says dark theme is not implemented. The final theme should be light-only.
4. **Reference fidelity.** The references are 402×874 absolute-positioned exports with missing image assets. They must be reconstructed as responsive, mobile-first layouts, likely centered with a max width on larger screens.
5. **Reporter information conflict.** The reference shows editable reporter fields; prompts 5–6 require read-only account data from `user.json`. Follow the prompts: read-only, no edit controls.
6. **Landing vs history.** `report-individual-history.html` is a three-button landing page, not a report list. Recommended resolution: category landing route plus a separate history list route and optional detail route.
7. **Map implementation.** No map library or API key exists. Installing one would violate the “avoid unnecessary dependencies” rule. Recommended: self-contained interactive mock map (click-to-place marker) with optional OpenStreetMap raster tiles where network is available. Geolocation must be requested only after an explicit user action and must handle denial/timeout.
8. **Persistence.** The project has no server capable of writing JSON files. Use JSON as seed data and `localStorage` as runtime persistence. Do not claim source JSON files are updated. Keep a service abstraction so a real API can replace it later.
9. **Evidence storage.** `localStorage` has a size limit. For prototype persistence, downscale selected images into data URLs or persist a small preview plus filename; fail gracefully if quota is exceeded.
10. **Cache Components and browser APIs.** Keep `localStorage`, `FileReader`, `navigator.geolocation`, and map state inside Client Components, and read persisted values after mount to avoid hydration mismatches.
11. **No icon/dependency set.** There is no icon library, class-name utility, form library, or map library. Use local inline SVG icons and native React/Tailwind patterns.
12. **Fonts and language.** The layout currently uses Geist with `subsets: ["latin"]` and `lang="en"`. Vietnamese diacritics and the reference direction suggest a Vietnamese-capable font such as Be Vietnam Pro, and `lang="vi"` with Vietnamese metadata.
13. **Out-of-scope features.** Do not implement notifications, payments, document services, or the lookup flow (`F2`) unless explicitly approved. Unsupported feedback categories may appear but must stay disabled/non-functional.
14. **Verification target.** Target viewport is approximately 402–430 px wide; layouts must remain usable and scrollable on smaller screens. `next build` and `eslint` should be run after implementation.

## 7. Recommended implementation sequence

Proposed route map:

```text
/login
/                                  Home
/feedback                          Feedback selection
/reports/individual                Category landing
/reports/individual/new            Individual / Organisation form
/reports/individual/history        History list
/reports/individual/history/[id]   Report details
/reports/infrastructure            Category landing
/reports/infrastructure/new        Infrastructure form
/reports/infrastructure/history    History list
/reports/infrastructure/history/[id]
```

Proposed data layout (root-level, matching the existing `@/*` alias and avoiding a disruptive move to `src/`):

```text
data/mock/user.json
data/mock/report_options.json
data/mock/report_individual_history.json
data/mock/report_infrastructure_history.json
lib/types/report.ts
lib/mock/storage.ts
lib/mock/mockAuthService.ts
lib/mock/mockReportService.ts
components/ui/...
components/report/...
```

Sequence:

1. **Foundation (prompt 1):** define MD3 tokens from the approved palette in `globals.css`; remove starter dark mode; set Vietnamese metadata/lang and a Vietnamese-capable font; build the app shell, shared controls, types, JSON seeds, service abstraction, session handling, and route skeleton.
2. **Login (prompt 2):** mock login against `user.json`; persist session and redirect to Home; validate empty fields.
3. **Home (prompt 3):** make only the reporting entry point functional; keep unrelated VNeID items static.
4. **Feedback selection (prompt 4):** enable the two in-scope categories; show the other two as visibly disabled; working back navigation.
5. **Individual / Organisation form (prompt 5):** read-only reporter card, conditional organisation and subject fields, incident details, evidence, validation, confirmation, submit through the mock service.
6. **Infrastructure form (prompt 6):** infrastructure-specific fields, required interactive map picker, current-location handling, shared evidence and validation patterns.
7. **History and details (prompt 7):** separate per-category datasets, seeded lists, empty states, status badges, newest-first ordering, detail view, “Tạo yêu cầu mới”, and hotline placeholder.
8. **Final integration and QA:** run the full journey, verify refresh persistence and category isolation, test mobile layout and validation, check Vietnamese text, run `bun run lint` and `bun run build`, and audit against `app-design-system` (plus `heydamir-unslop` if supplied).

**Decisions needed before prompt 1:** confirm the landing/history route separation, confirm the dependency-free mock map approach, choose the Vietnamese webfont, and confirm whether the `F2` lookup flow stays out of scope.
