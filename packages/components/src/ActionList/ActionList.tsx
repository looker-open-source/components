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

import styled, { css } from 'styled-components'
import React, { FC, ReactNode } from 'react'
import {
  ActionListHeader,
  generateActionListHeaderColumns,
} from './ActionListHeader'
import { ActionListItemColumn } from './ActionListItemColumn'
import { ActionListRowColumns } from './ActionListRow'
import { ActionListContext } from './ActionListContext'
import { ActionListHeaderColumn } from './ActionListHeader/ActionListHeaderColumn'

export type ActionListColumns = ActionListColumn[]
export interface ActionListColumn {
  children: ReactNode
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
   * Note: You must provide a doSort callback to the parent <ActionList/> component
   * @default false
   */
  canSort?: boolean
  sortDirection?: 'asc' | 'desc'
}

export interface ActionListProps {
  columns: ActionListColumns
  className?: string
  /**
   * default: true
   */
  header?: boolean | ReactNode
  /**
   * Sort function provided by the developer
   */
  doSort?: (id: string, sortDirection: 'asc' | 'desc') => void
}

export const ActionListLayout: FC<ActionListProps> = ({
  className,
  header = true,
  children,
  columns,
  doSort,
}) => {
  const actionListHeader =
    header === true ? (
      <ActionListHeader>
        {generateActionListHeaderColumns(columns)}
      </ActionListHeader>
    ) : header === false ? null : (
      <ActionListHeader>{header}</ActionListHeader>
    )

  const context = {
    columns,
    doSort,
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

function filerUndefined<T>(t: T | undefined): t is T {
  return t !== undefined
}

const getPrimaryKeyColumnIndices = (columns: ActionListColumn[]) =>
  columns
    .map((column, index) => (column.primaryKey ? index : undefined))
    .filter(filerUndefined)

const primaryKeyColumnCSS = (columns: number[]) =>
  css`
    ${columns.map(
      column =>
        css`
          ${ActionListItemColumn}:nth-child(${column + 1}) {
            color: ${props => props.theme.colors.palette.charcoal900};
            font-size: ${props => props.theme.fontSizes.small};
          }
        `
    )}
  `

const getNumericColumnIndices = (columns: ActionListColumn[]) =>
  columns
    .map((column, index) => (column.type === 'number' ? index : undefined))
    .filter(filerUndefined)

const numericColumnCSS = (columns: number[]) =>
  css`
    ${columns.map(
      column =>
        css`
        ${ActionListItemColumn}:nth-child(${column + 1}),
        ${ActionListHeaderColumn}:nth-child(${column + 1}) {
          flex-direction: row-reverse
        }
      `
    )}
  `

export const ActionList = styled(ActionListLayout)<ActionListProps>`
  ${ActionListRowColumns} {
    display: grid;
    grid-template-columns: ${props =>
      props.columns.map(column => `${column.widthPercent}%`).join(' ')};
    align-items: center;
  }

  ${/* sc-selector */ ActionListItemColumn},
  ${/* sc-selector */ ActionListHeaderColumn} {
    display: flex;
    padding: ${props => props.theme.space.small};
  }

  ${props => numericColumnCSS(getNumericColumnIndices(props.columns))}
  ${props => primaryKeyColumnCSS(getPrimaryKeyColumnIndices(props.columns))}
`
