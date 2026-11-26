# AGENTS.md — Citizen Feedback and Complaint Management System

## 1. Project Overview

### Purpose

This project is a system for citizens to submit complaints, feedback, and reports to the appropriate public authority. The system allows responsible officers to receive, classify, assign, process, and respond to submissions.

The system aims to:
- Provide citizens with a centralized channel for submitting feedback and complaints.
- Help receiving officers review and route submissions.
- Help processing officers manage assigned cases and record their results.
- Allow citizens to track the status and outcome of their submissions.
- Provide administrators with tools to manage accounts, categories, organizational units, and system configuration.

### Project Scope

This project focuses on the analysis, design, and prototyping of the system.

The intended deliverables include:
- System requirements and business rules.
- System context and stakeholder analysis.
- UML behavioural and structural diagrams.
- Database design.
- UI prototype.

A fully operational production system is outside the current project scope unless explicitly requested.

### System Boundary

**Inside the system:**
- Account and access management.
- Feedback submission and evidence management.
- Feedback reception and validation.
- Feedback classification and assignment.
- Processing progress and result management.
- Citizen status tracking.
- Notifications.
- Administrative management and reporting.

**Outside the system:**
- Actual investigation or resolution of complaints by external authorities.
- Internal operations of external government organizations.
- External notification delivery infrastructure.
- Services not explicitly included in the approved requirements.

Do not implement additional external integrations without an explicit requirement.

---

## 2. Actors and Responsibilities

| Actor | Responsibilities |
|---|---|
| Citizen | Submit feedback, provide supporting evidence, track submissions, view processing results. |
| Receiving Officer | Receive submissions, inspect information, validate submissions, classify and assign them. |
| Processing Unit Officer | Handle assigned submissions, update progress, record processing results. |
| Administrator | Manage accounts, roles, categories, organizational units, and system configuration. |
| Notification Service | Deliver system notifications to relevant users. |

### Role Boundaries

- Citizens must only access their own submissions and related information.
- Receiving officers are responsible for initial review, classification, and assignment.
- Processing officers are responsible for submissions assigned to their processing unit or account.
- Administrators manage system configuration and user access.
- The Notification Service is an external dependency, not a human user.

Do not assume that every officer has the same permissions. Follow the authorization rules defined in the requirements.

---

## 3. Functional Requirements

The following is the high-level functional requirement baseline. Detailed acceptance criteria and alternative flows should be documented in `docs/requirements/SRS.md`.

| ID | Requirement | Primary Actor |
|---|---|---|
| FR-01 | Authenticate users and manage access. | All human actors |
| FR-02 | Submit a new complaint or feedback report. | Citizen |
| FR-03 | Attach supporting evidence to a submission. | Citizen |
| FR-04 | Search for and track submitted feedback. | Citizen |
| FR-05 | Receive and review incoming submissions. | Receiving Officer |
| FR-06 | Classify submissions into appropriate categories. | Receiving Officer |
| FR-07 | Assign submissions to responsible processing units. | Receiving Officer |
| FR-08 | Update processing progress and status. | Processing Unit Officer |
| FR-09 | Record processing results and responses. | Processing Unit Officer |
| FR-10 | Notify relevant users about important events. | System / Notification Service |
| FR-11 | Manage accounts and permissions. | Administrator |
| FR-12 | Manage feedback categories and processing units. | Administrator |
| FR-13 | View statistics and generate reports. | Authorized staff / Administrator |

These requirements are a summary, not a substitute for the detailed SRS.

Do not silently introduce new functional requirements. If a feature is needed but not specified, identify it as a proposed requirement and request confirmation.

---

## 4. Business Rules

Business rules define constraints that must remain consistent throughout the system.

The following rules are initial design assumptions and must be verified against the approved SRS:

1. A citizen can submit multiple feedback reports.
2. Each feedback report belongs to one submitting citizen.
3. Each feedback report has a category, subject to the classification rules.
4. A feedback report may contain multiple attachments.
5. A feedback report is reviewed before it is assigned for processing.
6. A receiving officer is responsible for classifying and assigning a valid submission.
7. A processing officer can update the progress of an assigned submission.
8. A processing result must be associated with the feedback report it resolves.
9. Relevant users should receive notifications when important status changes occur.
10. Users must not access information outside their authorized permissions.

### Rules Requiring Confirmation

Before implementation, verify:
- Whether citizens can submit anonymously.
- Whether submissions can be edited or withdrawn.
- Whether incomplete submissions can be returned to citizens.
- Whether a submission can be rejected, and which reasons are valid.
- Whether a submission can be reassigned.
- Whether multiple processing units can work on one submission.
- Whether a submission can have multiple processing results or only one final result.
- Which statuses are allowed and which transitions are valid.
- Whether citizens can reply to requests for additional information.
- Which roles can view statistics and reports.

Do not invent answers to unresolved business rules.

---

## 5. Data Model

The current conceptual model contains the following entities/classes:

| Entity | Responsibility |
|---|---|
| Account | Shared account information and authentication identity. |
| Citizen | Citizen-specific account information. |
| Officer | Officer-specific account information. |
| Administrator | Administrator-specific account information. |
| Feedback | Main complaint or feedback submission. |
| FeedbackCategory | Classification of submissions. |
| ProcessingUnit | Organizational unit responsible for handling submissions. |
| Attachment | Evidence files attached to a submission. |
| ProcessingResult | Result or response recorded for a submission. |
| Notification | Notification sent to a user. |

### Initial Relationship Model

These relationships are conceptual and must be confirmed in the class diagram and ERD.

- Citizen 1 — 0..* Feedback
- Feedback 1 — 0..* Attachment
- FeedbackCategory 1 — 0..* Feedback
- ProcessingUnit 1 — 0..* Officer
- Feedback 1 — 0..* ProcessingResult
- Feedback 1 — 0..* Notification

### Database Design Rules

The detailed database schema must be maintained in `docs/architecture/DATA_MODEL.md`.

For each table, document:
- Table name.
- Column name.
- Data type.
- Primary key.
- Foreign keys.
- Nullable or non-nullable constraints.
- Default values.
- Unique constraints.
- Relationships.
- Description and business purpose.

Do not invent database columns or assume that conceptual classes map one-to-one to database tables.

Before changing the schema:
1. Inspect the existing data model.
2. Check the SRS and business rules.
3. Check relationships and cardinalities.
4. Explain the reason for the change.
5. Update the ERD and documentation alongside the implementation.

---

## 6. Main System Workflows

Detailed workflows should be maintained in `docs/architecture/WORKFLOWS.md`.

### WF-01: Submit Feedback

**Primary actor:** Citizen

1. Citizen accesses the submission function.
2. Citizen enters submission information.
3. Citizen optionally attaches supporting evidence, according to the approved rules.
4. System validates the submitted information.
5. If validation fails, the system reports the errors.
6. If validation succeeds, the system saves the submission.
7. System generates a submission reference or identifier, if required by the SRS.
8. System confirms successful submission.
9. System sends a notification when required.

### WF-02: Receive, Review, Classify, and Assign

**Primary actor:** Receiving Officer

1. Receiving officer accesses incoming submissions.
2. Officer selects a submission.
3. System displays its information and attachments.
4. Officer reviews the submission.
5. Officer determines whether it is valid and sufficiently complete.
6. If additional information is needed, the submission follows the approved additional-information process.
7. If the submission is invalid or outside the system's handling scope, the officer follows the approved rejection or redirection process.
8. If valid, the officer classifies the submission.
9. Officer assigns it to an appropriate processing unit.
10. System records the assignment and updates the status.
11. System notifies relevant users.

### WF-03: Process Feedback and Record Result

**Primary actor:** Processing Unit Officer

1. Processing officer accesses assigned submissions.
2. Officer selects a submission.
3. System displays submission details and previous processing information.
4. Officer reviews and processes the submission.
5. Officer updates processing progress when necessary.
6. Officer records the processing result.
7. System saves the result and updates the submission status.
8. System notifies relevant users.
9. Citizen can view the status and result when permitted.

### WF-04: Track Feedback

**Primary actor:** Citizen

1. Citizen accesses the tracking function.
2. Citizen selects or searches for a submission.
3. System verifies that the citizen is authorized to access it.
4. System displays the current status and available progress information.
5. System displays the processing result when it is available and permitted.

### Workflow Consistency

Every workflow must agree with:
- The functional requirements.
- The use case diagram and use case specifications.
- The activity diagrams.
- The sequence diagrams.
- The feedback state machine.
- The class diagram and ERD.

If one diagram changes, check whether the other documents need to change as well.

---

## 7. Dependencies and System Components

The logical system components are:

| Component | Responsibility |
|---|---|
| User Interface | Provides screens and interactions for citizens, officers, and administrators. |
| Authentication and Authorization | Authenticates users and enforces role-based access. |
| Feedback Management | Handles submission, retrieval, and tracking. |
| Classification and Assignment | Handles review, categorization, and routing. |
| Processing Management | Handles progress updates and processing results. |
| Notification Integration | Communicates with the external notification service. |
| Administration | Handles accounts, categories, units, and configuration. |
| Database | Persists system data. |
| File Storage | Stores submission attachments, if implemented. |

These are logical responsibilities, not a requirement to create separate microservices.

### External Dependencies

- Notification Service: used to deliver notifications.
- File Storage: required only if evidence files are stored outside the main database.
- Other external services: only when explicitly approved in the requirements.

The exact technology stack and dependency versions must be documented separately. Do not assume a framework, database, or provider unless it is already specified by the project.

---

## 8. Non-Functional Requirements

Refer to `docs/requirements/SRS.md` for the complete non-functional requirement list.

At minimum, consider:

- **Security:** Users can only access resources they are authorized to access.
- **Privacy:** Personal information and submitted evidence must be protected.
- **Usability:** Citizens should be able to submit and track feedback without unnecessary complexity.
- **Reliability:** Submission data must not be silently lost.
- **Maintainability:** The system should have clear separation of responsibilities.
- **Performance:** Common operations should respond within the limits defined in the SRS.
- **Accessibility:** Interfaces should be usable by citizens with different needs.

Do not claim that a quality requirement is satisfied without a measurable criterion or verification method.

---

## 9. Development Guidelines for AI Agents

When working on this repository:

1. Read this file before modifying the project.
2. Read the relevant SRS section and business rules before implementing a feature.
3. Inspect the existing source code and data model before proposing changes.
4. Follow existing project conventions and dependencies.
5. Do not introduce new features without an explicit requirement.
6. Do not invent fields, relationships, permissions, or workflow transitions.
7. Keep naming consistent across requirements, diagrams, database entities, and code.
8. Keep changes as small and focused as possible.
9. Update relevant documentation and diagrams when requirements or system behaviour change.
10. Explain assumptions and unresolved decisions instead of silently choosing an interpretation.
11. Do not over-engineer the system. Prefer a straightforward design appropriate for the project's academic scope.
12. If requirements conflict, report the conflict and ask for clarification rather than choosing arbitrarily.

### Before Implementing a Feature

The agent should be able to answer:

- Which functional requirement does this feature satisfy?
- Which actor uses it?
- What permissions are required?
- What data does it read or modify?
- What business rules apply?
- What is the expected workflow?
- What happens when validation fails?
- Which diagrams or documents need updating?

If these questions cannot be answered from the project documentation, identify the missing information first.

---

## 10. Documentation References

| Document | Purpose |
|---|---|
| `docs/requirements/SRS.md` | Detailed functional and non-functional requirements. |
| `docs/requirements/BUSINESS_RULES.md` | Confirmed business constraints and unresolved decisions. |
| `docs/architecture/SYSTEM_OVERVIEW.md` | System boundary, components, and dependencies. |
| `docs/architecture/DATA_MODEL.md` | Database entities, fields, keys, and relationships. |
| `docs/architecture/WORKFLOWS.md` | Detailed workflows and alternative paths. |
| `docs/diagrams/` | UML and supporting system diagrams. |

**Documentation priority:** Approved requirements and confirmed business rules take precedence over assumptions in this overview. If documentation conflicts, report the conflict and request clarification.