# @looker/filter-expressions

This TypeScript package provides the necessary functions for transforming [Looker filter expressions](https://docs.looker.com/reference/filter-expressions) into data structures and localized text summaries – and vice versa.

#### `getExpressionType`

Returns a valid filter expression type when given the type and field properties of an `IDashboardFilter` object as defined in [`@looker/sdk`](https://github.com/looker-open-source/sdk-codegen/tree/main/packages/sdk).

```js
getExpressionType({ field: { is_numeric: true }, type: 'field_filter' })
// 'number'
```

#### `parseFilterExpression`

Returns an Abstract Syntax Tree (AST) that logically represents the filter expression string passed in, as well as the filter expression type (and optional user attributes).

```js
parseFilterExpression('number', '[0,20],>30')
// {
//   type: ',',
//   left: {
//     type: 'between',
//     bounds: '[]',
//     low: 0,
//     high: 20,
//     is: true,
//   },
//   right: {
//     is: true,
//     type: '>',
//     value: [30],
//   },
// }
```

#### `summary`

The `summary` function returns a localized, human-readable summary of a filter expression, given the expression's type, the expression itself, and the user attributes and field, if applicable.

```js
summary('number', '[0,20],>30')
// 'is in range [0, 20] or is > 30'
```

#### `typeToGrammar`

Returns an object with utility functions and values pertaining to a given expression type:

- `toString`: a function that converts an AST into an expression of the given type
- `subTypes`: an array containing the sub-types of the expression type, for example ">", "<", "=", "between", etc, for a number expression type

#### `getFilterTokenItem`

Converts an AST to a single item for use in a token (i.e. not advanced) filter.
