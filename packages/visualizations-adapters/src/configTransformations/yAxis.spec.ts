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

import { yAxis } from './yAxis'
import { mockBarConfig, mockFields, mockSdkDataResponse } from '../__mocks__'
import type { YAxisConfig, YAxisRaw } from '../types'

describe('yAxis', () => {
  test('config.y_axis is provided', () => {
    const y_axis: YAxisConfig[] = [
      {
        gridlines: false,
        label: false,
        range: [0, 88],
        values: false,
      },
    ]

    const transformedConfig = yAxis({
      config: { ...mockBarConfig, y_axis },
      data: mockSdkDataResponse,
      fields: mockFields,
    })

    expect(transformedConfig.config.y_axis).toEqual(y_axis)
  })

  test('merges user overrides with raw sdk response', () => {
    const overrides: YAxisConfig[] = [
      {
        range: [-100, 100],
      },
    ]

    // response from explore
    const rawAxisResponse = [
      {
        minValue: 30,
        maxValue: 50,
      },
      {},
    ]

    const { config: transformedConfig } = yAxis({
      config: { ...mockBarConfig, y_axes: rawAxisResponse, y_axis: overrides },
      data: mockSdkDataResponse,
      fields: mockFields,
    })

    expect(transformedConfig.y_axis?.length).toEqual(rawAxisResponse.length)
    expect(transformedConfig.y_axis?.[0]).toEqual(
      expect.objectContaining({ range: [-100, 100] }) // user override
    )
    expect(transformedConfig.y_axis?.[1]).toEqual(
      expect.objectContaining({ range: ['auto', 'auto'] }) // derived value from sdk response
    )
  })

  test('y axis customizations are provided, but config.y_axis is undefined', () => {
    const customizations = {
      y_axis_gridlines: false,
      y_axes: [
        {
          label: 'Gouda',
          orientation: 'blah',
          showLabels: false,
          showValues: false,
          tickDensity: 'custom',
          tickDensityCustom: 200,
          minValue: 0,
          maxValue: 4000,
        },
      ] as YAxisRaw[],
    }

    const transformedConfig = yAxis({
      config: { ...mockBarConfig, y_axis: undefined, ...customizations },
      data: mockSdkDataResponse,
      fields: mockFields,
    })

    expect(transformedConfig.config.y_axis).toEqual([
      {
        gridlines: customizations.y_axis_gridlines,
        label: customizations.y_axes[0].showLabels,
        range: [
          customizations.y_axes[0].minValue,
          customizations.y_axes[0].maxValue,
        ],
        values: customizations.y_axes[0].showValues,
      },
    ])
  })

  test('config.y_axis and y axis customizations are all undefined', () => {
    const transformedConfig = yAxis({
      config: {
        ...mockBarConfig,
        y_axes: undefined,
        y_axis: undefined,
        y_axis_gridlines: undefined,
      },
      data: mockSdkDataResponse,
      fields: mockFields,
    })

    expect(transformedConfig.config.y_axis).toEqual([
      {
        gridlines: true,
        label: undefined,
        range: ['auto', 'auto'],
        values: true,
      },
    ])
  })
})
