# Filter Components

- [Getting Started](#getting-started)
- [Components](#components)
- [Utilities](#utilities)

## Getting Started

1. Install `@looker/filter-components`:

```bash static
# Looker projects generally utilize Yarn (https://yarnpkg.com/)
yarn add @looker/filter-components

# If you prefer you can of course also use NPM directly:
npm install @looker/filter-components
```

You'll also need to satisfy peer dependencies - React & Styled Components:

```bash static
# Using Yarn
yarn add react react-dom styled-components

# Using NPM
npm install react react-dom styled-components
```

Finally, if you're using Typescript you'll want to add the associated types for the dependencies (note @looker/filter-components is built in Typescript and therefore has built-in types).

```bash static
# Using Yarn
yarn add --dev @types/react @types/react-dom @types/styled-components

# Using NPM
npm install --dev @types/react @types/react-dom @types/styled-components`
```

2. In your [React app](https://reactjs.org/docs/getting-started.html), call `i18nInit` once with an optional locale object (defaults to `en`), add a `ComponentsProvider`\*, and render filters inside with the `DashboardFilter` component.

The following is an example of a component in a that displays a list of dashboard filters:

```jsx
import {
  ComponentsProvider,
  DashboardFilter,
  i18nInit,
  koKR,
} from '@looker/filter-components'

i18nInit(koKR)

export const FiltersSection = ({ filters, filterValues, updateFilters }) => {
  return (
    <ComponentsProvider>
      {filters.map(filter => (
        <DashboardFilter
          key={filter.id}
          filter={filter}
          expression={filterValues[filter.name]}
          onChange={expression => updateFilters(filter.name, expression)}
        />
      ))}
    </ComponentsProvider>
  )
}
```

\* `ComponentsProvider` is the provider for [`@looker/components`](https://components.looker.com), re-exported in this package. The `@looker/components` library provides the lower-level components used to build the filter components. If you are already using it in your app, you don't need to add another `ComponentsProvider`.

## Components

### DashboardFilter

This component takes a `filter`, `onChange` and optional `expression` (for external control). Internally, this component includes the [`Filter` component](#filter), the [`useSuggestable`](#usesuggestable) and [`useExpressionState`](#useexpressionstate) hooks, and a `Field` wrapper to display the label.

```jsx
<DashboardFilter filter={dashboardFilter} onChange={handleChange} />
```

### Filter

For a more custom implementation, the underlying `Filter` component is also exported. It takes `field` and `type` from the dashboard filter. It also requires the current `expression` and an `onChange` handler for updates to the expression (see [`useExpressionState` hook](#useexpressionstate)), as well as `suggestions`/ `enumerations` and an `onInputChange` handler for some filters (see [`useSuggestable` hook](#usesuggestable)).

```jsx
const { id, name = '', type, field, ui_config } = dashboardFilter

const stateProps = useExpressionState({
  filter,
  // These props will likely come from higher up in your application
  expression: props.expression
  onChange: props.onChange,
})

const { errorMessage, suggestableProps } = useSuggestable({
  filter,
  sdk,
})

return (
  <Filter
    name={name}
    type={type}
    field={field}
    config={ui_config}
    {...suggestableProps}
    {...stateProps}
  />
)
```

## Utilities

### useSuggestable

Takes `filter` and `sdk` – an SDK 4.0 instance – and returns the appropriate props for the various suggestion modes, calling the Looker API `model_fieldname_suggestions` request method as necessary. See [`Filter` example](#filter) above.

### useExpressionState

Takes a filter and an `onChange` callback, as well as on optional `expression` for external control. See [`Filter` example](#filter) above.

### summary

The `summary` function returns a localized summary of a filter expression, given the expression's type, the expression itself, and the user attributes and field, if applicable.

```js
summary('number', '[0,20],>30')
// 'is in range [0, 20] or is > 30'
```
