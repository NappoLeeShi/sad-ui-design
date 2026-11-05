# Prompt 2 — Implement the Login Page

Implement the login page as a functional mock login interface.

### Scope

This page exists only to simulate the authentication entry point of the prototype.

Do not implement real authentication, account verification, OTP delivery, identity verification, or backend integration.

### Requirements

1. Follow the existing login wireframe if available.
2. Preserve the visual direction and styling conventions defined by the project.
3. Provide a mock login interaction.

### Mock login behavior

- Allow the user to enter the required mock login information.
- Provide a clear login button.
- Validate that the required fields are not empty.
- Display an appropriate error message when the input is invalid or incomplete.
- When the user successfully submits the mock login form, navigate to the Home page.
- Use a mock user profile from the project's JSON data, such as `user.json`.
- Maintain a mock authenticated state so that refreshing the page does not unnecessarily return the user to Login.

The account information used later in report forms should come from this mock user profile.

### Constraints

- Do not call real authentication APIs.
- Do not send login credentials anywhere.
- Do not implement actual password recovery or OTP services.
- Do not build unrelated account-management functionality.

### Acceptance criteria

- The user can complete the mock login flow.
- Invalid input produces understandable feedback.
- Successful login navigates to Home.
- The mock user information is available to subsequent pages.
- The authentication state behaves consistently when navigating and refreshing.