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

import type { CTableSeries } from '..'
import { mockTableConfig, mockFields, mockSdkDataResponse } from '../__mocks__'
import { seriesCellVis } from './seriesCellVis'

describe('seriesCellVis', () => {
  test('series as array', () => {
    const series: CTableSeries[] = [
      { cell_visualization: true, color: 'blue' },
      { cell_visualization: false, visible: false },
    ]

    const transformedConfig = seriesCellVis({
      config: { ...mockTableConfig, series },
      data: mockSdkDataResponse,
      fields: mockFields,
    })

    expect(transformedConfig.config.series).toEqual(series)
  })

  test('series as object', () => {
    const series: { [k: string]: CTableSeries } = {
      'orders.count': { color: 'blue', visible: true },
      'orders.average_total_amount_of_order_usd': {
        color: 'red',
        label: 'Average',
        visible: false,
      },
    }
    const series_cell_visualizations = {
      'orders.count': {
        is_active: true,
      },
      'orders.average_total_amount_of_order_usd': {
        is_active: false,
      },
    }

    const transformedConfig = seriesCellVis({
      config: { ...mockTableConfig, series, series_cell_visualizations },
      data: mockSdkDataResponse,
      fields: mockFields,
    })

    expect(transformedConfig.config.series).toEqual({
      'orders.count': {
        cell_visualization: true,
        ...series['orders.count'],
      },
      'orders.average_total_amount_of_order_usd': {
        cell_visualization: false,
        ...series['orders.average_total_amount_of_order_usd'],
      },
    })
  })
})
