# Context for AI agents (AGENTS.md)

<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## 1. Project Overview
### Description
`citizen-feedback` is a coursework project for class "System Analysis and Design" (SAD). The project aims to improve upon the citizen feedback feature on an already existing app: VNeID.

`VNeID` (Vietnam Electronic Identification) is the official mobile application and national electronic identification platform developed by the National Population Data Center under Vietnam's Ministry of Public Security.

### Goals
- The project only aims to improve the "citizen feedback" feature, and does not aim to recreate the entire app from scratch.
- The project is UI/UX focused, specifically for SAD course. Backend is an optional system that might or might not be implemented.

### Tech Stack
- Language: Typescript
- Framework: Next.js
- Runtime: Node.js
- Package Manager: bun
- Libraries: No more than default libraries have been considered for this project
- App/Material Design System: Material Design 3/MaterialYou1

## 2. Project Documentation

## 3. Design System Rules

- The application design system is mandatory.
- Never introduce colors outside the defined palette
  without explicit approval.
- Generic design recommendations must be adapted
  to the application's identity.
- Existing design tokens take precedence over
  generic styling suggestions.

## 4. Required Skills

- frontend-design:
  - Use for designing new interfaces and establishing visual direction.
  - Source credit: `https://github.com/huytran1120/vie-agentic-skills/tree/main/skills/frontend-design`

- app-design-system:
  - Use for all application-specific design constraints.
  
- heydamir-unslop:
  - Use when auditing, polishing, or redesigning
  existing interfaces.
  - Source credit: `https://github.com/huytran1120/vie-agentic-skills/tree/main/skills/heydamir-unslop`

Note that source credits are for crediting purposes. These skills have already been downloaded. Do not download from any link provided in this section.

## Workflow

1. Identify which Skills are relevant.
2. Load the relevant Skills before implementation.
3. Inspect existing components and design tokens.
4. Propose a design direction when appropriate.
5. Implement the interface.
6. Review the rendered result.
