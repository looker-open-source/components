# UnorderedList

The `UnorderedList` component renders a `ul` element. Its children should be `li` elements.

```tsx
function Basic() {
  return (
    <UnorderedList>
      <li>Gouda</li>
      <li>Swiss</li>
      <li>Pepper Jack</li>
    </UnorderedList>
  );
}
```

## Types

Use the `type` prop to set the `UnorderedList`'s marker type.

`UnorderedList`s be of type "none" (default) or "bullet".

```tsx
function Bullet() {
  return (
    <UnorderedList type={'bullet'}>
      <li>Gouda</li>
      <li>Swiss</li>
      <li>Pepper Jack</li>
    </UnorderedList>
  );
}
```

## Color

Use the `color` prop to set the `UnorderedList`'s color.

```tsx
function Color() {
  return (
    <UnorderedList color={'key'}>
      <li>Gouda</li>
      <li>Swiss</li>
      <li>Pepper Jack</li>
    </UnorderedList>
  );
}
```
