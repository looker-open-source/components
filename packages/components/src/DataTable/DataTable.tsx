/*

 MIT License

 Copyright (c) 2020 Looker Data Sciences, Inc.

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all
 copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 SOFTWARE.

 */

import styled from 'styled-components'
import { reset } from '@looker/design-tokens'
import React, { FC, useState } from 'react'
import { MixedBoolean } from '../Form'
import { BulkActions } from './BulkActions'
import { DataTableContext } from './DataTableContext'
import { DataTableFilters } from './Filters/DataTableFilters'
import { Table } from './Table'
import { DataTableProps } from './types'

export const DataTableLayout: FC<DataTableProps> = (props) => {
  const {
    bulk,
    className,
    columns,
    filterConfig,
    firstColumnStuck: explicitFirstColumnStuck,
    onSort,
    select,
  } = props
  /**
   * Extract columns that the user can specify visibility on
   */
  const columnsVisibleDefault = columns
    .filter((c) => c.hide === false)
    .map((c) => c.id)

  /**
   * An array of column IDs that should be displayed to the user
   */
  const [columnsVisible, setColumnsVisible] = useState(columnsVisibleDefault)

  /**
   * Array in which each entry represents the visibility status of every available column
   * NOTE: Columns with `hide===undefined` are always visible
   */
  const columnsDisplayState = columns.map(
    (c) => c.hide === undefined || columnsVisible.includes(c.id)
  )

  /**
   * Deciding if the first column of the table should be stuck is slightly complex.
   *
   * 1. If the first column is hidden, FALSE (stops evaluating)
   * 2. If the developer has explicitly specified firstColumnStuck use that value (stops evaluating)
   * 3. Use whether `select` feature is active (TRUE|FALSE)
   *
   */
  const firstColumnStuck =
    columnsDisplayState[0] === false
      ? false
      : explicitFirstColumnStuck !== undefined
      ? explicitFirstColumnStuck
      : Boolean(select)

  const allSelected: MixedBoolean =
    select && select.pageItems.every((id) => select.selectedItems.includes(id))
      ? true
      : select &&
        select.pageItems.some((id) => select.selectedItems.includes(id))
      ? 'mixed'
      : false

  const context = {
    allSelected,
    columns,
    columnsDisplayState,
    onSort,
    select,
  }

  const filters = filterConfig && (
    <DataTableFilters
      columns={columns}
      columnsVisible={columnsVisible}
      onColumnVisibilityChange={setColumnsVisible}
      {...filterConfig}
    />
  )

  return (
    <DataTableContext.Provider value={context}>
      <div className={className}>
        {filters}
        {bulk && select && select.selectedItems.length > 0 && (
          <BulkActions {...bulk} />
        )}
        <Table
          {...props}
          columns={columns}
          columnsVisible={columnsVisible}
          firstColumnStuck={firstColumnStuck}
        />
      </div>
    </DataTableContext.Provider>
  )
}

export const DataTable = styled(DataTableLayout)<DataTableProps>`
  ${reset}
`
