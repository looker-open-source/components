### Displaying tabular data

The `<Table />` component defines a structure for the display of tabular data. A `<DataTableHeader />` is used to display the table header and the `<DataTableBody />` is used to show the data rows.

```js
<Table>
  <TableHead>
    <TableRow>
      <TableHeaderCell>Header 1</TableHeaderCell>
      <TableHeaderCell>Header 2</TableHeaderCell>
    </TableRow>
  </TableHead>
  <DataTableBody>
    <TableRow>
      <TableDataCell>Cell 1</TableDataCell>
      <TableDataCell>Cell 2</TableDataCell>
    </TableRow>
  </DataTableBody>
</Table>
```


