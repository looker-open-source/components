# Grid

`<Grid />` provides a simple implementation of the CSS Grid.

## Default

By default `Grid` has two columns with a "medium" `gap` between grid cells and "100%" `width`

```tsx
function Basic() {
  return (
    <Grid>
      <Box border minHeight="5rem">
        A
      </Box>
      <Box border>B</Box>
      <Box border>C</Box>
      <Box border>D</Box>
    </Grid>
  );
}
```

## Columns

Use the `columns` prop to specify the number of columns to display.

```tsx
function Columns4() {
  return (
    <Grid columns={4}>
      <Box border minHeight="5rem">
        A
      </Box>
      <Box border>B</Box>
      <Box border>C</Box>
      <Box border>D</Box>
    </Grid>
  );
}
```

```tsx
function Columns1() {
  return (
    <Grid columns={1}>
      <Box border minHeight="5rem">
        A
      </Box>
      <Box border>B</Box>
      <Box border>C</Box>
      <Box border>D</Box>
    </Grid>
  );
}
```

## Gap

Specify `gap` to change the distance between grid cells (defaults to `medium`)

```tsx
function GapNone() {
  return (
    <Grid gap="none">
      <Box border minHeight="5rem">
        A
      </Box>
      <Box border>B</Box>
    </Grid>
  );
}
```

```tsx
function GapU15() {
  return (
    <Grid gap="u15">
      <Box border minHeight="5rem">
        A
      </Box>
      <Box border>B</Box>
    </Grid>
  );
}
```
