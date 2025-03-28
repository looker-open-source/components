# CheckboxGroup

Groups of checkbox can be displayed with `CheckboxGroup`.

## defaultValue

Using `defaultValue` will render a checked checkbox. This is the preferred prop to use if you'd prefer CheckboxGroup to maintain it's own state internally.

```tsx
const mockOptions = [
  {
    label: 'Cheddar',
    value: 'cheddar',
  },
  {
    label: 'Gouda',
    value: 'gouda',
  },
];

function Basic(props: CheckboxGroupProps) {
  const {
    options = mockOptions,
    defaultValue = ['cheddar'],
    ...restProps
  } = props;

  return (
    <CheckboxGroup
      defaultValue={defaultValue}
      name="group1"
      options={options}
      {...restProps}
    />
  );
}
```

## Disabled

You can disable CheckboxGroup items in two ways:

- Disable everything by setting the prop `disabled={true}` on CheckboxGroup
- Disable individual items by setting `disabled: true` on the option object

### Disabled Prop

```tsx
const mockOptions = [
  {
    label: 'Cheddar',
    value: 'cheddar',
  },
  {
    label: 'Gouda',
    value: 'gouda',
  },
];

function DisabledGroup(props: CheckboxGroupProps) {
  const {
    options = mockOptions,
    defaultValue = ['cheddar'],
    disabled = true,
    ...restProps
  } = props;

  return (
    <CheckboxGroup
      defaultValue={defaultValue}
      disabled={disabled}
      name="group1"
      options={options}
      {...restProps}
    />
  );
}
```

### Disabled Option

```tsx
const mockOptions = [
  {
    disabled: true,
    label: 'Brie',
    value: 'brie',
  },
  {
    label: 'Cheddar',
    value: 'cheddar',
  },
  {
    disabled: true,
    label: 'Gouda',
    value: 'gouda',
  },
  {
    label: 'Mozzarella',
    value: 'mozzarella',
  },
];

function DisabledItem(props: CheckboxGroupProps) {
  const {
    options = mockOptions,
    defaultValue = ['cheddar'],
    ...restProps
  } = props;

  return (
    <CheckboxGroup
      defaultValue={defaultValue}
      name="group1"
      options={options}
      {...restProps}
    />
  );
}
```

## Inline

```tsx
const mockOptions = [
  {
    label: 'Cheddar',
    value: 'cheddar',
  },
  {
    label: 'Gouda',
    value: 'gouda',
  },
];

function Inline(props: CheckboxGroupProps) {
  const {
    inline = true,
    options = mockOptions,
    defaultValue = ['cheddar'],
    ...restProps
  } = props;

  return (
    <CheckboxGroup
      defaultValue={defaultValue}
      inline={inline}
      name="group1"
      options={options}
      {...restProps}
    />
  );
}
```

## Controlled component

Control externally via `value` and `onChange` props.

```tsx
const mockOptions = [
  {
    label: 'Cheddar',
    value: 'cheddar',
  },
  {
    label: 'Gouda',
    value: 'gouda',
  },
];

function Controlled(props: CheckboxGroupProps) {
  const {
    value: valueProp = ['cheddar'],
    options = mockOptions,
    ...restProps
  } = props;

  const [value, setValue] = useState(valueProp);

  return (
    <Space align="start">
      <CheckboxGroup
        name="cheeses"
        value={value}
        onChange={setValue}
        options={options}
        {...restProps}
      />
      <div>
        <Heading>Current Selection:</Heading>
        <Paragraph>{value.join(', ')}</Paragraph>
      </div>
    </Space>
  );
}
```
