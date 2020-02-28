import styled, { css } from 'styled-components'
import { ReactNode } from 'react'
import { ActionListHeaderColumn } from './ActionListHeader'
import { ActionListItemColumn } from './ActionListItemColumn'
import { ActionListRowContainer } from './ActionListRowContainer'

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

export const ActionList = styled.div<ActionListProps>`
  ${textAlignRightCSS}

  ${primaryKeyColumnCSS}

  ${ActionListRowContainer} {
    display: grid;
    grid-template-columns: ${props =>
      props.columns.map(column => `${column.widthPercent}%`).join(' ')};
  }
`
