# Looker UI Components

## Introduction

This package provides a series of components that implement Looker's Design System. See http://components.looker.com for additional detail on Looker Components.

## Installation

To get started add the Looker Components NPM package:

`npm install @looker/components`

yarn: `yarn add @looker/components`

You'll also need to satisfy `@looker/components` peer dependencies - Lodash, React, & Styled Components:

`npm install lodash react react-dom styled-components`

yarn: `yarn add lodash react react-dom styled-components`

Finally, if you're using Typescript you'll want to add the associated typings for the dependencies (note @looker/components is build in Typescript and therefore has built-in typings).

`npm install --dev @types/lodash @types/react @types/react-dom @types/styled-components`

yarn: `yarn add --dev @types/lodash @types/react @types/react-dom @types/styled-components`

## Contributor Tips

### Watching Build Changes

Working on the components package? This package includes a `develop` script to make is easy to watch the code for changes and have it automatically recompiled.

- **yarn workspace @looker/components develop** builds the component library with a `--watch` flag. Useful when actively developing a component and you wish to see the changes appear in either the [style guide](./packages/www) or [react playground](./packages/playground)

### Documenting Components in WWW

To begin documenting a new component, you must first import it into [allComponents.ts](/looker-open-source/components/blob/master/packages/www/src/MDX/Pre/allComponents.ts), and attach it the `allComponents` object. This allows Gatsby to automatically add your component to the global javascript scope for use in mdx documentation.
