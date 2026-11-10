# SLIDES CONTEXT FOR AGENTS

## 1. Project Overview

**Description:** Construct presentation slides for the main project using Canva through Canva MCP.

**Topic:** Thiết kế giao diện và kiểm chứng luồng thao tác người dùng.

**Goals:**
- Create slides that follow `dan_y_topic_7.md` and the theoretical content in `theoretical_compiled.md`.
- Ensure the presentation is concise, academically accurate, and uses correct Software Analysis and Design (SAD) terminology.
- Maintain a clear connection between theoretical foundations and the VNeID case study.
- Prioritize content accuracy and completeness over visual simplification.

**Requirements:**
- Slide content must be in Vietnamese.
- Documentation/Progress logging must be in English. (See `incomplete_tasks.md`, `incomplete_slides.md`, `slide_coverage.md` in [Project References](#2-project-references))
- Use the provided Canva skills and design guidelines.
- Treat the skills as the primary design and implementation references. They provide baselines for slide structure, colors, typography, and layout.
- Skills are important guidelines but do not override factual accuracy, project requirements, or explicit instructions in this file.
- Do not fabricate information, research findings, usability metrics, user feedback, or system behavior.

## 2. Project References

The following files are the primary project references:

| File | Purpose |
|---|---|
| [`dan_y_topic_7.md`](../plan/dan_y_topic_7.md) | Main presentation outline, slide count, structure, and required content |
| [`theoretical_compiled.md`](../theoretical_basis/theoretical_compiled.md) | Theoretical foundations and detailed explanations; use this as the basis for slide content |
| [`incomplete_tasks.md`](./incomplete_tasks.md) | Tracks unfinished tasks that cannot currently be completed |
| [`incomplete_slides.md`](./incomplete_slides.md) | Tracks slides that are unfinished or require further work |
| `evaluation_metrics.md` | Contains verified empirical evaluation data, if available |
| `slide_coverage.md` | Tracks the mapping between outline requirements and presentation slides |

If `evaluation_metrics.md` or `slide_coverage.md` does not exist, do not assume that the information contained in those files is available. Create the files only when appropriate and follow the rules in this document.

## 3. Canva Design and Skills

### 3.1. Canva Project

Use the following Canva design:

`https://www.canva.com/design/DAHaZQm9Ggs/lXgflwagWqKjS71Xve-H7Q/`

If the URL cannot be accessed:
1. Search for the Canva project named **SAD Slides**.
2. If the project name differs, prioritize finding the project named SAD Slides over relying solely on the URL.
3. Do not create a new presentation unless the existing project cannot be found and the user explicitly authorizes creating one.

### 3.2. Slide Format

- Aspect ratio: **16:9**.
- Follow the presentation design system for colors, typography, margins, motifs, and templates.
- Maintain consistent visual hierarchy and spacing throughout the deck.
- Avoid overcrowding slides, but do not remove essential theoretical content merely to reduce text density.

### 3.3. Required Skills

Use the relevant installed skills when working with Canva:

- `presentation-design-system`: Exact hex colors, typography, margins, motifs, and templates.
- `edit-design`: Canva MCP transactions, replacing/finding text, filling elements, thumbnails, and committing changes.
- `bulk-create`: Bulk slide creation workflows.
- `get-design-feedback`: Obtain design feedback.
- `implement-feedback`: Apply approved design feedback.
- `brand-check`: Optional brand consistency checking.

**Skill usage rules:**
1. Read the relevant skill instructions before using the corresponding workflow.
2. Follow the skill's actual tool requirements and transaction procedures.
3. Do not assume a skill has been applied merely because it is listed here.
4. If skill instructions conflict with content accuracy or explicit project requirements, preserve factual correctness and report the conflict.
5. Do not claim a Canva operation succeeded unless the tool confirms success.

## 4. Content Fidelity and Academic Accuracy

### 4.1. Preserve Theoretical Content

`theoretical_compiled.md` is the primary reference for theoretical explanations.

When converting theory into slides:
- Preserve the original meaning, conceptual structure, and academic framing.
- Shorten explanations into key ideas, keywords, diagrams, or concise statements when appropriate.
- Do not silently remove essential definitions, principles, models, stages, dimensions, formulas, or distinctions.
- Do not oversimplify a concept to the point that its meaning becomes inaccurate.
- If a concept cannot fit clearly on one slide, split it across multiple slides rather than omitting essential information.
- Keep important relationships between concepts visible.

The objective is to make theory easier to understand, not to replace or distort it.

### 4.2. Information Classification

Distinguish the following types of information when creating slides:

1. **Established Theory:** Concepts, models, standards, and principles supported by academic or authoritative sources.
2. **Verified Case Study Information:** VNeID behavior or project requirements supported by official documentation or verified project artifacts.
3. **Design Decisions / Proposals:** Improvements or design choices proposed by the project team.
4. **Assumptions / Illustrative Examples:** Hypothetical personas, scenarios, examples, or assumed situations that have not been validated through research.
5. **Empirical Results:** Actual observations, measurements, usability test results, or participant feedback collected through evaluation.

Do not present one category as another.

In particular:
- Do not present hypothetical personas as actual research participants.
- Do not present proposed UI behavior as existing VNeID functionality.
- Do not present illustrative metrics as actual test results.
- Clearly label assumptions and illustrative examples when they appear in slides.
- Do not imply that a usability test has been conducted when no such test has taken place.

### 4.3. Academic Terminology

Use terminology consistently and accurately throughout the presentation.

Pay particular attention to distinctions between:
- UI and UX.
- Effectiveness, Efficiency, and Satisfaction.
- User Flow and Activity Diagram.
- Wireframe, Mockup, and Prototype.
- Heuristic Evaluation, Cognitive Walkthrough, and Usability Testing.
- Usability and Accessibility.

Do not use these terms interchangeably when they describe different concepts.

If a terminology issue or potential conceptual inconsistency is found in the reference materials, record it and request clarification rather than silently changing the intended meaning.

### 4.4. Academic Sources and Citations

- Cite academic theories, models, standards, and external factual claims using reliable sources.
- Include appropriate citations on slides where necessary and provide a reference section.
- Never invent authors, publication years, standard numbers, quotations, or URLs.
- Do not attribute a concept to a source unless that source supports the attribution.
- If a claim cannot be verified from the available references, flag it for review.
- Keep citations concise and readable without sacrificing traceability.

## 5. Case Study Accuracy: VNeID

### 5.1. Distinguish AS-IS and TO-BE

The VNeID case study must clearly distinguish:

- **AS-IS:** Existing behavior verified through official documentation, reliable evidence, or verified observations.
- **TO-BE:** Proposed improvements or redesigned behavior developed by the project team.

Do not describe a TO-BE proposal as an existing VNeID feature.

### 5.2. Do Not Invent System Behavior

Do not invent or assume:
- Existing VNeID features or screens.
- Business rules or processing procedures.
- Mandatory form fields.
- Input validation rules.
- Report statuses or status transitions.
- Notifications or confirmation mechanisms.
- Officer permissions, assignments, or internal workflows.
- Processing deadlines or service-level agreements.
- Backend operations or successful data persistence.

Use official documentation and verified project requirements as evidence.

If a detail is unknown or unsupported:
1. Do not present it as fact.
2. Mark it as an assumption, proposal, or unresolved point where appropriate.
3. Record the issue for review if it affects the slide content.

### 5.3. Maintain Case Study Traceability

Where relevant, maintain a logical connection between:

`Functional Requirements → User Flow → Wireframe → Prototype → Usability Evaluation`

Slides should accurately represent the actual artifacts and scope of the project.

Do not add features or workflows that are not supported by the corresponding project artifacts without approval.

## 6. Evaluation Data Integrity

### 6.1. Distinguish Evaluation Methodology from Empirical Results

The presentation must still explain theoretical evaluation methods even when actual testing has not been conducted.

For example, slides may include:
- Task Completion Rate (TCR).
- Time on Task (ToT).
- Error Count / Error Rate.
- Number of Actions / Steps.
- Backtracking.
- User Satisfaction.
- System Usability Scale (SUS), when relevant.
- Measurement definitions, formulas, procedures, and interpretation methods.

The absence of empirical data is not a reason to remove theoretical explanations of these metrics.

### 6.2. Rules for Empirical Results

Only include actual evaluation results when they are supported by verified data in `evaluation_metrics.md` or another explicitly approved source.

This applies to:
- Completion percentages.
- Average or median task completion time.
- Error rates or error counts.
- SUS scores.
- Participant satisfaction ratings.
- User feedback and quotations.
- Comparisons between test sessions or participant groups.

If verified data is unavailable:
- Do not fabricate numbers, charts, percentages, or participant feedback.
- Do not estimate results and present them as measured values.
- Present the evaluation methodology and explain how the metrics would be collected.
- Mark result-dependent tasks as `pending_data`.
- Record the missing data in `incomplete_tasks.md` or `incomplete_slides.md`, as appropriate.

Hypothetical numbers may only be used when they are explicitly labeled as illustrative examples and cannot be mistaken for actual findings.

### 6.3. Prototype Evaluation Limitations

The current project may use a frontend demo or prototype without a functioning backend or actual production users.

When describing evaluation scope:
- State what can be evaluated through the available prototype, such as navigation, screen findability, task flow, input behavior, and implemented error states.
- Do not claim to have verified backend persistence, real report submission, official reference-code generation, or actual processing by VNeID unless these operations have genuinely been tested.
- Distinguish prototype usability testing from production-system testing and backend functional testing.
- Clearly state limitations when presenting evaluation methods or results.

## 7. Outline Coverage and Content Traceability

### 7.1. Follow the Main Outline

`dan_y_topic_7.md` is the authoritative reference for presentation structure, sequence, and required topics.

Rules:
- Follow the outline's intended structure and order.
- Cover every required topic.
- Do not silently omit a section because it is difficult to fit into the deck.
- You may split a topic across multiple slides when necessary.
- You may combine closely related topics only if all essential content remains covered.
- Additional slides may be created when needed to preserve clarity and completeness.
- Do not change the overall presentation direction without approval.

### 7.2. Slide Coverage Tracking

Maintain `slide_coverage.md` to map outline requirements to their corresponding slides.

Suggested structure:

| Outline Section / Requirement | Slide Number(s) | Status | Notes |
|---|---|---|---|
| Section I - ... | 1, 2 | completed | Covered |
| Section II - ... | 3, 4 | in_progress | Needs revision |
| Section III - ... | 5 | pending_data | Requires verified data |

Before finalizing the presentation:
1. Compare every outline item against the actual deck.
2. Confirm that each required topic has been covered.
3. Check that the slides preserve the intended theoretical meaning.
4. Resolve or report missing content.
5. Do not mark coverage as complete merely because a slide with a relevant title exists.

## 8. Slide Design and Quality Standards

### 8.1. Content and Visual Balance

- Keep slide content concise and easy to scan.
- Use diagrams, flowcharts, tables, and visual structures when they improve understanding.
- Prefer meaningful visual explanations over decorative elements.
- Avoid excessive paragraphs.
- Preserve essential information even when simplifying the wording.
- Maintain a clear relationship between slide title, key message, and supporting content.

### 8.2. Visual Consistency

- Follow the `presentation-design-system` skill.
- Use consistent typography, color palette, spacing, margins, and visual motifs.
- Keep layouts aligned with the established presentation templates.
- Ensure text and diagrams are readable at presentation size.
- Avoid overflow, overlapping elements, clipped text, and inconsistent alignment.

### 8.3. Slide Completion Criteria

A slide is considered `completed` only when all applicable criteria are satisfied:

1. Its content matches the relevant outline requirements.
2. The theoretical explanations preserve the intended meaning.
3. All factual claims are supported by appropriate references.
4. AS-IS behavior and TO-BE proposals are clearly distinguished.
5. Assumptions and illustrative examples are not presented as empirical facts.
6. No fabricated evaluation results or unsupported metrics are included.
7. The slide has no text overflow, clipping, or overlapping elements.
8. The slide follows the presentation design system.
9. The slide has been visually inspected in Canva or through an appropriate preview.
10. Any relevant dependencies or unfinished tasks have been resolved or explicitly documented.

Creating the visual elements does not automatically mean the slide is complete.

## 9. Task Status and Incomplete Work Management

Use the following task statuses consistently:

| Status | Meaning |
|---|---|
| `not_started` | Work has not started |
| `in_progress` | Work is currently being performed |
| `pending_retry` | Work is temporarily blocked by a tool failure or rate limit and can be retried |
| `pending_data` | Work cannot be completed because required information or verified data is unavailable |
| `blocked` | Work cannot proceed because of an unresolved dependency, conflict, or external restriction |
| `completed` | Work has been finished and verified against the completion criteria |

### 9.1. Incomplete Task Logging

When a task cannot be completed:
- Record it in the appropriate tracking file.
- Include the slide number or task identifier.
- Describe what remains unfinished.
- State the reason and current status.
- Include the required next action or dependency.

When a task is fully completed and verified:
- Update its status.
- Remove it from the incomplete-task list if it no longer requires follow-up.
- Do not remove a task merely because some visual elements have been created.

### 9.2. Distinguish Missing Data from Tool Failures

Use:
- `pending_retry` for temporary Canva MCP failures, rate limits, or recoverable tool errors.
- `pending_data` when verified evaluation data or other required information has not yet been provided.
- `blocked` when progress depends on an unresolved decision, approval, or external dependency.

Do not repeatedly retry a `pending_data` task until the required information becomes available.

## 10. Canva MCP Rate-Limit Handling

If Canva MCP becomes rate-limited:

1. Record the blocked task in the appropriate tracking file.
2. Include the slide number, task description, and status `pending_retry`.
3. Continue with independent tasks that do not require the unavailable Canva operation.
4. After completing one other independent task, retry the blocked operation.
5. Retry up to three times.
6. If the operation still fails, leave it documented in `incomplete_tasks.md` or `incomplete_slides.md`.
7. Do not claim that the affected slide is complete.

Do not allow a temporary tool failure to stop all other independent work.

## 11. Source Priority and Conflict Resolution

Use the following source hierarchy according to the type of information:

| Information Type | Primary Source |
|---|---|
| Presentation structure and sequence | `dan_y_topic_7.md` |
| Theoretical explanations | `theoretical_compiled.md` |
| Academic verification and standards | Original academic publications and authoritative standards |
| VNeID existing behavior (AS-IS) | Official VNeID documentation and verified evidence |
| Project requirements and proposed design (TO-BE) | Main project requirements, User Flows, Wireframes, and approved design artifacts |
| Actual evaluation results | `evaluation_metrics.md` or another explicitly approved verified data source |
| Visual design | `presentation-design-system` and other relevant design skills |

When sources conflict:
1. Identify the conflicting statements.
2. Determine which source is authoritative for the information in question.
3. Do not silently rewrite or discard conflicting content.
4. Record the conflict and explain its impact.
5. Request clarification or approval when the conflict affects the presentation's meaning or required content.

**Priority order when making decisions:**

1. Academic and factual accuracy.
2. Compliance with the presentation outline and project requirements.
3. Content clarity and completeness.
4. Presentation design quality.
5. Text density and visual simplicity.

Visual simplicity must never take priority over factual correctness or essential content coverage.

## 12. Working Workflow

Follow this workflow when creating or revising slides.

### 12.1. Before Starting a Batch

1. Read the relevant instructions and skills.
2. Inspect `dan_y_topic_7.md` and `theoretical_compiled.md`.
3. Review `incomplete_tasks.md` and `incomplete_slides.md`.
4. Check `slide_coverage.md` if it exists.
5. Inspect the current Canva deck to understand what has already been completed.
6. Identify the slides and tasks that can be worked on independently.
7. Confirm that the planned content does not require unavailable empirical data.

### 12.2. During Implementation

1. Work on the planned slide or batch.
2. Follow the Canva skill's required operations and commit procedures.
3. Preserve the intended meaning of the source material.
4. Keep the slide structure consistent with the outline.
5. Update tracking files when tasks become blocked or completed.
6. Continue independent tasks when one task is blocked.

### 12.3. Before Finalizing

1. Inspect the entire presentation, not only the most recently edited slides.
2. Verify outline coverage.
3. Verify theoretical and factual accuracy.
4. Check citations and references.
5. Check AS-IS / TO-BE distinctions.
6. Check that no assumptions or hypothetical examples are presented as verified findings.
7. Check that no empirical metrics have been fabricated.
8. Inspect visual consistency, readability, and layout issues.
9. Review all incomplete tasks and slides.
10. Mark slides and tasks as `completed` only after they satisfy the completion criteria.

### 12.4. Slide Inspection Rule

Before beginning a new batch, inspect the current deck to identify:
- Slides already completed.
- Slides that still require revision.
- Slides recorded in `incomplete_slides.md`.
- Tasks that are blocked or awaiting data.

If a slide is verified as complete:
- Do not unnecessarily recreate or redesign it.
- Update its status if the tracking files are outdated.
- Remove its resolved tasks from incomplete-task logs.

Perform a full-deck inspection again before final delivery.

## 13. Important Restrictions

- Do not invent evaluation results or claim that usability testing has taken place without evidence.
- Do not invent VNeID functionality, business rules, or processing workflows.
- Do not present hypothetical personas, scenarios, or sample metrics as actual research findings.
- Do not silently omit required outline content.
- Do not sacrifice theoretical accuracy for shorter slides.
- Do not change the presentation's overall structure or direction without approval.
- Do not mark a slide or task as completed without verification.
- Do not create a new Canva deck when the existing SAD Slides project can be used.
- Do not repeatedly retry tasks that are waiting for missing data.
- Do not claim that a tool operation succeeded unless its result confirms success.