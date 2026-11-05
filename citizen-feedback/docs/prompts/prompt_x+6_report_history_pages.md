# Prompt 7 — Implement Report History Pages

Implement the history pages for both report categories.

The project should provide separate history views for:

1. Individual / Organization Reports.
2. Infrastructure Reports.

Use the existing `report-individual-history.html` as a reference for the Individual / Organization Report history page if available.

For the Infrastructure Report history page, reuse the same design pattern while adapting its title and content to the infrastructure category.

### A. History Data

Use separate datasets:

- `report_individual_history.json`
- `report_infrastructure_history.json`

Use the shared mock report service to retrieve and persist records.

Do not hardcode history entries directly inside page components.

### B. History List

Display submitted reports in a clear, readable list.

Each report item should include relevant information, such as:

- Report ID.
- Report title or short description.
- Submission date.
- Report category.
- Current mock processing status.

Use appropriate sample statuses, such as:

- Đã gửi.
- Đang tiếp nhận.
- Đang xử lý.
- Đã hoàn thành.

These are mock statuses only. Do not imply that a real government agency has received or processed the reports.

### C. Empty State

When no reports exist:

- Display a clear empty-state message.
- Provide an action to create a new report.

### D. Report Details

If appropriate to the existing routing structure, allow users to select a history item and view its details.

The details page or detail panel may show:

- Report information.
- Submitted description.
- Location, where applicable.
- Evidence previews.
- Submission timestamp.
- Mock processing status.

Do not implement a real administrative workflow.

### E. Navigation

Each history page must provide:

- A working back button.
- A **Tạo yêu cầu mới** button.
- Navigation to the correct form for its report category.

The Individual / Organization history page must open the Individual / Organization Report form.

The Infrastructure history page must open the Infrastructure Report form.

### F. Hotline Button

If the existing wireframe contains a hotline button:

- Preserve its visual presence if appropriate.
- Do not invent a real hotline number.
- If no verified contact information exists, keep it as a non-functional placeholder or display a clearly identified mock contact action.
- Do not imply that a call has been placed.

### G. Data Synchronization

After a user submits a new report:

- The corresponding history dataset must be updated through the mock persistence layer.
- The newly created report must appear in the correct history list.
- The other report category's history must remain unaffected.
- Data should remain available after page navigation and refresh.

### Acceptance criteria

- Both history pages work independently.
- Each page displays only its own report category.
- New submissions appear in the correct history.
- Empty states work.
- Navigation to the correct form works.
- History data persists across refreshes using the selected mock persistence mechanism.