# Prompt 1.1 — Adjust Entry Routing and Feedback Category Selection

Continue working on the existing VNeID Reporting UI project after completing Prompt 1.

The shared implementation foundation has already been established. Your task is to make the following navigation and UI adjustments based on the updated project requirements.

Before making changes, inspect the current implementation and identify the existing routes, page components, and navigation logic. Reuse the existing architecture and components wherever possible.

## 1. Remove the Home / Index Page

The current implementation contains a Home or Index page with elements such as:

- A "Bắt đầu phản ánh" button.
- A "Đăng nhập" button.

This page is no longer part of the intended user journey.

### Required changes

- Remove the Home / Index page from the active application flow.
- The application must route directly to the Login page when users access the root URL (`/`).
- After a successful mock login, navigate directly to the Feedback Selection page (`/feedback`).
- Do not redirect users to the Home page.
- Remove obsolete Home / Index navigation references and unused route definitions where appropriate.
- Do not unnecessarily delete reusable components or assets that may still be useful elsewhere.

The updated entry flow must be:

`/ → Login → /feedback`

## 2. Update the Feedback Selection Page

The current `/feedback` page contains only two report category options:

1. Phản ánh về cơ sở hạ tầng
2. Báo cáo cá nhân, tổ chức

Keep both existing options and add two more options.

The page must display exactly these four categories:

1. **Phản ánh về cơ sở hạ tầng**
2. **Báo cáo cá nhân, tổ chức**
3. **Kiến nghị, phản ánh về kiểm tra, giám sát của Đảng**
4. **Phản ánh kiến nghị về dịch vụ công**

### Required behavior

The first two categories must remain functional:

- **Phản ánh về cơ sở hạ tầng:** Navigate to the existing Infrastructure Report landing/history page.
- **Báo cáo cá nhân, tổ chức:** Navigate to the existing Individual / Organization Report landing/history page.

The newly added categories must be visible but must NOT navigate anywhere:

- **Kiến nghị, phản ánh về kiểm tra, giám sát của Đảng**
- **Phản ánh kiến nghị về dịch vụ công**

For these two options:

- Do not assign a route.
- Do not attach navigation handlers.
- Do not create placeholder pages.
- Do not redirect users to unrelated pages.
- Present them as unavailable or disabled options.
- Make their unavailable state visually understandable while maintaining consistency with the existing design.

## 3. UI and Design Requirements

- Follow the existing styling conventions and instructions in `AGENTS.md`.
- Preserve the current visual design of the Feedback Selection page as much as possible.
- Maintain consistent typography, spacing, colors, card styles, icons, and layout.
- The four categories should be visually organized and readable.
- Ensure long Vietnamese category names do not overflow, overlap, or become truncated.
- Maintain usability at the existing mobile viewport.
- Do not redesign unrelated pages.

## 4. Routing and Navigation Requirements

The updated navigation should work as follows:

```text
/
└── Login
    └── Successful mock login
        └── /feedback
            ├── Phản ánh về cơ sở hạ tầng
            │   └── Existing infrastructure report history page
            │
            ├── Báo cáo cá nhân, tổ chức
            │   └── Existing individual/organization report history page
            │
            ├── Kiến nghị, phản ánh về kiểm tra, giám sát của Đảng
            │   └── No navigation (disabled)
            │
            └── Phản ánh kiến nghị về dịch vụ công
                └── No navigation (disabled)
```

Additional requirements:

- Ensure direct access to `/` redirects or resolves to Login.
- Ensure successful login navigates to `/feedback`.
- Ensure browser refresh works correctly on supported routes.
- Preserve existing route paths for the two functional report categories unless a technical issue requires a change.
- Do not introduce unnecessary routing dependencies.

## 5. Scope Constraints

This task is strictly limited to:

- Removing the Home / Index page from the active navigation flow.
- Updating the root route and login redirection.
- Adding two categories to the Feedback Selection page.
- Configuring the correct enabled/disabled behavior.
- Removing obsolete navigation references.

Do NOT:

- Rebuild the login page.
- Rebuild the report forms.
- Rebuild the report history pages.
- Implement the two newly added categories.
- Modify the mock data architecture.
- Introduce a real authentication system.
- Connect to a real backend.
- Make unrelated UI or architectural changes.

## 6. Verification and Deliverables

After implementation, verify:

- [ ] Accessing `/` opens Login directly.
- [ ] No Home / Index page appears in the user journey.
- [ ] Successful mock login navigates to `/feedback`.
- [ ] The Feedback page displays all four specified categories.
- [ ] The infrastructure category navigates to the correct existing page.
- [ ] The individual/organization category navigates to the correct existing page.
- [ ] The two newly added categories are visibly disabled.
- [ ] Clicking disabled categories does not navigate anywhere.
- [ ] Browser refresh works on the relevant routes.
- [ ] No unrelated functionality has been broken.

At the end, provide a concise implementation report describing:

1. Files modified.
2. Routes removed, added, or updated.
3. How the root route and post-login navigation work.
4. How the four category options behave.
5. Verification performed.
6. Any remaining issues.

Do not proceed to the next implementation prompt after completing this task. Wait for further instructions.