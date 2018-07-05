import * as React from 'react'
import { DataTable } from './DataTable'
import { DataTableHead } from './DataTableHead/DataTableHead'
import { DataTableBody } from './DataTableBody/DataTableBody'
import { create } from 'react-test-renderer'

test('A DataTable should accept html table children', () => {
  const component = create(
    <DataTable>
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
    </DataTable>
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
