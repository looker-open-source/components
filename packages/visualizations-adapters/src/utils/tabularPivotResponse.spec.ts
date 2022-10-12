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

import { tabularPivotResponse } from './tabularPivotResponse'
import {
  mockPivots,
  mockSdkPivotDataResponse,
  mockSdkFieldsResponse,
} from '../__mocks__'

import type { Fields } from '../types'

describe('tabularPivotResponse', () => {
  it('flattens raw pivot data', () => {
    const transformedData = tabularPivotResponse({
      data: mockSdkPivotDataResponse,
      fields: mockSdkFieldsResponse as Fields,
      pivots: mockPivots,
    })

    const expectedKeys = [
      'orders.created_date',
      'complete - orders.count',
      'pending - orders.count',
      'cancelled - orders.count',
      'complete - orders.average_total_amount_of_order_usd',
      'pending - orders.average_total_amount_of_order_usd',
      'cancelled - orders.average_total_amount_of_order_usd',
    ]

    expectedKeys.forEach((key) => {
      expect(transformedData[0][key]).not.toBeUndefined()
    })

    expect(transformedData[0]['pending - orders.count']).toBe(38)
    expect(
      transformedData[1]['pending - orders.average_total_amount_of_order_usd']
    ).toBe(80.47117647058822)
  })
})
