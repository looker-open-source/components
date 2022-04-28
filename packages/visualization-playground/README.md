# Looker Visualization Playground

Looker Visualization Playground is a demo and development product for rendering [Visualization Components](https://www.npmjs.com/package/@looker/visualizations) and [Filter Components](https://www.npmjs.com/package/@looker/filter-components). It provides an easy way to try out various features of those libraries and generate a configuration object for use in your own embededded contexts.

## Installation

To get started, add the Looker Visualization Components NPM package:

- **NPM:** `npm install @looker/visualization-playground`
- **YARN:** `yarn add @looker/visualization-playground`

You'll also need to satisfy a few peer dependencies - Looker/components, React, and Styled Components:

- **NPM:** `npm install @looker/components @looker/components-data react react-dom styled-components`
- **YARN:** `yarn add @looker/components @looker/components-data react react-dom styled-components`

## Getting Started

Looker Visualization Components are designed to be used in a React environment that has been authenticated with our [API](https://docs.looker.com/reference/api-and-integration/api-getting-started), using the [Javascript SDK](https://www.npmjs.com/package/@looker/sdk). You will be required to pass an authenticated SDK object as a prop in order to facilitate data fetching and query creation. The following is an example of how to mount the Visualization Playground within Looker's Extension Framework.

you must render the `VisualizationPlayground` within the provided AppContext to route necessary extension methods to their associated hooks. See usage below for an example.

```tsx
import React, { useContext } from 'react'
import ReactDOM from 'react-dom'
import { ExtensionContext } from '@looker/extension-sdk-react'
import type { ExtensionContextData } from '@looker/extension-sdk-react'
import {
  VisualizationPlayground,
  AppContext,
} from '@looker/visualization-playground'

const ExtensionWrapper = () => {
  // get an authenticated sdk object from ExtensionContext
  const { core40SDK, extensionSDK } = useContext<ExtensionContextData>(
    ExtensionContext
  )

  // specify how to use localStorage, which has special considerations
  // in the extension framework
  const localStorageSetItem = (key: string, value: string) =>
    extensionSDK.localStorageSetItem(key, value)
  const localStorageGetItem = (key: string) =>
    extensionSDK.localStorageGetItem(key)

  return (
    {/* Load localStorage methods in context for use in the playground */}
    <AppContext.Provider
      value={{
        localStorageSetItem,
        localStorageGetItem,
      }}
    >
      {/* Render the playground */}
      <VisualizationPlayground sdk={core40SDK} />
    </AppContext.Provider>
  )
}
```
