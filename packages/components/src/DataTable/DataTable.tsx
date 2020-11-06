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
import React, { FC, ReactNode, useState } from 'react'
import { MixedBoolean } from '../Form'
import { FieldFilter } from '../Form/Inputs/InputFilters'
import { BulkActions } from './BulkActions'
import { DataTableColumns } from './Column'
import { DataTableContext } from './DataTableContext'
import { DataTableFilters } from './Filters/DataTableFilters'
import { Table } from './Table'

export interface DataTableProps {
  children: ReactNode
  columns: DataTableColumns
  className?: string

  /**
   * Sort function provided by the developer
   */
  onSort?: (id: string, sortDirection: 'asc' | 'desc') => void
  /**
   * Options for select and select all behavior. Having a non-null select prop will auto-enable select behavior
   */
  select?: SelectConfig
  /**
   * ID of the header row. Used for the aria-describedby of the select all checkbox.
   * Note: If undefined, this will be auto-generated. Generally only explicitly specified
   * in some limited test scenarios.
   */
  headerRowId?: string
  /**
   * Options for bulk actions. Having a non-null bulk prop will auto-enable the control bar
   */
  bulk?: BulkActionsConfig
  /**
   * Object containing list of filters the user can select from
   * and an onFilter callback to update the filters
   **/
  filterConfig?: FilterConfig
  /**
   * Which columns should be "stuck" to the edge of their frame when DataTable content overflows
   *
   * Default here a bit convoluted:
   *  `select` is specified `firstColumnStuck` will default to `true`
   *  `select` is not specified `firstColumnStuck` will default to `false`
   *   Explicit specification of `firstColumnStuck` will always determine outcome
   */
  firstColumnStuck?: boolean

  /**
   * Specify "state" of DataTable to control display of data within the table
   *  - `loading` will replace content with loading behavior (currently `Spinner`)
   *  - 'noResults` will display "No Results" rather than DataTable content (customize via `noResultsDisplay`)
   * Display loading behavior rather than DataTable content
   */
  state?: 'loading' | 'noResults'
  /**
   * Text to be displayed when no results state displayed
   */
  noResultsDisplay?: ReactNode
}

export interface SelectConfig {
  /**
   * The ids of all DataTableItems which should be displayed as "selected"
   */
  selectedItems: string[]
  /**
   * An array containing the id's of all visible items (i.e. all items on the current page)
   * This is primarily used when determining the checked state of the select all checkbox
   */
  pageItems: string[]
  /**
   * Ignore onClick behavior for row and trigger selection instead. Also changes row :hover behavior slightly
   * @default false
   */
  onClickRowSelect?: boolean
  /**
   * Callback performed when user makes a selection
   */
  onSelect: (id: string) => void
  /**
   * Callback performed when user makes selects the header checkbox
   */
  onSelectAll: () => void
}

export interface FilterConfig {
  filters: FieldFilter[]
  onFilter: (filters: FieldFilter[]) => void
}

export interface BulkActionsConfig {
  /**
   * Bulk actions that are available when one or more items are selected
   */
  actions: ReactNode
  /**
   * Triggered when the user presses the "Clear Selection" button
   * Note: The "Clear Selection" button will only appear right after first hitting the "Select all X results" button in the control bar
   */
  onTotalClearAll: () => void
  /**
   * Triggered when the user presses on the "Select all X results" button in the control bar
   */
  onTotalSelectAll: () => void
  /**
   * The total number of visible items
   * Primary purpose is to set the text of the Control Bar's "displayed items selected" text
   * Note: This should NOT include disabled items
   */
  pageCount: number
  /**
   * The total number of items, both visible and nonvisible
   * Primary purpose is to set the text of the Control Bar's primary action
   * Note: This should NOT include disabled items
   */
  totalCount: number
}

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
