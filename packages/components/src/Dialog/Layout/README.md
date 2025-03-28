# DialogLayout

The `DialogLayout` component manages the dialog layout components below to easily meet design-system expectations.

This component composes `DialogHeader`, `DialogContent` and `DialogFooter` as needed.

```tsx
export function Basic() {
  return (
    <Box bg="ui1">
      <DialogLayout>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </DialogLayout>
    </Box>
  );
}
```

In cases where a `footer` or `header` is not specified the `DialogLayout` will automatically manage applying padding and close controls appropriately.
