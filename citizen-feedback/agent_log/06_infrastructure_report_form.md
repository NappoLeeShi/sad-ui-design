# Agent Log — Prompt 6: Infrastructure Report Form

- **Date:** 2026-11-07
- **Prompt:** `docs/prompts/prompt_6_infrastructure_report_form.md`
- **Response:** Built the complete infrastructure report form with a functional mock map picker, browser geolocation, required-location validation, and mock submission into the infrastructure history.

---

## Changes

| File | Change |
| --- | --- |
| `components/reports/InfrastructureReportForm.tsx` | New form: read-only reporter card, infrastructure type/issue/severity, short and detailed descriptions, required map location, editable address, evidence, confirmation, submission and success/focus handling. |
| `components/reports/LocationPickerDialog.tsx` | New interactive mock map: click/drag/keyboard marker, coordinates and mock address readout, current-location action, confirm/cancel. |
| `components/reports/ReportSuccessState.tsx` | Shared success screen extracted from the individual form and reused by both forms. |
| `components/reports/IndividualReportForm.tsx` | Refactored to use the shared success state; behaviour unchanged. |
| `lib/mock/mockGeocoding.ts` | Fixed HCMC map bounds, coordinate ↔ map-position helpers, deterministic mock reverse geocoding. |
| `lib/types/report.ts` | Added `summary` and optional `issueTypeOther` support for infrastructure details. |
| `components/ui/Dialog.tsx` | Added optional `panelClassName` so the map dialog can be wider than the default panel. |
| `app/reports/[category]/new/page.tsx` | Renders the infrastructure form instead of the placeholder. |

## Design decisions

- Reuses `Section`, `Field`, `SelectField`, `RadioCardGroup`, `ImageUploader`, `ReadOnlyAccountCard`, `Notice` and `Button`; no new colours or tokens were introduced.
- There is no map library or tile provider in the project, so the picker is a clearly labelled interactive mock map rather than a non-functional image. It stays fully offline and deterministic.
- Reporter details remain static text from `data/mock/user.json`; the form avoids individual/organisation-only fields.
- Location is mandatory. Confirming the map or current location fills coordinates and address; the address stays editable, and cancelling the map leaves both form data and evidence untouched.
- “Dùng vị trí hiện tại” is an explicit action. Permission is never requested on page load. Denied, unavailable and timeout results show a Vietnamese message and leave manual selection available.
- After map cancel, focus returns to the map button; after confirm, focus moves to the address field. The native dialog stays mounted while closed so focus restoration remains reliable.
- Submission calls the shared `createReport()` service: code `HT-YYYY-####`, timestamp, location, evidence and details are persisted to `localStorage`; seed JSON stays read-only.

## Verification

- `bun run lint` — passes.
- `bun run build` — passes; all report routes generate.
- Headless Firefox (WebDriver BiDi) — **68/68** checks:
  - empty submission shows every required-field error; “Khác” fields appear and disappear correctly;
  - invalid file type is rejected, valid image previews and can be removed/replaced;
  - geolocation denial shows a clear message and does not block manual selection;
  - map click and marker move update the coordinates and mock address; cancel preserves the form; confirm fills the address and stores the point;
  - geolocation success is requested once on explicit action, moves the marker and fills the address;
  - submission generates `HT-2026-0022`, stores coordinates/address/details/evidence and survives reload;
  - the new record appears first on `/reports/infrastructure/history`;
  - no external resource requests are made.
- Focus checks — cancel returns to `#open-map-button`; confirm returns to `#infrastructure-address`.
- Layout audit — no horizontal overflow at 430, 390, 360 and 320 px; the map dialog fits the viewport and keeps a usable map area at 320 px.

## Scope notes

- The report detail page remains a placeholder for a later prompt.
- Evidence remains local-only (`dataUrl` in `localStorage`); nothing is uploaded.
