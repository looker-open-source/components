# PopoverContent

Using the `PopoverContent` component gives your content consistent spacing. It also manages overflow if the content is taller than the viewport.

_When possible, use `PopoverLayout` instead of using `PopoverContent` directly._

```tsx
function Basic() {
  return <PopoverContent>We the People of the United States, </PopoverContent>;
}
```

If content overflows the component's height an visual indicator of content that extends
beyond the visible edges is added (border on top and shadow on the bottom).

```tsx
function Scroll() {
  return (
    <Box height="10rem" display="flex" bg="white" p="u5">
      <PopoverContent>
        <Paragraph>Scroll down here...</Paragraph>
        <Box height="6rem" bg="rebeccapurple" />
      </PopoverContent>
    </Box>
  );
}
```
