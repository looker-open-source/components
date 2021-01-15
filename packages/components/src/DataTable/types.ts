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

import { ReactNode } from 'react'
import { FieldFilter } from '../Form/Inputs/InputFilters'
import { DataTableColumns } from './Column'

export interface DataTableProps {
  children: ReactNode
  caption: string
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
