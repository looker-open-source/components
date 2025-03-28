# FieldTimeSelect

The `<FieldTimeSelect />` component is composed of an `<InputTimeSelect />` component and a `<Label />` component. It has attributes to help display additional information. `detail`, `description` and `validation messages` are available to the component.

```tsx
function Basic(props: FieldTimeSelectProps) {
  const {
    defaultValue = '14:30',
    interval = 10,
    label = 'Select Time',
    ...restProps
  } = props;

  return (
    <FieldTimeSelect
      label={label}
      defaultValue={defaultValue}
      interval={interval}
      {...restProps}
    />
  );
}
```

## Controlled

```tsx
function Controlled() {
  const [controlledTime, setControlledTime] = useState<string | undefined>(
    '09:00'
  );
  const handleClick = (value: string) => setControlledTime(value);

  const options = [
    { label: '11:05a', value: '11:05' },
    { label: '2:00pm', value: '14:00' },
    { label: '3:15pm', value: '15:15' },
    { label: '4:30pm', value: '16:30' },
  ];

  return (
    <>
      <ButtonToggle
        value={controlledTime}
        onChange={handleClick}
        options={options}
      />

      <Fieldset inline>
        <FieldTimeSelect
          label="Standard Time"
          value={controlledTime}
          onChange={setControlledTime}
        />
        <FieldTimeSelect
          label="Military Time"
          value={controlledTime}
          onChange={setControlledTime}
          format="24h"
        />
      </Fieldset>
    </>
  );
}
```

## Disabled

```tsx
function Disabled(props: FieldTimeSelectProps) {
  const {
    disabled = true,
    defaultValue = '14:30',
    interval = 10,
    label = 'Select Time',
    ...restProps
  } = props;

  return (
    <FieldTimeSelect
      disabled={disabled}
      label={label}
      defaultValue={defaultValue}
      interval={interval}
      {...restProps}
    />
  );
}
```

## Required

```tsx
function Required(props: FieldTimeSelectProps) {
  const {
    required = true,
    defaultValue = '14:30',
    interval = 10,
    label = 'Select Time',
    ...restProps
  } = props;

  return (
    <FieldTimeSelect
      interval={interval}
      required={required}
      label={label}
      defaultValue={defaultValue}
      {...restProps}
    />
  );
}
```

## Validation Message

```tsx
function ValidationMessage(props: FieldTimeSelectProps) {
  const {
    description = 'this is the description is a very long one',
    detail = 'detail',
    interval = 10,
    label = 'Select Time',
    required = true,
    validationMessage = { message: 'validation Message', type: 'error' },
    ...restProps
  } = props;

  return (
    <FieldTimeSelect
      description={description}
      detail={detail}
      interval={interval}
      label={label}
      required={required}
      validationMessage={validationMessage}
      {...restProps}
    />
  );
}
```

## Floating Label

```tsx
function FloatingLabel(props: FieldTimeSelectProps) {
  const {
    defaultValue = '14:30',
    interval = 10,
    label = 'Select Time',
    ...restProps
  } = props;
  return (
    <ExtendComponentsThemeProvider
      themeCustomizations={{ defaults: { externalLabel: false } }}
    >
      <FieldTimeSelect
        interval={interval}
        defaultValue={defaultValue}
        label={label}
        {...restProps}
      />
    </ExtendComponentsThemeProvider>
  );
}
```

```tsx
function ValidationMessageFloatingLabel(props: FieldTimeSelectProps) {
  const {
    description = 'this is the description is a very long one',
    detail = 'detail',
    interval = 10,
    label = 'Select Time',
    required = true,
    validationMessage = { message: 'validation Message', type: 'error' },
    ...restProps
  } = props;

  return (
    <ExtendComponentsThemeProvider
      themeCustomizations={{ defaults: { externalLabel: false } }}
    >
      <FieldTimeSelect
        description={description}
        detail={detail}
        interval={interval}
        label={label}
        required={required}
        validationMessage={validationMessage}
        {...restProps}
      />
    </ExtendComponentsThemeProvider>
  );
}
```
