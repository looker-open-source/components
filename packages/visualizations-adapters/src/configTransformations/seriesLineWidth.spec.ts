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

import { seriesLineWidth } from './seriesLineWidth'
import { mockLineConfig, mockFields, mockSdkDataResponse } from '../__mocks__'
import type { CLineSeries } from '../adapters'

describe('seriesLineWidth', () => {
  test('series as array', () => {
    const series: CLineSeries[] = [
      { color: 'blue', line_width: 22 },
      { color: 'red' },
    ]

    const transformedConfig = seriesLineWidth({
      config: { ...mockLineConfig, series },
      data: mockSdkDataResponse,
      fields: mockFields,
    })

    /**
     * We expect the series object with a line_width property to be the same,
     * but the series object without a line_width should be set to the default line_width: 1
     */
    expect(transformedConfig.config.series).toEqual([
      series[0],
      { ...series[1], line_width: 3 },
    ])
  })

  test('series as object', () => {
    const series: { [k: string]: CLineSeries } = {
      'orders.count': { color: 'blue', line_width: 22 },
      'orders.average_total_amount_of_order_usd': { color: 'red' },
    }

    const transformedConfig = seriesLineWidth({
      config: { ...mockLineConfig, series },
      data: mockSdkDataResponse,
      fields: mockFields,
    })

    /**
     * We expect the series object with a line_width property to be the same,
     * but the series object without a line_width should be set to the default line_width: 1
     */
    expect(transformedConfig.config.series).toEqual({
      'orders.count': series['orders.count'],
      'orders.average_total_amount_of_order_usd': {
        ...series['orders.average_total_amount_of_order_usd'],
        line_width: 3,
      },
    })
  })
})
