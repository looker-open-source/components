# InputDateRange

`InputDateRange` provides an interface to select to a date range, either through the calendar interface or text input boxes.

## Value

The `value` prop is a date range object, while `onChange` is a callback that receives the new date range object.
Both props are both required – there is no uncontrolled option.

```tsx
const noop = () => undefined;

function Basic({ value = {}, onChange = noop, ...props }: InputDateRangeProps) {
  return <InputDateRange value={value} onChange={onChange} {...props} />;
}
```

The `value` prop responds to external updates. Both the `from` and `to` properties of `value` are optional.

```tsx
function ExternalUpdates() {
  const [value, setValue] = useState<RangeModifier>({
    from: new Date('June 3, 2019'),
    to: new Date('June 9, 2019'),
  });

  return (
    <SpaceVertical>
      <Space>
        <Button
          onClick={() =>
            setValue({
              from: new Date('January 1, 2012'),
              to: new Date('February 15, 2012'),
            })
          }
        >
          January 1 - February 15, 2012
        </Button>
        <Button
          onClick={() => setValue({ from: new Date('February 9, 2021') })}
        >
          From: February 9, 2021
        </Button>
        <Button onClick={() => setValue({ to: new Date('February 9, 2021') })}>
          To: February 9, 2021
        </Button>
        <Button onClick={() => setValue({})}>Clear</Button>
      </Space>
      <InputDateRange value={value} onChange={setValue} />
    </SpaceVertical>
  );
}
```

## onValidationFail

The `onValidationFail` handler will be called with "Invalid range" when one or both of the dates is invalid, or the from date is after the to date.

```tsx
function OnValidationFail() {
  const [value, setValue] = useState<RangeModifier>({});
  const [isValid, setIsValid] = useState(true);
  const handleChange = (newValue: RangeModifier) => {
    setValue(newValue);
    setIsValid(true);
  };
  const handleValidationFail = () => setIsValid(false);

  const message = isValid ? 'Valid Input' : 'Invalid Input';
  const color = isValid ? undefined : 'critical';

  return (
    <SpaceVertical>
      <Paragraph color="text2">
        INSTRUCTIONS: Try typing an invalid date string (ex: 'not/a/valid/date')
        and clicking or tabbing away to trigger blur event.
      </Paragraph>
      <Heading>Result:</Heading>
      <Paragraph color={color}>{message}</Paragraph>
      <Divider />
      <InputDateRange
        value={value}
        onChange={handleChange}
        onValidationFail={handleValidationFail}
      />
    </SpaceVertical>
  );
}
```

## I18n

See [Calendar component](?path=/docs/docs-calendar--docs#i18n).
