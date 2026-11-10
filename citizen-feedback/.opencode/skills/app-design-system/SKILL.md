# Application Design System
## Purpose
This Skill defines the visual identity and constraints of this application.

All UI implementations must follow this design system to maintain visual consistency across pages and components.

The application uses a color system based on Material Design 3 (MD3).

## 1. Color System
Before implementing, read: `references/color-palette.md`

This file is the source truth for the application's color palette.

### Rules
- Use the defined MD3 colors instead of arbitrary colors.
- Do not introduce new colors without an explicit requirement.
- Do not hardcode colors directly into components, instead use design tokens or theme variables. If these do not exist, create a universal palette file.
- Prefer semantic color roles over individual hex values.
- Maintain sufficient contrast between foreground and background colors.
- Use the appropriate color scheme for the current theme (light or dark).
- Do not assume that a color's role is interchangeable with another role, even if their values look similar.

### Semantic Color Usage
Follow the intended roles on Material Design 3:

- `primary`: Main brand color and prominent actions.
- `onPrimary`: Content displayed on primary-colored surfaces.
- `primaryContainer`: Less prominent primary-colored surfaces.
- `onPrimaryContainer`: Content displayed on primary containers.
- `secondary`: Supporting actions and visual emphasis.
- `tertiary`: Additional accent and differentiation.
- `surface`: Main application surfaces.
- `onSurface`: Primary content on surfaces.
- `surfaceVariant`: Supporting surface variations, where applicable.
- `outline`: Borders and visual boundaries.
- `error`: Error states and destructive actions.
- `onError`: Content displayed on error-colored surfaces.

## 2. Component Styling
When creating or modifying components:
- Reuse existing design tokens and component styles.
- Maintain consistent colors across equivalent component types.
- Use semantic colors for interactive states.
- Ensure buttons, inputs, cards, dialogs, navigation elements, and other components follow the same visual language.
- Avoid introducing decorative effects that conflict with the application's design direction.

## 3. Interaction States
Consider the appropriate visual treatment for:
- Default
- Hover
- Focus
- Pressed
- Selected
- Disabled
- Error

Use MD3 state layers and component conventions where appropriate.

Do not invent arbitrary state colors when an existing semantic role or token theme can represent the state.

## 4.Typography and Layout

Follow existing project typography, spacing, shape, and layout tokens whenever available.

Do not assume that Material Design 3 requires using every default MD3 component style. Adapt its principles to the application's established visual identity.

## 5. Relationship With Other Design Skills
This skill deffines-specific design constraints

When used alongside general UI/UX skill such as frontend-design
- Use thoes Skills for exploration, visual hierarchy, layout decisions, and interface quality 
- Use this skill for application-specific colors, semantic roles, and visual consistency.
- Do not replace the application's established visual identity simply to follow a generic design suggestion.

## 6. Implementation Workflow
Before implementing a UI:
1. Read this skill.
2. Read the color palette reference.
3. Inspect the existing project's theme and design tokens.
4. Reuse existing components and styling conventions where possible.
5. Implement the interface using the defined design system.
6. Review the rendered interface for consistency, accessibility, and visual quality.

When the design system does not define something, make a reasonable decision that is consistent with the existing application. Do not unnecessarily expand the design system.