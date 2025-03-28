# FieldToggleSwitch

The `<FieldToggleSwitch />` component is composed of a `<ToggleSwitch />` component and a `<Label />` component. By default, the label will render to the right of the toggle switch, however this is adjustable with the inline property.

```tsx
function Basic(props: FieldToggleSwitchProps) {
  const {
    label = 'Toggle Switch',
    name = 'thumbsUp',
    id = 'id',
    ...restProps
  } = props;

  return <FieldToggleSwitch id={id} label={label} name={name} {...restProps} />;
}
```

## Controlled

```tsx
function Controlled(props: FieldToggleSwitchProps) {
  const {
    on: _on,
    onChange: _onChange,
    label = 'Development Mode',
    ...restProps
  } = props;

  const [on, setOn] = useState(false);
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setOn(e.target.checked);
  };
  return (
    <FieldToggleSwitch
      label={label}
      onChange={onChange}
      on={on}
      {...restProps}
    />
  );
}
```

## Checked

```tsx
function Checked(props: FieldToggleSwitchProps) {
  const {
    label = 'Toggle Switch',
    name = 'thumbsUp',
    id = 'id',
    on = true,
    ...restProps
  } = props;

  return (
    <FieldToggleSwitch
      id={id}
      label={label}
      name={name}
      on={on}
      {...restProps}
    />
  );
}
```

## Detail & Description

```tsx
function DetailDescription(props: FieldToggleSwitchProps) {
  const {
    label = 'Toggle Switch',
    name = 'thumbsUp',
    id = 'id',
    description = 'describe something here.',
    detail = '4/20',
    ...restProps
  } = props;

  return (
    <FieldToggleSwitch
      id={id}
      label={label}
      name={name}
      detail={detail}
      description={description}
      {...restProps}
    />
  );
}
```

```tsx
function RichDetailDescription(props: FieldToggleSwitchProps) {
  const {
    label = 'Toggle Switch',
    name = 'thumbsUp',
    id = 'id',
    description = (
      <>
        describe something here. <a href="somewhere">Link</a>
      </>
    ),
    detail = <IconButton icon={<MaterialIcons.Delete />} label="Hello world" />,
    ...restProps
  } = props;

  return (
    <FieldToggleSwitch
      id={id}
      label={label}
      name={name}
      detail={detail}
      description={description}
      {...restProps}
    />
  );
}
```

## Disabled

```tsx
function Checked(props: FieldToggleSwitchProps) {
  const {
    label = 'Toggle Switch',
    name = 'thumbsUp',
    id = 'id',
    disabled = true,
    ...restProps
  } = props;

  return (
    <FieldToggleSwitch
      id={id}
      label={label}
      name={name}
      disabled={disabled}
      {...restProps}
    />
  );
}
```

```tsx
function Checked(props: FieldToggleSwitchProps) {
  const {
    label = 'Toggle Switch',
    name = 'thumbsUp',
    id = 'id',
    disabled = true,
    on = true,
    ...restProps
  } = props;

  return (
    <FieldToggleSwitch
      id={id}
      label={label}
      name={name}
      disabled={disabled}
      on={on}
      {...restProps}
    />
  );
}
```

## Read Only

```tsx
function ReadOnly(props: FieldToggleSwitchProps) {
  const {
    label = 'Toggle Switch',
    name = 'thumbsUp',
    id = 'id',
    readOnly = true,
    ...restProps
  } = props;

  return (
    <FieldToggleSwitch
      id={id}
      label={label}
      name={name}
      readOnly={readOnly}
      {...restProps}
    />
  );
}
```

## ValidationMessage

```tsx
function ValidationMessage(props: FieldToggleSwitchProps) {
  const {
    label = 'Toggle Switch',
    name = 'thumbsUp',
    id = 'id',
    validationMessage = { message: 'This is an error', type: 'error' },
    ...restProps
  } = props;

  return (
    <FieldToggleSwitch
      id={id}
      label={label}
      name={name}
      validationMessage={validationMessage}
      {...restProps}
    />
  );
}
```
