# InputTimeSelect

`InputTimeSelect` provides a [`Select`](/components/forms/select)-based dropdown UI for picking a 24-hour time value. This is an alternative to [`InputTime`](/components/forms/input-time), which provides an HTML5-standard time picking experience.

The default implementation provides a dropdown list of times in 15-minute increments, formatted in for a 12-hour clock.

```tsx
function Basic(props: InputTimeSelectProps) {
  return <InputTimeSelect {...props} />;
}
```

## Intervals

You can choose from any of the following options: 5, 10, 15, 20, 30, or 60 minute intervals.

We've limited allowed intervals to a few approved options rather than accepting any number. This is to protect against uninteded use where an engineer might specify 1-minute intervals and generate an unusable select box with 1400 options. We also wouldn't want to support bizarre instances of a random numbers like 37 or 152 minute intervals.

```tsx
function Intervals(props: InputTimeSelectProps) {
  const { interval: _intervals, ...restProps } = props;
  return (
    <Fieldset>
      <SpaceVertical gap="u1">
        <Heading as="h4">5-minute</Heading>
        <InputTimeSelect interval={5} {...restProps} />
      </SpaceVertical>
      <SpaceVertical gap="u1">
        <Heading as="h4">10-minute</Heading>
        <InputTimeSelect interval={10} {...restProps} />
      </SpaceVertical>
      <SpaceVertical gap="u1">
        <Heading as="h4">15-minute</Heading>
        <InputTimeSelect interval={15} {...restProps} />
      </SpaceVertical>
      <SpaceVertical gap="u1">
        <Heading as="h4">60-minute</Heading>
        <InputTimeSelect interval={20} {...restProps} />
      </SpaceVertical>
      <SpaceVertical gap="u1">
        <Heading as="h4">30-minute</Heading>
        <InputTimeSelect interval={30} {...restProps} />
      </SpaceVertical>
      <SpaceVertical gap="u1">
        <Heading as="h4">60-minute</Heading>
        <InputTimeSelect interval={60} {...restProps} />
      </SpaceVertical>
    </Fieldset>
  );
}
```

## 12- or 24-hour formatting

Depending on readability preference, the time picker can format the labels in either 12- or 24-hour time. Regardless of label formatting, this component returns a 24-hour time formatted string when changed.

```tsx
function TimeFormatting(props: InputTimeSelectProps) {
  const { format: _format, value: valueProp = '14:00', ...restProps } = props;

  const [value, setValue] = useState<string | undefined>(valueProp);
  return (
    <Grid>
      <SpaceVertical gap="u2">
        <Heading as="h3">12-hour</Heading>
        <Space>
          <InputTimeSelect
            format="12h"
            value={value}
            onChange={setValue}
            {...restProps}
          />
        </Space>
      </SpaceVertical>
      <SpaceVertical gap="u2">
        <Heading as="h3">24-hour</Heading>
        <Space>
          <InputTimeSelect
            format="24h"
            value={value}
            onChange={setValue}
            {...restProps}
          />
        </Space>
      </SpaceVertical>
    </Grid>
  );
}
```

## Controlled Component

Consistent with all other inputs, `InputTimeSelect` accepts `value` and `onChange` props for use in a controlled form setting.

- `value` accepts a 24-hour formatted time string (e.g. `15:45`)
- `onChange` returns a 24-hour time string

```tsx
function Controlled(props: InputTimeSelectProps) {
  const { value: valueProp = '14:00', ...restProps } = props;

  const [value, setValue] = useState<string | undefined>(valueProp);

  return (
    <Space>
      <InputTimeSelect value={value} onChange={setValue} {...restProps} />
      <Paragraph color="text2">{value}</Paragraph>
    </Space>
  );
}
```

## DefaultValue

If you don't want to control the form value externally, but still want to listen for changes, you can still pass in an initial `defaultValue`.

```tsx
function DefaultValue(props: InputTimeSelectProps) {
  const { defaultValue = '15:45', ...restProps } = props;
  return <InputTimeSelect defaultValue={defaultValue} {...restProps} />;
}
```
