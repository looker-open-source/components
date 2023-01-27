/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import type { DimensionMetadata } from '@looker/visualizations-adapters'
import { nestPivotedFields } from '.'

it('Nests pivots inside columns arrays', () => {
  const result = nestPivotedFields({
    pivotList: [
      {
        name: 'orders.status',
        label: 'Order Status',
      } as DimensionMetadata,
      {
        name: 'users.gender',
        label: 'User Gender',
      } as DimensionMetadata,
    ],
    nestedPivots: [
      { id: 'orders.count', header: 'Order Count' },
      { id: 'users.count', header: 'Users Count' },
    ],
    pivotIndex: 0,
  })

  expect(result).toEqual({
    id: 'users.gender',
    header: 'User Gender',
    columns: [
      {
        id: 'orders.status',
        header: 'Order Status',
        columns: [
          { id: 'orders.count', header: 'Order Count' },
          { id: 'users.count', header: 'Users Count' },
        ],
      },
    ],
  })
})

it('Nests column array inside a column array when pivotList array is empty', () => {
  const result = nestPivotedFields({
    pivotList: [], // testing for empty pivotList edge case
    nestedPivots: [{ id: 'column1', header: 'Column One' }],
    pivotIndex: 0,
  })

  expect(result).toEqual({
    columns: [
      {
        header: 'Column One',
        id: 'column1',
      },
    ],
    id: 'pivot-field-0',
  })
})
