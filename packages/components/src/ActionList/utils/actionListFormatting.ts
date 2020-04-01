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
