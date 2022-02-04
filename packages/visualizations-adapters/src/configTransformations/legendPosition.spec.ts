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

import { legendPosition } from './legendPosition'
import { mockBarConfig, mockSdkDataResponse, mockFields } from '../__mocks__'

describe('legendPosition', () => {
  describe('config.hide_legend ===', () => {
    test('true', () => {
      const config = { ...mockBarConfig, hide_legend: true }
      const { config: transformedConfig } = legendPosition({
        config,
        fields: mockFields,
        data: mockSdkDataResponse,
      })
      expect(transformedConfig.legend).toEqual(false)
    })

    test('false', () => {
      const config = { ...mockBarConfig, hide_legend: false }
      const { config: transformedConfig } = legendPosition({
        config,
        fields: mockFields,
        data: mockSdkDataResponse,
      })
      expect(transformedConfig.legend).toEqual({ position: 'bottom' })
    })
  })

  describe('config.legend_position ===', () => {
    test('bottom', () => {
      const config = {
        ...mockBarConfig,
        legend: undefined,
        legend_position: 'bottom' as const,
      }
      const { config: transformedConfig } = legendPosition({
        config,
        fields: mockFields,
        data: mockSdkDataResponse,
      })
      expect(transformedConfig.legend).toEqual({ position: 'bottom' })
    })

    test('center', () => {
      const config = {
        ...mockBarConfig,
        legend: undefined,
        legend_position: 'center' as const,
      }
      const { config: transformedConfig } = legendPosition({
        config,
        fields: mockFields,
        data: mockSdkDataResponse,
      })
      expect(transformedConfig.legend).toEqual({ position: 'bottom' })
    })

    test('left', () => {
      const config = {
        ...mockBarConfig,
        legend: undefined,
        legend_position: 'left' as const,
      }
      const { config: transformedConfig } = legendPosition({
        config,
        fields: mockFields,
        data: mockSdkDataResponse,
      })
      expect(transformedConfig.legend).toEqual({ position: 'left' })
    })

    test('right', () => {
      const config = {
        ...mockBarConfig,
        legend: undefined,
        legend_position: 'right' as const,
      }
      const { config: transformedConfig } = legendPosition({
        config,
        fields: mockFields,
        data: mockSdkDataResponse,
      })
      expect(transformedConfig.legend).toEqual({ position: 'right' })
    })

    test('top', () => {
      const config = {
        ...mockBarConfig,
        legend: undefined,
        legend_position: 'top' as const,
      }
      const { config: transformedConfig } = legendPosition({
        config,
        fields: mockFields,
        data: mockSdkDataResponse,
      })
      expect(transformedConfig.legend).toEqual({ position: 'top' })
    })
  })

  describe('config.legend.position ===', () => {
    test('bottom', () => {
      const config = {
        ...mockBarConfig,
        legend: {
          position: 'bottom' as const,
        },
      }
      const { config: transformedConfig } = legendPosition({
        config,
        fields: mockFields,
        data: mockSdkDataResponse,
      })
      expect(transformedConfig.legend).toEqual({ position: 'bottom' })
    })

    test('left', () => {
      const config = {
        ...mockBarConfig,
        legend: {
          position: 'left' as const,
        },
      }
      const { config: transformedConfig } = legendPosition({
        config,
        fields: mockFields,
        data: mockSdkDataResponse,
      })
      expect(transformedConfig.legend).toEqual({ position: 'left' })
    })

    test('right', () => {
      const config = {
        ...mockBarConfig,
        legend: {
          position: 'right' as const,
        },
      }
      const { config: transformedConfig } = legendPosition({
        config,
        fields: mockFields,
        data: mockSdkDataResponse,
      })
      expect(transformedConfig.legend).toEqual({ position: 'right' })
    })

    test('top', () => {
      const config = {
        ...mockBarConfig,
        legend: {
          position: 'top' as const,
        },
      }
      const { config: transformedConfig } = legendPosition({
        config,
        fields: mockFields,
        data: mockSdkDataResponse,
      })
      expect(transformedConfig.legend).toEqual({ position: 'top' })
    })
  })
})
