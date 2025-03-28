# TableBody

This component is used to define the body of the table and holds the data for the table. The `<TableBody>` can have multiple `<TableRow>` tags for each row of data, and a `<TableDataCell>` tag for each cell of data to be semantically correct.

```tsx
function Basic() {
  return (
    <TableBody>
      <TableRow>
        <TableDataCell>Cell 1</TableDataCell>
        <TableDataCell>Cell 2</TableDataCell>
      </TableRow>
    </TableBody>
  );
}
```
