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

import { seriesSize } from './seriesSize'
import { mockLineConfig, mockFields, mockSdkDataResponse } from '../__mocks__'
import type { CScatterSeries } from '../adapters'

describe('seriesSize', () => {
  const size_by_field = 'orders.count'

  test('series as array', () => {
    const series: CScatterSeries[] = [
      { color: 'blue' },
      { color: 'red', size_by: 'orders.average_total_amount_of_order_usd' },
    ]

    const transformedConfig = seriesSize({
      config: { ...mockLineConfig, size_by_field, series },
      data: mockSdkDataResponse,
      fields: mockFields,
    })

    expect(transformedConfig.config.series).toEqual([
      { ...series[0], size_by: 'orders.count' },
      { ...series[1], size_by: 'orders.average_total_amount_of_order_usd' },
    ])
  })

  test('series as object', () => {
    const series: { [key: string]: CScatterSeries } = {
      'orders.count': { color: 'blue' },
      'orders.average_total_amount_of_order_usd': {
        color: 'red',
        size_by: 'orders.average_total_amount_of_order_usd',
      },
    }

    const transformedConfig = seriesSize({
      config: { ...mockLineConfig, size_by_field, series },
      data: mockSdkDataResponse,
      fields: mockFields,
    })

    expect(transformedConfig.config.series).toEqual({
      'orders.count': { ...series['orders.count'], size_by: 'orders.count' },
      'orders.average_total_amount_of_order_usd': {
        ...series['orders.average_total_amount_of_order_usd'],
        size_by: 'orders.average_total_amount_of_order_usd',
      },
    })
  })

  test('Array series: removes invalid size_by keys', () => {
    const series: CScatterSeries[] = [{ size_by: '' }, { size_by: 'none' }]

    const transformedConfig = seriesSize({
      config: { ...mockLineConfig, series },
      data: mockSdkDataResponse,
      fields: mockFields,
    })

    expect(transformedConfig.config.series).toEqual([
      { size_by: false },
      { size_by: false },
    ])
  })

  test('Named series: removes invalid size_by keys', () => {
    const series: { [key: string]: CScatterSeries } = {
      'orders.count': {
        size_by: 'none',
      },
    }

    const transformedConfig = seriesSize({
      config: { ...mockLineConfig, series },
      data: mockSdkDataResponse,
      fields: mockFields,
    })

    expect(transformedConfig.config.series).toEqual(
      expect.objectContaining({
        'orders.count': { size_by: false },
      })
    )
  })
})
