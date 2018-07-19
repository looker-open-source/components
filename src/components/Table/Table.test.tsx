import * as React from 'react'
import { Table } from './Table'
import { DataTableHead } from './TableHead/DataTableHead'
import { DataTableBody } from './TableBody/DataTableBody'
import { create } from 'react-test-renderer'

test('A Table should accept html table children', () => {
  const component = create(
    <Table>
      <DataTableHead>
        <tr>
          <th>Header 1</th>
          <th>Header 1</th>
        </tr>
      </DataTableHead>
      <DataTableBody>
        <tr>
          <td>Header 1</td>
          <td>Header 1</td>
        </tr>
      </DataTableBody>
    </Table>
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
