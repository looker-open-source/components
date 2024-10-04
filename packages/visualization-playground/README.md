# THIS PACKAGE IS DEPRECATED

Lookers suite of React visualization components is no longer maintained.

---

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

Looker Visualization Components are designed to be used in a React environment that has been authenticated with our [API](https://cloud.google.com/looker/docs/reference/api-and-integration/api-getting-started), using the [Javascript SDK](https://developers.looker.com/api/getting-started). You will be required to pass an authenticated SDK object as a prop in order to facilitate data fetching and query creation. The following is an example of how to mount the Visualization Playground within Looker's Extension Framework.

For the full experience, you must render the `VisualizationPlayground` within the provided AppContext to route necessary extension methods to their associated hooks. See usage below for an example.

If you omit the `sdk` prop and use of `AppContext.Provider`, the playground will still function but with a limited mock dataset to play with.

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
  const { coreSDK, extensionSDK } = useContext<ExtensionContextData>(
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
      <VisualizationPlayground sdk={coreSDK} />
    </AppContext.Provider>
  )
}
```

### i18n Locale Support

To successfully render the playground you should initialize the i18n support for both [Filter](https://cloud.google.com/looker/docs/data-modeling/extension-framework/filter-components) and [Visualization Components](https://cloud.google.com/looker/docs/data-modeling/extension-framework/vis-components). Within your [React app](https://reactjs.org/docs/getting-started.html), call the respective `i18nInit` methods once each with an optional locale object (defaults to `en`) to support localized strings. This will also initialize the locales for [`@looker/components`](https://cloud.google.com/looker/docs/data-modeling/extension-framework/components) as that is a dependency of our visualization components.

```jsx
import { i18nResources, i18nInit } from '@looker/filter-components'
import { VisualizationPlayground } from '@looker/visualization-playground'
import { i18nInit as i18nInitVis } from '@looker/visualizations'
import { ComponentsProvider } from '@looker/components'

// initialize in the global scope
i18nInit()
i18nInitVis()

export const App = (...) => {
  return <ComponentsProvider loadGoogleFonts resources={i18nResources}><VisualizationPlayground /></ComponentsProvider>
}
```
