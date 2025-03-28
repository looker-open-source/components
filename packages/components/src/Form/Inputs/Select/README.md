# Select

The `<Select />` component renders a single menu on the page, with no accompanying label. It is generally used to construct higher-order components like the `<FieldText />`. If you are building a form, you probably want to use `<FieldSelect />` instead as it provides label and validation support.
It will render a range from 0 to 10, and select all possible values inbetween.

```tsx
function Basic(props: SelectProps) {
  return (
    <Select
      {...props}
      options={[
        { label: 'Cheddar', value: 'cheddar' },
        { label: 'Gouda', value: 'gouda' },
        { label: 'Swiss', value: 'swiss' },
      ]}
    />
  );
}
```

## Placeholder

Placeholders are used to give a hint to the user of the expected value for the input.
To allow the user to clear the `Select`'s value, add the `isClearable` prop.

```tsx
function Placeholder() {
  return (
    <Select
      placeholder="Select your cheese of choice..."
      options={[
        { label: 'Cheddar', value: 'cheddar' },
        { label: 'Gouda', value: 'gouda' },
        { label: 'Swiss', value: 'swiss' },
      ]}
    />
  );
}
```

## Description

Options can have a `description` property.

```tsx
function Description() {
  return (
    <Select
      maxWidth={400}
      options={[
        {
          description: 'Popular in the US',
          label: 'Cheddar',
          value: 'cheddar',
        },
        { description: 'Dutch sheeps milk', label: 'Gouda', value: 'gouda' },
        { description: 'Full of holes', label: 'Swiss', value: 'swiss' },
      ]}
    />
  );
}
```

## Detail

Right aligned content in the option.

```tsx
function Detail() {
  return (
    <Select
      maxWidth={400}
      placeholder="Select food"
      options={[
        { detail: 'Cheese', value: 'Gouda' },
        { detail: 'Fruit', value: 'Apple' },
      ]}
    />
  );
}
```

## Preface

Content rendered above the option label.

```tsx
function Preface() {
  return (
    <Select
      maxWidth={400}
      placeholder="Select a field"
      options={[
        {
          description: 'Cost to stock - not the price the customer paid',
          label: 'Cost',
          preface: 'Inventory items',
          value: 'inventory_items.cost',
        },
        { label: 'Count', preface: 'Order Items', value: 'order_items.count' },
        {
          description: 'What the customer actually paid',
          label: 'Sale Price',
          preface: 'Order Items',
          value: 'order_items.sale_price',
        },
        {
          description: 'Base retail price',
          label: 'Retail Price',
          preface: 'Inventory Items',
          value: 'inventory_items.retail_price',
        },
        {
          label: 'Count',
          preface: 'Inventory Items',
          value: 'inventory_items.count',
        },
      ]}
    />
  );
}
```

## validationType Property

Use the validationType property to present a validation message.

```tsx
function Error() {
  return (
    <Select
      options={[
        { label: 'Cheddar', value: 'cheddar' },
        { label: 'Gouda', value: 'gouda' },
        { label: 'Swiss', value: 'swiss' },
      ]}
      validationType="error"
    />
  );
}
```

## Disabled Property

Use the disable property to make an input field uneditable.

```tsx
function Disabled() {
  return (
    <Select
      disabled
      options={[
        { label: 'Cheddar', value: 'cheddar' },
        { label: 'Gouda', value: 'gouda' },
        { label: 'Swiss', value: 'swiss' },
      ]}
    />
  );
}
```

## Icons

Define an icon for each option that will display in the list to the left of the option label as well as in the
input when the option is selected. Use icons from our [list](/?path=/docs/docs-icon--docs) or custom JSX.

```tsx
function Icons() {
  return (
    <Space>
      <Select
        placeholder="Select a visualization"
        options={[
          {
            icon: <MaterialIcons.BarChart />,
            label: 'Column',
            value: 'column',
          },
          { icon: <MaterialIcons.ShowChart />, label: 'Line', value: 'line' },
          { icon: <MaterialIcons.Map />, label: 'Map', value: 'map' },
          { icon: <MaterialIcons.PieChart />, label: 'Pie', value: 'pie' },
          {
            icon: <MaterialIcons.TableChart />,
            label: 'Table',
            value: 'table',
          },
        ]}
      />
      <Select
        placeholder="Custom Icons"
        options={[
          {
            icon: (
              <svg
                viewBox="0 0 24 24"
                width="20px"
                height="20px"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13 17H11V15H13V17ZM13 13H11V7H13V13Z"
                  fill="#7FFFD4"
                />
              </svg>
            ),
            label: 'Aqua',
            value: 'Aqua',
          },
          {
            icon: (
              <svg
                viewBox="0 0 24 24"
                width="20px"
                height="20px"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13 17H11V15H13V17ZM13 13H11V7H13V13Z"
                  fill="#ff00e6"
                />
              </svg>
            ),
            label: 'Pink',
            value: 'Pink',
          },
        ]}
      />
    </Space>
  );
}
```

## isLoading

Indicates that options are currently being loaded.

```tsx
function Loading() {
  return <Select maxWidth={400} placeholder="Loading options" isLoading />;
}
```

## Filtering

The `isFilterable` option allows the user to type in the input, triggering the `onFilter` callback,
which should be used to narrow the options passed to the `Select`. Use the `isClearable` prop to allow
the user to delete the current value.

```tsx
function Filtering() {
  const [value, setValue] = useState<string>();
  const [searchTerm, setSearchTerm] = useState('');

  function handleChange(value: string) {
    setValue(value);
  }
  function handleFilter(term: string) {
    setSearchTerm(term);
  }

  const newOptions = useMemo(() => {
    const options = [
      { label: 'Apples', value: '1' },
      { label: 'Bananas', value: '2' },
      { label: 'Oranges', value: '3' },
      { label: 'Pineapples', value: '4' },
      { label: 'Kiwis', value: '5' },
    ];
    if (searchTerm === '') return options;
    return options.filter(option => {
      return option.label.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
    });
  }, [searchTerm]);

  return (
    <Select
      maxWidth={400}
      options={newOptions}
      aria-label="Fruits"
      placeholder="Controlled, searchable, clearable"
      isClearable
      isFilterable
      value={value}
      onChange={handleChange}
      onFilter={handleFilter}
    />
  );
}
```

## showCreate

When `isFilterable` is true, use the `showCreate` prop along with the `formatCreateLabel` (defaults to `'Create "${input value}"'`)
to allow the user to enter a value not found in the options.

```tsx
function ShowCreate() {
  const [value, setValue] = useState<string>();
  const [searchTerm, setSearchTerm] = useState('');

  const newOptions = useMemo(() => {
    const options = [
      { value: 'Apples' },
      { value: 'Bananas' },
      { value: 'Oranges' },
      { value: 'Pineapples' },
      { value: 'Kiwis' },
    ];
    if (searchTerm === '') return options;
    return options.filter(option => {
      return option.value.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
    });
  }, [searchTerm]);

  function formatCreateLabel(inputValue: string) {
    return `Add new fruit: ${inputValue}`;
  }

  return (
    <Select
      maxWidth={400}
      options={newOptions}
      aria-label="Fruits"
      placeholder="Controlled, searchable, creatable"
      isFilterable
      value={value}
      onChange={setValue}
      onFilter={setSearchTerm}
      showCreate
      formatCreateLabel={formatCreateLabel}
    />
  );
}
```

## Groups

Options can be organized into groups, with an optional `label`.

```tsx
function Groups() {
  return (
    <Select
      maxWidth={400}
      options={[
        {
          label: 'CHEESES',
          options: [
            { label: 'Cheddar', value: 'cheddar' },
            { label: 'Gouda', value: 'gouda' },
            { label: 'Swiss', value: 'swiss' },
          ],
        },
        {
          label: 'FRUITS',
          options: [
            { label: 'Grapes', value: 'grape' },
            { label: 'Apples', value: 'apple' },
            { label: 'Strawberries', value: 'strawberries' },
          ],
        },
        {
          options: [
            { label: 'Pizza', value: 'pizza' },
            { label: 'Hamburgers', value: 'hamburgers' },
          ],
        },
      ]}
    />
  );
}
```

## scrollIntoView for improved UX on a long list of options

If you're rendering a long list which scrolls beyond the max-height of the list, you can leverage the `scrollIntoView` option property to focus the list to a helpful scroll position. Using `scrollIntoView` will also highlight the option, so that keyboard navigation will start from there as well.

When you open the following list, `Mascarpone` will be highlighted and visible at the bottom of the menu:

```tsx
function ScrollIntoView() {
  return (
    <Select
      maxWidth={400}
      placeholder="Select your cheese of choice..."
      options={[
        { label: 'Cheddar', value: 'cheddar' },
        { label: 'Gouda', value: 'gouda' },
        { label: 'Swiss', value: 'swiss' },
        { label: 'String', value: 'string' },
        { label: 'Parmigiano Reggiano', value: 'parmesan' },
        { label: 'Roquefort', value: 'roquefort' },
        { label: 'Brie', value: 'brie' },
        { label: 'Gruyere', value: 'gruyere' },
        { label: 'Feta', value: 'feta' },
        { label: 'Mozzarella', value: 'mozzarella' },
        { label: 'Manchego', value: 'manchego' },
        { label: 'Gorgonzola', value: 'gorgonzola' },
        { label: 'Epoisses', value: 'epoisses' },
        { label: 'Monterey Jack', value: 'monterey-jack' },
        { label: 'Muenster', value: 'muenster' },
        { label: 'Provolone', value: 'provolone' },
        { label: 'Blue', value: 'blue' },
        { label: 'Camembert', value: 'camembert' },
        { label: 'Havarti', value: 'havarti' },
        { label: 'Ricotta', value: 'ricotta' },
        { label: 'Mascarpone', scrollIntoView: true, value: 'mascarpone' },
      ]}
    />
  );
}
```

## Windowing

Another feature for long lists. Because rendering hundreds of options results in poor performance,
if there are 100 or more options, the option list will be "windowed", (a.k.a. "virtualized") and only the
options visibile in the scroll area will be rendered, plus a buffer of 5 above and below. The `windowing`
prop can be used to override this – either by setting it to `true` for under 100 or `false` for over 100.

To observe the performance impact, add `windowing={false}` after `options={options1k}` below:

```tsx
function Windowing() {
  const options1k = Array.from(Array(1000), (_, index) => ({
    value: `${index}`,
  }));
  return (
    <Select
      maxWidth={400}
      placeholder="So many options..."
      options={options1k}
    />
  );
}
```

## List Layout

Use the `listLayout` prop to control layout properties of the list,
like width and height, separately from the input.

```tsx
function ListLayout() {
  return (
    <Space>
      <Select
        maxWidth={400}
        listLayout={{ width: 'auto' }}
        placeholder="Accommodate wide options"
        options={[
          {
            label: 'Short label',
            value: 'short',
          },
          {
            label:
              'Incredibly long label that causes the list to be wider than the input',
            value: 'long',
          },
        ]}
      />
      <Select
        maxWidth={400}
        listLayout={{ maxHeight: 300, maxWidth: 700, width: '90vw' }}
        options={[
          { label: 'Cheddar', value: 'cheddar' },
          { label: 'Gouda', value: 'gouda' },
          { label: 'Swiss', value: 'swiss' },
          { label: 'String', value: 'string' },
          { label: 'Parmigiano Reggiano', value: 'parmesan' },
          { label: 'Roquefort', value: 'roquefort' },
          { label: 'Brie', value: 'brie' },
          { label: 'Gruyere', value: 'gruyere' },
          { label: 'Feta', value: 'feta' },
          { label: 'Mozzarella', value: 'mozzarella' },
          { label: 'Manchego', value: 'manchego' },
          { label: 'Gorgonzola', value: 'gorgonzola' },
          { label: 'Epoisses', value: 'epoisses' },
          { label: 'Monterey Jack', value: 'monterey-jack' },
          { label: 'Muenster', value: 'muenster' },
          { label: 'Provolone', value: 'provolone' },
          { label: 'Blue', value: 'blue' },
          { label: 'Camembert', value: 'camembert' },
          { label: 'Havarti', value: 'havarti' },
          { label: 'Ricotta', value: 'ricotta' },
          { label: 'Mascarpone', value: 'mascarpone' },
        ]}
      />
    </Space>
  );
}
```

## autoResize

Use the `autoResize` prop to allow the width of the component to adjust to the current value or placeholder, which is useful
when the `Select` is meant to be rendered inline and horizontal space is at a premium.
The container will default to `display: inline-flex` and both the container and list will default to `width: auto`.

```tsx
function AutoResize() {
  return (
    <Select
      autoResize
      placeholder="Width adjusts to current value"
      options={[
        {
          label: 'Short label',
          value: 'short',
        },
        {
          label: 'Very long label that widens the input considerably',
          value: 'long',
        },
      ]}
    />
  );
}
```

## SelectMulti

The `SelectMulti` component is an extension of the [`Select`](/components/forms/select) component that supports multiple selected values and has the following specific features:

- The input field renders an underlying [`InputChips`](/components/forms/input-chips)
- An on-the-fly "Create" option allows the user to enter custom values (see [`showCreate`](#showcreate) prop)
- Option list stays open by default so the user can select multiple options (see [`closeOnSelect`](#closeonselect) prop)
- Values can be cleared individually or all at once (does not use the `Select` component's `isClearable` prop)

```tsx
function Basic(props: SelectMultiProps) {
  return (
    <SelectMulti
      options={[
        { value: 'Cheddar' },
        { value: 'Gouda' },
        { value: 'Swiss' },
        { value: 'Feta' },
        { value: 'Mascarpone' },
        { value: 'Brie' },
        { value: 'Mozzarella' },
        { value: 'Cotija' },
        { value: 'Pepperjack' },
      ]}
      placeholder="Cheeses"
      flex={1}
      {...props}
    />
  );
}
```

### closeOnSelect

With the `closeOnSelect` prop, the option list closes after an option is selected.

```tsx
function CloseOnSelect() {
  return (
    <SelectMulti
      options={[
        { value: 'Cheddar' },
        { value: 'Gouda' },
        { value: 'Swiss' },
        { value: 'Feta' },
        { value: 'Mascarpone' },
        { value: 'Brie' },
        { value: 'Mozzarella' },
        { value: 'Cotija' },
        { value: 'Pepperjack' },
      ]}
      defaultValues={['Swiss', 'Brie']}
      closeOnSelect
    />
  );
}
```

### freeInput

Use the `freeInput` prop when the user needs to be able to easily enter values not found in the list of options.
This enables the inputting behavior of [`InputChips`](/?path=/docs/docs-input-chips--docs) where values are separated
by the enter key, comma, or tab or newline character when pasting. This prop also supports accepting values copy-pasted in from another `SelectMulti`.

Use the `validate` callback to ensure that values entered via `freeInput` are valid, and the `onValidationFail` and `onDuplicate`
callbacks to handle invalid values. By default, any leading or trailing whitespace will be trimmed from
entered values, before validation. To avoid this, use `formatInputValue={false}`, or provide a callback for custom formatting.

```tsx
function CloseOnSelect() {
  function validate(value: string) {
    return value.charAt(0).toUpperCase() === value.charAt(0);
  }
  const [message, setMessage] = useState('');
  function handleValidationFail(values: string[]) {
    setMessage(`Please capitalize: ${values.join(', ')}`);
  }
  function resetMessage() {
    setMessage('');
  }
  return (
    <SpaceVertical align="stretch">
      <SelectMulti
        options={[
          { value: 'Cheddar' },
          { value: 'Gouda' },
          { value: 'Swiss' },
          { value: 'Feta' },
          { value: 'Mascarpone' },
          { value: 'Brie' },
          { value: 'Mozzarella' },
          { value: 'Cotija' },
          { value: 'Pepperjack' },
        ]}
        isFilterable
        onFilter={resetMessage}
        placeholder="Type values or select from the list"
        freeInput
        validate={validate}
        onValidationFail={handleValidationFail}
      />
      <Paragraph>{message}</Paragraph>
    </SpaceVertical>
  );
}
```

### clearIconLabel

The `InputChips` component provides the prop `clearIconLabel` to customize the input icon label, the same is available to the individual `Chip` with the prop `chipIconLabel`. Hover over the the `x` icon to see the tooltip.

```tsx
function ClearIconLabel() {
  return (
    <Space>
      <SelectMulti
        clearIconLabel="remove all chips"
        defaultValues={['Cheddar']}
        flex={1}
        options={[
          { value: 'Cheddar' },
          { value: 'Gouda' },
          { value: 'Swiss' },
          { value: 'Feta' },
        ]}
        placeholder="Cheeses"
      />
      <SelectMulti
        defaultValues={['Gouda', 'Feta']}
        chipIconLabel="remove this chip"
        flex={1}
        options={[
          { value: 'Cheddar' },
          { value: 'Gouda' },
          { value: 'Swiss' },
          { value: 'Feta' },
        ]}
      />
      <SelectMulti
        clearIconLabel="remove all chips"
        defaultValues={['Cheddar', 'Swiss']}
        chipIconLabel="remove this chip"
        flex={1}
        options={[
          { value: 'Cheddar' },
          { value: 'Gouda' },
          { value: 'Swiss' },
          { value: 'Feta' },
        ]}
      />
    </Space>
  );
}
```

### removeOnBackspace

The `removeOnBackspace` prop inherits from [`InputChips`](/?path=/docs/docs-input-chips--docs#removeonbackspace).
