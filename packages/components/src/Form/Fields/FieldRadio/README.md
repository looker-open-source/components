# FieldRadio

The `<FieldRadio />` component is composed of a `<Radio />` component and a `<Label />` component. Using `<FieldRadio />` allows for rendering validation messages. By default, the label will render to the right of the radio button, however this is adjustable with the `inline` property.

```tsx
function Basic() {
  return (
    <FieldRadio id="fieldRadioId" label="Field Radio Example" name="thumbsUp" />
  );
}
```
