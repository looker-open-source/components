/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import { seriesLineWidth } from './seriesLineWidth'
import { mockLineConfig, mockFields, mockSdkDataResponse } from '../fixtures'
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
