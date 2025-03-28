# PopoverFooter

`PopoverFooter` can be attached to the bottom of Popover.

This component contains a dismissal button with the default text of "Done", which can be customized using the `closeButton` prop.

```tsx
function Basic() {
  return <PopoverFooter />;
}
```

```tsx
function FooterClose() {
  return <PopoverFooter closeButton="Close" />;
}
```

## Footer with children

Use this to render additional contents inside the footer.

```tsx
function FooterWithChildren() {
  return (
    <PopoverFooter>
      <ButtonTransparent color="neutral" size="small">
        Cancel
      </ButtonTransparent>
    </PopoverFooter>
  );
}
```
