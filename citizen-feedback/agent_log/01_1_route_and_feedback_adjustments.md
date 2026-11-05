# Agent Log — Prompt 1.1: Route and feedback category adjustments

- **Date:** 2026-11-05
- **Prompt:** `docs/prompts/prompt_1.1_route_and_feedback_adjustments.md`
- **Response:** Removed the Home screen from the journey, redirected `/` to `/login`, pointed the mock login action at `/feedback`, and extended the Feedback Selection page to four categories with two enabled and two unavailable.
- **Changes:** Removed `app/page.tsx`; updated `next.config.ts`, `app/login/page.tsx`, `app/feedback/page.tsx`, `app/not-found.tsx`, and `components/ui/PageHeader.tsx`.

---

## 1. Files modified

| File | Change |
| --- | --- |
| `app/page.tsx` | Deleted; the Home/Index screen no longer exists. |
| `next.config.ts` | Added a non-permanent `/` → `/login` redirect. |
| `app/login/page.tsx` | Replaced the “Về trang chủ” action with a primary “Đăng nhập” action to `/feedback`; removed the back control. |
| `app/feedback/page.tsx` | Added the two new categories, kept the first two links, rendered the new ones as disabled, removed the Home link and back control. |
| `app/not-found.tsx` | “Về trang chủ” → “Về đăng nhập”, pointing at `/login`. |
| `components/ui/PageHeader.tsx` | Added an optional `showBack` prop so entry screens can omit the back control without duplicating the header. |

## 2. Routes

- **Removed:** `/` as a Home page.
- **Updated:** `/` now responds with a 307 redirect to `/login`.
- **Unchanged:** `/login`, `/feedback`, `/reports/infrastructure`, `/reports/individual`, their `/new` and `/history` routes, and `/history/[id]`.

## 3. Entry and post-login flow

- `/` is handled by the Next.js redirect table, so there is no rendered Home route to flash.
- `/login` remains the placeholder mock login screen from Prompt 1. Its “Đăng nhập” action navigates directly to `/feedback`. The full mock form and session handling remain scheduled for the login prompt.
- Refresh on `/`, `/login`, `/feedback`, and the report routes resolves correctly.

## 4. Category behaviour

The Feedback Selection page now shows exactly four options in order:

1. **Phản ánh về cơ sở hạ tầng** — links to `/reports/infrastructure`.
2. **Báo cáo cá nhân, tổ chức** — links to `/reports/individual`.
3. **Kiến nghị, phản ánh về kiểm tra, giám sát của Đảng** — unavailable card, no `href`, no handler, no route.
4. **Phản ánh kiến nghị về dịch vụ công** — unavailable card, no `href`, no handler, no route.

Disabled cards use muted surfaces and text, a neutral icon container, and a “Chưa khả dụng” badge. Long labels wrap with `break-words` and `min-w-0`; nothing is truncated or clipped at 430px or 360px.

## 5. Verification

- `bun run lint` — passes.
- `bun run build` — passes; the build output no longer contains `/` as a page.
- `/` returns `307` with `Location: /login`; following it returns 200.
- `/login` and `/feedback` return 200; both report landing and history routes return 200.
- Server-rendered `/feedback` contains exactly two report links (the enabled categories), two `aria-disabled="true"` cards, and all four category labels.
- Screenshots at 430×932 and 360×800 confirmed the page fits horizontally without clipped text.
- Dev server produced no runtime errors or Next.js insights after switching to the redirect table.

## 6. Remaining issues

- The login screen is still a placeholder; Prompt 2 must replace it with the real mock form, validation, session persistence, and `/feedback` navigation after a successful submit.
- The two new categories intentionally have no pages or behaviour.
