# Prompt 2.1 — Implement Route Protection and Authentication Guard

## Objective

Implement route protection for the existing mock authentication system.

Only authenticated users should be able to access protected application pages. Unauthenticated users must be redirected to the Login page.

Do not change the existing UI or add unrelated features.

## 1. Preserve the Current Implementation

Before making changes:

- Inspect the current routing configuration.
- Inspect the existing Login page and mock authentication logic.
- Identify how authentication state is currently stored and restored.
- Review `AGENTS.md` and follow the required project skills and conventions.

Keep the existing implementation wherever possible.

**Do not add a sign-out button or sign-out UI. Do not implement a sign-out feature.**

Keep the current UI and functionality unchanged unless a modification is necessary for route protection.

## 2. Define Public and Protected Routes

### Public routes

- `/login`

Unauthenticated users must be able to access the Login page.

### Protected routes

All application pages other than `/login` must require authentication.

This includes, but is not limited to:

- `/`
- `/feedback`
- Individual/Organization report pages
- Infrastructure report pages
- Individual/Organization report history pages
- Infrastructure report history pages
- Report detail pages
- Any additional application routes introduced by subsequent prompts

The root route `/` must follow the existing routing behavior. If it currently redirects to `/login`, preserve that behavior.

If an authenticated user visits `/login`, redirect them to the appropriate existing application entry page, preferably `/feedback`.

## 3. Implement a Reusable Authentication Guard

Implement route protection using the routing architecture and framework already present in the project.

Requirements:

- Create or reuse a centralized authentication guard.
- Check the existing mock authentication state before rendering protected pages.
- If the user is authenticated, allow access.
- If the user is not authenticated, prevent the protected page from rendering and redirect to `/login`.
- Do not duplicate authentication checks independently across every page.
- Avoid redirect loops.
- Ensure authentication state is correctly restored after refreshing the browser.

Do not introduce a real backend or external authentication provider.

## 4. Preserve the Login Flow

After a successful mock login:

1. Update the existing authentication state.
2. Persist or restore the mock authentication state using the project's existing approach.
3. Navigate to `/feedback`.

Do not redesign the Login page or modify its existing visual appearance.

## 5. Handle Direct URL Access

Route protection must work even when users:

- Enter `/feedback` directly in the browser address bar.
- Open a report page using a copied URL.
- Refresh a protected page.
- Navigate directly to a report history or detail page.
- Open a protected route in a new browser tab without an authenticated session.

Unauthenticated users must always be redirected to `/login`.

## 6. Acceptance Criteria

Verify the following scenarios:

| Scenario | Expected result |
|---|---|
| Open `/login` without authentication | Login page is accessible |
| Open `/feedback` without authentication | Redirect to `/login` |
| Open an individual report page without authentication | Redirect to `/login` |
| Open an infrastructure report page without authentication | Redirect to `/login` |
| Open a history page without authentication | Redirect to `/login` |
| Open a report detail page without authentication | Redirect to `/login` |
| Complete mock login successfully | Navigate to `/feedback` |
| Refresh `/feedback` after successful login | Remain on `/feedback` |
| Directly access another protected page after login | Page is accessible |
| Open `/login` while already authenticated | Redirect to `/feedback` |

## 7. Scope Restrictions

- Do not add sign-out UI or sign-out functionality.
- Do not redesign existing pages.
- Do not modify report forms, report history, or mock report data.
- Do not add a backend, database, or external authentication service.
- Do not create unnecessary routes or placeholder pages.
- Do not implement features belonging to later prompts.

## 8. Final Report

After implementation, report:

1. Which routes are public and which are protected.
2. Where the reusable authentication guard is implemented.
3. How authentication state is persisted and restored.
4. Which test scenarios were verified.
5. Any remaining limitations.

Stop after completing this prompt. Do not proceed to Prompt 3 or any subsequent prompt.