import * as React from 'react'
import { Table } from './Table'
import { TableHead } from './TableHead/TableHead'
import { TableBody } from './TableBody/TableBody'
import { create } from 'react-test-renderer'

test('A Table should accept html table children', () => {
  const component = create(
    <Table>
      <TableHead>
        <tr>
          <th>Header 1</th>
          <th>Header 1</th>
        </tr>
      </TableHead>
      <TableBody>
        <tr>
          <td>Header 1</td>
          <td>Header 1</td>
        </tr>
      </TableBody>
    </Table>
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
