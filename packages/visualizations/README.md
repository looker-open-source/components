# Looker Visualization Components

Looker Visualization Components is a collection of utilities to aid in building and embedding data experiences inside of a React application. It is designed to be used in conjuncution with [Looker's SDK](https://www.npmjs.com/package/@looker/sdk), and can be integrated after authenticating with the SDK service.

Using Looker’s SDK, our standard library of charts can be rendered through the use of the `Query` and `Visualization` components to request query data and parse the response through our visualization adapters. To build custom visualization that extends our out-of-the-box functionality, developers can use the `QueryFormatter` component to clean up Looker’s query response before sending the formatted data to a custom visualization that they would build.

## Installation

To get started, add the Looker Visualization Components NPM package:

- **NPM:** `npm install @looker/visualizations`
- **YARN:** `yarn add @looker/visualizations`

You'll also need to satisfy a few peer dependencies - Looker/components, React, and Styled Components:

- **NPM:** `npm install @looker/components react react-dom styled-components`
- **YARN:** `yarn add @looker/components react react-dom styled-components`

## Getting Started

Looker Visualization Components are designed to be used in a React environment that has been authenticated with our [API](https://docs.looker.com/reference/api-and-integration/api-getting-started), using the [Javascript SDK](https://www.npmjs.com/package/@looker/sdk). That step will be handled automatically when building within the [Looker extension framework](https://docs.looker.com/data-modeling/extension-framework/extension-framework-intro).

```jsx
import { Query, Visualization, QueryFormatter } from '@looker/visualizations'
```

Once authenticated, you can pass the SDK object and a query ID (numeric) or slug (string) to the `Query` component, which will then handle the data fetching.

Within the `Query` component you can render any of our [standard charts](https://docs.looker.com/exploring-data/visualizing-query-results/visualization-types) using the `Visualization` component. This will parse the SDK response, include any specified config overrides, and run everything through our adapters to render charts an you would expect to see inside our internal visualization builder.

```jsx
// passing a string slug into the query prop:
<Query sdk={core40SDK} query="evomfl66xHx1jZk2Hzvv1R">
  <Visualization />
</Query>
```

Or alternatively, you can use the `QueryFormatter` component to pass the formatted data and config object into your own custom components:

```jsx
// starting with a numeric query id reduces the total api requests by 1
<Query sdk={core40SDK} query={12345}>
  <QueryFormatter>
    <MyCustomComponent>
      {/* Receives config, data, and fields objects to build your own custom visualizations. */}
    </MyCustomComponent>
  </QueryFormatter>
</Query>
```

For more information and advanced usage, please see the [Looker Visualization Components documentation](https://docs.looker.com/data-modeling/extension-framework/vis-components). Additionally, you can preview our list of supported configuration options at the [Looker Developer Portal](https://developers.looker.com/components/visualization-components).

## Motivation

Looker Visualization Components exists to facilitate the creation of performant and flexible data experiences built on top of the Looker SDK. This is meant to be an alternative to the full dashboard embed solution, an augment to the Looker extension framework, and a new tool for any Looker customer to use in their own products.
