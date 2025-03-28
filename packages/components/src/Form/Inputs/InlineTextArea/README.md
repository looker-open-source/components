# InlineTextArea

Input styled to have underline follow the input and with word wrapping.

```tsx
function Basic() {
  return (
    <SpaceVertical>
      <InlineTextArea placeholder="Type here and keep typing to see multiple lines effect of this component it will wrap to a next line..." />
      <InlineTextArea value="Type here and keep typing to see multiple lines effect of this component it will wrap to a next line..." />
    </SpaceVertical>
  );
}
```

## underlineOnlyOnHover

You can override the default underline styling, causing it to render only on hover by setting the `underlineOnlyOnHover` prop.

```tsx
function Underline() {
  return (
    <InlineTextArea
      underlineOnlyOnHover
      value="Type here and keep typing to see multiple lines effect of this component it will wrap to a next line..."
    />
  );
}
```

## Disabled

```tsx
function Disabled() {
  return (
    <InlineTextArea
      disabled
      value="This text can't be edited because the component is disabled..."
    />
  );
}
```

## ReadOnly

```tsx
function Disabled() {
  return <InlineTextArea readOnly value="READ ONLY..." />;
}
```
