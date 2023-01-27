# @looker/visualizations-visx

This package contains the Looker visualizations that are built on top of [Airbnb's visx](https://airbnb.io/visx/) charting primitives.
As Looker Visualization Components are designed to be library agnostic, in the long term we will support multiple variations of our core visualizations depending on library preference.

## Installation

If you are working with Looker Visualizations Components, you will likely not need to reference the this package directly. But if you would like to import any of our Visx charts to extend or use outside of the context you can install them with npm or Yarn:

- **npm:** `npm install @looker/visualizations-visx`
- **Yarn:** `yarn add @looker/visualizations-visx`

You'll also need to satisfy a few peer dependencies - Looker/components, React, & Styled Components:

- **npm:** `npm install @looker/components react react-dom styled-components`
- **Yarn:** `yarn add @looker/components react react-dom styled-components`

## Getting Started

```jsx
import { Area, Line, Scatter, Sparkline } from '@looker/visualizations-visx'
```

Please see the documentation for [@looker/visualizations](https://github.com/looker-open-source/components/tree/main/packages/visualizations) for instructions on getting started with Looker Visualization Components. After that, be sure to check out the [Looker Developer Portal](https://developers.looker.com/components/visualization-components) to see more configuration options, or view the [extension framework documentation](https://cloud.google.com/looker/docs/data-modeling/extension-framework/vis-components) for more advanced usage.
