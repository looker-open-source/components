# Space

`Space` is designed to put space between its children. `Space` operates on the horizontal axis.

```tsx
function Basic(props: SpaceHelperProps) {
  return (
    <Space {...props}>
      <Button>Button A</Button>
      <Button>Button B</Button>
      <Button>Button C</Button>
    </Space>
  );
}
```

## Space supports spacing properties

1. Margin (`m`, `mx`, `ml`, etc...)
2. Padding (`p`, `px`, `pl`, etc...)

# Alignment

`Space` supports `align` and defaults to `center`.

```tsx
function Properties(props: SpaceHelperProps) {
  return (
    <Space {...props}>
      <SpaceVertical>
        <Button>Button A</Button>
        <Button size="small">Button B</Button>
        <Button size="large">Button C</Button>
      </SpaceVertical>
      <SpaceVertical align="center">
        <Button>Button A</Button>
        <Button size="small">Button B</Button>
        <Button size="large">Button C</Button>
      </SpaceVertical>
      <SpaceVertical align="end">
        <Button>Button A</Button>
        <Button size="small">Button B</Button>
        <Button size="large">Button C</Button>
      </SpaceVertical>
    </Space>
  );
}
```

# Gap

Specify the width of the gap between items:

```tsx
function Gap(props: SpaceHelperProps) {
  const { gap = 'u8', ...rest } = props;
  return (
    <Space {...rest} gap={gap}>
      <Button>Button A</Button>
      <Button>Button B</Button>
      <Button>Button C</Button>
    </Space>
  );
}
```

## Between

The spacing between each pair of adjacent items is the same. The first item is flush with the main-start edge, and the last item is flush with the main-end edge. (citation: https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content)

```tsx
function Between(props: SpaceHelperProps) {
  const { between = true, ...rest } = props;
  return (
    <Space {...rest} between={between}>
      <Button>Button A</Button>
      <Button>Button B</Button>
      <Button>Button C</Button>
    </Space>
  );
}
```

## Around

The spacing between each pair of adjacent items is the same. The empty space before the first and after the last item equals half of the space between each pair of adjacent items. (citation: https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content)

```tsx
function Around(props: SpaceHelperProps) {
  const { around = true, ...rest } = props;
  return (
    <Space {...rest} around={around}>
      <Button>Button A</Button>
      <Button>Button B</Button>
      <Button>Button C</Button>
    </Space>
  );
}
```

## Evenly

The spacing between each pair of adjacent items, the main-start edge and the first item, and the main-end edge and the last item, are all exactly the same. (citation: https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content)

```tsx
function Evenly(props: SpaceHelperProps) {
  const { evenly = true, ...rest } = props;
  return (
    <Space {...rest} evenly={evenly}>
      <Button>Button A</Button>
      <Button>Button B</Button>
      <Button>Button C</Button>
    </Space>
  );
}
```

## Reverse

Reverse the order of the items in the space.

```tsx
function Reverse(props: SpaceHelperProps) {
  const { reverse = true, ...rest } = props;
  return (
    <Space {...rest} reverse={reverse}>
      <Button>Button A</Button>
      <Button>Button B</Button>
      <Button>Button C</Button>
    </Space>
  );
}
```
