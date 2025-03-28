# FieldSelect

The `<FieldSelect />` component is composed of an `<Select />` component and a `<Label />` component. Using `<FieldSelect />` allows for rendering validation messages. By default, the label will render directly above the input field, which is the recommended convention, however this is adjustable with the `inline` property.

```tsx
Basic(props: FieldSelectProps) {
  return (
    <FieldSelect
      name="Cheeses"
      label="Cheeses"
      defaultValue="cheddar"
      options={[
        { label: 'Cheddar', value: 'cheddar' },
        { label: 'Gouda', value: 'gouda' },
        { label: 'Swiss', value: 'swiss' },
      ]}
      {...props}
    />
  );
}
```

### FieldSelect Validation

The `<FieldSelect />` component accepts `validationMessage` as a property. This is an object with properties `type` and `message`.

```tsx
function Validation() {
  return (
    <FieldSelect
      name="Cheeses"
      label="Cheeses"
      defaultValue="cheddar"
      options={[
        { label: 'Cheddar', value: 'cheddar' },
        { label: 'Gouda', value: 'gouda' },
        { label: 'Swiss', value: 'swiss' },
      ]}
      validationMessage={{ message: 'This is an error', type: 'error' }}
    />
  );
}
```

If you have multiple fields in need of validation, it is recommended that you wrap them in a `<Form />` component and pass to it a dictionary with key as field name and value as a `ValidationMessage`.

Note: In the current implementation, any `ValidationMessage` set in a `<FieldSelect />` component will be overridden by `ValidationMessages` set in the parent `<Form />` component. Because of this, it is highly recommended that you only ever directly set `ValidationMessage` if a `<FieldSelect />` is outside a `<Form />`.
