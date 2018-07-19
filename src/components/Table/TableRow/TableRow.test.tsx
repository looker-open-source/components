import { Table } from '../Table'
import { TableHead } from '../TableHead/TableHead'
import { TableBody } from '../TableBody/TableBody'
import { create } from 'react-test-renderer'
import { TableRow } from './TableRow'

test('A TableRow should render', () => {
  const component = create(
    <Table>
      <TableBody>
        <TableRow>
          <td>Header 1</td>
          <td>Header 1</td>
        </TableRow>
      </TableBody>
    </Table>
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
