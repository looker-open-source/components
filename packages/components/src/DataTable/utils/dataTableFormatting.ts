/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import { css } from 'styled-components'
import { SpaceVertical } from '../../Layout/Space'
import type { DataTableColumns } from '..'
import { DataTableCell } from '..'

function filterUndefined<T>(t: T | undefined): t is T {
  return t !== undefined
}

export const getNumericColumnIndices = (
  columns: DataTableColumns,
  visibleColumns: string[]
) =>
  columns
    .filter(c => visibleColumns.includes(c.id) || c.hide === undefined)
    .map((c, index) => (c.type === 'number' ? index + 1 : undefined))
    .filter(filterUndefined)

export const numericColumnCSS = (columnIndices: number[]) =>
  css`
    ${columnIndices.map(
      columnIndex =>
        css`
          ${DataTableCell}:nth-child(${columnIndex + 1}) {
            text-align: right;
            ${SpaceVertical} {
              flex-direction: row-reverse;
            }
          }
        `
    )}
  `
