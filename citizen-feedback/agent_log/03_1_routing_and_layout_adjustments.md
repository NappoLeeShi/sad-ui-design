# Agent Log — Prompt 3.1: Routing and layout adjustments

- **Date:** 2026-11-05
- **Prompt:** `docs/prompts/prompt_3.1_routing_and_layout_adjustments.md`
- **Response:** Rebuilt Home from `docs/prompts/references/home.html`, moved the post-login destination to `/home`, and added a Back control to Feedback Selection that always returns to Home.
- **Changes:** `app/home/page.tsx`, `components/ui/PageHeader.tsx`, `app/feedback/page.tsx`, `components/auth/LoginForm.tsx`, `proxy.ts`.

---

## 1. Home follows the reference

Home now reproduces the reference structure top to bottom:

| Reference region | Implementation |
| --- | --- |
| Grey identity band, 180 px | `bg-on-surface/55` with white text, avatar, full name uppercase, and "Định danh mức 2" pill |
| Search glyph | Static 30 px icon in the band, top right |
| Two QR cards | "Mã QR / Thẻ CCCD" and "Mã QR / Định danh điện tử", side by side |
| "Tiện ích yêu thích" + "Chỉnh sửa" | Section heading with a static edit label and pencil icon |
| Five favourite tiles | One 5-column row; reporting tile is first and links to `/feedback` |
| Second utility row | Five scrollable tiles (administrative procedures, social welfare, health records, security/public services, other services) |

Only the reporting tile is interactive. QR cards, search, edit, and the other utility tiles are static because those VNeID features are out of scope. The reference's placeholder "etc." tile became a real label, "Thủ tục hành chính". The reference's absolute-position bug (identity pill drawn at the top edge) was corrected by placing the pill under the name.

Layout matches the reference at 430 px: band 180 px, heading at y=196, tile row at y=228, QR row at y=114. No horizontal overflow at 430, 390, 360, or 320 px.

## 2. Routing

| Flow | Result |
| --- | --- |
| Successful login / restored session | `/login` → `/home` |
| Authenticated visit to `/login` | Redirects to `/home` |
| Anonymous `/home` | Redirects to `/login` (`proxy.ts` entry path) |
| Home reporting tile | `/home` → `/feedback` |
| Back on `/feedback` | Always `/home`, including direct-URL entry |

`PageHeader` gained a `historyBack` prop (default `true`). Feedback Selection passes `historyBack={false}` so Back pushes `/home` instead of trusting browser history; other pages keep the existing history-first behaviour.

## 3. Verification

- `bun run lint` — passes.
- `bun run build` — passes.
- Headless Firefox (WebDriver BiDi), 39/39 checks at 430 px and responsive widths:
  - login lands on `/home`; title, name, identity level, QR cards, heading, edit label, five favourite tiles and five utilities render;
  - exactly one link and one visible interactive element on Home;
  - tile row stays on one line; no overflow at 430/390/360/320 px;
  - tile → `/feedback`, Back → `/home` from both history and direct entry;
  - `/login` redirects to `/home` when authenticated, and `/home`, `/feedback`, report routes still guard anonymous users.

One verification failure was a test artifact: after a client-side login, Next keeps the previous Login subtree mounted with `display: none`, so a raw selector count included hidden inputs. The check now counts visible elements only.

## 4. Limitations

- Home remains a visual prototype: QR, search, edit, and non-reporting utilities are non-interactive.
- The reference uses 10 px tile labels; the implementation uses the design system's caption size for legibility. This is the only intentional visual deviation.
