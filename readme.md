# Design System

An opinionated React component library built on Ant Design. The package provides approved components, theme tokens, and application patterns; Storybook is the living visual reference.

## Getting started

```bash
npm install
npm run storybook
```

## Useful commands

- `npm run build` builds the distributable package.
- `npm test` runs the unit tests once.
- `npm run lint` checks the source and configuration.
- `npm run typecheck` checks TypeScript without emitting files.
- `npm run storybook` starts the component documentation.
- `npm run build-storybook` builds the static documentation site.

## Consumer usage

```tsx
import { Button, DesignSystemProvider } from "@saswatarakshit/design-system";

export function App() {
  return (
    <DesignSystemProvider>
      <Button variant="primary">Save</Button>
    </DesignSystemProvider>
  );
}
```

React, React DOM, and Ant Design are peer dependencies and must be installed by the consuming application.

## Publishing

Add a Changeset for every user-facing package change:

```bash
npm run changeset
```

Releases are intended to be published from CI after npm provenance and repository secrets are configured.
