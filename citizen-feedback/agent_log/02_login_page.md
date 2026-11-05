# Agent Log — Prompt 2: Login page

- **Date:** 2026-11-05
- **Prompt:** `docs/prompts/prompt_2_login_page.md`
- **Response:** Replaced the placeholder login screen with a functional mock sign-in form backed by `data/mock/user.json`, including password validation, show/hide, session persistence, and redirect to the Feedback Selection page.
- **Changes:** Added `components/auth/LoginForm.tsx`; rewrote `app/login/page.tsx`.

---

## 1. Files modified

| File | Change |
| --- | --- |
| `app/login/page.tsx` | Server page now loads the mock user with `getMockUser()` and renders the client login form with metadata. |
| `components/auth/LoginForm.tsx` | New client form: account card, password field, visibility toggle, validation, mock sign-in, session-aware redirect. |

`lib/mock/mockAuthService.ts`, `data/mock/user.json`, and the existing UI components were reused without changes.

## 2. Login behaviour

- The selected account is the mock profile from `user.json`; the card shows initials, full name, account level, and a masked citizen ID. No account switching was added.
- A password is required. Empty or whitespace-only input produces the field error “Vui lòng nhập mật khẩu.” and marks the input invalid.
- Any non-empty mock password is accepted. The password is checked only for presence; it is not compared, stored, or transmitted.
- Successful sign-in persists the existing mock session (`vneid:session:v1`) in `localStorage` and replaces the route with `/feedback`.
- On mount, an already-authenticated visitor is redirected from `/login` to `/feedback`, so refreshing or revisiting login does not show the form as the final state.
- The show/hide password control preserves focus and exposes `aria-label` plus `aria-pressed`.

**Routing note:** Prompt 1.1 removed the Home page and established `/ → /login → /feedback`. The older “navigate to Home after login” line in Prompt 2 is superseded; this implementation targets `/feedback`.

## 3. Scope boundaries

- The reference `login.html` also shows “Quên mật khẩu”, “Đổi tài khoản”, and help links. These were omitted because password recovery, account management, and support flows are out of scope and would otherwise appear functional without behaviour.
- No authentication API, OTP, identity verification, or external credential handling was added.
- Reporter data for later report forms remains available through `getReporterSnapshot()`, which reads the same `user.json` profile.

## 4. Verification

- `bun run lint` — passes.
- `bun run build` — passes.
- Headless browser flow:
  - Empty submit stays on `/login` and renders the password error.
  - Valid submit navigates to `/feedback` and writes the mock session.
  - Reloading `/login` with the session redirects to `/feedback`.
  - No horizontal overflow at 430px or 360px viewport widths.
- Production server: `/` returns `307` to `/login`; `/login` and `/feedback` return `200`.
- The login page contains no outgoing links to `/feedback`; navigation happens only after form submission.

## 5. Remaining issues

- Protected routes are not guarded yet; direct visits to `/feedback` still render. Route protection was not required by this prompt.
- No sign-out UI exists yet.
