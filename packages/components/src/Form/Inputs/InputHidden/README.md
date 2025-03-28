# InputHidden

The `<InputHidden />` component renders a single hidden input element on the page. This is used for storing static values in forms, and meant to remain invisible to the user and screen readers.

```tsx
function Basic() {
  return <InputHidden value="some hidden value" />;
}
```

## Name and ID

A name and ID can be specified in the `<InputHidden />` component. Names are important if the input is used in the context of a form, in which case a name is required for the value of the input to be captured.

```tsx
function NameAndId() {
  return <InputHidden value="some hidden value" name="someName" id="someId" />;
}
```

## Accessibility

### Best Practices

- Use InputHidden to include static values (such as user ID) as part of form submission. These fields will not be rendered visually or read by screen readers.

### Focus Expectations

- Input hidden fields should not be focusable.
