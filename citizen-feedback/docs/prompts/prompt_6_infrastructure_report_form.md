# Prompt 6 — Implement the Infrastructure Report Form

Implement the Infrastructure Report form as a complete, functional mock form.

This form does not currently have a complete wireframe. Therefore, you must design its structure and fields based on the reporting purpose.

Use the existing `report-individual.html` as the **primary design reference for visual consistency and form interaction patterns**.

Important distinction:

The Individual / Organization Report form is a reference, not a ground-truth specification for the Infrastructure Report. Do not simply duplicate its fields. The two forms have different reporting purposes and must contain fields appropriate to their respective contexts.

You are responsible for determining a suitable form structure and improving its UX where necessary.

### A. Overall Design Direction

- Maintain visual consistency with the Individual / Organization Report form.
- Reuse shared components where appropriate.
- Keep the same general design language, typography, input styles, section hierarchy, spacing, and button conventions.
- Adapt the layout to the infrastructure reporting context.
- Do not force irrelevant fields from the Individual / Organization form into this form.
- Ensure the final layout is visually coherent and usable.

### B. Reporter Information

Reuse the same read-only reporter information section from the Individual / Organization Report form.

Display:

- **Họ tên:** Nguyễn Văn A
- **Số định danh:** 123456789
- **Nơi thường trú:** 123/67 ABC

Requirements:

- Load these values from the mock user profile.
- Render them as static text, not editable textboxes.
- Do not allow the user to modify these account details.
- Reuse the shared component if one has been created.

### C. Infrastructure Information

Design suitable fields to identify the infrastructure issue.

Consider including:

- Loại hạ tầng cần phản ánh.
- Loại sự cố/vấn đề.
- Mức độ hoặc tình trạng hiện tại (if useful).
- Mô tả ngắn về vấn đề.

Potential infrastructure categories may include:

- Đường giao thông.
- Vỉa hè.
- Hệ thống chiếu sáng công cộng.
- Hệ thống thoát nước.
- Cấp nước.
- Cây xanh công cộng.
- Công trình công cộng.
- Khác.

These are proposed mock options, not confirmed official VNeID classifications. Store them in a JSON configuration file so developers can easily modify the list.

Avoid unnecessary or overly technical fields.

### D. Location Information — Map Selection Is Required

Location is a central part of an infrastructure report.

Implement a functional location selection experience. This is a mandatory requirement, not an optional visual placeholder.

The form must provide:

1. A manually editable address field.
2. A button to open a map-based location picker.
3. A map interface that allows the user to select a location.
4. A visible marker indicating the selected location.
5. A way to confirm the selected location.
6. A way to cancel or change the selection.
7. A checkbox or action labeled **Dùng vị trí hiện tại**.

#### Map interaction

When the user opens the map picker:

- Display an interactive map.
- Allow the user to click or tap a location.
- Place or move a marker to the selected coordinates.
- Display the selected coordinates or a readable mock address.
- Allow the user to confirm the selection.
- After confirmation, populate the location information in the report form.

Use an existing map library if the project already has one.

If no map library is available, choose a lightweight solution appropriate for the current stack. Avoid introducing unnecessary complexity.

If using a real map tile provider, do not require a private API key unless the project already has one. An OpenStreetMap-based implementation may be used where technically appropriate.

If external map tiles are unavailable, provide a clearly identified interactive mock map fallback rather than rendering a non-functional map image.

#### Current location

Implement the **Dùng vị trí hiện tại** functionality using the browser Geolocation API when available.

Expected behavior:

- Request permission from the user.
- If permission is granted, retrieve the current coordinates.
- Move the map marker to the retrieved location.
- Populate the location fields as far as the available geolocation data allows.
- If reverse geocoding is unavailable, display the coordinates and let the user enter or adjust the address manually.
- If permission is denied, unavailable, or times out, show a clear message and allow manual selection.

Do not silently simulate successful GPS retrieval.

Do not request location permission automatically on page load. Request it only after the user explicitly selects the current-location action.

### E. Incident Description

Provide a text area for the user to describe the infrastructure issue.

Use helpful guidance, for example:

- What is damaged or malfunctioning?
- When did the issue occur or become noticeable?
- What impact does it have on residents or the surrounding area?
- Are there any safety concerns?

The description should support enough detail for the issue to be understood.

### F. Evidence

Implement the same general evidence upload interaction pattern used by the Individual / Organization Report form.

Requirements:

- Select image files.
- Preview selected images.
- Remove or replace images.
- Validate file types.
- Provide clear error messages.

Do not upload images to an external service.

### G. Submission

Implement a complete mock submission flow.

Before submission:

- Validate required fields.
- Ensure a location has been selected or an appropriate location-unknown option has been provided, if your final form design supports it.
- Require the user to confirm the accuracy of the information.

On successful submission:

1. Generate a unique report ID.
2. Generate a submission timestamp.
3. Create a mock infrastructure report record.
4. Save it through the shared mock report service.
5. Add it to `report_infrastructure_history.json` as the initial seed dataset, with runtime persistence handled according to the project's mock data architecture.
6. Display a success message.
7. Navigate to the Infrastructure Report history page or provide an appropriate action to view the submitted report.

### H. UX and Technical Requirements

- The form must be vertically scrollable.
- Map selection must work, not merely look interactive.
- Current-location access must be implemented where browser support permits.
- The user must be able to manually correct the selected address.
- The selected coordinates and address must be stored in the mock report record.
- Preserve form data when opening and closing the map picker.
- Do not block report submission solely because geolocation permission is denied if manual location selection is available.

### Acceptance criteria

- The form contains fields appropriate to infrastructure reporting.
- The design is consistent with the Individual / Organization Report form.
- The map picker opens and allows location selection.
- The marker can be moved.
- The user can confirm or cancel the selected location.
- The current-location action requests permission and handles both success and failure.
- The selected location is saved in the mock report record.
- Image upload, validation, and submission work.
- The submitted report appears in the correct history page.