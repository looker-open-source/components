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

import { yAxisRange } from './yAxisRange'
import { mockBarConfig, mockFields, mockSdkDataResponse } from '../__mocks__'
import type { YAxisConfig, YAxisRaw } from '../types'

describe('yAxisRange', () => {
  test('config.y_axis is provided', () => {
    const y_axis: YAxisConfig[] = [
      {
        label: false,
        range: [0, 88],
      },
    ]

    const transformedConfig = yAxisRange({
      config: { ...mockBarConfig, y_axis },
      data: mockSdkDataResponse,
      fields: mockFields,
    })

    expect(transformedConfig.config.y_axis).toEqual(y_axis)
  })

  test('merges user overrides with raw sdk response', () => {
    const overrides: YAxisConfig[] = [
      {
        range: ['auto', 10000],
      },
    ]

    // response from explore
    const rawAxisResponse = [{ minValue: 0, maxValue: 4000 }, {}]

    const { config: transformedConfig } = yAxisRange({
      config: { ...mockBarConfig, y_axes: rawAxisResponse, y_axis: overrides },
      data: mockSdkDataResponse,
      fields: mockFields,
    })

    expect(transformedConfig.y_axis?.length).toEqual(rawAxisResponse.length)
    expect(transformedConfig.y_axis?.[0]).toEqual(
      expect.objectContaining({ range: ['auto', 10000] }) // user override
    )
    expect(transformedConfig.y_axis?.[1]).toEqual(
      expect.objectContaining({ range: ['auto', 'auto'] }) // derived value from sdk response
    )
  })

  test('sets y-axis range from default sdk values', () => {
    const response = {
      y_axes: [
        {
          minValue: 0,
          maxValue: 4000,
        },
      ] as YAxisRaw[],
    }

    const transformedConfig = yAxisRange({
      config: { ...mockBarConfig, y_axis: undefined, ...response },
      data: mockSdkDataResponse,
      fields: mockFields,
    })

    expect(transformedConfig.config.y_axis).toEqual([
      {
        range: [response.y_axes[0].minValue, response.y_axes[0].maxValue],
      },
    ])
  })

  test('config.y_axis and y axis customizations are all undefined', () => {
    const transformedConfig = yAxisRange({
      config: {
        ...mockBarConfig,
        y_axes: undefined,
        y_axis: undefined,
      },
      data: mockSdkDataResponse,
      fields: mockFields,
    })

    expect(transformedConfig.config.y_axis).toEqual([
      {
        range: ['auto', 'auto'],
      },
    ])
  })
})
