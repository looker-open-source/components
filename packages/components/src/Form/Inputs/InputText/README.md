# InputText

The `<InputText />` component renders a single text input element on the page, with no accompanying label. It is generally used to construct higher-order components like the `<FieldText />`. If you are building a form, you probably want to use `<FieldText />` instead as it provides label and validation support.

```tsx
function Basic(props: InputTextProps) {
  return <InputText {...props} />;
}
```

## Before & After

Use `iconBefore` and `iconAfter` to render an icon before or after the input.

For more custom content, `before` and `after` accept a React node. A string is passed to `before` or `after` will have formatting applied, while JSX will be rendered as-is.
If both `iconBefore` and `before`, or `iconAfter` and `after` are passed, a warning will appear in the console and the `InputText` will not render.

```tsx
function BeforeAfter() {
  return (
    <SpaceVertical>
      <Space>
        <InputText iconBefore={<MaterialIcons.Settings />} />
        <InputText iconAfter={<MaterialIcons.Done />} />
      </Space>
      <Space>
        <InputText before="$" />
        <InputText
          after={
            <Tooltip placement="top" content="Try again">
              <Span color="critical" fontSize="xsmall">
                Oops!
              </Span>
            </Tooltip>
          }
        />
      </Space>
    </SpaceVertical>
  );
}
```

## autoResize

Use `autoResize` to allow the width of the component to adjust to the current value or placeholder.

```tsx
function AutoResize() {
  return <InputText autoResize placeholder="Start typing" />;
}
```

### Disabled

Use the disable property to make an input field un-editable.

```tsx
function Disabled() {
  return <InputText disabled value="A value" />;
}
```

### Placeholders

Placeholders are used to give a hint to the user of the expected value for the input. They should not be used as a complete replacement of labels.

```tsx
function Placeholder() {
  return <InputText placeholder="Placeholder" />;
}
```

### ReadOnly Property

As the name suggests, `readOnly` makes the text un-editable.

```tsx
<Editor code={storyReadOnly} />
```

## Accessibility

Use `FieldInputText` to ensure accessibility. If you must use `InputText` on its own,
always follow [best practices for accessible labeling](https://www.w3.org/WAI/tutorials/forms/labels/).
