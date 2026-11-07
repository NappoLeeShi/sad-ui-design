# Agent Log — Prompt 7.1: History Gap Closure

- **Date:** 2026-11-07
- **Prompt:** `docs/prompts/prompt_7.1_history_gap_closure.md`
- **Scope:** Closed the five gaps from the Prompt 7 precheck only. No redesign of the existing history pages.

---

## 1. Files changed

| File | Change |
| --- | --- |
| `components/reports/HotlineAction.tsx` | New reusable mock-only hotline action. |
| `components/reports/ReportDetailView.tsx` | New read-only report detail view for both categories. |
| `app/reports/[category]/history/[id]/page.tsx` | Replaced the placeholder with the real detail view and category validation. |
| `app/reports/[category]/history/page.tsx` | Changed the create label to `Tạo yêu cầu mới`, added the hotline action, and wrapped the list in `Suspense`. |
| `components/reports/ReportHistoryList.tsx` | Added per-card category labels and the non-destructive `?empty=1` preview. |
| `app/reports/[category]/page.tsx` | Replaced the duplicate static hotline card with `HotlineAction`. |

No dependencies or colours were added.

## 2. Report detail route

`/reports/[category]/history/[id]` now:

- Validates the category server-side before rendering.
- Reads the record from the shared mock service through `useMockReports`.
- Matches either the record `id` or `code`.
- Shows a clear in-page not-found state with a link back to the same category history.
- Displays only fields present in the record: code, category, title, description, submitted time, status and status description, reporter snapshot, category-specific details, location/coordinates, evidence previews, and the read-only processing timeline.
- Uses `report_options.json` for Vietnamese labels on category-specific values.
- Uses a fixed Back control to the correct category history (`historyBack={false}`), so direct URLs also return to the right list.
- Is read-only: no editing, cancellation, approval, or processing actions.

## 3. Hotline action

`HotlineAction` is shared by both history pages and both category landing pages.

- Visual: a bordered full-width action with a phone icon, `Đường dây nóng`, and an unverified-contact note.
- Behaviour: clicking expands an informational notice. It is mock-only and never dials or invents a phone number.
- The same component replaces the old static hotline card on `/reports/individual` and `/reports/infrastructure`, removing duplication.

## 4. Category label on cards

Every history card now renders the category from the shared `REPORT_CATEGORY_META` mapping using `report.category`:

- Individual: `Báo cáo cá nhân, tổ chức`
- Infrastructure: `Phản ánh về cơ sở hạ tầng`

The label is a small primary-coloured line between the code/status row and the title, preserving the existing card layout.

## 5. Empty-state testing

Append `?empty=1` to either history URL:

- Individual: `/reports/individual/history?empty=1`
- Infrastructure: `/reports/infrastructure/history?empty=1`

The flag only changes the rendered view. It does not touch the JSON seeds, `localStorage`, or the other category. Remove the query parameter (or navigate to the normal URL) to restore the stored/seeded list. It is not linked from any user-facing control.

## 6. Verification

- `bun run lint` — pass.
- `bun run build` — pass.
- Headless Firefox acceptance run — **51/51 checks passed**, including:
  - Both detail routes show the correct record, category, status, mapped detail labels, location, reporter and timeline.
  - Nonexistent IDs show the not-found state.
  - Back returns to the correct category history.
  - Both create buttons read `Tạo yêu cầu mới` and open the correct form.
  - Hotline is visible on both history pages and toggles the mock notice without inventing a number.
  - Every card shows its category label.
  - Both `?empty=1` previews work and leave storage untouched; removing the flag restores seeds.
  - A new infrastructure submission still appears in history with `Đã gửi`, includes its evidence and timeline in the detail view, and persists across reload without leaking into the individual history.
- Layout checks at 390 px and 320 px found no horizontal overflow.

## 7. Remaining limitations

- Report data remains entirely client-side (seed JSON plus category-isolated `localStorage`); opening a detail URL in a fresh browser shows the seed record, not a server-rendered record.
- The hotline is intentionally non-functional and has no verified number.
- The detail page is intentionally read-only and does not provide an administrative workflow.
- `?empty=1` is a documented, non-destructive preview flag rather than a dev-only build gate, so it remains available but hidden from normal UI.
