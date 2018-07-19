### Table Headings

This component is used to define the heading of the table and describes the rows of data below. The `<DataTableHeader>` should have one `<tr>` tag and then use the `<th>` tags to be semantically correct.

```js
<Table>
  <TableHead>
    <tr>
      <th>Column 1</th>
      <th>Column 2</th>
      <th>Column 3</th>
    </tr>
  </TableHead>
  <DataTableBody>
    <tr>
      <td>1</td>
      <td>2</td>
      <td>3</td>
    </tr>
    <tr>
      <td>1</td>
      <td>2</td>
      <td>3</td>
    </tr>
    <tr>
      <td>1</td>
      <td>2</td>
      <td>3</td>
    </tr>
  </DataTableBody>
</Table>
```
