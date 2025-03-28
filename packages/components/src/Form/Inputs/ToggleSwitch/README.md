# ToggleSwitch

The `<Checkbox />` component renders a single checkbox element on the page, with no accompanying label. It is generally used to construct higher-order components like the `<FieldCheckbox />`. If you are building a form, you probably want to use `<FieldCheckbox />` instead as it provides label support.

The `ToggleSwitch` component is essentially a decorated checkbox that is either toggled on or off. For accessibility reasons you should always provide a label with your toggle switch, you can use the `<FieldToggleSwitch>` component to quickly generate an accessible toggle switch with proper labeling. Its size can be changed using the `size` prop, which accepts px value as a number. Its default size is 20px.

```tsx
function Basic(props: ToggleSwitchProps) {
  const { value, toggle } = useToggle(false);
  return <ToggleSwitch onChange={toggle} on={value} {...props} />;
}
```

## Checked Property

The `<ToggleSwitch />` component can be rendered in two different states: "on" and "off"

```tsx
function Checked() {
  const { value, toggle } = useToggle(true);
  return <ToggleSwitch onChange={toggle} on={value} />;
}
```

## Disabled Property

Use the disable property to gray out the ToggleSwitch, making it unclickable.

```tsx
function Disabled() {
  const { value, toggle } = useToggle(false);
  return <ToggleSwitch onChange={toggle} on={value} disabled />;
}
```
