# TextArea

`TextArea` component offers a multi-line text editor. If you are building a form `FieldTextArea` may be a better fit.

```tsx
function Basic(props: TextAreaProps) {
  return <TextArea {...props} placeholder="Placholder text" />;
}
```

## DefaultValue

```tsx
function DefaultValue() {
  return <TextArea defaultValue="A value" />;
}
```

## Allowing TextArea to be resized

`true` and `vertical` will allow the `TextArea` height to be resized. Alternatively, `none` and `false` will not allow resizing.

```tsx
function Resize() {
  return (
    <>
      <TextArea resize placeholder="resize vertically" />
      <TextArea resize="none" placeholder="no resize" />
      <TextArea resize={false} placeholder="no resize" />
      <TextArea resize="vertical" placeholder="only resize vertically" />
    </>
  );
}
```

## Disabled

```tsx
function Disabled() {
  return <TextArea disabled />;
}
```

## Error Message

```tsx
function Error() {
  return <TextArea validationType="error" />;
}
```
