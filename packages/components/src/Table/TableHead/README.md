# TableHead

This component is used to define the heading of the table and describes the rows of data below. The `<TableHeader>` should have one `<TableRow>` tag and then use the `<TableHeaderCell>` tags to be semantically correct.

```tsx
function Basic() {
  return (
    <TableHead>
      <TableRow>
        <TableHeaderCell>Column 1</TableHeaderCell>
        <TableHeaderCell>Column 2</TableHeaderCell>
        <TableHeaderCell>Column 3</TableHeaderCell>
      </TableRow>
    </TableHead>
  );
}
```
