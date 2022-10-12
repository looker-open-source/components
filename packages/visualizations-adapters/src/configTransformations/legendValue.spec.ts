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

import { legendValue } from './legendValue'
import { mockPieConfig, mockFields, mockSdkDataResponse } from '../__mocks__'

describe('legendValue', () => {
  test('default value', () => {
    const { config } = legendValue({
      config: { ...mockPieConfig },
      data: mockSdkDataResponse,
      fields: mockFields,
    })

    expect(config.legend).toEqual({
      position: 'bottom',
      type: 'legend',
      value: 'label',
    })
  })

  describe('config.label_type ===', () => {
    test('lab', () => {
      const config = {
        ...mockPieConfig,
        label_type: 'lab' as const,
        legend: undefined,
      }
      const { config: transformedConfig } = legendValue({
        config,
        data: mockSdkDataResponse,
        fields: mockFields,
      })
      if (transformedConfig.legend) {
        expect(transformedConfig.legend.value).toEqual('label')
      }
    })

    test('labVal', () => {
      const config = {
        ...mockPieConfig,
        label_type: 'labVal' as const,
        legend: undefined,
      }
      const { config: transformedConfig } = legendValue({
        config,
        data: mockSdkDataResponse,
        fields: mockFields,
      })
      if (transformedConfig.legend) {
        expect(transformedConfig.legend.value).toEqual('label_value')
      }
    })

    test('val', () => {
      const config = {
        ...mockPieConfig,
        label_type: 'val' as const,
        legend: undefined,
      }
      const { config: transformedConfig } = legendValue({
        config,
        data: mockSdkDataResponse,
        fields: mockFields,
      })
      if (transformedConfig.legend) {
        expect(transformedConfig.legend.value).toEqual('value')
      }
    })

    test('per', () => {
      const config = {
        ...mockPieConfig,
        label_type: 'per' as const,
        legend: undefined,
      }
      const { config: transformedConfig } = legendValue({
        config,
        data: mockSdkDataResponse,
        fields: mockFields,
      })
      if (transformedConfig.legend) {
        expect(transformedConfig.legend.value).toEqual('percent')
      }
    })

    test('labPer', () => {
      const config = {
        ...mockPieConfig,
        label_type: 'labPer' as const,
        legend: undefined,
      }
      const { config: transformedConfig } = legendValue({
        config,
        data: mockSdkDataResponse,
        fields: mockFields,
      })
      if (transformedConfig.legend) {
        expect(transformedConfig.legend.value).toEqual('label_percent')
      }
    })
  })

  describe('config.legend.value ===', () => {
    test('"label"', () => {
      const config = { ...mockPieConfig, legend: { value: 'label' as const } }
      const { config: transformedConfig } = legendValue({
        config,
        data: mockSdkDataResponse,
        fields: mockFields,
      })
      if (transformedConfig.legend) {
        expect(transformedConfig.legend.value).toEqual('label')
      }
    })

    test('"value"', () => {
      const config = { ...mockPieConfig, legend: { value: 'value' as const } }
      const { config: transformedConfig } = legendValue({
        config,
        data: mockSdkDataResponse,
        fields: mockFields,
      })
      if (transformedConfig.legend) {
        expect(transformedConfig.legend.value).toEqual('value')
      }
    })

    test('"percent"', () => {
      const config = { ...mockPieConfig, legend: { value: 'percent' as const } }
      const { config: transformedConfig } = legendValue({
        config,
        data: mockSdkDataResponse,
        fields: mockFields,
      })
      if (transformedConfig.legend) {
        expect(transformedConfig.legend.value).toEqual('percent')
      }
    })

    test('"label_value"', () => {
      const config = {
        ...mockPieConfig,
        legend: { value: 'label_value' as const },
      }
      const { config: transformedConfig } = legendValue({
        config,
        data: mockSdkDataResponse,
        fields: mockFields,
      })
      if (transformedConfig.legend) {
        expect(transformedConfig.legend.value).toEqual('label_value')
      }
    })

    test('"label_percent"', () => {
      const config = {
        ...mockPieConfig,
        legend: { value: 'label_percent' as const },
      }
      const { config: transformedConfig } = legendValue({
        config,
        data: mockSdkDataResponse,
        fields: mockFields,
      })
      if (transformedConfig.legend) {
        expect(transformedConfig.legend.value).toEqual('label_percent')
      }
    })
  })

  test('config.legend === false', () => {
    const config = { ...mockPieConfig, legend: false }
    const { config: transformedConfig } = legendValue({
      config,
      data: mockSdkDataResponse,
      fields: mockFields,
    })
    expect(transformedConfig.legend).toEqual(false)
  })
})
