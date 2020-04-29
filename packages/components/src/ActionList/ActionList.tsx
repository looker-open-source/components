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
import React, { FC, ReactNode, useState } from 'react'
import { MixedBoolean } from '../Form'
import {
  ActionListHeader,
  generateActionListHeaderColumns,
} from './ActionListHeader'
import { ActionListItemColumn } from './ActionListItemColumn'
import { ActionListRowColumns } from './ActionListRow'
import { actionListCheckboxWidth } from './ActionListCheckbox'
import { ActionListContext } from './ActionListContext'
import { ActionListHeaderColumn } from './ActionListHeader/ActionListHeaderColumn'
import {
  getPrimaryKeyColumnIndices,
  primaryKeyColumnCSS,
  getNumericColumnIndices,
  numericColumnCSS,
} from './utils/actionListFormatting'

export type ActionListColumns = ActionListColumn[]
export interface ActionListColumn {
  title: ReactNode
  /**
   * A unique identifier for a given column
   * Note: A column object's id should match a key in your data object template
   */
  id: string
  /**
   * Determines whether a given column is a primary key or not
   * @default false
   */
  primaryKey?: boolean
  /**
   * In some locales, we may change horizontal alignment of 'number'
   * @default 'string'
   */
  type?: 'string' | 'number'
  /**
   * Determines how much of a row's width this column should take up
   */
  widthPercent?: number
  /**
   * Determines whether a column is sortable (i.e. whether a column's header can be clicked to perform a sort)
   * Note: You must provide a onSort callback to the parent <ActionList/> component
   * @default false
   */
  canSort?: boolean
  sortDirection?: 'asc' | 'desc'
}

export interface ActionListProps {
  columns: ActionListColumns
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
   * Allow the user to select ActionListItems.
   * Note: Implemented as a checkbox next to each item row.
   * @default false
   */
  canSelect?: boolean
  /**
   * Allow the user to select all ActinoListItems
   * Note: Implemented as a checkbox left of the header row
   * @default false
   */
  canSelectAll?: boolean
  /**
   * Callback performed when user makes a selection
   */
  onSelect?: (id: string) => void
  /**
   * Callback performed when user makes selects the header checkbox
   */
  onSelectAll?: () => void
  /**
   * The ids of all ActionListItems which should be displayed as "selected"
   */
  itemsSelected?: string[]
  /**
   * Ignore onClick behavior for row and trigger selection instead. Also changes row :hover behavior slightly
   * @default false
   */
  onClickRowSelect?: boolean
}

export const ActionListLayout: FC<ActionListProps> = ({
  canSelect = false,
  canSelectAll = false,
  className,
  header = true,
  children,
  columns,
  itemsSelected = [],
  onClickRowSelect = false,
  onSelect,
  onSelectAll,
  onSort,
}) => {
  const [allItems, setAllItems] = useState([] as string[])

  // Includes a check for allItems length to prevent the in-between state where ActionList first loads
  // and allItems is an empty array (which leads to header checkbox being checked for a split-second)
  const allSelected: MixedBoolean =
    !!allItems.length && allItems.every((item) => itemsSelected.includes(item))
      ? true
      : allItems.some((item) => itemsSelected.includes(item))
      ? 'mixed'
      : false

  const actionListHeader =
    header === true ? (
      <ActionListHeader>
        {generateActionListHeaderColumns(columns)}
      </ActionListHeader>
    ) : header === false ? null : (
      <ActionListHeader>{header}</ActionListHeader>
    )

  const context = {
    allItems,
    allSelected,
    canSelect,
    canSelectAll: canSelect && canSelectAll,
    columns,
    itemsSelected,
    onClickRowSelect,
    onSelect,
    onSelectAll,
    onSort,
    setAllItems,
  }

  return (
    <ActionListContext.Provider value={context}>
      <div className={className}>
        {actionListHeader}
        <div>{children}</div>
      </div>
    </ActionListContext.Provider>
  )
}

export const ActionList = styled(ActionListLayout)<ActionListProps>`
  ${ActionListRowColumns} {
    display: grid;
    grid-template-columns: ${(props) =>
      props.columns.map((column) => `${column.widthPercent}%`).join(' ')};
    align-items: center;
  }

  ${/* sc-selector */ ActionListItemColumn}:first-child {
    padding-left: ${({ canSelect, theme }) =>
      canSelect ? theme.space.none : undefined};
  }

  ${/* sc-selector */ ActionListHeaderColumn}:first-child {
    padding-left: ${({ canSelect, theme }) =>
      canSelect ? theme.space.none : undefined};
  }

  ${/* sc-selector */ ActionListItemColumn},
  ${/* sc-selector */ ActionListHeaderColumn} {
    display: flex;
    padding: ${(props) => props.theme.space.small};
  }

  ${ActionListHeader} {
    padding-left: ${({ canSelect, canSelectAll }) =>
      canSelect && !canSelectAll ? actionListCheckboxWidth : undefined};
  }

  ${(props) => numericColumnCSS(getNumericColumnIndices(props.columns))}
  ${(props) => primaryKeyColumnCSS(getPrimaryKeyColumnIndices(props.columns))}
`
