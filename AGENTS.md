# Repository Guidelines

## Project Structure & Module Organization

This is a Vite React + TypeScript project. Application code lives in `src/`, with the entry point at `src/main.tsx` and the root component in `src/App.tsx`. Global styles are in `src/index.css` and `src/App.css`. Imported assets belong in `src/assets/`; files served directly by Vite belong in `public/`. Build and tooling config stays at the repository root in `vite.config.ts`, `tsconfig*.json`, and `eslint.config.js`.

## Build, Test, and Development Commands

Use `pnpm` because this repository includes `pnpm-lock.yaml`.

- `pnpm install`: install dependencies.
- `pnpm dev`: start the Vite development server with hot module replacement.
- `pnpm build`: run TypeScript project builds and create the production bundle in `dist/`.
- `pnpm lint`: run ESLint across the repository.
- `pnpm preview`: serve the production build locally for verification.

No test command is currently defined in `package.json`.

## Coding Style & Naming Conventions

Write React components in TypeScript and prefer `.tsx` for files that render JSX. Use PascalCase for components, camelCase for functions and variables, and descriptive asset names such as `hero.png`. Keep component-specific styles close to the component when practical.

ESLint is configured for TypeScript, React Hooks, and Vite React Refresh. Run `pnpm lint` before submitting changes. Existing files use two-space indentation and omit semicolons; follow that style when editing nearby code.

## Testing Guidelines

There is no test framework configured yet. For behavior changes, add tests only after introducing an agreed tool such as Vitest and React Testing Library. Recommended patterns are `*.test.ts` for logic and `*.test.tsx` for React components. Until tests exist, verify with `pnpm lint`, `pnpm build`, and manual checks through `pnpm dev`.

## Commit & Pull Request Guidelines

This checkout does not include Git history, so no repository-specific commit convention can be inferred. Use short, imperative commit messages, for example `Add button component` or `Fix hero asset path`.

Pull requests should include a clear summary, the verification commands run, and screenshots or recordings for visible UI changes. Link related issues when available, keep changes focused, and call out any new dependencies or configuration changes.

## Agent-Specific Instructions

Keep generated changes scoped to this Vite app. Do not edit `node_modules/` or generated `dist/` output. Prefer updating existing React, CSS, TypeScript, and Vite patterns before adding new tooling.
