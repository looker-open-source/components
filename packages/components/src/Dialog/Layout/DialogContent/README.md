# DialogContent

Using the `DialogContent` component quickly gives your content consistent spacing inside a dialog component. It also manages overflow if the content is taller than the viewport.

NOTE: When possible, use `DialogLayout` instead of using `DialogContent` directly.

```tsx
export default function Basic() {
  return (
    <DialogContent>
      <Box height="2rem" bg="rebeccapurple" />
    </DialogContent>
  );
}
```

If content overflows the component's height an visual indicator of content that extends beyond the visible edges is added (border on top and shadow on the bottom).

```tsx
export default function Overflow() {
  return (
    <Box height="10rem" display="flex" bg="white" p="u5">
      <DialogContent>
        <Paragraph>Scroll down here...</Paragraph>
        <Box height="12rem" bg="rebeccapurple" />
      </DialogContent>
    </Box>
  );
}
```
