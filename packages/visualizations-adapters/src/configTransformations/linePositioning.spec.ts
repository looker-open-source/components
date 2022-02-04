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

import { linePositioning } from './linePositioning'
import { mockLineConfig, mockFields, mockSdkDataResponse } from '../__mocks__'

describe('linePositioning', () => {
  test('default', () => {
    const config = { ...mockLineConfig }
    delete config.positioning
    expect(
      linePositioning({ config, data: mockSdkDataResponse, fields: mockFields })
        .config.positioning
    ).toEqual('overlay')
  })

  describe('config.positioning ===', () => {
    test('grouped', () => {
      const config = { ...mockLineConfig, positioning: 'overlay' as const }
      const { config: transformedConfig } = linePositioning({
        config,
        data: mockSdkDataResponse,
        fields: mockFields,
      })
      expect(transformedConfig.positioning).toEqual('overlay')
    })

    test('percent', () => {
      const config = { ...mockLineConfig, positioning: 'percent' as const }
      const { config: transformedConfig } = linePositioning({
        config,
        data: mockSdkDataResponse,
        fields: mockFields,
      })
      expect(transformedConfig.positioning).toEqual('percent')
    })

    test('stacked', () => {
      const config = { ...mockLineConfig, positioning: 'stacked' as const }
      const { config: transformedConfig } = linePositioning({
        config,
        data: mockSdkDataResponse,
        fields: mockFields,
      })
      expect(transformedConfig.positioning).toEqual('stacked')
    })
  })

  describe('config.stacking ===', () => {
    test('grouped', () => {
      const config = { ...mockLineConfig, stacking: 'grouped' as const }
      delete config.positioning

      const { config: transformedConfig } = linePositioning({
        config,
        data: mockSdkDataResponse,
        fields: mockFields,
      })
      expect(transformedConfig.positioning).toEqual('overlay')
    })

    test('stacked', () => {
      const config = { ...mockLineConfig, stacking: 'stacked' as const }
      delete config.positioning

      const { config: transformedConfig } = linePositioning({
        config,
        data: mockSdkDataResponse,
        fields: mockFields,
      })
      expect(transformedConfig.positioning).toEqual('stacked')
    })

    test('percent', () => {
      const config = { ...mockLineConfig, stacking: 'percent' as const }
      delete config.positioning

      const { config: transformedConfig } = linePositioning({
        config,
        data: mockSdkDataResponse,
        fields: mockFields,
      })
      expect(transformedConfig.positioning).toEqual('percent')
    })

    test('overlay', () => {
      const config = { ...mockLineConfig, stacking: 'overlay' as const }
      delete config.positioning

      const { config: transformedConfig } = linePositioning({
        config,
        data: mockSdkDataResponse,
        fields: mockFields,
      })
      expect(transformedConfig.positioning).toEqual('overlay')
    })

    test('normal', () => {
      const config = { ...mockLineConfig, stacking: 'normal' as const }
      delete config.positioning

      const { config: transformedConfig } = linePositioning({
        config,
        data: mockSdkDataResponse,
        fields: mockFields,
      })
      expect(transformedConfig.positioning).toEqual('stacked')
    })

    test("''", () => {
      const config = { ...mockLineConfig, stacking: '' as 'overlay' }
      delete config.positioning

      const { config: transformedConfig } = linePositioning({
        config,
        data: mockSdkDataResponse,
        fields: mockFields,
      })
      expect(transformedConfig.positioning).toEqual('overlay')
    })
  })
})
