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

import { seriesColors } from './seriesColors'
import { mockLineConfig, mockFields, mockSdkDataResponse } from '../__mocks__'
import type { CSeriesBasic } from '../types'

describe('seriesColors', () => {
  const series_colors = {
    'orders.count': 'blue',
    'orders.average_total_amount_of_order_usd': 'green',
  }

  test('series as array', () => {
    const series: CSeriesBasic[] = [{}, { color: 'red' }]

    const transformedConfig = seriesColors({
      config: { ...mockLineConfig, series, series_colors },
      data: mockSdkDataResponse,
      fields: mockFields,
    })

    expect(transformedConfig.config.series).toEqual([
      { color: 'blue' },
      series[1],
    ])
  })

  test('series as object', () => {
    const series: { [k: string]: CSeriesBasic } = {
      'orders.count': {},
      'orders.average_total_amount_of_order_usd': { color: 'red' },
    }

    const transformedConfig = seriesColors({
      config: { ...mockLineConfig, series, series_colors },
      data: mockSdkDataResponse,
      fields: mockFields,
    })

    expect(transformedConfig.config.series).toEqual({
      'orders.count': { color: 'blue' },
      'orders.average_total_amount_of_order_usd': { color: 'red' },
    })
  })

  test('pivoted series', () => {
    const { config } = seriesColors({
      config: {
        ...mockLineConfig,
        // raw api format
        series_colors: {
          'Yes - orders.count': 'red',
          'Row Total - orders.count': 'blue',
        },
        // our supported format
        series: {
          'Yes - orders.count': {},
          '$$$_row_total_$$$ - orders.count': {},
        },
      },
      data: mockSdkDataResponse,
      fields: {
        ...mockFields,
        measures: [
          { ...mockFields.measures[0], name: 'Yes - orders.count' },
          {
            ...mockFields.measures[0],
            name: '$$$_row_total_$$$ - orders.count',
          },
        ],
      },
    })

    // merges series_colors into the series object
    expect(config.series).toEqual({
      'Yes - orders.count': { color: 'red' },
      '$$$_row_total_$$$ - orders.count': { color: 'blue' },
    })
  })
})
