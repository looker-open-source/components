import { Table } from '../Table'
import { TableHead } from '../TableHead/TableHead'
import { DataTableBody } from '../TableBody/TableBody'
import { create } from 'react-test-renderer'
import { TableRow } from './TableRow'

test('A TableRow should render', () => {
  const component = create(
    <Table>
      <DataTableBody>
        <TableRow>
          <td>Header 1</td>
          <td>Header 1</td>
        </TableRow>
      </DataTableBody>
    </Table>
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
