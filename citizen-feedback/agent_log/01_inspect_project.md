# Agent Log — Prompt 1: Inspect project and establish the shared foundation

- **Date:** 2026-11-05
- **Prompt:** `docs/prompts/prompt_1_inspect_project.md`
- **Response:** Inspected the baseline project, adopted the required skills, defined the routing/data model, and built the shared design, mock-data, and component foundation. All later page prompts can now build on the same tokens, routes, and services.
- **Changes:** Replaced the create-next-app baseline; added `app/globals.css` tokens, Vietnamese root layout, mock data, domain types, mock services, shared UI components, and route skeletons. Added this report.

---

## 1. Inspection summary

| Item | Finding |
| --- | --- |
| Framework | Next.js **16.4.3** App Router, React 19, TypeScript strict |
| Config | `cacheComponents: true`, `partialPrefetching: true`, `experimental.agentFeedback: true`, Turbopack |
| Baseline | Only the create-next-app page existed; no routes, components, data, or persistence |
| References | Six HTML wireframes in `docs/prompts/references/` (see below) |
| Skills | `app-design-system`, `frontend-design`, `heydamir-unslop` present and read |

The reference HTML files are desktop-style Figma dumps with absolute positioning. Their copy, grouping, and flow were used as guidance; their layout was rebuilt with the application tokens.

## 2. References identified

| File | Use |
| --- | --- |
| `login.html` | Login screen structure |
| `home.html` | Home header, identity card, service grid |
| `feedback-selection.html` | Category selection |
| `report-individual.html` | Primary form visual reference |
| `report-individual-fullvisual.html` | Full-form visual cross-check |
| `report-individual-history.html` | Category landing/history layout |

`report-individual-fullvisual.html` was not previously listed in `AGENTS.md`; it was inspected for completeness. No infrastructure form or infrastructure history wireframe exists, so prompt 6/7 will adapt the individual patterns.

## 3. Routing structure

```
/login
/                                  Home
/feedback                          Feedback selection
/reports/[category]                Category landing
/reports/[category]/new            Report form (placeholder until prompts 5–6)
/reports/[category]/history        History list (placeholder until prompt 7)
/reports/[category]/history/[id]   Report detail (placeholder until prompt 7)
```

`category` is `individual | infrastructure`, validated by `lib/report-catalog.ts`. Invalid values call `notFound()`. Both categories are generated statically with `generateStaticParams`; `/reports/foo` returns 404.

Routes whose content depends on `category` export `instant = false`, because there is no meaningful URL-independent shell to stream for a phone-sized demo page. This also removes the Next.js development “URL data outside Suspense” insight.

## 4. Design foundation

- `app/globals.css` defines the complete MD3 light palette from the mandatory skill, plus type scale, radii, focus rings, selection, placeholder colour, and reduced-motion handling.
- No dark theme and no colours outside the palette. Secondary text uses `on-surface` with opacity rather than new greys.
- `app/layout.tsx` sets `lang="vi"`, Vietnamese metadata, and Be Vietnam Pro (400/500/600, `latin` + `vietnamese`) through `next/font`.
- The app is a 430px mobile frame centred on desktop with a `surface-variant` background.
- `lucide-react@1.69.0` supplies icons; v1 names such as `TriangleExclamationPoint` and `CircleExclamationPoint` are used.

## 5. Mock data and persistence

- `data/mock/user.json` — mock signed-in citizen (Nguyễn Văn A).
- `data/mock/report_options.json` — editable category, behaviour, issue, and evidence limits.
- `data/mock/report_individual_history.json` and `report_infrastructure_history.json` — seed histories covering every status.
- `lib/types/report.ts` — domain types for both categories, evidence, location, timeline, and status.
- `lib/mock/storage.ts` — SSR-safe `localStorage` helpers.
- `lib/mock/mockAuthService.ts` — mock session, reporter snapshot, sign-in/out. No credential is checked or transmitted.
- `lib/mock/mockReportService.ts` — read/create/subscribe/reset. IDs use `BC-YYYY-NNNN` and `HT-YYYY-NNNN`. Seeds are used only when storage is absent; an empty stored array means empty history. JSON files are never written at runtime.
- `lib/mock/useMockReports.ts` — client hook built on `useSyncExternalStore`, with cached snapshots and a server snapshot of `null`, so stored reports cannot cause hydration mismatches.

## 6. Shared components

`components/ui/` now provides: Button, Field, TextInput, TextField, TextareaField, SelectField, CheckboxField, RadioCardGroup, Notice, StatusBadge, EmptyState, LoadingState, PageHeader, Section, ReadOnlyAccountCard, Dialog, and ImageUploader.

They cover the states later prompts need (hover, focus, disabled, invalid, selected), use semantic tokens only, and keep labels/hints/errors wired with `aria-describedby` and `role="alert"` where relevant.

## 7. Verification

- `bun run lint` — passes with no warnings.
- `bun run build` — passes; all routes generated, invalid category rejected.
- Dev server checks: `/login`, `/`, `/feedback`, both category landings, `/new`, `/history`, and `/history/[id]` return 200; `/reports/foo` returns 404.
- Headless Firefox screenshots at 430px and 1280px confirmed the frame, palette, and typography render as intended.
- The dev server now starts without the earlier `params`-outside-Suspense errors.

## 8. Limitations and handoff

- `/login`, `/`, `/feedback`, and the category landing are functional-lite skeletons; prompts 2–4 will replace their copy and interactions.
- `/new` and `/history` are placeholders and must be replaced by prompts 5–7.
- The mock map and geolocation are intentionally not implemented yet (prompt 6).
- No backend, real authentication, file upload, or external submission exists by design.
- The `next dev` agent-feedback block in `AGENTS.md` is generated automatically and should stay committed.
