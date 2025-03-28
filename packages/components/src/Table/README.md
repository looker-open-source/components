# Table

The `<Table>` component defines a structure for the display of tabular data. A `<TableHeader>` is used to display the table header and the `<TableBody>` is used to show the data rows.

```tsx
function Basic() {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableHeaderCell>Column 1</TableHeaderCell>
          <TableHeaderCell>Column 2</TableHeaderCell>
          <TableHeaderCell>Column 3</TableHeaderCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableDataCell>1</TableDataCell>
          <TableDataCell>2</TableDataCell>
          <TableDataCell>3</TableDataCell>
        </TableRow>
        <TableRow>
          <TableDataCell>1</TableDataCell>
          <TableDataCell>2</TableDataCell>
          <TableDataCell>3</TableDataCell>
        </TableRow>
        <TableRow>
          <TableDataCell>1</TableDataCell>
          <TableDataCell>2</TableDataCell>
          <TableDataCell>3</TableDataCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}
```
