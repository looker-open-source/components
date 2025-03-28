# FieldChips

The `<FieldChips />` component is composed of an `<InputChips />` component and a `<Label />` component. Using `<FieldChips />` allows for rendering validation messages, label, details and description. By default, the label will render directly above the input field, which is the recommended convention, however this is adjustable with the `inline` property.

```tsx
function Basic(props: FieldChipsProps) {
  const [values, setValues] = useState<string[]>(['apples']);

  return <FieldChips {...props} values={values} onChange={setValues} />;
}
```
