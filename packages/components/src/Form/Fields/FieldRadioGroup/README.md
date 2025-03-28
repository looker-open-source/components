# FieldRadioGroup

Groups of radios can be displayed with `FieldRadioGroup`

There are two "inline" variations:

- The `inline` prop will put the group label and all the inputs in one line (wrapping the inputs as necessary)
- The `inputsInline` prop will stack the group label on top but keep all the inputs inline

The `<FieldRadio />` component is composed of a `<Radio />` component
and a `<Label />` component. Using `<FieldRadio />` allows for rendering validation
messages. By default, the label will render to the right of the radio button, however
this is adjustable with the `inline` property.

```tsx
function Basic() {
  const options = [
    { label: 'Cheddar', value: 'cheddar' },
    { label: 'Gouda', value: 'gouda' },
    { disabled: true, label: 'Swiss', value: 'swiss' },
    { label: 'Roquefort', value: 'roquefort' },
    { label: 'Cheddar', value: 'cheddar-2' },
    { label: 'Gouda', value: 'gouda 2' },
    { disabled: true, label: 'Swiss', value: 'swiss-2' },
    { label: 'Roquefort', value: 'roquefort-2' },
    { label: 'Cheddar', value: 'cheddar-3' },
    { label: 'Gouda', value: 'gouda-3' },
    { disabled: true, label: 'Swiss', value: 'swiss-3' },
    { label: 'Roquefort', value: 'roquefort-3' },
  ];
  return (
    <FieldRadioGroup
      label="Cheeses"
      description="Pick all your cheeses"
      options={options}
    />
  );
}
```
