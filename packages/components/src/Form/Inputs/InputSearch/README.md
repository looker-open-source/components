# InputSearch

The `<InputSearch />` component renders a single search input element.

You can add a placeholder, and a starter value, also a summary text and a closing button associated with it.

```tsx
function Basic(props: InputSearchProps) {
  const { placeholder = 'Type your search', ...restProps } = props;

  return <InputSearch placeholder={placeholder} {...restProps} />;
}
```

## hideSearchIcon

If you don't want to see the search `Icon` use the prop `hideSearchIcon`.

```tsx
function HideSearchIcon(props: InputSearchProps) {
  const {
    hideSearchIcon = false,
    placeholder = 'No search icon here',
    ...restProps
  } = props;

  return (
    <InputSearch
      hideSearchIcon={hideSearchIcon}
      placeholder={placeholder}
      {...restProps}
    />
  );
}
```

## autoResize

Use the `autoResize` prop to allow the input's width to adjust to its current value or placeholder.

```tsx
function AutoResize(props: InputSearchProps) {
  const {
    autoResize = true,
    placeholder = 'Start typing to resize',
    ...restProps
  } = props;

  return (
    <InputSearch
      autoResize={autoResize}
      placeholder={placeholder}
      {...restProps}
    />
  );
}
```

## isClearable

To remove the Clear Field button, use `isClearable={false}`.

```tsx
function IsClearable(props: InputSearchProps) {
  const {
    placeholder = 'Type your search',
    defaultValue = 'test search 1',
    isClearable = false,
    ...restProps
  } = props;

  return (
    <InputSearch
      placeholder={placeholder}
      defaultValue={defaultValue}
      isClearable={isClearable}
      {...restProps}
    />
  );
}
```

## summary

```tsx
function Summary(props: InputSearchProps) {
  const {
    placeholder = 'Type your search',
    summary = 'summary text',
    ...restProps
  } = props;

  return (
    <InputSearch placeholder={placeholder} summary={summary} {...restProps} />
  );
}
```

## defaultValue

Use `defaultValue` when you want to set an initial value but still want InputSearch to control state internally.

```tsx
function DefaultValue(props: InputSearchProps) {
  const {
    placeholder = 'Type your search',
    defaultValue = 'test search 0',
    ...restProps
  } = props;

  return (
    <InputSearch
      placeholder={placeholder}
      defaultValue={defaultValue}
      {...restProps}
    />
  );
}
```

## Controlled Example

```tsx
function Controlled() {
  const [keyword, setKeyword] = useState('Default Value');

  return (
    <InputSearch
      placeholder="Type your search"
      summary={
        keyword.length > 0 ? `You typed ${keyword.length} characters` : ''
      }
      value={keyword}
      onChange={setKeyword}
    />
  );
}
```

## Disabled

Use the `disable` property to make an input field un-editable.

```tsx
function Disable(props: InputSearchProps) {
  const {
    disabled = true,
    placeholder = 'Type your search',
    value = 'Value Disabled',
    ...restProps
  } = props;

  return (
    <SpaceVertical align="start">
      <InputSearch disabled={disabled} />
      <InputSearch disabled={disabled} value={value} />
      <InputSearch
        disabled={disabled}
        placeholder={placeholder}
        {...restProps}
      />
    </SpaceVertical>
  );
}
```

## ReadOnly property

As the name suggests, readOnly makes the text un-editable.

```tsx
function ReadOnly(props: InputSearchProps) {
  const {
    value = "You can't change me.",
    readOnly = true,
    ...restProps
  } = props;

  return <InputSearch value={value} readOnly={readOnly} {...restProps} />;
}
```

## clearIconLabel

The `InputSearch` component provides the prop `clearIconLabel` to customize the input icon label. Hover over the the `x` icon to see the tooltip.

```tsx
function ClearIconLabel(props: InputSearchProps) {
  const {
    clearIconLabel = 'Reset this seach field',
    value = 'my query',
    ...restProps
  } = props;

  return (
    <InputSearch clearIconLabel={clearIconLabel} value={value} {...restProps} />
  );
}
```

## Options (experimental)

The `options` prop offers users suggestions or results as they type, similar to a filterable
[`Select`](/components/forms/select/), but without the intent to restrict the field's value.

Additional props `onSelectOption`, `changeOnSelect` (defaults to true), which determines whether the input
will be updated with the selected option's value, and `clearOnClose` (defaults to the opposite of
`changeOnSelect`), which determines whether the input value will persist after the option list is closed,
(via blur, escape, etc).

```tsx
function Options() {
  const cheeses = [
    {
      description: 'Delicious cheese',
      detail: 'Netherlands ',
      value: 'Gouda',
    },
    { value: 'Cheddar' },
  ];

  const cheeses2 = [{ value: 'Jack' }, { value: 'Swiss' }];

  const handleSelectOption = (option?: SelectOptionObject) =>
    option && alert(`You picked ${option.value}`);

  return (
    <Space>
      <InputSearch
        options={cheeses}
        onSelectOption={handleSelectOption}
        changeOnSelect={false}
        placeholder="Options act like results"
      />
      <InputSearch
        options={cheeses2}
        placeholder="Options act like suggestions"
      />
    </Space>
  );
}
```
