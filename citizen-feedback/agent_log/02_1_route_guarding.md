# Agent Log — Prompt 2.1: Route protection

- **Date:** 2026-11-05
- **Prompt:** `docs/prompts/prompt_2.1_sign-out_and_route_guarding.md`
- **Response:** Added a centralized server-side auth guard for the mock session. All routes except `/login` now require authentication; `/` keeps its existing redirect to `/login`, and an authenticated visit to `/login` goes to `/feedback`. No UI was added or redesigned, and no sign-out feature/UI was created.
- **Changes:** Added `proxy.ts` and `lib/mock/session-cookie.ts`; extended `lib/mock/mockAuthService.ts`; restored the session storage key in `lib/mock/storage.ts`.

---

## 1. Public and protected routes

| Route | Access |
| --- | --- |
| `/login` | Public |
| `/feedback` | Protected |
| `/reports/{individual,infrastructure}` | Protected |
| `/reports/{category}/new` | Protected |
| `/reports/{category}/history` | Protected |
| `/reports/{category}/history/[id]` | Protected |
| `/` | Protected by existing `next.config.ts` redirect to `/login`; an authenticated visit continues to `/feedback` |
| Any future application route | Protected unless added to the public allowlist |

## 2. Guard location

`proxy.ts` is the single guard. It reads `vneid_mock_session`, validates the mock user and timestamp, and redirects:

- unauthenticated request to a protected route → `/login`
- authenticated request to `/login` → `/feedback`

The matcher skips Next.js assets and static files. `LoginForm` keeps its existing mount check so a session stored before this prompt can migrate and continue to `/feedback`.

## 3. Persistence and restore

- `localStorage["vneid:session:v1"]` remains the original mock session store.
- A mirrored `vneid_mock_session` cookie (7 days, `Path=/`, `SameSite=Lax`, `Secure` on HTTPS) lets the server-side guard see the session.
- On read, a valid `localStorage` session recreates a missing cookie; a valid cookie recreates missing `localStorage`. This keeps refreshes, direct URLs, copied links, and new tabs consistent.
- If the browser blocks cookies, mock sign-in fails with a Vietnamese error instead of creating a redirect loop.
- The existing `signOut()` helper now clears both stores. It has no UI and is not exposed anywhere.

The cookie is intentionally tamper-visible and is not real authentication; it only routes the UI prototype.

## 4. Verification

- `bun run lint` — passes.
- `bun run build` — passes; `Proxy (Middleware)` is listed.
- Production server checks: anonymous `/feedback`, both report categories, history, detail, and new-report URLs return `307` to `/login`; authenticated counterparts return `200`; authenticated `/login` returns `307` to `/feedback`; `/` resolves to `/login` anonymously and `/feedback` when authenticated; static assets remain reachable.
- Headless Firefox (WebDriver BiDi), 26/26 checks passed:
  - all six acceptance-table protected routes redirect anonymously;
  - `/login` is reachable anonymously and keeps the existing password validation;
  - login writes both stores and reaches `/feedback`;
  - refreshing `/feedback` and opening report pages directly still works;
  - `/login` redirects to `/feedback` when authenticated;
  - a new tab with the session opens a protected URL, and a tab without the session is redirected;
  - a localStorage-only session migrates to the cookie and recovers after the cookie is removed;
  - a cookie-only session still opens protected pages when localStorage is cleared.

## 5. Limitations

- This is a mock guard, not real security: the cookie is not signed or encrypted, and there is no backend session validation.
- A localStorage-only session that opens a protected URL directly is first sent to `/login`, then migrated to `/feedback`; the original deep link is not restored.
- If a browser disables cookies, mock sign-in cannot be completed in this prototype.
- No sign-out UI or feature was added, per the prompt.
