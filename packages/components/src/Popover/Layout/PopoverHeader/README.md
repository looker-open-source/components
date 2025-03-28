# PopoverHeader

`PopoverHeader` can be attached to the top of Popover and provides a button to close the containing Popover.

- `hideClose` removes the "close" `IconButton`
- `detail` allows the developer to specify a ReactNode that will replace the "close" `IconButton`

_NOTE: don't use `hideClose` and `detail` together_

```tsx
function Basic() {
  return <PopoverHeader>Header Text</PopoverHeader>;
}
```

## hideClose

```tsx
function HideClose() {
  return <PopoverHeader hideClose>Header Text</PopoverHeader>;
}
```

## Detail

```tsx
function Detail() {
  return (
    <PopoverHeader detail={<button>close</button>}>Header Text</PopoverHeader>
  );
}
```

## iconBefore

```tsx
function IconBefore() {
  return (
    <PopoverHeader iconBefore={<Icon icon={<MaterialIcons.Save />} />}>
      Header Text
    </PopoverHeader>
  );
}
```
