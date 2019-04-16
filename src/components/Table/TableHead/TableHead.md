```js noeditor
const StatusAndResources = require('../../../../styleguide_components/StatusAndResources')
  .StatusAndResources

;<StatusAndResources
  status="experimental"
  figmaURL="https://www.figma.com/file/TIVgrnhEWwRGvr5yEQA4CVlj/Tables"
  githubURL="https://github.com/looker/lens/blob/master/src/components/Table/TableHead/TableHead.tsx"
  feedbackTitle="TableHead Component Feedback"
/>
```

### Table Headings

This component is used to define the heading of the table and describes the rows of data below. The `<TableHeader>` should have one `<TableRow>` tag and then use the `<TableHeaderCell>` tags to be semantically correct.

```js
import { Table } from '../Table'
import { TableBody } from '../TableBody'
import { TableDataCell } from '../TableDataCell'
import { TableHead } from './TableHead'
import { TableHeaderCell } from '../TableHeaderCell'
import { TableRow } from '../TableRow'
;<Table>
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
