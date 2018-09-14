```js noeditor
const StatusAndResources = require('../../../../styleguide_components/StatusAndResources').StatusAndResources;

<StatusAndResources
  status="experimental"
  figmaURL="https://www.figma.com/file/TIVgrnhEWwRGvr5yEQA4CVlj/Tables"
  githubURL="https://github.com/looker/lens/blob/master/src/components/Table/TableBody/TableBody.tsx"
  feedbackTitle="TableBody Component Feedback" />
```
### Table Body

This component is used to define TableHeaderCell body of the table and holds the data for the table. The `<TableBody>` can have multiple `<TableRow>` tags for each row of data, and a `<TableDataCell>` tag for each cell of data to be semantically correct.

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
