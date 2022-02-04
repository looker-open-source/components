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

import { mockPieConfig, mockFields, mockSdkDataResponse } from '../__mocks__'
import { legendType } from './legendType'

describe('legendType', () => {
  describe('config.value_labels ===', () => {
    test('labels', () => {
      const config = {
        ...mockPieConfig,
        value_labels: 'labels' as const,
        legend: undefined,
      }
      const { config: transformedConfig } = legendType({
        config,
        data: mockSdkDataResponse,
        fields: mockFields,
      })
      if (transformedConfig.legend) {
        expect(transformedConfig.legend.type).toEqual('labels')
      }
    })

    test('legend', () => {
      const config = {
        ...mockPieConfig,
        value_labels: 'legend' as const,
        legend: undefined,
      }
      const { config: transformedConfig } = legendType({
        config,
        data: mockSdkDataResponse,
        fields: mockFields,
      })
      if (transformedConfig.legend) {
        expect(transformedConfig.legend.type).toEqual('legend')
      }
    })
  })

  describe('config.legend.type ===', () => {
    test('labels', () => {
      const config = { ...mockPieConfig, legend: { type: 'labels' as const } }
      const { config: transformedConfig } = legendType({
        config,
        data: mockSdkDataResponse,
        fields: mockFields,
      })
      if (transformedConfig.legend) {
        expect(transformedConfig.legend.type).toEqual('labels')
      }
    })

    test('legend', () => {
      const config = { ...mockPieConfig, legend: { type: 'legend' as const } }
      const { config: transformedConfig } = legendType({
        config,
        data: mockSdkDataResponse,
        fields: mockFields,
      })
      if (transformedConfig.legend) {
        expect(transformedConfig.legend.type).toEqual('legend')
      }
    })
  })

  test('config.legend === false', () => {
    const config = { ...mockPieConfig, legend: false }
    const { config: transformedConfig } = legendType({
      config,
      data: mockSdkDataResponse,
      fields: mockFields,
    })
    expect(transformedConfig.legend).toEqual(false)
  })

  test('default value', () => {
    expect(
      legendType({
        config: { ...mockPieConfig, legend: undefined },
        data: mockSdkDataResponse,
        fields: mockFields,
      }).config.legend
    ).toEqual({ type: 'legend' })
  })
})
