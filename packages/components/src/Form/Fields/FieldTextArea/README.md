# FieldTextArea

The `<FieldTextArea />` component is composed of `<TextArea />` and `<Label />` components. Using `<FieldTextArea />` allows for rendering validation messages.

```tsx
function Basic(props: FieldTextAreaProps) {
  const { name = 'firstName', label = 'First Name', ...restProps } = props;
  return <FieldTextArea name={name} label={label} {...restProps} />;
}
```

## Controlled

```tsx
function Controlled(props: FieldTextAreaProps) {
  const {
    name: _name,
    label: _label,
    value: valueProp = 'Initial Value',
    ...restProps
  } = props;
  const [value, setValue] = useState(valueProp);
  const handleReset = () => setValue(valueProp);
  const handleClear = () => setValue('');
  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
  };
  return (
    <SpaceVertical>
      <Space>
        <Button onClick={handleReset}>Reset</Button>
        <Button onClick={handleClear}>Clear</Button>
      </Space>
      <FieldTextArea
        width="100%"
        label="Controlled"
        value={value}
        onChange={handleChange}
        {...restProps}
      />
    </SpaceVertical>
  );
}
```

## Default Value

```tsx
function DefaultValue(props: FieldTextAreaProps) {
  const {
    name = 'firstName',
    label = 'First Name',
    defaultValue = 'Default value',
    ...restProps
  } = props;
  return (
    <FieldTextArea
      name={name}
      label={label}
      defaultValue={defaultValue}
      {...restProps}
    />
  );
}
```

## Detail & Description

```tsx
function DetailDescription(props: FieldTextAreaProps) {
  const {
    name = 'firstName',
    label = 'First Name',
    description = 'This is a description',
    detail = '0/50',
    ...restProps
  } = props;

  return (
    <FieldTextArea
      name={name}
      label={label}
      description={description}
      detail={detail}
      {...restProps}
    />
  );
}
```

## Disabled

```tsx
function DisabledStory(props: FieldTextAreaProps) {
  const {
    name = 'firstName',
    label = 'First Name',
    defaultValue = 'Default value',
    disabled = true,
    ...restProps
  } = props;

  return (
    <FieldTextArea
      name={name}
      label={label}
      defaultValue={defaultValue}
      disabled={disabled}
      {...restProps}
    />
  );
}
```

## Floating Label

```tsx
function FloatingLabel(props: FieldTextAreaProps) {
  const {
    name = 'firstName',
    label = 'First Name',
    description = 'Some important information about this field',
    detail = '0/50',
    ...restProps
  } = props;
  return (
    <ExtendComponentsThemeProvider
      themeCustomizations={{ defaults: { externalLabel: false } }}
    >
      <FieldTextArea
        detail={detail}
        description={description}
        name={name}
        label={label}
        {...restProps}
      />
    </ExtendComponentsThemeProvider>
  );
}
```

### Floating Label with Default Value

```tsx
function FloatingLabelDefaultValue(props: FieldTextAreaProps) {
  const {
    name = 'firstName',
    label = 'First Name',
    description = 'Some important information about this field',
    detail = '0/50',
    defaultValue = 'My Name',
    ...restProps
  } = props;
  return (
    <ExtendComponentsThemeProvider
      themeCustomizations={{ defaults: { externalLabel: false } }}
    >
      <FieldTextArea
        detail={detail}
        description={description}
        name={name}
        label={label}
        defaultValue={defaultValue}
        {...restProps}
      />
    </ExtendComponentsThemeProvider>
  );
}
```

## Inline

```tsx
function Inline(props: FieldTextAreaProps) {
  const {
    inline = true,
    name = 'firstName',
    label = 'First Name',
    detail = 'Your preferred salutation',
    ...restProps
  } = props;

  return (
    <FieldTextArea
      name={name}
      label={label}
      inline={inline}
      detail={detail}
      {...restProps}
    />
  );
}
```

## Disabling Textare Resizing

```tsx
function NoResize(props: FieldTextAreaProps) {
  const {
    resize = false,
    name = 'firstName',
    label = 'First Name',
    ...restProps
  } = props;

  return (
    <FieldTextArea name={name} label={label} resize={resize} {...restProps} />
  );
}
```

## Required

```tsx
function Required(props: FieldTextAreaProps) {
  const {
    required = true,
    name = 'firstName',
    label = 'First Name',
    ...restProps
  } = props;

  return (
    <FieldTextArea
      name={name}
      label={label}
      required={required}
      {...restProps}
    />
  );
}
```

## Validation Message

```tsx
function Validation(props: FieldTextAreaProps) {
  const {
    name = 'firstName',
    label = 'First Name',
    validationMessage = { message: 'Some extra information', type: 'error' },
    ...restProps
  } = props;

  return (
    <FieldTextArea
      name={name}
      label={label}
      validationMessage={validationMessage}
      {...restProps}
    />
  );
}
```
