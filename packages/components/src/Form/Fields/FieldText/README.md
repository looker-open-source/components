# FieldText

The `<FieldText />` component is composed of an `<InputText />` component and a `<Label />` component. Using `<FieldText />` allows for rendering validation messages. By default, the label will render directly above the input field, which is the recommended convention, however this is adjustable with the `inline` property.

```tsx
function Basic(props: FieldTextProps) {
  const { name = 'firstName', label = 'First Name', ...restProps } = props;
  return <FieldText name={name} label={label} {...restProps} />;
}
```

## Inline

```tsx
function Inline(props: FieldTextProps) {
  const {
    inline = true,
    name = 'firstName',
    label = 'First Name',
    detail = 'Your preferred salutation',
    ...restProps
  } = props;

  return (
    <FieldText
      name={name}
      label={label}
      inline={inline}
      detail={detail}
      {...restProps}
    />
  );
}
```

## Detail

```tsx
function Detail(props: FieldTextProps) {
  const {
    name = 'firstName',
    label = 'First Name',
    detail = 'Your preferred salutation',
    ...restProps
  } = props;

  return <FieldText name={name} label={label} detail={detail} {...restProps} />;
}
```

## Description

```tsx
function Description(props: FieldTextProps) {
  const {
    name = 'firstName',
    label = 'First Name',
    description = 'Some important information about this field',
    ...restProps
  } = props;

  return (
    <FieldText
      name={name}
      label={label}
      description={description}
      {...restProps}
    />
  );
}
```

## Disabled

```tsx
function Disabled(props: FieldTextProps) {
  const {
    disabled = true,
    name = 'firstName',
    label = 'First Name',
    description = 'Some important information about this field',
    defaultValue = 'My name',
    ...restProps
  } = props;

  return (
    <FieldText
      disabled={disabled}
      defaultValue={defaultValue}
      name={name}
      label={label}
      description={description}
      {...restProps}
    />
  );
}
```

## Placeholder

```tsx
function Detail(props: FieldTextProps) {
  const {
    name = 'firstName',
    label = 'First Name',
    placeholder = 'Placeholder text here',
    ...restProps
  } = props;

  return (
    <FieldText
      name={name}
      label={label}
      placeholder={placeholder}
      {...restProps}
    />
  );
}
```

## Before & After Text

```tsx
function Before(props: FieldTextProps) {
  const {
    name = 'firstName',
    label = 'First Name',
    before = '$',
    ...restProps
  } = props;

  return <FieldText name={name} label={label} before={before} {...restProps} />;
}
```

```tsx
function After(props: FieldTextProps) {
  const {
    name = 'firstName',
    label = 'First Name',
    after = '%',
    ...restProps
  } = props;

  return <FieldText name={name} label={label} after={after} {...restProps} />;
}
```

## Before & After Icons

```tsx
function BeforeIcon(props: FieldTextProps) {
  const {
    name = 'firstName',
    label = 'First Name',
    iconBefore = <MaterialIcons.Settings />,
    ...restProps
  } = props;

  return (
    <FieldText
      name={name}
      label={label}
      iconBefore={iconBefore}
      {...restProps}
    />
  );
}
```

```tsx
function AfterIcon(props: FieldTextProps) {
  const {
    name = 'firstName',
    label = 'First Name',
    iconAfter = <MaterialIcons.Settings />,
    ...restProps
  } = props;

  return (
    <FieldText name={name} label={label} iconAfter={iconAfter} {...restProps} />
  );
}
```

## AutoResize

```tsx
function AutoResize(props: FieldTextProps) {
  const {
    autoResize = true,
    name = 'firstName',
    label = 'First Name',
    placeholder = 'Start typing and watch me scale to fit content',
    inline: _inline,
    ...restProps
  } = props;

  return (
    <Space>
      <FieldText
        autoResize={autoResize}
        name={name}
        label={label}
        placeholder={placeholder}
        {...restProps}
      />
      <FieldText
        autoResize={autoResize}
        name={name}
        label={label}
        placeholder={placeholder}
        inline={true}
        {...restProps}
      />
    </Space>
  );
}
```

## Required

```tsx
function Required(props: FieldTextProps) {
  const {
    required = true,
    name = 'firstName',
    label = 'First Name',
    ...restProps
  } = props;

  return (
    <FieldText name={name} label={label} required={required} {...restProps} />
  );
}
```

## FieldText Validation

The `<FieldText />` component accepts `validationMessage` as a property. This is an object with properties `type` and `message`.

See `ValidationMessage` [here](https://github.com/looker-open-source/components/blob/main/packages/components/src/Form/ValidationMessage/ValidationMessage.tsx)

If you have multiple fields in need of validation, it is recommended that you wrap them in a `<Form />` component and pass to it a dictionary with key as field name and value as a `ValidationMessage`.

**_Note: In the current implementation, any `ValidationMessage` set in a `<FieldText />` component will be overridden by `ValidationMessages` set in the parent `<Form />` component. Because of this, it is highly recommended that you only ever directly set `ValidationMessage` if a `<FieldText />` is outside a `<Form />`._**

```tsx
function ValidationMessage(props: FieldTextProps) {
  const {
    required = true,
    name = 'firstName',
    label = 'First Name',
    validationMessage = { message: 'This is an error', type: 'error' },
    ...restProps
  } = props;

  return (
    <FieldText
      name={name}
      label={label}
      required={required}
      validationMessage={validationMessage}
      {...restProps}
    />
  );
}
```

```tsx
function BeforeAfterValidation() {
  const { value, toggle } = useToggle(true);
  const validation = value
    ? { validationMessage: { message: 'Oops!', type: 'error' as const } }
    : {};
  return (
    <SpaceVertical align="start">
      <Button onClick={toggle}>Toggle error state</Button>
      <Space>
        <FieldText
          label="iconBefore"
          iconBefore={<MaterialIcons.Favorite />}
          {...validation}
        />
        <FieldText
          label="iconAfter"
          iconAfter={<MaterialIcons.AccountCircle />}
          {...validation}
        />
        <FieldText label="before string" before="$" {...validation} />
        <FieldText label="after string" after="%" {...validation} />
        <FieldText
          label="before &amp; after"
          before={
            <Tooltip content="Some very important info">
              <Icon
                icon={<MaterialIcons.AddAlert />}
                size="small"
                style={{ cursor: 'default' }}
              />
            </Tooltip>
          }
          after={
            <Text fontSize="small" color={value ? 'critical' : 'info'}>
              Helper text
            </Text>
          }
          {...validation}
        />
      </Space>
    </SpaceVertical>
  );
}
```

## Floating Label

As an alterative input UI, you can set `externalLabel: false` in the theme context to toggle to the floating label style.

```tsx
function FloatingLabel(props: FieldTextProps) {
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
      <FieldText
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

```tsx
function FloatingLabelDefaultValue(props: FieldTextProps) {
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
      <FieldText
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

```tsx
function FloatingLabelDefaultValue(props: FieldTextProps) {
  const {
    name = 'firstName',
    label = 'First Name',
    description = 'Some important information about this field',
    detail = '0/50',
    defaultValue = 'My Name',
    iconBefore = <MaterialIcons.VerifiedUser />,
    validationMessage = { message: 'Error Message', type: 'error' },
    ...restProps
  } = props;
  return (
    <ExtendComponentsThemeProvider
      themeCustomizations={{ defaults: { externalLabel: false } }}
    >
      <FieldText
        detail={detail}
        description={description}
        name={name}
        label={label}
        defaultValue={defaultValue}
        iconBefore={iconBefore}
        validationMessage={validationMessage}
        {...restProps}
      />
    </ExtendComponentsThemeProvider>
  );
}
```
