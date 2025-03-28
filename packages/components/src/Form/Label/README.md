# Label

```tsx
function Basic(props: LabelProps) {
  const { children = 'Label Text', ...restProps } = props;
  return <Label {...restProps}>{children}</Label>;
}
```

## Typography Props

Label supports standard Typography customizations, such as `color`, `fontSize`, and `fontWeight`.

```tsx
function Typography(props: LabelProps) {
  const {
    children = 'Label Text',
    color = 'key',
    fontSize = 'xlarge',
    fontWeight = 'normal',
    ...restProps
  } = props;

  return (
    <Label
      color={color}
      fontSize={fontSize}
      fontWeight={fontWeight}
      {...restProps}
    >
      {children}
    </Label>
  );
}
```
