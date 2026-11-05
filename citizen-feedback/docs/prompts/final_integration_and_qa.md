# Final Integration and Quality Assurance

After completing the prompts, review the entire user journey:

`Login → Home → Feedback Selection → Category History → Report Form → Submit → Updated Category History`

Verify the following:

### Functional checks

- [ ] Mock login works.
- [ ] Login state persists appropriately.
- [ ] Home navigates to Feedback Selection.
- [ ] Only the first two report categories are functional.
- [ ] Individual / Organization Report form works.
- [ ] Infrastructure Report form works.
- [ ] Read-only account information is displayed consistently.
- [ ] Conditional fields behave correctly.
- [ ] Form validation works.
- [ ] Image upload and preview work.
- [ ] Infrastructure map picker works.
- [ ] Current-location permission handling works where supported.
- [ ] Mock report submission works.
- [ ] Individual report history updates correctly.
- [ ] Infrastructure report history updates correctly.
- [ ] Data persists after refresh.
- [ ] Back navigation and page transitions work.

### UI checks

- [ ] All pages follow the styling instructions in `AGENTS.md`.
- [ ] The two report forms share a consistent visual language.
- [ ] No major overflow, clipping, or overlapping elements.
- [ ] Forms are vertically scrollable.
- [ ] Buttons and inputs have appropriate interaction states.
- [ ] Vietnamese text is displayed correctly.
- [ ] Layout remains usable at the target mobile viewport.

### Scope checks

- [ ] No real backend integration.
- [ ] No real authentication.
- [ ] No actual government report submission.
- [ ] No unnecessary implementation of unrelated VNeID features.
- [ ] No unsupported claims about real report processing.
- [ ] Mock data remains easy for developers to inspect and extend.

At the end, provide a concise implementation report containing:

1. Pages implemented.
2. Routes and navigation flow.
3. Mock data files and persistence mechanism.
4. Implemented interactions.
5. Map and geolocation implementation details.
6. Tests or manual verification performed.
7. Known limitations or incomplete items.

Do not mark a feature as complete if it is only a static visual placeholder.