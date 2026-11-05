# Prompt 5 — Implement the Individual / Organization Report Form

Implement the complete Individual / Organization Report form.

This page is the primary baseline for the two report form designs. Use the existing `report-individual.html` as the main visual reference.

However, the HTML wireframe is not an unquestionable source of truth. Evaluate the layout and interactions independently. You may improve the formatting, grouping, spacing, responsive behavior, and field presentation if necessary.

### A. Reporter Information

Display the current user's account information in a read-only section.

Use the mock account information from `user.json`.

Display the following information as static text:

- **Họ tên:** Nguyễn Văn A
- **Số định danh:** 123456789
- **Nơi thường trú:** 123/67 ABC

Important:

- These fields must NOT be rendered as textboxes or editable inputs.
- Users must not be able to modify or re-enter these details.
- Do not display edit buttons or pencil icons.
- Use a read-only information card or another suitable presentation.

Below this section, provide the checkbox:

**Tôi là người đại diện cho tổ chức**

When selected, display additional editable fields:

- Tên tổ chức.
- Vai trò/chức vụ của người đại diện.

When unchecked, hide these additional fields.

### B. Reported Subject Information

Allow the user to select the type of reported subject:

- Cá nhân.
- Tổ chức.
- Chưa xác định.

Display fields conditionally based on the selection.

**If Cá nhân is selected:**

- Họ tên cá nhân (if known).
- Other identifying information (optional).
- Số định danh cá nhân (optional; do not force the user to know or provide it).

**If Tổ chức is selected:**

- Tên tổ chức (if known).
- Địa chỉ tổ chức (optional).
- Mã số doanh nghiệp hoặc thông tin định danh khác (optional).

**If Chưa xác định is selected:**

- Do not require a name or identification number.
- Allow the user to provide identifying details through the incident description.

Do not display all conditional fields simultaneously.

### C. Incident Information

Provide fields for:

- Loại hành vi/sự việc.
- Thời gian xảy ra.
- Địa điểm xảy ra.
- Nội dung mô tả sự việc.

Use mock options for the behavior dropdown. Keep the options easy to modify through a JSON configuration file.

Provide an appropriate option such as **Khác**.

For incident time:

- Allow the user to select a date and, where appropriate, a time.
- Provide an option indicating that the time is unknown.
- When selected, disable or hide the corresponding time inputs.

For incident location:

- Provide the relevant address fields.
- Include an option indicating that the location is unknown.
- When selected, disable or hide the location inputs.

This form does not need the infrastructure-specific map selection functionality unless the existing reference already includes it.

### D. Evidence

Implement a functional mock evidence upload section.

Requirements:

- Allow users to select image files.
- Display image previews.
- Allow users to remove selected images.
- Allow users to replace images.
- Validate unsupported file types.
- Provide clear feedback for invalid selections.

Keep the upload implementation local to the frontend. Do not upload evidence to an external service.

### E. Report Content

Provide a text area for the user to describe the report.

The user should be able to explain:

- What happened.
- Who or what was involved.
- Relevant circumstances.
- Additional details that may help clarify the report.

Use a clear label and helpful placeholder text.

### F. Confirmation and Submission

Before submission:

- Provide a confirmation checkbox stating that the information is accurate to the user's knowledge.
- Validate required fields.
- Show field-level validation messages where appropriate.

On successful submission:

1. Generate a unique report ID.
2. Generate a submission timestamp.
3. Create a mock report record containing the form data.
4. Save it through the shared mock report service.
5. Add it to `report_individual_history.json` as the initial seed dataset, with runtime persistence handled according to the project's mock data architecture.
6. Display a success message.
7. Navigate to the Individual / Organization Report history page or provide an appropriate action to view the submitted report.

Do not send data to a real backend.

### G. Form UX Requirements

- Use logical sections and clear section headings.
- Visually distinguish required and optional fields.
- Do not mark every field as mandatory.
- Avoid overwhelming the user by displaying irrelevant fields.
- Preserve user input when switching between conditional fields where reasonable.
- Provide clear validation and error recovery.
- Ensure the form is vertically scrollable on smaller screens.
- Keep the submit action accessible without obstructing the form.

### Acceptance criteria

- All relevant inputs work.
- Conditional fields appear and disappear correctly.
- Read-only account information cannot be edited.
- Image previews and removal work.
- Validation works.
- Successful submission creates a mock record.
- The new record appears in the correct history page.
- No real backend or external submission is involved.