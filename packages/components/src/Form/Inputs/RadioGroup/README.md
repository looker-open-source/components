# RadioGroup

Groups of radio can be displayed with `RadioGroup`. `Disabled` can be used on each radio specifically or on the group.

## defaultValue

Using `defaultValue` will render a selected radio option. This is the preferred prop to use if you'd prefer RadioGroup to maintain it's own state internally.

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

function Basic(props: RadioGroupProps) {
  const {
    options = mockOptions,
    defaultValue = 'cheddar',
    ...restProps
  } = props;

  return (
    <RadioGroup
      defaultValue={defaultValue}
      name="group1"
      options={options}
      {...restProps}
    />
  );
}
```

## Disabled

You can disable RadioGroup items in two ways:

- Disable everything by setting the prop `disabled={true}` on RadioGroup
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

function DisabledGroup(props: RadioGroupProps) {
  const {
    options = mockOptions,
    defaultValue = 'cheddar',
    disabled = true,
    ...restProps
  } = props;

  return (
    <RadioGroup
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

function DisabledItem(props: RadioGroupProps) {
  const {
    options = mockOptions,
    defaultValue = 'cheddar',
    ...restProps
  } = props;

  return (
    <RadioGroup
      name="group1"
      options={options}
      defaultValue={defaultValue}
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

function Inline(props: RadioGroupProps) {
  const {
    inline = true,
    options = mockOptions,
    defaultValue = 'cheddar',
    ...restProps
  } = props;

  return (
    <RadioGroup
      defaultValue={defaultValue}
      inline={inline}
      name="group1"
      options={options}
      {...restProps}
    />
  );
}
```

## Controlled

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

function Controlled(props: RadioGroupProps) {
  const {
    value: valueProp = 'cheddar',
    options = mockOptions,
    ...restProps
  } = props;

  const [value, setValue] = useState(valueProp);

  return (
    <Space align="start">
      <RadioGroup
        name="cheeses"
        value={value}
        onChange={setValue}
        options={options}
        {...restProps}
      />
      <div>
        <Heading>Current Selection:</Heading>
        <Paragraph>{value}</Paragraph>
      </div>
    </Space>
  );
}
```
