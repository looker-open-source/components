/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import { seriesPointShape } from './seriesPointShape'
import { mockLineConfig, mockFields, mockSdkDataResponse } from '../fixtures'
import type { CLineSeries } from '../adapters'

describe('seriesPointShape', () => {
  test('series as array', () => {
    const series: CLineSeries[] = [
      { color: 'blue', shape: 'diamond' },
      { color: 'red' },
    ]

    const transformedConfig = seriesPointShape({
      config: { ...mockLineConfig, series },
      data: mockSdkDataResponse,
      fields: mockFields,
    })

    expect(transformedConfig.config.series).toEqual([
      series[0],
      { ...series[1], shape: 'circle' }, // sets default shape value of 'circle'
    ])
  })

  test('series as object', () => {
    const series: { [k: string]: CLineSeries } = {
      'orders.count': { color: 'blue', shape: 'diamond' },
      'orders.average_total_amount_of_order_usd': { color: 'red' },
    }

    const transformedConfig = seriesPointShape({
      config: { ...mockLineConfig, series },
      data: mockSdkDataResponse,
      fields: mockFields,
    })

    expect(transformedConfig.config.series).toEqual({
      'orders.count': series['orders.count'],
      'orders.average_total_amount_of_order_usd': {
        ...series['orders.average_total_amount_of_order_usd'],
        shape: 'circle',
      },
    })
  })
})
