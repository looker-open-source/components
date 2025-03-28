# RangeSlider

`RangeSlider` is the 2-point alternative to the [single-value Slider component](?path=/docs/docs-slider--docs).

## Default RangeSlider

The `<RangeSlider />` component renders a styled range slider on the page. It will render a range from 0 to 10, and select all possible values inbetween.

```tsx
function Basic(props: RangeSliderProps) {
  return <RangeSlider {...props} />;
}
```

## Value and DefaultValue

By default, this component will select the entire range from Min to Max values. You can control the selected range by passing an array of integers to either `value` or `defaultValue`.

```tsx
function Value(props: RangeSliderProps) {
  const { value = [3, 8], defaultValue = [3, 8], ...restProps } = props;

  return (
    <>
      <RangeSlider defaultValue={defaultValue} {...restProps} />
      <RangeSlider value={value} {...restProps} />
    </>
  );
}
```

Like all standard form elements, you cannot interact with this component if you pass in a value without an onChange handler.

## Min, Max

You can customize `min` and `max` values.

```tsx
function MinMax(props: RangeSliderProps) {
  const { min = 10, max = 20, defaultValue = [13, 17], ...restProps } = props;

  return (
    <RangeSlider
      min={min}
      max={max}
      defaultValue={defaultValue}
      {...restProps}
    />
  );
}
```

Min and max default to the following values:

- **min**: 0
- **max**: 10

The slider component will disregard any value prop that goes outside of the defined min or max range. The following example illustrates passing a value that falls outside the acceptable range.

```tsx
function InvalidValue(props: RangeSliderProps) {
  const {
    min = 100,
    max = 200,
    defaultValue = [105, 1950],
    ...restProps
  } = props;

  return (
    <RangeSlider
      min={min}
      max={max}
      defaultValue={defaultValue}
      {...restProps}
    />
  );
}
```

## Step

You change the granularity of the slider options by using the `step` prop.

```tsx
function Step(props: RangeSliderProps) {
  const { max = 10000, step = 2500, ...restProps } = props;

  return <RangeSlider max={max} step={step} {...restProps} />;
}
```

## readOnly

Use the readOnly property to render the component normally, but prevent user interaction.

```tsx
function ReadOnly(props: RangeSliderProps) {
  const { defaultValue = [2, 3], readOnly = true, ...restProps } = props;

  return (
    <RangeSlider
      defaultValue={defaultValue}
      readOnly={readOnly}
      {...restProps}
    />
  );
}
```

## Disabled

Use the `disabled` property to gray out the Input, making it a fixed value.

```tsx
function Disabled(props: RangeSliderProps) {
  const { defaultValue = [2, 3], disabled = true, ...restProps } = props;

  return (
    <RangeSlider
      defaultValue={defaultValue}
      disabled={disabled}
      {...restProps}
    />
  );
}
```

## Controlled component with an onChange callback

If you'd like to read and control the input value externally, `Slider` accepts an `onChange` event callback along with the `value` prop.

```tsx
function Controlled(props: RangeSliderProps) {
  const { value: valueProp = [3, 7], ...restProps } = props;

  const [sliderValue, setSliderValue] = useState(valueProp);
  return (
    <>
      <Heading>
        <strong>Value:</strong> {sliderValue[0]} &mdash; {sliderValue[1]}
      </Heading>
      <RangeSlider
        onChange={setSliderValue}
        value={sliderValue}
        {...restProps}
      />
      <Space mt="small">
        <Button onClick={() => setSliderValue([0, 10])}>0 &mdash; 10</Button>
        <Button onClick={() => setSliderValue([2, 8])}>2 &mdash; 8</Button>
        <Button onClick={() => setSliderValue([4, 6])}>4 &mdash; 6</Button>
      </Space>
    </>
  );
}
```

## Accessibility

`RangeSlider` accepts the standard aria-labelledby to help screen readers associate the range input with the relevant form label.

```tsx
function WithLabel(props: RangeSliderProps) {
  return (
    <>
      <Label id="slider-label">Slider:</Label>
      <RangeSlider aria-labelledby="slider-label" {...props} />
    </>
  );
}
```
