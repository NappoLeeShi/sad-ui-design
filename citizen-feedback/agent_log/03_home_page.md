# Agent Log — Prompt 3: Home page

- **Date:** 2026-11-05
- **Prompt:** `docs/prompts/prompt_3_home_page.md`
- **Response:** Added a Home page at `/home` using the existing shell, palette, and mock user. The single working action is the reporting card, which opens Feedback Selection (`/feedback`). All other utilities are static, muted, and intentionally non-interactive.
- **Changes:** Added `app/home/page.tsx`. No existing page, form, history view, mock data, or route was redesigned. Per the user's decision, the current `/ → /login → /feedback` flow is unchanged.

---

## 1. Placement in routing

`/home` is a protected route. `proxy.ts` already requires a mock session for every route except `/login`, so no guard change was needed.

| Entry | Behaviour |
| --- | --- |
| Anonymous `/home` | Redirects to `/login` |
| Authenticated `/home` | Renders the Home page |
| Reporting card | `next/link` to `/feedback` |
| Login / `/` | Unchanged: `/` → `/login` → `/feedback` |

Home is reachable by URL but is not part of the post-login path, as requested.

## 2. Page structure

- **Identity band** — primary surface; VNeID mark, "Bản mô phỏng" note, citizen name, initials, and "Định danh mức 2" from `getMockUser()`.
- **Reporting entry** — one prominent card, the only link/control on the page, with the reference copy "Tiếp nhận góp ý, phản ánh & vướng mắc".
- **Other utilities** — a two-column static grid matching the reference list (CCCD, BHYT, driving licence, administrative procedures, social welfare, health records, security, other services), with a "Chưa khả dụng trong bản mô phỏng." note.

Reference items that imply separate VNeID features (QR/CCCD shortcuts, search) were not reproduced: they would either implement out-of-scope features or present decorative controls as functional. The reference's main regions and labels are retained.

## 3. Verification

- `bun run lint` — passes (fixed an `aria-disabled` role warning by describing the static grid with the note instead).
- `bun run build` — passes; `/home` is prerendered.
- Headless Firefox (WebDriver BiDi), 16/16 checks:
  - anonymous `/home` → `/login`; authenticated `/home` renders with the correct title;
  - mock name and identity level appear; the reference reporting copy is present;
  - exactly one link and one interactive element exist on the page;
  - clicking the card reaches `/feedback` and the selection heading;
  - no horizontal overflow at 430, 390, 360, and 320 px; the two-column grid and labels stay unclipped at 430 and 360 px.

## 4. Limitations

- Home is not linked from Login or Feedback Selection, so it is currently URL-only (`/home`). This follows the decision to keep the existing entry flow.
- The utility tiles and "Bản mô phỏng" label are static; no sign-out, QR, search, notification, payment, or document service was added.
- The identity band is a compact adaptation of the reference, not a pixel copy; the reference's grey top band and 4–5 column utility row were adapted for legibility and the existing 430 px shell.
