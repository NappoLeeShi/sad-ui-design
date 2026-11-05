# Prompt 3.1 — Fix Home Page, Login Redirect and Feedback Navigation

## Objective

Fix three UI and navigation issues in the current implementation:

1. Rework the Home page to follow the layout of the existing reference at `docs/prompts/references/home.html`.
2. Change the post-login destination from `/feedback` to `/home`.
3. Add a Back button to the `/feedback` page, following the navigation pattern used by other pages.

Inspect the existing implementation before making changes.

## 1. Home Page — Follow the Existing Reference

Reference file:

`docs/prompts/references/home.html`

Rework the current Home page at `/home` to follow the structure and layout of this reference.

Requirements:

- Read and inspect the complete reference HTML before modifying the Home page.
- Treat the reference as the primary structural and layout guideline.
- Reproduce its overall page structure, content hierarchy, sections, spacing, alignment, and component placement as closely as possible.
- Reuse the project's existing design system, typography, colors, and reusable components where appropriate.
- Preserve the existing application routing and mock authentication architecture.
- Keep the Home page responsive and consistent with the rest of the application.

Important:

- Do not simply create a new Home page based on your own interpretation.
- Do not replace the reference layout with a generic dashboard.
- Do not remove important sections or elements present in the reference.
- Do not modify unrelated pages or features.

The Home page must remain accessible at `/home`.

## 2. Login Redirect — Navigate to `/home`

Update the successful mock login flow.

Expected behavior:

1. The user opens `/login`.
2. The user completes the existing mock login interaction.
3. The application updates and persists the mock authentication state.
4. After successful login, navigate to `/home`.

Requirements:

- Replace the current post-login destination `/feedback` with `/home`.
- Do not redirect users to `/feedback` immediately after login.
- Preserve the existing login UI and mock login behavior.
- Ensure refreshing `/home` after successful login does not redirect the user back to `/login`.

Also inspect the authentication guard implemented in Prompt 2.1.

If the guard currently redirects authenticated users who visit `/login` to `/feedback`, update that destination to `/home`.

Do not weaken or remove route protection.

## 3. Feedback Page — Add a Back Button

The `/feedback` page currently has no Back button because it does not use the same top widget/header structure as other pages.

Add a Back button to `/feedback`.

Requirements:

- Inspect the top widget/header used by existing report and history pages.
- Follow the same visual style, placement, spacing, icon style, and interaction pattern.
- Add the Back button to the top area of `/feedback`.
- Keep the existing feedback category content and layout intact as much as possible.
- Do not introduce an entirely new header design if an existing reusable top widget can be reused.

Expected behavior:

- When the user clicks Back from `/feedback`, navigate to `/home`.
- Do not rely solely on browser history, because users may access `/feedback` directly.
- Ensure the Back button works consistently even when `/feedback` is opened through a direct URL.

## 4. Route and Authentication Consistency

After these changes, the expected navigation flow is:

`/login → /home → /feedback`

Requirements:

- `/login` remains a public route.
- `/home` remains a protected route.
- `/feedback` remains a protected route.
- All existing report forms, history pages, and other protected pages must remain protected.
- Unauthenticated access to any protected page must still redirect to `/login`.
- Authenticated users visiting `/login` should be redirected to `/home`.

Do not remove, bypass, or duplicate the centralized authentication guard.

## 5. Scope Restrictions

Only modify what is necessary for these three issues and their related navigation behavior.

Do not:

- Add sign-out UI or sign-out functionality.
- Rebuild the Login page.
- Redesign the Feedback page beyond adding the Back button.
- Change the existing feedback categories or their enabled/disabled states.
- Modify report forms or report history.
- Change mock report data or authentication data structures unless strictly necessary.
- Add a real backend or external authentication service.
- Implement features belonging to later prompts.

## 6. Acceptance Criteria

Verify all of the following:

| Test | Expected result |
|---|---|
| Open `/login` without authentication | Login page is displayed |
| Complete mock login | Navigate to `/home` |
| Open `/home` after login | Home page is displayed |
| Compare Home page with `references/home.html` | Structure and layout follow the reference |
| Refresh `/home` after login | Remain on `/home` |
| Open `/feedback` after login | Feedback page is displayed |
| Inspect `/feedback` | A visible Back button exists in the top area |
| Click Back on `/feedback` | Navigate to `/home` |
| Open `/feedback` directly while authenticated | Feedback page is displayed |
| Open `/feedback` without authentication | Redirect to `/login` |
| Open `/home` without authentication | Redirect to `/login` |
| Visit `/login` while authenticated | Redirect to `/home` |

## 7. Final Report

After implementation, report:

1. What was changed on the Home page.
2. Which elements from the HTML reference were reproduced.
3. How the post-login redirect was updated.
4. Whether the authentication guard's redirect destination was updated.
5. How the Feedback page Back button was implemented.
6. Which acceptance tests were verified.
7. Any remaining differences or limitations compared with the reference.

Stop after completing Prompt 3.1. Do not proceed to Prompt 4 or subsequent prompts.