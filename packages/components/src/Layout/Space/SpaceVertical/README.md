# SpaceVertical

`SpaceVertical` is designed to put space between its children. `SpaceVertical` operates on the vertical axis.

```tsx
function VerticalBasic(props: SpaceVerticalProps) {
  return (
    <SpaceVertical {...props}>
      <Button>Button A</Button>
      <Button>Button B</Button>
      <Button>Button C</Button>
    </SpaceVertical>
  );
}
```

## Space & SpaceVertical Support spacing properties

1. Margin (`m`, `mx`, `ml`, etc...)
2. Padding (`p`, `px`, `pl`, etc...)

# Alignment

`SpaceVertical` supports `align` which defaults to `stretch`.

```tsx
function VerticalProperties(props: SpaceVerticalProps) {
  return (
    <SpaceVertical {...props}>
      <Space>
        <Button>Button A</Button>
        <Button size="small">Button B</Button>
        <Button size="large">Button C</Button>
      </Space>
      <Space align="start">
        <Button>Button A</Button>
        <Button size="small">Button B</Button>
        <Button size="large">Button C</Button>
      </Space>
      <Space align="end">
        <Button>Button A</Button>
        <Button size="small">Button B</Button>
        <Button size="large">Button C</Button>
      </Space>
    </SpaceVertical>
  );
}
```

# Gap

Specify the width of the gap between items:

```tsx
function VerticalGap(props: SpaceVerticalProps) {
  const { gap = 'u8', ...rest } = props;
  return (
    <SpaceVertical {...rest} gap={gap}>
      <Button>Button A</Button>
      <Button>Button B</Button>
      <Button>Button C</Button>
    </SpaceVertical>
  );
}
```

## Reverse

Reverse the order of the items in the space.

```tsx
function VerticalReverse(props: SpaceVerticalProps) {
  const { reverse = true, ...rest } = props;
  return (
    <SpaceVertical {...rest} reverse={reverse}>
      <Button>Button A</Button>
      <Button>Button B</Button>
      <Button>Button C</Button>
    </SpaceVertical>
  );
}
```

## Stretch

```tsx
function VerticalStretch(props: SpaceVerticalProps) {
  const { align = 'stretch', ...rest } = props;
  return (
    <SpaceVertical {...rest} align={align}>
      <Button>Button A</Button>
      <Button>Button B</Button>
      <Button>Button C</Button>
    </SpaceVertical>
  );
}
```
