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

import { buildPivotFields } from './buildPivotFields'
import { mockFields, mockPivots } from '../__mocks__'

describe('buildPivotFields', () => {
  it('creates pivot measure objects for each measure and pivot value pairing', () => {
    const transformedFields = buildPivotFields({
      fields: mockFields,
      pivots: mockPivots,
    })

    const { measures: pivotMeasures } = transformedFields

    // 2 measures * 3 pivot values
    expect(pivotMeasures.length).toBe(6)

    // Check for orders.count - pivot complete object
    const ordersCountComplete = pivotMeasures.find(
      (pivotMeasure) => pivotMeasure.name === 'complete - orders.count'
    ) || { label: 'faux_label', label_short: 'faux_label_short' }

    expect(ordersCountComplete).not.toBeUndefined()
    expect(ordersCountComplete.label_short).toBe('Complete')
    expect(ordersCountComplete.label).toBe('Orders Count')

    // Check for orders.average_total_amount_of_order_usd - pivot pending object
    const ordersAveragePending = pivotMeasures.find(
      (pivotMeasure) =>
        pivotMeasure.name ===
        'pending - orders.average_total_amount_of_order_usd'
    ) || { label: 'faux_label', label_short: 'faux_label_short' }
    expect(ordersAveragePending).not.toBeUndefined()
    expect(ordersAveragePending.label_short).toBe('Pending')
    expect(ordersAveragePending.label).toBe(
      'Orders Average Total Amount of Order USD'
    )
  })

  it('adds a pivoted_label property to measure field objects', () => {
    const { measures } = buildPivotFields({
      fields: mockFields,
      pivots: mockPivots,
    })

    // Check for orders.count - pivot complete object
    const ordersCountComplete = measures.find(
      (pivotMeasure) => pivotMeasure.name === 'complete - orders.count'
    ) || {
      label: 'faux_label',
      label_short: 'faux_label_short',
      pivoted_label: 'faux_pivoted_label',
    }

    expect(ordersCountComplete.pivoted_label).toBe('Orders Count: Complete')
  })
})
