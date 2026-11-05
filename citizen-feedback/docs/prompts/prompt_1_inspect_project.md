# Prompt 1 — Inspect the project and establish the shared implementation foundation

Before implementing individual pages, inspect the project and prepare the shared foundation.

### Tasks

1. Inspect:

   - Project structure and framework.
   - Existing routes and navigation.
   - Existing page components.
   - `AGENTS.md` and its required skills.
   - Existing HTML wireframes and related assets.
   - Existing mock data and persistence mechanisms, if any.

2. Identify the actual HTML reference files available in the repository. In particular:

   - `report-individual.html`: primary report form design reference.
   - `report-individual-history.html`: individual/organization report landing or history reference, if present.
   - Other existing wireframes for login, home, and feedback selection, if present.

3. Establish or reuse a consistent routing structure for the intended journey:

   - Login
   - Home
   - Feedback Selection
   - Individual / Organization Report landing or history
   - Individual / Organization Report form
   - Infrastructure Report landing or history
   - Infrastructure Report form

4. Establish the mock data architecture according to the general instructions.

5. Establish reusable components where appropriate:

   - Page header and back navigation.
   - Primary and secondary buttons.
   - Form fields and validation messages.
   - Read-only account information section.
   - Image upload and preview.
   - Confirmation dialogs or success messages.
   - Loading and empty states.

6. Avoid building a new design system if the project already has one.

### Constraints

- Do not redesign unrelated parts of the project.
- Do not implement the complete application in this step.
- Do not introduce unnecessary dependencies.
- Do not change existing page structures without understanding their purpose.

### Deliverables

Provide a short implementation plan describing:

- Existing architecture.
- Pages and routes to implement or reuse.
- Mock data and persistence approach.
- Components that can be shared.
- Any technical limitations or missing reference files.

Then implement only the necessary shared foundation if required.