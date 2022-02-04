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

import { barPositioning } from './barPositioning'
import { mockBarConfig, mockFields, mockSdkDataResponse } from '../__mocks__'

describe('barPositioning', () => {
  test('default', () => {
    const config = { ...mockBarConfig }
    delete config.positioning

    expect(
      barPositioning({ config, data: mockSdkDataResponse, fields: mockFields })
        .config.positioning
    ).toEqual('grouped')
  })

  describe('config.positioning ===', () => {
    test('grouped', () => {
      const config = { ...mockBarConfig, positioning: 'grouped' as const }
      const { config: transformedConfig } = barPositioning({
        config,
        data: mockSdkDataResponse,
        fields: mockFields,
      })
      expect(transformedConfig.positioning).toEqual('grouped')
    })

    test('percent', () => {
      const config = { ...mockBarConfig, positioning: 'percent' as const }
      const { config: transformedConfig } = barPositioning({
        config,
        data: mockSdkDataResponse,
        fields: mockFields,
      })
      expect(transformedConfig.positioning).toEqual('percent')
    })

    test('stacked', () => {
      const config = { ...mockBarConfig, positioning: 'stacked' as const }
      const { config: transformedConfig } = barPositioning({
        config,
        data: mockSdkDataResponse,
        fields: mockFields,
      })
      expect(transformedConfig.positioning).toEqual('stacked')
    })
  })

  describe('config.stacking ===', () => {
    test('grouped', () => {
      const config = { ...mockBarConfig, stacking: 'grouped' as const }
      delete config.positioning

      const { config: transformedConfig } = barPositioning({
        config,
        data: mockSdkDataResponse,
        fields: mockFields,
      })
      expect(transformedConfig.positioning).toEqual('grouped')
    })

    test('stacked', () => {
      const config = { ...mockBarConfig, stacking: 'stacked' as const }
      delete config.positioning

      const { config: transformedConfig } = barPositioning({
        config,
        data: mockSdkDataResponse,
        fields: mockFields,
      })
      expect(transformedConfig.positioning).toEqual('stacked')
    })

    test('percent', () => {
      const config = { ...mockBarConfig, stacking: 'percent' as const }
      delete config.positioning

      const { config: transformedConfig } = barPositioning({
        config,
        data: mockSdkDataResponse,
        fields: mockFields,
      })
      expect(transformedConfig.positioning).toEqual('percent')
    })

    test('overlay', () => {
      const config = { ...mockBarConfig, stacking: 'overlay' as const }
      delete config.positioning

      const { config: transformedConfig } = barPositioning({
        config,
        data: mockSdkDataResponse,
        fields: mockFields,
      })
      expect(transformedConfig.positioning).toEqual('grouped')
    })

    test('normal', () => {
      const config = { ...mockBarConfig, stacking: 'normal' as const }
      delete config.positioning

      const { config: transformedConfig } = barPositioning({
        config,
        data: mockSdkDataResponse,
        fields: mockFields,
      })
      expect(transformedConfig.positioning).toEqual('stacked')
    })

    test("''", () => {
      const config = { ...mockBarConfig, stacking: '' as 'grouped' }
      delete config.positioning

      const { config: transformedConfig } = barPositioning({
        config,
        data: mockSdkDataResponse,
        fields: mockFields,
      })
      expect(transformedConfig.positioning).toEqual('grouped')
    })
  })
})
