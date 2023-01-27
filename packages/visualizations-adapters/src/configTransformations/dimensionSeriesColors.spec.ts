/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import { dimensionSeriesColors } from './dimensionSeriesColors'
import { mockLineConfig, mockFields, mockSdkDataResponse } from '../fixtures'
import { tabularResponse } from '../utils'
import type { CSeriesBasic } from '../types'

const tabularData = tabularResponse(mockSdkDataResponse)

type ObjectSeries = { [k: string]: CSeriesBasic }
type ArraySeries = CSeriesBasic[]

describe('dimensionSeriesColors', () => {
  describe('series as object', () => {
    it('sets a unique color for up to 50 data points', () => {
      const { config: configResult } = dimensionSeriesColors({
        data: tabularData,
        fields: mockFields,
        config: { ...mockLineConfig, series: {} },
      })

      expect(Object.values(configResult.series as ObjectSeries).length).toEqual(
        50
      )
      expect((configResult.series as ObjectSeries)['2019-12-22']).toEqual({
        color: '#6c43e0',
      })
    })

    it('preserves user series overrides', () => {
      const { config: configResult } = dimensionSeriesColors({
        data: tabularData,
        fields: mockFields,
        config: {
          ...mockLineConfig,
          series: { '2019-12-22': { color: '#00FF00' } },
        },
      })

      expect((configResult.series as ObjectSeries)['2019-12-22']).toEqual({
        color: '#00FF00',
      })
    })
  })

  describe('series as array', () => {
    it('sets a unique color for up to 50 data points', () => {
      const { config: configResult } = dimensionSeriesColors({
        data: tabularData,
        fields: mockFields,
        config: { ...mockLineConfig, series: [] },
      })

      expect((configResult.series as ArraySeries).length).toEqual(50)
      expect((configResult.series as ArraySeries)[0]).toEqual({
        color: '#6c43e0',
      })
    })

    it('preserves user series overrides', () => {
      const { config: configResult } = dimensionSeriesColors({
        data: tabularData,
        fields: mockFields,
        config: {
          ...mockLineConfig,
          series: [{ color: '#00FF00' }],
        },
      })

      expect((configResult.series as ArraySeries)[0]).toEqual({
        color: '#00FF00',
      })
    })
  })
})
