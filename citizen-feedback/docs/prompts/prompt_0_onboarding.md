# Agentic Coding Prompts — VNeID Reporting UI

## General instructions

You are working on a UI-focused case study that recreates and improves selected user interaction flows of the VNeID reporting feature.

The implementation must be a **functional frontend prototype with mock data**, not a production application.

### Important project rules

1. Before making changes, inspect the existing project structure, current implementation, available dependencies, and `AGENTS.md`.
2. Follow the styling conventions, coding standards, and required skills specified in `AGENTS.md`. **Use the relevant skill(s) instructed by `AGENTS.md`**. Treat `AGENTS.md` as the primary source of project-specific development instructions. Do not ignore, override, or replace its requirements with your own preferences.
3. Reuse existing components, design tokens, routing conventions, and utilities whenever appropriate. Avoid unnecessary dependencies.
4. The existing HTML wireframes are design references, not strict implementation specifications. You are responsible for evaluating their layout and interactions. If something is visually inconsistent, impractical, inaccessible, or poorly formatted, improve it while preserving the intended design direction.
5. The existing `report-individual.html` is the primary reference for the report form design. Use it as a baseline for both report categories:
   - Individual / Organization Report
   - Infrastructure Report
6. The file `report-individual-fullvisual.html` is an alternative full-visual reference and is not required for implementation. Do not spend time recreating it.
7. Keep all user-facing interface text in Vietnamese. Source code, comments, and implementation documentation may be in English.
8. All data must be mock data. Do not connect to a real backend, submit actual reports, or transmit personal information to external services.
9. Organize mock data in one or more JSON files with clear names and structures. Developers should be able to inspect, modify, and add sample data easily.
10. Implement interactions as real frontend interactions, not merely static visual elements. Buttons, forms, validation, navigation, selection controls, and history views should work within the mock environment.
11. Do not implement unrelated features or activate report categories that are outside the defined scope.

### Intended user journey

The expected navigation flow is:

`Login → Home → Feedback Selection → Report Category Page / History → Report Form → Submission → Updated History`

The two supported report categories are:

- Phản ánh về cơ sở hạ tầng
- Báo cáo cá nhân, tổ chức

Other categories may be displayed as disabled or unavailable options if they already exist in the reference design, but they must not lead to functional report flows.

### Mock data and persistence requirements

Create a clear data organization strategy. A suggested structure is:

```text
src/
  data/
    mock/
      user.json
      report_individual_history.json
      report_infrastructure_history.json
      report_options.json
  services/
    mockReportService.js
```

Adapt this structure to the existing project rather than blindly creating duplicate folders or services.

Requirements:

- JSON files should provide initial sample data and reference options.
- Each report category must have its own history dataset.
- When a user submits a report, create a new mock report record with a unique ID and submission timestamp.
- The new record must appear in the appropriate history page.
- Preserve previously submitted mock reports when navigating between pages or refreshing the application.
- Provide a clear separation between mock data, data-access logic, and UI components.
- Do not hardcode all sample history records directly inside page components.

**Important technical consideration:** A browser frontend cannot directly modify JSON files inside the source directory at runtime. Inspect the current architecture and choose an appropriate persistence approach:

- If the project already has a mock API or development server capable of writing JSON files, use it.
- Otherwise, use JSON files as seed data and localStorage as the runtime persistence layer.
- Keep the data-access layer abstracted so that a developer can later replace the mock implementation with a real API.

Do not claim that submitted data has been written to a source JSON file if it has only been saved in localStorage.

---

## Deliverable

Provide a concise onboarding report containing:

1. Framework and project architecture.
2. Relevant `AGENTS.md` instructions.
3. Required skills identified and loaded.
4. Existing routes, pages, and wireframes found.
5. Existing components and utilities suitable for reuse.
6. Potential technical constraints or conflicts.
7. Recommended implementation sequence.

After presenting the report, stop and wait for the next prompt. Do not begin implementation.