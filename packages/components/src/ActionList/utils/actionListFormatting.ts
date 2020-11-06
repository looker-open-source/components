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
import { SpaceVertical } from '../../Layout/Space'
import { ColumnProps, ActionListItemColumn } from '..'

function filterUndefined<T>(t: T | undefined): t is T {
  return t !== undefined
}

export const getNumericColumnIndices = (
  columns: ColumnProps[],
  visibleColumns: string[],
  select?: boolean
) =>
  columns
    .filter((c) => visibleColumns.includes(c.id) || c.hide === undefined)
    .map((c, index) =>
      c.type === 'number' ? (select ? index + 1 : index) : undefined
    )
    .filter(filterUndefined)

export const numericColumnCSS = (columnIndices: number[]) =>
  css`
    ${columnIndices.map(
      (columnIndex) =>
        css`
          ${ActionListItemColumn}:nth-child(${columnIndex + 1}) {
            text-align: right;
            ${SpaceVertical} {
              flex-direction: row-reverse;
            }
          }
        `
    )}
  `
