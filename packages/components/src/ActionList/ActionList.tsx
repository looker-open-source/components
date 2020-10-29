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
import ReactResizeDetector from 'react-resize-detector'
import { MixedBoolean } from '../Form'
import { FieldFilter } from '../Form/Inputs/InputFilters'
import { ActionListBulkControls } from './Bulk/ActionListBulkControls'
import { ActionListFilters } from './Filters/ActionListFilters'
import { ActionListContext } from './ActionListContext'

import { ColumnsProps } from './Column/column'
import { ActionListTable } from './ActionListTable'

export interface ActionListProps {
  columns: ColumnsProps
  className?: string
  /**
   * @default: true
   */
  header?: boolean | ReactNode
  /**
   * Sort function provided by the developer
   */
  onSort?: (id: string, sortDirection: 'asc' | 'desc') => void
  /**
   * Options for select and select all behavior. Having a non-null select prop will auto-enable Action List select behavior
   */
  select?: SelectConfig

  /**
   * Which columns should be "stuck" the edge of their frame when DataTable content overflows
   *
   * Default here a bit convoluted:
   *  `select` is specified `firstColumnStuck` will default to `true`
   *  `select` is not specified `firstColumnStuck` will default to `false`
   *   Explicit specification of `firstColumnStuck` will always determine outcome
   */
  firstColumnStuck?: boolean

  /**
   * ID of the header row. Used for the aria-describedby of the select all checkbox.
   * Note: If undefined, this will be auto-generated
   */
  headerRowId?: string
  /**
   * Options for bulk actions. Having a non-null bulk prop will auto-enable an Action List's control bar
   */
  bulk?: BulkActionsConfig
  /**
   * Object containing list of filters the user can select from
   * and an onFilter callback to update the filters
   **/
  filterConfig?: FilterConfig
  /**
   * specify specific columns to be displayed
   **/
  canCustomizeColumns?: boolean
}

export interface SelectConfig {
  /**
   * The ids of all ActionListItems which should be displayed as "selected"
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
   * The total number of items, both visible and nonvisible, in this Action List
   * Primary purpose is to set the text of the Control Bar's primary action
   * Note: This should NOT include disabled items
   */
  totalCount: number
}

export const ActionListLayout: FC<ActionListProps> = (props) => {
  const {
    bulk,
    canCustomizeColumns,
    className,
    columns,
    filterConfig,
    onSort,
    select,
    firstColumnStuck = Boolean(select),
  } = props

  const defaultDisplayColumns = columns.filter(
    (column: any) => !column.defaultHide && column
  )

  const [columnsList, setColumnsList] = useState<string[]>(
    defaultDisplayColumns.map((c) => c.id)
  )

  const handleVisibleColumns = (selectedColumns: string[]) =>
    setColumnsList(selectedColumns)

  const columnsToDisplay = defaultDisplayColumns.map((column) =>
    columnsList.includes(column.id)
  )

  const visibleColumns = defaultDisplayColumns.filter((column) =>
    columnsList.includes(column.id)
  )

  const allSelected: MixedBoolean =
    select && select.pageItems.every((id) => select.selectedItems.includes(id))
      ? true
      : select &&
        select.pageItems.some((id) => select.selectedItems.includes(id))
      ? 'mixed'
      : false

  const context = {
    allSelected,
    columnsToDisplay,
    defaultDisplayColumns,
    onSort,
    select,
  }
  const filters = (filterConfig || canCustomizeColumns) && (
    <ActionListFilters
      columnsList={columnsList}
      columns={defaultDisplayColumns}
      {...filterConfig}
      canCustomizeColumns={canCustomizeColumns}
      onChange={handleVisibleColumns}
    />
  )
  return (
    <ActionListContext.Provider value={context}>
      <div className={className}>
        {filters}
        {bulk && select && select.selectedItems.length > 0 && (
          <ActionListBulkControls {...bulk} />
        )}

        <ReactResizeDetector handleHeight>
          {(width: string) => (
            <ActionListTable
              {...props}
              columns={visibleColumns}
              renderedWidth={width}
              firstColumnStuck={firstColumnStuck}
            />
          )}
        </ReactResizeDetector>
      </div>
    </ActionListContext.Provider>
  )
}

export const ActionList = styled(ActionListLayout)<ActionListProps>`
  ${reset}
`
