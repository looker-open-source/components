# Field

`Field` is the container used in all `Field`- components to provide information,
accessibity, and consistent layout and design to all inputs.

Below is an example of how you might compose your own field.

```tsx
function Basic(props: FieldProps) {
  const id = 'coolField';
  return (
    <Field
      id={id}
      label="A combo field"
      description="Please fill out both inputs"
      detail="with 2 inputs"
      validationMessage={{ message: 'An error message', type: 'error' }}
      width={300}
      {...props}
    >
      <Space gap="u3">
        <InputText id={id} aria-describedby={`${id}-describedby`} width={100} />
        <InputText
          id={id}
          aria-describedby={`${id}-describedby`}
          validationType={'error'}
        />
      </Space>
    </Field>
  );
}
```
