# PageSize

At its core, `<PageSize/>` is a composition of `<Select/>` and `<Text/>`.

A typical use case of `<PageSize/>` is to set the number of viewable items on each page in a paginated list.

Regarding implementation details, a `<PageSize/>` element will call the callback it received via its `onChange` prop any time a user selects a new options from the `<Select/>`, passing in the newly selected value.

```tsx
function Basic() {
  return (
    <PageSize
      total={100}
      value={100}
      onChange={(value: number) => alert(`You chose ${value} per page`)}
    />
  );
}
```

## AlwaysVisible

Set alwaysVisible to

```tsx
function AlwaysVisible() {
  const [value, setValue] = useState(100);
  return <PageSize alwaysVisible total={3} value={value} onChange={setValue} />;
}
```
