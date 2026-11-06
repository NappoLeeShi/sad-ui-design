# Agent Log — Prompt 5: Individual / Organization Report Form

- **Date:** 2026-11-06
- **Prompt:** `docs/prompts/prompt_5_individual_organization_report_form.md`
- **Response:** Built the complete individual/organization report form and a functional history list so submitted reports are visible immediately.

---

## Changes

| File | Change |
| --- | --- |
| `components/reports/IndividualReportForm.tsx` | New client-side form: read-only reporter card, conditional organisation and subject fields, incident fields, local evidence upload, validation, mock submission, success state. |
| `components/reports/ReportHistoryList.tsx` | New client list driven by `useMockReports`; shows code, status, title, excerpt and submission time. |
| `app/reports/[category]/new/page.tsx` | Renders the real form for `individual`; infrastructure keeps its placeholder. |
| `app/reports/[category]/history/page.tsx` | Replaced the empty placeholder with the functional list and a “Tạo mới” action. |

## Design decisions

- Sections are numbered 1–6 with the existing `Section`, `Field`, `RadioCardGroup` and related primitives; no new colours or tokens were introduced.
- Reporter details use `ReadOnlyAccountCard` as static `dl` text and contain no inputs, edit buttons or pencil icons.
- The organisation representative checkbox reveals only organisation name and representative role; subject type swaps between individual, organisation and unknown field sets while preserving entered values.
- “Không rõ thời gian” and “Không rõ địa điểm” disable their inputs instead of clearing them. Incident time is stored against Vietnam time (`+07:00`).
- Evidence uses the existing `ImageUploader` with the JSON limits, so preview, replace, remove, type validation and error feedback stay local.
- Submission calls the shared `createReport()` service, which generates the code/timestamp and persists to `localStorage`. The success screen shows the code and links to history; no network request is made.
- The submit action sits in a sticky bottom bar so it stays reachable through the long form.

## Verification

- `bun run lint` — passes.
- `bun run build` — passes; all report routes generate.
- Headless Firefox (WebDriver BiDi) — **68/68** runtime checks:
  - reporter rows are static text with no controls in the card;
  - organisation, subject, “Khác”, time-unknown and location-unknown conditionals all toggle correctly;
  - invalid file feedback, preview, counter and removal work;
  - empty submission shows all six field errors and focuses the first invalid field;
  - submission persists a complete record (reporter snapshot, organisation, subject, time, location, evidence, timeline) and survives reload;
  - the new record is first on `/reports/individual/history` with its code and “Đã gửi” status;
  - no external resource requests are made.
- Layout audit — **30/30** checks at 430, 390, 360 and 320 px: no horizontal overflow, labelled controls, sticky submit stays in view, confirmation clears the bar.

## Scope notes

- The infrastructure form and the report detail page remain placeholders; both belong to later prompts.
- Seed JSON is untouched at runtime; new records live in `vneid:reports:individual:v1` through the shared mock service.
