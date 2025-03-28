# DialogHeader

`DialogHeader` is attached to the top of dialog and provides a button to close the containing Dialog. Uses the `DialogContext` to get access to the `close` callback.

DialogHeader supports all [`Box`](/src-documentation-components-box) properties.

```tsx
export default function Basic() {
  return <DialogHeader>Heading</DialogHeader>;
}
```

`hideClose` property remove the "close" `IconButton`

```tsx
export default function HideClose() {
  return <DialogHeader hideClose>Heading</DialogHeader>;
}
```

`detail` property allows the developer to specify a ReactNode that will replace the "close" `IconButton`

```tsx
export default function Detail() {
  return <DialogHeader detail="Detail text">Heading</DialogHeader>;
}
```
