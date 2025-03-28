# InputDate

`InputDate` provides a text input and calendar to select a single date, which can be used as a form input or filter.

## Value & default value

`InputDate` can be initialized with a default selected date.

<Editor code={storyValueAndDefaultValue} />

```tsx
function ValueAndDefaultValue() {
  return (
    <SpaceVertical>
      <InputDate value={new Date('February 3, 2009')} />
      <InputDate defaultValue={new Date('June 3, 2019')} />
    </SpaceVertical>
  );
}
```

## Controlled

`InputDate` accepts a single event callback: `onChange`. The handler will receive a javascript `Date` object.

```tsx
function Controlled() {
  const [value, setValue] = useState<InputDateProps['value']>(
    new Date('June 30, 2022')
  );
  const onChange = (date: InputDateProps['value']) => setValue(date);
  return <InputDate onChange={onChange} value={value} />;
}
```

## Formatting date strings

If you want to use a custom date format, you can do that with the `dateStringFormat` prop which accepts a `date-fns` [format](https://date-fns.org/v2.28.0/docs/format).

```tsx
function FormattedDateStrings() {
  return (
    <InputDate
      dateStringFormat="MM-dd-y"
      defaultValue={new Date('February 3, 2009')}
    />
  );
}
```

## Disabling

You can `disable` the date input while also providing a value.

```tsx
function Disabling() {
  return <InputDate defaultValue={new Date('February 3, 2009')} disabled />;
}
```

## Validation

`InputDate` has built-in validation to verify that users enter a valid date string when manually typing the date. If you wish to customize validation, you can pass `validationType` and an `onValidationFail` callback that gets called when validation fails.

```tsx
function Validation() {
  const [isValid, setIsValid] = React.useState(true);
  const handleChange = () => setIsValid(true);
  const handleValidationFail = () => setIsValid(false);
  return (
    <InputDate
      onChange={handleChange}
      onValidationFail={handleValidationFail}
      validationType={isValid ? undefined : 'error'}
    />
  );
}
```

## I18n

This component supports `locale`, used to set a specific language.

```tsx
function I18n() {
  return <InputDate defaultValue={new Date('June 3, 2019')} locale={ital} />;
}
```
