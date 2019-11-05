# Looker UI Components

## Introduction

This package provides a series of components that implement Looker's Design System. See https://lens.looker.com for additional detail on Looker Components.

## Installation

To get started add the Looker Components NPM package:

`npm install @looker/component`

yarn: `yarn add @looker/component`

You'll also need to satisfy `@looker/components` peer dependencies - Lodash, React, & Styled Components:

`npm install lodash react react-dom styled-components`

yarn: `yarn add lodash react react-dom styled-components`

Finally, if you're using Typescript you'll want to add the associated typings for the dependencies (note @looker/components is build in Typescript and therefore has built-in typings).

`npm install --dev @types/lodash @types/react @types/react-dom @types/styled-components`

yarn: `yarn add --dev @types/lodash @types/react @types/react-dom @types/styled-components`

## Contributor Tips

Working on the components package? This package includes a `develop` script to make is easy to watch the code for changes and have it automatically recompiled.

- **yarn workspace @looker/components develop** builds the component library with a `--watch` flag. Useful when actively developing a component and you wish to see the changes appear in either the [style guide](./packages/www) or [react playground](./packages/playground)
