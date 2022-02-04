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

import { normalizeChartTypes } from './normalizeChartTypes'
import { mockFields, mockSdkDataResponse } from '../__mocks__'

describe('normalizeChartTypes', () => {
  describe('config.type ===', () => {
    test('default', () => {
      const config = { type: 'default' as const }
      const { config: transformedConfig } = normalizeChartTypes({
        config,
        data: mockSdkDataResponse,
        fields: mockFields,
      })
      expect(transformedConfig.type).toEqual('default')
    })

    test('area', () => {
      const config = { type: 'area' as const }
      const { config: transformedConfig } = normalizeChartTypes({
        config,
        data: mockSdkDataResponse,
        fields: mockFields,
      })
      expect(transformedConfig.type).toEqual('area')
    })

    test('bar', () => {
      const config = { type: 'bar' as const }
      const { config: transformedConfig } = normalizeChartTypes({
        config,
        data: mockSdkDataResponse,
        fields: mockFields,
      })
      expect(transformedConfig.type).toEqual('bar')
    })

    test('column', () => {
      const config = { type: 'column' as const }
      const { config: transformedConfig } = normalizeChartTypes({
        config,
        data: mockSdkDataResponse,
        fields: mockFields,
      })
      expect(transformedConfig.type).toEqual('column')
    })

    test('line', () => {
      const config = { type: 'line' as const }
      const { config: transformedConfig } = normalizeChartTypes({
        config,
        data: mockSdkDataResponse,
        fields: mockFields,
      })
      expect(transformedConfig.type).toEqual('line')
    })

    test('pie', () => {
      const config = { type: 'pie' as const }
      const { config: transformedConfig } = normalizeChartTypes({
        config,
        data: mockSdkDataResponse,
        fields: mockFields,
      })
      expect(transformedConfig.type).toEqual('pie')
    })

    test('scatter', () => {
      const config = { type: 'scatter' as const }
      const { config: transformedConfig } = normalizeChartTypes({
        config,
        data: mockSdkDataResponse,
        fields: mockFields,
      })
      expect(transformedConfig.type).toEqual('scatter')
    })

    test('sparkline', () => {
      const config = { type: 'sparkline' as const }
      const { config: transformedConfig } = normalizeChartTypes({
        config,
        data: mockSdkDataResponse,
        fields: mockFields,
      })
      expect(transformedConfig.type).toEqual('sparkline')
    })

    test('table', () => {
      const config = { type: 'table' as const }
      const { config: transformedConfig } = normalizeChartTypes({
        config,
        data: mockSdkDataResponse,
        fields: mockFields,
      })
      expect(transformedConfig.type).toEqual('table')
    })

    test('looker_area', () => {
      const config = { type: 'looker_area' as const }
      const { config: transformedConfig } = normalizeChartTypes({
        config,
        data: mockSdkDataResponse,
        fields: mockFields,
      })
      expect(transformedConfig.type).toEqual('area')
    })

    test('looker_bar', () => {
      const config = { type: 'looker_bar' as const }
      const { config: transformedConfig } = normalizeChartTypes({
        config,
        data: mockSdkDataResponse,
        fields: mockFields,
      })
      expect(transformedConfig.type).toEqual('bar')
    })

    test('looker_column', () => {
      const config = { type: 'looker_column' as const }
      const { config: transformedConfig } = normalizeChartTypes({
        config,
        data: mockSdkDataResponse,
        fields: mockFields,
      })
      expect(transformedConfig.type).toEqual('column')
    })

    test('looker_line', () => {
      const config = { type: 'looker_line' as const }
      const { config: transformedConfig } = normalizeChartTypes({
        config,
        data: mockSdkDataResponse,
        fields: mockFields,
      })
      expect(transformedConfig.type).toEqual('line')
    })

    test('looker_pie', () => {
      const config = { type: 'looker_pie' as const }
      const { config: transformedConfig } = normalizeChartTypes({
        config,
        data: mockSdkDataResponse,
        fields: mockFields,
      })
      expect(transformedConfig.type).toEqual('pie')
    })

    test('looker_scatter', () => {
      const config = { type: 'looker_scatter' as const }
      const { config: transformedConfig } = normalizeChartTypes({
        config,
        data: mockSdkDataResponse,
        fields: mockFields,
      })
      expect(transformedConfig.type).toEqual('scatter')
    })

    test('looker_grid', () => {
      const config = { type: 'looker_grid' as const }
      const { config: transformedConfig } = normalizeChartTypes({
        config,
        data: mockSdkDataResponse,
        fields: mockFields,
      })
      expect(transformedConfig.type).toEqual('table')
    })

    test('undefined', () => {
      const config = { type: (undefined as unknown) as 'default' }
      const { config: transformedConfig } = normalizeChartTypes({
        config,
        data: mockSdkDataResponse,
        fields: mockFields,
      })
      expect(transformedConfig.type).toEqual('default')
    })
  })

  test('config.type is an unknown type', () => {
    const config = { type: 'gouda-cheese-chart' as 'default' }
    const { config: transformedConfig } = normalizeChartTypes({
      config,
      data: mockSdkDataResponse,
      fields: mockFields,
    })
    expect(transformedConfig.type).toEqual('gouda-cheese-chart')
  })
})
