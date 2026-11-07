# Prompt 7.1 — Complete Missing Report History Features

## Objective

Complete only the missing features identified in the latest implementation review of Prompt 7.

Both report history pages are already implemented and functional. Do not rebuild or redesign them.

Your task is to inspect the current implementation and address only the following gaps:

1. Implement the report detail route.
2. Correct the history page's create button label.
3. Add the missing hotline action to both history pages.
4. Display the report category on each history item.
5. Provide a convenient and safe way to test the empty state.

Preserve all existing functionality and architecture.

---

## 1. Initial Inspection

Before making changes, inspect:

- Both existing history pages:
  - `/reports/individual/history`
  - `/reports/infrastructure/history`
- The existing report detail links and route configuration.
- The shared mock report service.
- Both JSON seed datasets.
- The existing category-isolated localStorage persistence.
- The existing history card components.
- The reference file `report-individual-history.html`, if available.
- The hotline action already implemented on category landing pages.

Reuse existing components, services, and patterns wherever possible.

Do not introduce a new architecture or duplicate existing functionality.

## 2. Implement the Missing Report Detail Route

The current history items link to:

`/reports/[category]/history/[id]`

However, this route is still a placeholder.

Implement a functional detail page for both report categories.

### Requirements

- Support both individual and infrastructure report categories.
- Read the report ID from the route parameter.
- Retrieve the corresponding report using the existing mock report service.
- Do not hardcode report details inside the page component.
- Display an appropriate not-found state if the report ID does not exist.
- Ensure the report category and ID are validated before displaying the record.

### Detail content

Display available report information, including:

- Report ID.
- Report category.
- Report title or summary.
- Submitted description.
- Submission date and time.
- Current mock processing status.
- Location information, if available.
- Evidence previews, if available.

Only display fields that actually exist in the report record.

Do not fabricate missing information.

### Navigation

- Provide a working Back button that returns to the correct category history page.
- Preserve the existing application's top widget/header design pattern.
- Do not implement a real administrative workflow.
- Do not add editing, cancellation, approval, or processing functionality.

The detail page is read-only.

## 3. Add the Missing Hotline Action

The existing history wireframe includes a hotline action, but both history pages currently lack it.

Inspect `report-individual-history.html` and the existing hotline action on category landing pages.

Reuse the existing hotline component or interaction pattern if available.

Requirements:

- Add the hotline action to both history pages.
- Follow the reference wireframe's visual placement and the project's existing design system.
- Keep its behavior consistent with the existing category landing page implementation.
- Do not implement a function for the button. Keep only visual functions when button is clicked, with style consistent with the current project's design.
- Do not invent a real government hotline number. This is a fake, non-functional button that has visual, acting like it's working. 

Avoid creating duplicate hotline components if a reusable component already exists.

## 4. Display Category on Each History Item

The current implementation displays the category only at page level.

Update each history card to display its own report category.

Requirements:

- Individual history cards must identify their category as `Báo cáo cá nhân, tổ chức`.
- Infrastructure history cards must identify their category as `Phản ánh về cơ sở hạ tầng`.
- Use the category information from the existing report data model when available.
- If the data model uses category identifiers, map those identifiers to the appropriate Vietnamese display labels through a shared mapping or existing utility.
- Do not hardcode separate category text independently inside every card.
- Preserve the existing card layout and avoid unnecessary visual clutter.

## 5. Improve Empty-State Testing

The empty-state UI is already implemented.

Do not rebuild or redesign it.

However, the current empty state can only be reached by manually clearing stored data.

Provide a convenient development/testing mechanism to verify the empty state of each history page independently.

Requirements:

- Allow developers to test an empty individual history.
- Allow developers to test an empty infrastructure history.
- Do not delete or overwrite the original JSON seed datasets.
- Do not accidentally clear the other category's history.
- Do not expose destructive data-reset controls in the normal user-facing UI.
- Keep the mechanism development-only or otherwise clearly separated from normal application functionality.

Choose the simplest approach compatible with the existing project architecture.

Document how to activate and deactivate the empty-state test mode.

After testing, verify that normal seeded data and existing persistence behavior still work.

---

## 6. Data and Architecture Constraints

The following features are already implemented and must be preserved:

- Both history routes.
- Separate JSON seed datasets.
- Category-isolated localStorage persistence.
- Shared mock report service.
- Newest-first sorting.
- Cross-tab and in-tab history refresh.
- History cards with report ID, status, title, excerpt, submission time, and detail links.
- Existing back buttons.
- Existing category headings.
- Navigation to the correct new-report forms.
- Existing empty-state UI.
- Existing mock status labels.
- New submissions appearing with the `Đã gửi` status.
- Data persistence across navigation and refresh.

Do not rebuild or replace any of these features.

Do not:

- Recreate the history pages from scratch.
- Replace the existing mock persistence architecture.
- Merge the two category datasets.
- Change the existing report submission flow.
- Modify report forms.
- Add a real backend or database.
- Add a real administrative processing workflow.
- Introduce unrelated dependencies.
- Add sign-out UI or sign-out functionality.

## 7. Acceptance Criteria

Verify only the relevant changes and regression-test the existing behavior.

| Test | Expected result |
|---|---|
| Open an individual history item | Its detail page displays the correct record |
| Open an infrastructure history item | Its detail page displays the correct record |
| Open a nonexistent report ID | A clear not-found state appears |
| Click Back from an individual detail page | Return to individual history |
| Click Back from an infrastructure detail page | Return to infrastructure history |
| Inspect individual history page | Button label is `Tạo yêu cầu mới` |
| Inspect infrastructure history page | Button label is `Tạo yêu cầu mới` |
| Click the create button on individual history | Open the individual report form |
| Click the create button on infrastructure history | Open the infrastructure report form |
| Inspect either history page | Hotline action is visible |
| Inspect individual history cards | Each card displays `Báo cáo cá nhân, tổ chức` |
| Inspect infrastructure history cards | Each card displays `Phản ánh về cơ sở hạ tầng` |
| Activate individual empty-state test mode | Individual empty state is displayed |
| Activate infrastructure empty-state test mode | Infrastructure empty state is displayed |
| Disable empty-state test mode | Original mock history data is available again |
| Submit a new report | Existing history synchronization still works |
| Refresh either history page | Existing persistence behavior remains intact |

## 8. Final Report

After implementation, provide a concise report containing:

1. Files changed.
2. How the report detail route was implemented.
3. How the hotline action was reused or added.
4. How category labels are displayed on history cards.
5. How to activate and deactivate empty-state testing.
6. Acceptance tests completed and their results.
7. Any remaining limitations.

Clearly distinguish implemented and tested features from features that were only inspected.

Stop after completing Prompt 7.1. Do not proceed to subsequent prompts.