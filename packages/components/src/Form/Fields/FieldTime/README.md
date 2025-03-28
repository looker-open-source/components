# FieldTime

The `<FieldTime />` component is composed of an `<InputTime />` component and a `<Label />` component. It has attributes to help display additional information. `detail`, `description` and `validation messages` are available to the component.

```tsx
function Basic(props: FieldTimeProps) {
  const {
    defaultValue = '14:34',
    description = 'this is the description',
    detail = 'detail',
    label = 'Label',
    ...restProps
  } = props;

  return (
    <FieldTime
      label={label}
      defaultValue={defaultValue}
      description={description}
      detail={detail}
      {...restProps}
    />
  );
}
```

## Controlled

```tsx
function Controlled() {
  const [controlledTime, setControlledTime] = useState<string | undefined>(
    '12:00'
  );
  return (
    <SpaceVertical>
      <Paragraph>Selected: {controlledTime}</Paragraph>

      <Space>
        <Button
          onClick={() => {
            setControlledTime('14:00');
          }}
        >
          2:00pm
        </Button>
        <Button
          onClick={() => {
            setControlledTime('15:15');
          }}
        >
          3:15pm
        </Button>
        <Button
          onClick={() => {
            setControlledTime('16:32');
          }}
        >
          4:32pm
        </Button>
      </Space>

      <FieldTime
        label="Controlled"
        value={controlledTime}
        onChange={setControlledTime}
      />
    </SpaceVertical>
  );
}
```

## Floating Label

```tsx
function FloatingLabel(props: FieldTimeProps) {
  const {
    description = 'this is the description',
    detail = 'detail',
    label = 'Label',
    ...restProps
  } = props;
  return (
    <ExtendComponentsThemeProvider
      themeCustomizations={{ defaults: { externalLabel: false } }}
    >
      <FieldTime
        detail={detail}
        description={description}
        label={label}
        {...restProps}
      />
    </ExtendComponentsThemeProvider>
  );
}
```

## Validation Message

```tsx
function ValidationMessage(props: FieldTimeProps) {
  const {
    label = 'Label',
    validationMessage = { message: 'validation Message', type: 'error' },
    ...restProps
  } = props;

  return (
    <FieldTime
      label={label}
      validationMessage={validationMessage}
      {...restProps}
    />
  );
}
```

## Disabled

```tsx
function Disabled(props: FieldTimeProps) {
  const {
    disabled = true,
    defaultValue = '14:34',
    description = 'this is the description',
    detail = 'detail',
    label = 'Label',
    ...restProps
  } = props;

  return (
    <FieldTime
      label={label}
      defaultValue={defaultValue}
      description={description}
      detail={detail}
      disabled={disabled}
      {...restProps}
    />
  );
}
```

## Required

```tsx
function Required(props: FieldTimeProps) {
  const {
    required = true,
    defaultValue = '14:34',
    description = 'this is the description',
    detail = 'detail',
    label = 'Label',
    ...restProps
  } = props;

  return (
    <FieldTime
      label={label}
      defaultValue={defaultValue}
      description={description}
      detail={detail}
      required={required}
      {...restProps}
    />
  );
}
```

## 12- or 24-Hour Time

Set the `format` prop to either `12hr` or `24hr` to toggle between the two supported time formats.

```tsx
function TimeFormat(props: FieldTimeProps) {
  const {
    defaultValue = '14:34',
    description = 'set "format" prop to either `12h` or `24h`',
    detail = 'detail',
    label = 'Label',
    format = '24h',
    ...restProps
  } = props;

  return (
    <FieldTime
      format={format}
      label={label}
      defaultValue={defaultValue}
      description={description}
      detail={detail}
      {...restProps}
    />
  );
}
```
