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
  ActionListHeaderColumn,
  generateActionListHeaderColumns,
} from './ActionListHeader'
import { ActionListItemColumn } from './ActionListItemColumn'
import { ActionListRowColumns } from './ActionListRow'

export type ActionListColumns = ActionListColumn[]
export interface ActionListColumn {
  children: ReactNode
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
}

export interface ActionListProps {
  columns: ActionListColumns
  className?: string
  /**
   * default: true
   */
  header?: boolean | ReactNode
}

export const ActionListLayout: FC<ActionListProps> = ({
  className,
  header = true,
  children,
  columns,
}) => {
  const actionListHeader =
    header === true ? (
      <ActionListHeader>
        {generateActionListHeaderColumns(columns)}
      </ActionListHeader>
    ) : header === false ? null : (
      <ActionListHeader>{header}</ActionListHeader>
    )

  return (
    <div className={className}>
      {actionListHeader}
      <div>{children}</div>
    </div>
  )
}

const textAlignRightCSS = css<ActionListProps>`
  ${props =>
    props.columns.map((column: ActionListColumn, index: number) =>
      column.type === 'number'
        ? `
            ${ActionListItemColumn}:nth-child(${index + 1}),
            ${ActionListHeaderColumn}:nth-child(${index + 1}) {
              text-align: right;
            }
          `
        : ''
    )}
`

const primaryKeyColumnCSS = css<ActionListProps>`
  ${props =>
    props.columns.map((column: ActionListColumn, index: number) =>
      column.primaryKey
        ? `
          ${ActionListItemColumn}:nth-child(${index + 1}) {
            color: ${props.theme.colors.palette.charcoal900};
            font-size: ${props.theme.fontSizes.small};
          }
        `
        : `
          ${ActionListItemColumn}:nth-child(${index + 1}) {
            color: ${props.theme.colors.palette.charcoal700};
            font-size: ${props.theme.fontSizes.xsmall};
          }
        `
    )}
`

export const ActionList = styled(ActionListLayout)<ActionListProps>`
  ${textAlignRightCSS}

  ${primaryKeyColumnCSS}

  ${ActionListRowColumns} {
    display: grid;
    grid-template-columns: ${props =>
      props.columns.map(column => `${column.widthPercent}%`).join(' ')};
  }
`
