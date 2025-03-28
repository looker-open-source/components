# ChipButton

The `ChipButton` component is a compact button element.

## Basic

It has some basic functionality

```tsx
export default function Basic() {
  return <ChipButton>Basic</ChipButton>;
}
```

## Deletable

It can have `onDelete` available

```tsx
export default function Deletable() {
  return <ChipButton onDelete={() => alert('Deletable')}>Deletable</ChipButton>;
}
```

## Disabled

It can be disabled.

```tsx
export default function Disabled() {
  return <ChipButton disabled={true}>Disabled</ChipButton>;
}
```

## MaxWidth

The width of the `ChipButton` will accomodate its contents, by default. Setting a `maxWidth` will cause any overflow text to be truncated with ellipses.

```tsx
export default function MaxWidth() {
  return (
    <Space gap="u1">
      <ChipButton maxWidth={150}>short</ChipButton>
      <ChipButton maxWidth={150}>
        Very long text inside the chip will be truncated
      </ChipButton>
    </Space>
  );
}
```

## Prefix

Optional string parameter that will be added before a `ChipButton`'s contents and separated by a colon.

```tsx
export default function Prefix() {
  return <ChipButton prefix="role">admin</ChipButton>;
}
```
