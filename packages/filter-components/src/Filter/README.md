# Filter

`Filter` is the top level component for rendering a
[Looker filter expression](https://cloud.google.com/looker/docs/reference/filter-expressions)
that the user can update.

**Note:** for more out-of-the-box render of a dashboard filter, including label,
suggestion fetching, and validation messaging, see the
[`DashboardFilter`](dashboard-filter) component.

## expressionType

`Filter` relies on the `expressionType` to properly parse and render the expression.
It can eithe rtake the `expressionType` prop directly or derive it from filter
`type` and `field` returned by the Looker API.

```tsx
function ExpressionTypeOrField() {
  return (
    <SpaceVertical>
      <Filter name="Age" expressionType="number" expression="[0,100]" />
      <Filter
        name="Age"
        type="field_filter"
        field={{ is_numeric: true }}
        expression="[0,100]"
      />
    </SpaceVertical>
  );
}
```

## expression & onChange

Use `onChange` to get updates to the `expression`.

```tsx
function ExpressionOnChange() {
  const [expression, setExpression] = useState('[0,100]');
  const handleChange = (value: FilterChangeProps) => {
    setExpression(value.expression);
  };
  return (
    <SpaceVertical>
      <Filter
        name="Age"
        expressionType="number"
        expression={expression}
        onChange={handleChange}
      />
      <Paragraph>
        <strong>Current filter expression:</strong> {expression}
      </Paragraph>
    </SpaceVertical>
  );
}
```

## Suggestions

`Filter` supports suggestions for string expression types.

```tsx
function Suggestions() {
  return (
    <Filter
      name="Status"
      expressionType="string"
      expression="pending"
      suggestions={['complete', 'pending', 'cancelled']}
    />
  );
}
```

The `useSuggestable` hook will fetch and format suggestions when passed an
initialized Looker SDK instance.

```tsx
const FilterItem = ({ filter, sdk }) => {
  const { errorMessage, suggestableProps } = useSuggestable({
    filter,
    sdk,
  });

  return (
    <Filter
      name="Status"
      expressionType="string"
      expression="pending"
      {...suggestableProps}
    />
  );
};
```

## Config

`Filter` supports the various permutations of UI `config` options that are returned in the
Looker API via the filter's `ui_config` property.

```tsx
function Config() {
  return (
    <SpaceVertical>
      <Heading as="h3">String</Heading>
      <Space align="start">
        <SpaceVertical>
          <Heading as="h5">button_group</Heading>
          <Filter
            name="Status"
            expressionType="string"
            expression="pending,complete"
            config={{ type: 'button_group' }}
            suggestions={['complete', 'pending', 'cancelled']}
          />
        </SpaceVertical>
        <SpaceVertical>
          <Heading as="h5">button_toggles</Heading>
          <Filter
            name="Status"
            expressionType="string"
            expression="pending"
            config={{ type: 'button_toggles' }}
            suggestions={['complete', 'pending', 'cancelled']}
          />
        </SpaceVertical>
      </Space>
      <Space>
        <SpaceVertical>
          <Heading as="h5">taglist</Heading>
          <Filter
            name="Status"
            expressionType="string"
            expression="pending,complete"
            config={{ type: 'tag_list' }}
            suggestions={['complete', 'pending', 'cancelled']}
          />
        </SpaceVertical>
        <SpaceVertical>
          <Heading as="h5">dropdown_menu</Heading>
          <Filter
            name="Status"
            expressionType="string"
            expression="pending"
            config={{ type: 'dropdown_menu' }}
            suggestions={['complete', 'pending', 'cancelled']}
          />
        </SpaceVertical>
      </Space>
      <Space>
        <SpaceVertical>
          <Heading as="h5">checkboxes</Heading>
          <Filter
            name="Status"
            expressionType="string"
            expression="pending,complete"
            config={{ type: 'checkboxes' }}
            suggestions={['complete', 'pending', 'cancelled']}
          />
        </SpaceVertical>
        <SpaceVertical>
          <Heading as="h5">radio_buttons</Heading>
          <Filter
            name="Status"
            expressionType="string"
            expression="pending"
            config={{ type: 'radio_buttons' }}
            suggestions={['complete', 'pending', 'cancelled']}
          />
        </SpaceVertical>
      </Space>
      <Divider />
      <Heading as="h3">Date</Heading>
      <Space>
        <SpaceVertical>
          <Heading as="h5">relative_timeframes</Heading>
          <Filter
            name="Date"
            expressionType="date"
            expression="7 day"
            config={{ type: 'relative_timeframes' }}
          />
        </SpaceVertical>
        <SpaceVertical>
          <Heading as="h5">day_picker</Heading>
          <Filter
            name="Date"
            expressionType="date"
            expression="2021/06/29"
            config={{ type: 'day_picker' }}
          />
        </SpaceVertical>
      </Space>
      <SpaceVertical>
        <Heading as="h5">day_range_picker</Heading>
        <Filter
          name="Date"
          expressionType="date"
          expression="2021/06/01 to 2021/06/30"
          config={{ type: 'day_range_picker' }}
        />
      </SpaceVertical>
      <Divider />
      <Heading as="h3">Number</Heading>
      <Space>
        <SpaceVertical>
          <Heading as="h5">slider</Heading>
          <Filter
            name="Age"
            expressionType="number"
            expression="55"
            config={{ max: 120, min: 0, type: 'slider' }}
          />
        </SpaceVertical>
        <SpaceVertical>
          <Heading as="h5">range_slider</Heading>
          <Filter
            name="Age"
            expressionType="number"
            expression="[0,45]"
            config={{ max: 120, min: 0, type: 'range_slider' }}
          />
        </SpaceVertical>
      </Space>
    </SpaceVertical>
  );
}
```
