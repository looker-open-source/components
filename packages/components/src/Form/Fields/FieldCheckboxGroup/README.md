# FieldCheckboxGroup

Groups of checkboxes can be displayed with `FieldCheckboxGroup`.

```tsx
function Basic(props: FieldCheckboxGroupProps) {
  const {
    options = [
      {
        label: 'Cheddar',
        value: 'cheddar',
      },
      {
        label: 'Gouda',
        value: 'gouda',
      },
      {
        label: 'Swiss',
        value: 'swiss',
      },
      {
        label: 'Roquefort',
        value: 'roquefort',
      },
    ],
    ...rest
  } = props;

  return (
    <FieldCheckboxGroup
      defaultValue={['cheddar']}
      description="Pick all your cheeses"
      label="Cheeses"
      options={options}
      {...rest}
    />
  );
}
```

There are two "inline" variations:

- The `inline` prop will put the group label and all the inputs in one line (wrapping the inputs as necessary)
- The `inputsInline` prop will stack the group label on top but keep all the inputs inline

```tsx
function Inline() {
  const options = [
    {
      label: 'Cheddar',
      value: 'cheddar',
    },
    {
      label: 'Gouda',
      value: 'gouda',
    },
    {
      label: 'Swiss',
      value: 'swiss',
    },
    {
      label: 'Roquefort',
      value: 'roquefort',
    },
  ];

  return (
    <FieldCheckboxGroup
      defaultValue={['cheddar']}
      description="Pick all your cheeses"
      label="Cheeses"
      options={options}
      inline={true}
    />
  );
}
```
