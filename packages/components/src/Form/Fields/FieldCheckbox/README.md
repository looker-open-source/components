# FieldCheckbox

The `<FieldCheckbox />` component is composed of a `<Checkbox />` component and a `<Label />` component. Using `<FieldCheckbox />` allows for rendering validation messages.

```tsx
function Basic(props: FieldCheckboxProps) {
  return (
    <FieldCheckbox id="id" label="Example Field" name="thumbsUp" {...props} />
  );
}
```

### FieldCheckbox Validation

The `<FieldCheckbox />` components accepts `validationMessage` as a property. This is an object with properties `type` and `message`.

See `ValidationMessage` [here](?path=/docs/docs-validationmessage--docs)

If you have multiple fields in need of validation, it is recommended that you wrap them in a `<Form />` component and pass to it a dictionary with key as field name and value as a `ValidationMessage`.

The `alignValidationMessage` can also be used to adjust where the validation message appears in relation to the input field. By default, it will render to the right, which is the best practice in most cases.

**_Note: In the current implementation, any `ValidationMessage` set in a `<FieldCheckbox />` component will be overridden by `ValidationMessages` set in the parent `<Form />` component. Because of this, it is highly recommended that you only ever directly set `ValidationMessage` if a `<FieldCheckbox />` is outside a `<Form />`._**

```tsx
function Validation() {
  return (
    <FieldCheckbox
      id="id"
      label="Validation error"
      name="thumbsUp"
      validationMessage={{ message: 'This is an error', type: 'error' }}
    />
  );
}
```
