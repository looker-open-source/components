# InputTime

`InputTime` provides a themable HTML5-equivalent time picking experience.

```tsx
function Basic(props: InputTimeProps) {
  return <InputTime {...props} />;
}
```

## 12 And 24 Hour Format

`InputTime` can display either a 12-hour or 24-hour time selecting interface. If not specified, it defaults to 12-hour time.

```tsx
function TimeFormatting(props: InputTimeProps) {
  const { format: _format, value: valueProp = '14:34', ...restProps } = props;

  const [value, setValue] = useState<string | undefined>(valueProp);
  return (
    <Grid>
      <SpaceVertical gap="u2">
        <Heading as="h3">12-hour</Heading>
        <Space>
          <InputTime
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
          <InputTime
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

`InputTime` accepts a value and onChange listener for the standard controlled component pattern.

```tsx
function Controlled(props: InputTimeProps) {
  const { value: valueProp = '14:34', ...restProps } = props;

  const [value, setValue] = useState(valueProp);
  const handle1400Click = () => setValue('14:00');
  const handle1515Click = () => setValue('15:15');
  const handle1632Click = () => setValue('16:32');

  return (
    <Space>
      <Button onClick={handle1400Click}>2:00pm</Button>
      <Button onClick={handle1515Click}>3:15pm</Button>
      <Button onClick={handle1632Click}>4:32pm</Button>
      <InputTime value={value} {...restProps} />
      <Paragraph>Selected: {value}</Paragraph>
    </Space>
  );
}
```

## defaultValue

`InputTime` also accetpts a `defaultValue` prop if you don't want to control component value externally.

```tsx
function DefaultValue(props: InputTimeProps) {
  const { defaultValue = '15:45', ...restProps } = props;
  return <InputTime defaultValue={defaultValue} {...restProps} />;
}
```

## disabled

Use the disable property to make an input field uneditable.

```tsx
function Disabled(props: InputTimeProps) {
  const { disabled = true, ...restProps } = props;
  return <InputTime disabled={disabled} {...restProps} />;
}
```

## readOnly

As the name suggests, `readOnly` makes the text uneditable.

```tsx
function ReadOnly(props: InputTimeProps) {
  const { readOnly = true, defaultValue = '10:01', ...restProps } = props;
  return (
    <InputTime readOnly={readOnly} defaultValue={defaultValue} {...restProps} />
  );
}
```

## ID & Form Labels

You can combine the `id` prop with form label, so that when the label is clicked it will focus on the `hour` input.

```tsx
function WithLabel(props: InputTimeProps) {
  return (
    <Space>
      <Label htmlFor="demo-id">Label Text</Label>
      <InputTime id="demo-id" {...props} />
    </Space>
  );
}
```

## Focus & Blur Events

`onFocus` callback will fire when any of the three sub-fields (hour, minute, period) are focused. `onBlur` fires when the focus moves outside the component entirely.

```tsx
function FocusBlurEvents(props: InputTimeProps) {
  const [isFocused, setIsFocused] = useState(false);
  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  return (
    <Space>
      <InputTime onFocus={handleFocus} onBlur={handleBlur} {...props} />
      {isFocused && <Paragraph color="green">FOCUSED!!</Paragraph>}
    </Space>
  );
}
```

## Validation Error State

You can render a failed validation state with the prop `validationType="error"`.

```tsx
function ValidationError(props: InputTimeProps) {
  const { validationType = 'error', ...restProps } = props;
  return <InputTime validationType={validationType} {...restProps} />;
}
```

## onValidationFail

In addition, `InputTime` will automatically check whether the provided `value` prop is actually a valid 24 hour time string, and fire the `onValidationFail` callback.

```tsx
function Validation(props: InputTimeProps) {
  const { value: valueProp = 'Stardate 2004.14', ...restProps } = props;

  const [value, setValue] = useState<string | undefined>(valueProp);
  const [validationType, setValidationType] = useState<'error' | undefined>();
  const handleValidationFail = () => {
    setValidationType('error');
  };

  return (
    <Space>
      <InputTime
        validationType={validationType}
        value={value}
        onValidationFail={handleValidationFail}
        onChange={setValue}
        {...restProps}
      />
      {validationType === 'error' && (
        <Paragraph color="critical">
          Error: <Code fontSize="small">{value}</Code> is not a valid 24-hour
          time string
        </Paragraph>
      )}
    </Space>
  );
}
```
