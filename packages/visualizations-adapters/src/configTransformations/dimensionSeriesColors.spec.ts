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

import { dimensionSeriesColors } from './dimensionSeriesColors'
import { mockLineConfig, mockFields, mockSdkDataResponse } from '../__mocks__'
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
