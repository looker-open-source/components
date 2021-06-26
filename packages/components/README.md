# Looker UI Components

## Introduction

This package provides a series of components that implement Looker's Design System.

## Installation

To get started add the Looker Components NPM package:

`npm install @looker/components`

yarn: `yarn add @looker/components`

You'll also need to satisfy `@looker/components` peer dependencies - Lodash, React, & Styled Components:

`npm install lodash react react-dom styled-components`

yarn: `yarn add lodash react react-dom styled-components`

Finally, if you're using Typescript you'll want to add the associated types for the dependencies (note @looker/components is built in Typescript and therefore has built-in types).

`npm install --dev @types/lodash @types/react @types/react-dom @types/styled-components`

yarn: `yarn add --dev @types/lodash @types/react @types/react-dom @types/styled-components`

## Contributor Tips

### Documenting Components in WWW

To begin documenting a new component, you must first import it into [allComponents.ts](/looker-open-source/components/blob/main/packages/www/src/MDX/Pre/allComponents.ts), and attach it the `allComponents` object. This allows Gatsby to automatically add your component to the global javascript scope for use in mdx documentation.
