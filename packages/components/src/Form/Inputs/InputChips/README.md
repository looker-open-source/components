# InputChips

The `InputChips` component takes an array of strings (`values`) and renders them each as a [Chip](?path=/docs/docs-chip--docs) inside a text box.
The input value is converted to chip values as the user types via the <strong>comma</strong> or <strong>enter</strong> keys, or on blur.
Chips can be selected, via keyboard commands or clicking, and copy-pasted.

Unlike other form elements, `InputChips` does not store internal value state, and can only be used as a controlled component. Therefore the `values` and `onChange` props are required.

`InputChips` also supports `summary` and `isClearable`, similar to [InputSearch](?path=/docs/docs-inputsearch--docs) and `autoResize`, similar to [InputText](?path=/docs/docs-inputtext--docs).

## Values

The most basic implementation of `InputChips` requires setting the `values` and `onChange` props, where `values` is an array of string values.

```tsx
function Basic() {
  const [values, setValues] = useState(['cheddar', 'gouda']);

  return (
    <InputChips
      placeholder="Enter multiple values"
      values={values}
      onChange={setValues}
    />
  );
}
```

## Summary

Use the `summary` prop to render string value to the right side of the input box (in this example: "You've entered 2 items").

```tsx
function Summary() {
  const [values, setValues] = useState<string[]>(['cheddar', 'gouda']);
  function handleChange(newValues: string[]) {
    setValues(newValues);
  }
  return (
    <InputChips
      placeholder="Enter multiple values"
      summary={
        values.length > 0 ? `You've entered ${values.length} items` : undefined
      }
      values={values}
      onChange={handleChange}
    />
  );
}
```

## isClearable

You can disable the single-click clear button by setting `isClearable` to false. Users will still be able to clear individual chips using either backspace or the in-chip clear icons.

```tsx
function IsClearable() {
  const [values, setValues] = useState(['cheddar', 'gouda']);

  return (
    <InputChips isClearable={false} values={values} onChange={setValues} />
  );
}
```

## clearIconLabel and chipIconLabel

The `InputChips` component provides the prop `clearIconLabel` to customize the input icon label, the same is available to the individual `Chip` with the prop `chipIconLabel`. Hover over the the `x` icon to see the tooltip.

```tsx
function ClearIconLabel() {
  const [values, setValues] = useState(['cheddar', 'gouda']);

  return (
    <InputChips
      clearIconLabel="remove all chips"
      chipIconLabel="remove this chip"
      values={values}
      onChange={setValues}
    />
  );
}
```

## autoresize

To make the input box sizing respond dynamically to the amount of content set in the values, set `autoResize` to true.

```tsx
function AutoResize() {
  const [values, setValues] = useState<string[]>([]);

  return (
    <InputChips
      autoResize={true}
      values={values}
      onChange={setValues}
      placeholder="shrink to fit content"
    />
  );
}
```

## Controlled Input Value

The `inputValue` and `onInputChange` props allow control of the typed value. We also provide an optional `onClear` event hook that can be used for post-event cleanup or rendering helpful undo functionality.

```tsx
function Controlled() {
  const [values, setValues] = useState<string[]>(['cheddar']);
  const previousInputValues = usePreviousValue<string[]>(values);
  const [inputValue, setInputValue] = useState('');
  const [renderUndoButton, setRenderUndoButton] = useState(false);
  function handleChange(newValues: string[]) {
    setValues(newValues);
    setRenderUndoButton(true);
  }
  function handleInputChange(newValue: string) {
    setInputValue(newValue);
  }
  function handleClear() {
    setRenderUndoButton(true);
  }
  function handleUndo() {
    if (typeof previousInputValues !== 'undefined') {
      setValues(previousInputValues);
    }
    setRenderUndoButton(false);
  }
  return (
    <>
      <InputChips
        placeholder="Enter multiple values"
        summary={
          values.length === 0
            ? `You've entered ${values.length} items`
            : undefined
        }
        values={values}
        inputValue={inputValue}
        onChange={handleChange}
        onInputChange={handleInputChange}
        onClear={handleClear}
        mb="u3"
      />
      {renderUndoButton && (
        <>
          You modified the values! <Button onClick={handleUndo}>Undo</Button>
        </>
      )}
      {inputValue !== '' && (
        <Paragraph>
          You are typing: <strong>{inputValue}</strong>
        </Paragraph>
      )}
    </>
  );
}
```

## Validation

If a duplicate value is entered, it will not be added to the values list.
The optional `validate` prop is a function returning a boolean that is called for each value that is entered.
If it returns false, the value is not added. `onValidationFail` and `onDuplicate` are optional handlers for when
invalid and duplicate values are entered.

```tsx
function Validation() {
  const emailValidator =
    /^(([^<>()[\]\\.,:\s@"]+(\.[^<>()[\]\\.,:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const [values, setValues] = useState<string[]>([]);
  const [invalidValue, setInvalidValue] = useState<string[]>();
  const [duplicateValue, setDuplicateValue] = useState<string[]>();

  function handleChange(newValues: string[]) {
    setValues(newValues);
    setInvalidValue(undefined);
    setDuplicateValue(undefined);
  }
  function validate(valueToValidate: string) {
    return emailValidator.test(valueToValidate);
  }
  function handleInvalid(draftValue: string[]) {
    setInvalidValue(draftValue);
  }
  function handleDuplicate(duplicateValue: string[]) {
    setDuplicateValue(duplicateValue);
  }

  return (
    <>
      <InputChips
        placeholder="Enter email addresses"
        values={values}
        validate={validate}
        onChange={handleChange}
        onValidationFail={handleInvalid}
        onDuplicate={handleDuplicate}
        mb="u3"
      />
      {invalidValue && (
        <Paragraph>You entered an invalid email: {invalidValue}</Paragraph>
      )}
      {duplicateValue && (
        <Paragraph>{duplicateValue} has already been entered</Paragraph>
      )}
    </>
  );
}
```

## formatInputValue

Use this callback to format values after there are entered, before validation. In this example, all chips are converted to UPPERCASE upon entry:

```tsx
function FormatInput() {
  const [values, setValues] = useState<string[]>([]);
  return (
    <InputChips
      placeholder="Transform values to UPPERCASE"
      values={values}
      onChange={setValues}
      formatInputValue={val => val.toUpperCase()}
    />
  );
}
```

By default, any leading or trailing whitespace will be trimmed. To disable input formatting altogether,
use `formatInputValue={false}`.

```tsx
function FormatInputFalse() {
  const [values, setValues] = useState([' initial  ', '  values']);
  return (
    <Space>
      <InputChips
        values={values}
        onChange={setValues}
        formatInputValue={false}
        width={400}
      />
      <pre data-testid="pre">{JSON.stringify(values)}</pre>
    </Space>
  );
}
```

## removeOnBackspace

The `removeOnBackspace` prop defaults to true.
When set to false, hitting the `Backspace` key while focused in the input will not remove values.

```tsx
function RemoveOnBackspace() {
  const [values, setValues] = useState<string[]>(['cheddar', 'gouda']);
  function handleChange(newValues: string[]) {
    setValues(newValues);
  }
  return (
    <InputChips
      placeholder="Backspace does not remove values"
      values={values}
      onChange={handleChange}
      removeOnBackspace={false}
    />
  );
}
```

## Disable

Use the `disable` property to make an input field un-editable.

```tsx
function Disable() {
  const [values, setValues] = useState(['cheddar', 'gouda']);

  return <InputChips disabled values={values} onChange={setValues} />;
}
```

## ReadOnly property

As the name suggests, readOnly makes the text un-editable.

```tsx
function ReadOnly() {
  const [values, setValues] = useState([
    'you',
    "can't",
    'change',
    'me',
    'here',
  ]);

  return <InputChips readOnly values={values} onChange={setValues} />;
}
```
