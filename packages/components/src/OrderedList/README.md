# OrderedList

The `OrderedList` component renders an `ol` element. Its children should be `li` elements.

```tsx
function Basic() {
  return (
    <OrderedList>
      <li>Gouda</li>
      <li>Swiss</li>
      <li>Pepper Jack</li>
    </OrderedList>
  );
}
```

## Types

Use the `type` prop to set the `OrderedList`'s marker type.

`OrderedList`s be of type "none" (default) or "number" or "letter".

```tsx
function Number() {
  return (
    <OrderedList type={'number'}>
      <li>Gouda</li>
      <li>Swiss</li>
      <li>Pepper Jack</li>
    </OrderedList>
  );
}
```

```tsx
function Letter() {
  return (
    <OrderedList type={'letter'}>
      <li>Gouda</li>
      <li>Swiss</li>
      <li>Pepper Jack</li>
    </OrderedList>
  );
}
```
