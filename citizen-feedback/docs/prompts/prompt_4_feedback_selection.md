# Prompt 4 — Implement the Feedback Selection Page

Implement the Feedback Selection page, where users choose the category of report they want to submit.

### Supported categories

Only the first two categories should be functional:

1. **Phản ánh về cơ sở hạ tầng**
2. **Báo cáo cá nhân, tổ chức**

### Requirements

1. Follow the existing Feedback Selection wireframe if available.
2. Preserve the original design direction and page structure.
3. Ensure both supported categories are visually distinguishable and easy to select.

### Required interactions

When the user selects:

- **Phản ánh về cơ sở hạ tầng:** Navigate to the Infrastructure Report landing/history page.
- **Báo cáo cá nhân, tổ chức:** Navigate to the Individual / Organization Report landing/history page.

If additional categories are present in the reference design:

- Keep them visually consistent with the reference.
- They may remain visible as disabled or unavailable options.
- Do not implement navigation or reporting functionality for them.

### Navigation

- Provide a working back button.
- Ensure navigation works with the existing routing mechanism.

### Acceptance criteria

- The first two categories are selectable.
- Each category navigates to the correct page.
- Unsupported categories cannot accidentally open unfinished flows.
- Back navigation works correctly.