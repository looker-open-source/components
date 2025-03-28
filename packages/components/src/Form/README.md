# Form

The `<Form />` component wraps a collection of field components and allows for multi-field validation message rendering by accepting a `validationMessages` property. The property takes a dictionary with key as field name and value as a `ValidationMessage` object which has a `type` and a `message`:

## Form Validation

```tsx
function Basic(props: FormProps) {
  return (
    <Form
      validationMessages={{
        alpha: { message: 'This is an error', type: 'error' },
        bravo: { message: 'This is another error', type: 'error' },
      }}
      {...props}
    >
      <FieldText label="Alpha" name="alpha" />
      <FieldText label="Bravo" name="bravo" />
      <FieldText label="Charlie" name="charlie" />
      <Button>Submit</Button>
    </Form>
  );
}
```

A complete implementation that keeps track of state and updates validation messages onChange.

```tsx
function Validation() {
  const [val1, setVal1] = useState('');
  const [val2, setVal2] = useState('');
  const [validationErrors, setValidationErrors] = useState<ValidationMessages>(
    {}
  );
  const validate = (value1: typeof val1, value2: typeof val2) => {
    const errors: typeof validationErrors = {};
    if (value1.length >= 5) {
      errors.val1 = {
        message: 'Error! String greater than 5 characters.',
        type: 'error',
      };
    }
    if (value2.length <= 5) {
      errors.val2 = {
        message: 'Error! String less than 5 characters.',
        type: 'error',
      };
    }
    setValidationErrors(errors);
  };
  const onChangeVal1 = (event: ChangeEvent<HTMLInputElement>) => {
    setVal1(event.target.value);
    validate(event.target.value, val2);
  };
  const onChangeVal2 = (event: ChangeEvent<HTMLInputElement>) => {
    setVal2(event.target.value);
    validate(val1, event.target.value);
  };
  return (
    <Form validationMessages={validationErrors}>
      <FieldText
        name="val1"
        value={val1}
        label="A Field requiring less than 5 characters"
        onChange={onChangeVal1}
      />
      <FieldText
        name="val2"
        value={val2}
        label="A Field requiring more than 5 characters"
        onChange={onChangeVal2}
      />
    </Form>
  );
}
```
