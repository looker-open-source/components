# InputFilters

`<InputFilters />` component, displays a lits of filterable items that then have a second layer of filtering. Once the filter statement is set it can still be editable by clicking on the element itself.

```tsx
const mockFilters = [
  { field: 'role', options: ['admin', 'group-admin', 'user', 'pizza'] },
  {
    field: 'group',
    label: 'Group',
    options: ['Cheddar', 'Gouda', 'Swiss', 'Mozzarella'],
  },
  {
    field: 'name',
    label: 'Name',
    options: ['Name 1', 'Name 2', 'Name 3'],
  },
  { field: 'status', options: ['Failed', 'In-Progress', 'Success'] },
  {
    field: 'buildAt',
    label: 'Last Build Time',
    options: ['01-22-20', '02-13-20', '05-28-20'],
  },
];

function Basic(props: InputFiltersProps) {
  const {
    filters: filtersProp = mockFilters,
    onChange: _onChange,
    ...restProps
  } = props;

  const [controlledFilters, setControlledFilters] = useState(filtersProp);

  return (
    <InputFilters
      onChange={setControlledFilters}
      filters={controlledFilters}
      {...restProps}
    />
  );
}
```

## Hide Filter Icon

You can render the filter input box without the filter icon by setting `hideFilterIcon` to `true`.

```tsx
const mockFilters = [
  { field: 'role', options: ['admin', 'group-admin', 'user', 'pizza'] },
  {
    field: 'group',
    label: 'Group',
    options: ['Cheddar', 'Gouda', 'Swiss', 'Mozzarella'],
  },
  {
    field: 'name',
    label: 'Name',
    options: ['Name 1', 'Name 2', 'Name 3'],
  },
  { field: 'status', options: ['Failed', 'In-Progress', 'Success'] },
  {
    field: 'buildAt',
    label: 'Last Build Time',
    options: ['01-22-20', '02-13-20', '05-28-20'],
  },
];

function Basic(props: InputFiltersProps) {
  const {
    hideFilterIcon = true,
    filters: filtersProp = mockFilters,
    onChange: _onChange,
    ...restProps
  } = props;

  const [controlledFilters, setControlledFilters] = useState(filtersProp);

  return (
    <InputFilters
      hideFilterIcon={hideFilterIcon}
      onChange={setControlledFilters}
      filters={controlledFilters}
      {...restProps}
    />
  );
}
```

## Default Selected Filters

Define the `value` an a single filter item to have it render selected by default.

```tsx
const filterWithValue = {
  field: 'status',
  formatValue: (value: string) => value.toUpperCase(),
  options: ['Failed', 'Success'],
  value: 'Success',
};

function FilterSelected({
  filters: filtersProp = [filterWithValue],
  ...args
}: InputFiltersProps) {
  const [controlledFilters, setControlledFilters] = useState(filtersProp);

  return (
    <InputFilters
      {...args}
      filters={controlledFilters}
      onChange={setControlledFilters}
    />
  );
}
```

## Custom Filters

Filters are able to render custom components for inputting user generated content for the value. In the example below, try adding the filter labeled "important".

```tsx
const EditorComponent: InputFilterEditorRenderProp = ({
  closeEditor,
  onChange,
  value = '',
}) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };
  return (
    <InputText
      data-autofocus="true"
      value={value}
      onChange={handleChange}
      onBlur={closeEditor}
    />
  );
};

const customFilters: FieldFilter[] = [
  {
    editor: EditorComponent,
    field: 'important',
    label: 'Important',
  },
];

function CustomFilter({
  filters: filtersProp = customFilters,
  ...args
}: InputFiltersProps) {
  const [controlledFilters, setControlledFilters] = useState(filtersProp);

  return (
    <InputFilters
      {...args}
      filters={controlledFilters}
      onChange={setControlledFilters}
    />
  );
}
```
