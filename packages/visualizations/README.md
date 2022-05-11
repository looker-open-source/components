# Looker Visualization Components

Looker Visualization Components is a collection of utilities to aid in building and embedding data experiences inside of a React application. It is designed to be used in conjuncution with [Looker's SDK](https://www.npmjs.com/package/@looker/sdk), and can be integrated after authenticating with the SDK service.

Using Looker’s SDK, our standard library of charts can be rendered through the use of the `Query` and `Visualization` components to request query data and parse the response through our visualization adapters.

## Installation

To get started, add the Looker Visualization Components NPM package:

- **NPM:** `npm install @looker/visualizations`
- **YARN:** `yarn add @looker/visualizations`

You'll also need to satisfy a few peer dependencies - Looker/components, React, and Styled Components:

- **NPM:** `npm install @looker/components @looker/components-data react react-dom styled-components`
- **YARN:** `yarn add @looker/components @looker/components-data react react-dom styled-components`

## Getting Started

Looker Visualization Components are designed to be used in a React environment that has been authenticated with our [API](https://docs.looker.com/reference/api-and-integration/api-getting-started), using the [Javascript SDK](https://developers.looker.com/api/getting-started). That step will be handled automatically when building within the [Looker extension framework](https://docs.looker.com/data-modeling/extension-framework/extension-framework-intro).

```jsx
import { Query, Visualization } from '@looker/visualizations'
import { DataProvider } from '@looker/components-data'
```

Once authenticated, you can pass the SDK object to the `DataProvider` and a query ID (numeric) or slug (string) to the `Query` component, which will then handle the data fetching.

Within the `Query` component you can render any of our [standard charts](https://docs.looker.com/exploring-data/visualizing-query-results/visualization-types) using the `Visualization` component. This will parse the SDK response, include any specified config overrides, and run everything through our adapters to render charts an you would expect to see inside our internal visualization builder. You can also replace `Visualization` with any custom component to recieve those same props.

```jsx
<DataProvider sdk={core40SDK}>
  // passing a string slug into the query prop:
  <Query query="evomfl66xHx1jZk2Hzvv1R">
    <Visualization />
  </Query>
</DataProvider>
```

For more information and advanced usage, please see the [Looker Visualization Components documentation](https://docs.looker.com/data-modeling/extension-framework/vis-components). Additionally, you can preview our list of supported configuration options at the [Looker Developer Portal](https://developers.looker.com/components/visualization-components).

### i18n Locale Support

In your [React app](https://reactjs.org/docs/getting-started.html), call `i18nInit` once with an optional locale object (defaults to `en`) to support localized strings. This will also initialize the locales for [`@looker/components`](https://docs.looker.com/data-modeling/extension-framework/components) as that is a dependency of our visualization components.

```jsx
import {
  i18nInit,
  koKR,
} from '@looker/visualizations'

// initialize once in the global scope
i18nInit(koKR)

export const App = (...) => {
  return (...)
}
```

## Motivation

Looker Visualization Components exists to facilitate the creation of performant and flexible data experiences built on top of the Looker SDK. This is meant to be an alternative to the full dashboard embed solution, an augment to the Looker extension framework, and a new tool for any Looker customer to use in their own products.
