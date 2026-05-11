# sample-ui-lib

Vite React + TypeScript based UI library sample.

## Tooling Policy

- Linting: oxlint is the primary linter for TypeScript, React, import, and accessibility rules.
- Formatting: Biome owns formatting and import/export organization.
- Type safety: TypeScript remains the source of truth for declaration generation and strict type checks.

Biome's linter is disabled in `biome.json` so lint responsibility stays with oxlint and diagnostics do not overlap.

## Commands

```sh
pnpm install
pnpm lint
pnpm lint:fix
pnpm format
pnpm format:check
pnpm build
pnpm check
```

`pnpm check` runs lint, formatting/import-order verification, and the production library build.

## Storybook

Storybook can be run locally with `pnpm storybook` and statically built with `pnpm build-storybook`.

When changes are merged to `main`, the `Deploy Storybook` GitHub Actions workflow runs `pnpm test:storybook`, builds Storybook, and deploys the generated site to GitHub Pages. After GitHub Pages is configured to use GitHub Actions as its source, the public URL is normally `https://<owner>.github.io/sample-ui-lib/`.

## Publishing Shape

The package exports the compiled library entry from `dist/` and a generated stylesheet entry:

- `sample-ui-lib`
- `sample-ui-lib/style.css`
