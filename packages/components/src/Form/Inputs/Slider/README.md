# Slider

`Slider` is used for selecting a single value. If you need to specify a range of values, use the [RangeSlider component](?path=/docs/docs-rangeslider--docs) instead.

## Default Slider

The `<Slider />` component renders a styled range slider on the page, with no accompanying label.

```tsx
function Basic(props: SliderProps) {
  return <Slider {...props} />;
}
```

## Value, Min, Max

The `<Slider />` component accepts a `value` property, allowing the user to set the initial value at which the slider is initialized.
It also accepts `min` and `max` values.

```tsx
function MinMaxValue(props: SliderProps) {
  const { min = 10, max = 20, value = 15, ...restProps } = props;

  return <Slider min={min} max={max} value={value} {...restProps} />;
}
```

Min and max default to the following values:

- **min**: 0
- **max**: 10

The slider component will disregard any value prop that goes outside of the defined min or max. The following example illustrates default settings when `max=10` but `value=5000`

```tsx
function InvalidValue(props: SliderProps) {
  const { min = 0, max = 10, value = 5000, ...restProps } = props;

  return <Slider min={min} max={max} value={value} {...restProps} />;
}
```

## Step

Just like the standard HTML range input, you change the granularity of slider options by using the `step` prop.

```tsx
function Step(props: SliderProps) {
  const { max = 10000, step = 2500, ...restProps } = props;

  return <Slider max={max} step={step} {...restProps} />;
}
```

## Accessibility

Slider accepts the standard aria-labelledby to help screen readers associate the range input with the relevant form label.

```tsx
function LabeledSlider(props: SliderProps) {
  return (
    <>
      <Label id="slider-label">Slider:</Label>
      <Slider aria-labelledby="slider-label" {...props} />
    </>
  );
}
```

## Disabled

Use the disable property to gray out the Input, making it a fixed value.

```tsx
function Disabled(props: SliderProps) {
  const { disabled = true, ...restProps } = props;

  return <Slider disabled={disabled} {...restProps} />;
}
```

## Controlled component

If you'd like to read and control the input value externally, `Slider` accepts an onChange event callback.

```tsx
function Controlled(props: SliderProps) {
  const { value: valueProp = 5, onChange: _onChange, ...restProps } = props;

  const [sliderValue, setSliderValue] = useState(valueProp);
  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSliderValue(event.target.value);
  };

  return (
    <Space>
      <Slider onChange={onChange} value={sliderValue} {...restProps} />
      <Paragraph>
        <strong>Value:</strong> {sliderValue}
      </Paragraph>
    </Space>
  );
}
```
