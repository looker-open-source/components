# ProgressCircular

The `ProgressCircular` helps express an unspecified wait time or displays the length of a process

## Showing a generic loading state

To show a generic loading state or process, use the default `ProgressCircular` behavior.

```tsx
function Basic() {
  return (
    <Space justify="center">
      <ProgressCircular />
    </Space>
  );
}
```

## Rendering defined async progress

If the process has known steps to completion, you can use the `progress` prop to indicate a more precise loading state. The `progress` prop accepts a number from `0` to `1`, where `0` is 0% complete and `1` is 100% complete.

```tsx
function DetermineProgress() {
  const options = [
    { label: '0%', value: '0' },
    { label: '25%', value: '0.25' },
    { label: '50%', value: '0.5' },
    { label: '75%', value: '0.75' },
    { label: '100%', value: '1' },
  ];

  const [progress, setProgress] = useState(options[2].value);

  return (
    <SpaceVertical>
      <ProgressCircular progress={parseFloat(progress)} />
      <Space>
        <ButtonToggle
          value={progress}
          options={options}
          onChange={setProgress}
        />
      </Space>
    </SpaceVertical>
  );
}
```

## Size

`ProgressCircular` is available in four sizes, `xsmall`, `small`, `medium`, and `large`.

```tsx
function Size() {
  return (
    <Space justify="center">
      <ProgressCircular size="xxsmall" />
      <ProgressCircular size="xsmall" />
      <ProgressCircular size="small" />
      <ProgressCircular size="medium" />
      <ProgressCircular />
    </Space>
  );
}
```

## Intent Colors

`ProgressCircular` supports four color variants accessed through our standard intent values:

- inform
- warn
- critical
- positive

```tsx
function Intent() {
  return (
    <>
      <Space justify="center">
        <ProgressCircular intent="inform" />
        <ProgressCircular intent="warn" />
        <ProgressCircular intent="critical" />
        <ProgressCircular intent="positive" />
      </Space>
    </>
  );
}
```

## Visible Trough

For an additional style variant, you can toggle the progress trough or track with a subtle background indicating values that are yet to be filled in.

```tsx
function RenderTrough() {
  return (
    <Space justify="center">
      <ProgressCircular progress={0.2} intent="inform" renderTrough />
      <ProgressCircular progress={0.4} intent="warn" renderTrough />
      <ProgressCircular progress={0.6} intent="critical" renderTrough />
      <ProgressCircular progress={0.8} intent="positive" renderTrough />
    </Space>
  );
}
```
