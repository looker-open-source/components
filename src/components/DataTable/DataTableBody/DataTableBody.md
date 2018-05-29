### Table Body

This component is used to define the body of the table and holds the data for the table. The `<DataTableBody />` can have multiple `<tr>` tags for each row of data, and a `<td>` tag for each cell of data to be semantically correct.

```js
<DataTable>
  <DataTableHead>
    <tr>
      <th>Column 1</th>
      <th>Column 2</th>
      <th>Column 3</th>
    </tr>
  </DataTableHead>
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
</DataTable>
```
