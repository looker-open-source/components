# Fieldset

The `<Fieldset />` component is used to wrap Field components into groups.

## Legend

The `legend` property allows for a heading which is by default aligned above and to the left.

```tsx
function Basic() {
  return (
    <Fieldset legend="This is the Legend">
      <FieldText label="First Label" />
      <FieldText label="Second Label" />
      <FieldText label="Third Label" />
    </Fieldset>
  );
}
```

## Inline

`Fieldset` can be displayed inline

```tsx
function Inline() {
  return (
    <Fieldset inline legend="This is the Legend">
      <FieldText label="First Label" />
      <FieldText label="Second Label" />
      <FieldText
        label="Third Label"
        validationMessage={{ message: 'This is an error', type: 'error' }}
      />
    </Fieldset>
  );
}
```

Likewise, `Field` can be individually displayed as inline inside `Fieldset`

```tsx
function InlineField() {
  return (
    <Fieldset legend="This is the Legend">
      <FieldText inline label="First Label" />
      <FieldText inline label="Second Label" />
    </Fieldset>
  );
}
```

## hideLabel and fieldsHideLabel

`fieldsHideLabel` visually hides all child `Label`s inside a `Fieldset`, while preserving them in the DOM to improve accessibility.

Additionally, each individual `Field` accepts a `hideLabel` prop to hide that single label, or override the containing `Fieldset` label settings.

```tsx
function HideLabel() {
  return (
    <>
      <Fieldset fieldsHideLabel legend="Group 1">
        <FieldText label="First Label" />
        <FieldText label="Second Label" />
        Override the `fieldsHideLabel` prop in the parent:
        <FieldText label="Third Label" hideLabel={false} />
      </Fieldset>
      <Fieldset legend="Group 2">
        <FieldText label="First Label" hideLabel />
        <FieldText label="Second Label" />
        <FieldText label="Third Label" />
      </Fieldset>
    </>
  );
}
```

## Accordion

`Fieldset` offers an accordion mode via the `accordion` prop.

In accordion mode, the `legend` acts as a disclosure and clicking on it will show (or hide) the `Fieldset`'s `children`.

```tsx
function Accordion() {
  return (
    <Fieldset legend="This is the Legend" accordion>
      <FieldCheckbox name="box1" label="you can click here" />
      <FieldCheckbox name="box2" label="here too" />
      <FieldCheckbox name="box3" label="also here" />
    </Fieldset>
  );
}
```

**Note:** Using accordion mode without passing a value to `legend` will throw a console warning and will result in a regular `Fieldset`.

### Controlling a Fieldset Accordion

All `Accordion` props pertaining to open state control can be used on `Fieldset`. Simply pass said props to `Fieldset` while the `accordion` prop is true.

Viable `Accordion` props include:

- defaultOpen
- isOpen
- toggleOpen
- onOpen
- onClose

For more details on the props listed above, visit the [Accordion documentation](../content/accordion).

```tsx
function AccordionControlled() {
  return (
    <Fieldset
      legend="This is the Legend"
      accordion
      defaultOpen
      onOpen={() => alert('Opening the pod bay doors')}
      onClose={() => alert('Closing the pod bay doors')}
    >
      <FieldCheckbox name="box1" label="you can click here" />
      <FieldCheckbox name="box2" label="here too" />
      <FieldCheckbox name="box3" label="also here" />
    </Fieldset>
  );
}
```
