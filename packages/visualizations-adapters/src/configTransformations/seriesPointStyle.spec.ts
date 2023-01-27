/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import { seriesPointStyle } from './seriesPointStyle'
import { mockLineConfig, mockFields, mockSdkDataResponse } from '../fixtures'
import type { CLineSeries } from '../adapters'

describe('seriesPointStyle', () => {
  test('series as array', () => {
    const series: CLineSeries[] = [
      { color: 'blue', style: 'filled' },
      { color: 'red' },
    ]

    const transformedConfig = seriesPointStyle({
      config: { ...mockLineConfig, point_style: 'none', series },
      data: mockSdkDataResponse,
      fields: mockFields,
    })

    expect(transformedConfig.config.series).toEqual([
      series[0],
      { ...series[1], style: 'none' },
    ])
  })

  test('series as object', () => {
    const series: { [k: string]: CLineSeries } = {
      'orders.count': { color: 'blue', style: 'filled' },
      'orders.average_total_amount_of_order_usd': { color: 'red' },
    }

    const transformedConfig = seriesPointStyle({
      config: { ...mockLineConfig, point_style: 'none', series },
      data: mockSdkDataResponse,
      fields: mockFields,
    })

    expect(transformedConfig.config.series).toEqual({
      'orders.count': series['orders.count'],
      'orders.average_total_amount_of_order_usd': {
        ...series['orders.average_total_amount_of_order_usd'],
        style: 'none',
      },
    })
  })
})
