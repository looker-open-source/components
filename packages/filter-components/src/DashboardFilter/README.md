# DashboardFilter

`DashboardFilter` renders a dashboard filter as returned by the Looker API.

**Note:** for more direct rendering control, see the [`Filter`](filter) component.

```tsx
function Basic({
  filter = {
    field: { is_numeric: true },
    id: '1',
    name: 'Cost',
    type: 'field_filter',
    allow_multiple_values: true,
  },
  ...props
}: DashboardFilterProps) {
  return <DashboardFilter filter={filter} {...props} />;
}
```

## expression & onChange

Use `onChange` to get updates to the `expression`.

```tsx
function ExpressionOnChange() {
  const [expression, setExpression] = useState('[0,100]');
  return (
    <SpaceVertical>
      <DashboardFilter
        filter={{
          field: { is_numeric: true },
          id: '1',
          name: 'Age',
          type: 'field_filter',
        }}
        expression={expression}
        onChange={setExpression}
      />
      <Paragraph>
        <strong>Current filter expression:</strong> {expression}
      </Paragraph>
    </SpaceVertical>
  );
}
```

## Suggestions

When the filter is on a field where the `suggestable` property is true,
the supplied `sdk` instance will be used to fetch the suggested values.

```tsx
function Suggestions() {
  const [expression, setExpression] = useState('');
  return (
    <DashboardFilter
      filter={{
        field: { suggestable: true },
        name: 'Status',
        type: 'field_filter',
        ui_config: { type: 'button_group' },
        allow_multiple_values: true,
      }}
      sdk={
        {
          // Mock sdk instance used to fetch suggested values
          ok: (value: any) => value,
          get: () =>
            Promise.resolve({
              suggestions: ['complete', 'pending', 'cancelled'],
            }),
        } as any
      }
      expression={expression}
      onChange={setExpression}
    />
  );
}
```

## Required

When `required` is true an error message will render below the filter when the expression is empty.

```tsx
function Required() {
  const [expression, setExpression] = useState('');
  return (
    <DashboardFilter
      filter={{
        field: { is_numeric: true },
        id: '1',
        name: 'Age',
        required: true,
        type: 'field_filter',
      }}
      expression={expression}
      onChange={setExpression}
    />
  );
}
```
