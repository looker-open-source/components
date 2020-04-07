import { css } from 'styled-components'
import {
  ActionListColumn,
  ActionListHeaderColumn,
  ActionListItemColumn,
} from '..'

function filterUndefined<T>(t: T | undefined): t is T {
  return t !== undefined
}

export const getPrimaryKeyColumnIndices = (columns: ActionListColumn[]) =>
  columns
    .map((column, index) => (column.primaryKey ? index : undefined))
    .filter(filterUndefined)

export const primaryKeyColumnCSS = (columnIndices: number[]) =>
  css`
    ${columnIndices.map(
      (columnIndex) =>
        css`
          ${ActionListItemColumn}:nth-child(${columnIndex + 1}) {
            color: ${(props) => props.theme.colors.palette.charcoal900};
            font-size: ${(props) => props.theme.fontSizes.small};
          }
        `
    )}
  `

export const getNumericColumnIndices = (columns: ActionListColumn[]) =>
  columns
    .map((column, index) => (column.type === 'number' ? index : undefined))
    .filter(filterUndefined)

export const numericColumnCSS = (columnIndices: number[]) =>
  css`
    ${columnIndices.map(
      (columnIndex) =>
        css`
        ${ActionListItemColumn}:nth-child(${columnIndex + 1}),
        ${ActionListHeaderColumn}:nth-child(${columnIndex + 1}) {
          flex-direction: row-reverse
        }
      `
    )}
  `
