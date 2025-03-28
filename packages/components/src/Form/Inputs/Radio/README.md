# Radio

The `Radio` component renders a single radio button on the page, with no accompanying label.
If you are building a form, you probably want to use [`FieldRadioGroup`](/?path=/docs/docs-form-fields-fieldradiogroup--docs) instead as it provides label and group support.

## Checked Property

The `Radio` component accepts the `checked` prop, which sets the radio button as selected.

```tsx
function Checked() {
  return (
    <Space>
      <Radio />
      <Radio checked />
    </Space>
  );
}
```

## Disabled Property

Use the disable property to gray out the radio button, making it un-clickable.

```tsx
function Disabled() {
  return (
    <Space>
      <Radio disabled />
      <Radio disabled checked />
    </Space>
  );
}
```
