/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import type { CTableSeries } from '..'
import { mockTableConfig, mockFields, mockSdkDataResponse } from '../fixtures'
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
