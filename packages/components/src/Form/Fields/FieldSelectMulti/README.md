# FieldSelectMulti

The `<FieldSelectMulti />` component is composed of an `<SelectMulti />` component and a `<Label />` component.

```tsx
function Basic(props: FieldSelectMultiProps) {
  return (
    <FieldSelectMulti
      label="Label"
      options={[
        { label: 'Grape', value: 'grape' },
        { label: 'Banana', value: 'banana' },
        { label: 'Apple', value: 'apple' },
      ]}
      placeholder="Search fruits"
      isFilterable={true}
      {...props}
    />
  );
}
```

### FieldSelectMulti attributes

`<FieldSelectMulti />` have attributes to help display additional information. `detail`, `description` and `validation messages` are available to the component.

```tsx
function Detail() {
  return (
    <FieldSelectMulti
      detail="detail..."
      label="Label"
      options={[
        { label: 'Grape', value: 'grape' },
        { label: 'Banana', value: 'banana' },
        { label: 'Apple', value: 'apple' },
      ]}
      placeholder="Search fruits"
      isFilterable={true}
    />
  );
}
```

```tsx
function Description() {
  return (
    <FieldSelectMulti
      description="this is the description"
      label="Label"
      options={[
        { label: 'Grape', value: 'grape' },
        { label: 'Banana', value: 'banana' },
        { label: 'Apple', value: 'apple' },
      ]}
      placeholder="Search fruits"
      isFilterable={true}
    />
  );
}
```

```tsx
function Validation() {
  return (
    <FieldSelectMulti
      label="Label"
      options={[
        { label: 'Grape', value: 'grape' },
        { label: 'Banana', value: 'banana' },
        { label: 'Apple', value: 'apple' },
      ]}
      placeholder="Search fruits"
      isFilterable={true}
      validationMessage={{ message: 'This is an error', type: 'error' }}
    />
  );
}
```

### FieldSelectMulti props

`<FieldSelectMulti />` can be set as `disabled` and also as `required`. Aslo the width of the component will be 100% based of the parent and sibling components. Using `Grid` can be helpful to position the components.

```tsx
function Disabled() {
  return (
    <FieldSelectMulti
      description="disabled"
      label="Label"
      options={[
        { label: 'Grape', value: 'grape' },
        { label: 'Banana', value: 'banana' },
        { label: 'Apple', value: 'apple' },
      ]}
      placeholder="Search fruits"
      isFilterable={true}
      disabled
    />
  );
}
```

```tsx
function Required() {
  return (
    <FieldSelectMulti
      description="required"
      label="Label"
      options={[
        { label: 'Grape', value: 'grape' },
        { label: 'Banana', value: 'banana' },
        { label: 'Apple', value: 'apple' },
      ]}
      placeholder="Search fruits"
      isFilterable={true}
      required
    />
  );
}
```
