/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import type { DataTableColumns } from '../Column'
import { getNumericColumnIndices } from './dataTableFormatting'

describe('DataTable CSS Utils', () => {
  const columns: DataTableColumns = [
    {
      id: 'id',
      title: 'ID',
      type: 'number',
    },
    {
      id: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      id: 'age',
      title: 'Age',
      type: 'number',
    },
  ]

  test('getNumericColumnIndices', () => {
    expect(getNumericColumnIndices(columns, ['id', 'name', 'age'])).toEqual([
      1, 3,
    ])
  })
})
