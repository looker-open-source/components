/*

 MIT License

 Copyright (c) 2022 Looker Data Sciences, Inc.

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
