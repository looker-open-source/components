/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import type { SDKRecord } from '@looker/visualizations-adapters'
import type { Header, Table } from '@tanstack/react-table'

/**
 * If any header elements span multiple columns, we need
 * to fill in empty array elements to keep data columns aligned
 * with header columns.
 * @param table: a tanstack table object
 * @returns An array of header rows that all have the same amount of columns.
 */

export const normalizeHeaderColumns = (table: Table<SDKRecord>) =>
  table.getHeaderGroups().map(headerGroup => {
    const headers = headerGroup.headers.flatMap(
      (header): Array<Header<SDKRecord, unknown> | null> => {
        if (header.colSpan > 1) {
          const spacerArray: null[] = Array(header.colSpan - 1).fill(null)
          return [header, ...spacerArray]
        }
        return [header]
      }
    )
    return { ...headerGroup, headers }
  })
