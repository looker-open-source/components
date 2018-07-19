### Table Body

This component is used to define TableHeaderCelle body of the table and holds the data for the table. The `<TableBody>` can have multiple `<TableRow>` tags for each row of data, and a `<TableDataCell>` tag for each cell of data to be semantically correct.

```js
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
```
