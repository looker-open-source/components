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

import { seriesVisible } from './seriesVisible'
import { mockLineConfig, mockFields, mockSdkDataResponse } from '../__mocks__'
import type { CLineSeries } from '../adapters'

describe('seriesVisible', () => {
  const hidden_fields = ['orders.count']

  test('series as array', () => {
    const series: CLineSeries[] = [
      { color: 'blue' },
      { color: 'red', visible: false },
    ]

    const transformedConfig = seriesVisible({
      config: { ...mockLineConfig, hidden_fields, series },
      data: mockSdkDataResponse,
      fields: mockFields,
    })

    // If series is an array, we expect config.hidden_fields to be ignored
    expect(transformedConfig.config.series).toEqual([
      { ...series[0], visible: true },
      series[1],
    ])
  })

  test('series as object', () => {
    const series: { [key: string]: CLineSeries } = {
      'orders.count': { color: 'blue' },
      'orders.average_total_amount_of_order_usd': {
        color: 'red',
        visible: false,
      },
    }

    const transformedConfig = seriesVisible({
      config: { ...mockLineConfig, hidden_fields, series },
      data: mockSdkDataResponse,
      fields: mockFields,
    })

    // Expect orders.count to have visible set to false because it's included in config.hidden_fields
    expect(transformedConfig.config.series).toEqual({
      'orders.count': { ...series['orders.count'], visible: false },
      'orders.average_total_amount_of_order_usd': {
        ...series['orders.average_total_amount_of_order_usd'],
      },
    })
  })

  test('scatterplot: hide series referenced in size_by_field by default', () => {
    const series: { [key: string]: CLineSeries } = {
      'orders.count': { color: 'blue' },
      'orders.average_total_amount_of_order_usd': {
        color: 'red',
      },
    }

    const transformedConfig = seriesVisible({
      config: {
        ...mockLineConfig,
        type: 'scatter',
        size_by_field: 'orders.average_total_amount_of_order_usd',
        series,
      },
      data: mockSdkDataResponse,
      fields: mockFields,
    })

    // Expect orders.count to have visible set to false because it's included in config.hidden_fields
    expect(transformedConfig.config.series).toEqual({
      'orders.count': { color: 'blue', visible: true },
      'orders.average_total_amount_of_order_usd': {
        color: 'red',
        visible: false, // size_by_field
      },
    })
  })
})
