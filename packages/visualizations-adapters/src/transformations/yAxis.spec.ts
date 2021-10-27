/*

 MIT License

 Copyright (c) 2021 Looker Data Sciences, Inc.

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
import { mockBarConfig, mockFields } from '../__mocks__'
import type { YAxisConfig, YAxisRaw } from '../types'

describe('yAxis', () => {
  test('config.y_axis is provided', () => {
    const y_axis: YAxisConfig[] = [
      {
        gridlines: false,
        label: false,
        range: [0, 88],
        reversed: true,
        tick_density: 44,
        values: false,
      },
    ]

    const transformedConfig = yAxis({
      config: { ...mockBarConfig, y_axis },
      fields: mockFields,
    })

    expect(transformedConfig.config.y_axis).toEqual(y_axis)
  })

  test('merges user overrides with raw sdk response', () => {
    const overrides: YAxisConfig[] = [
      {
        tick_density: 50,
      },
    ]

    // response from explore
    const rawAxisResponse = [
      {
        tickDensity: 'default' as const,
      },
      {
        tickDensity: 'custom' as const,
        tickDensityCustom: 75,
      },
    ]

    const { config: transformedConfig } = yAxis({
      config: { ...mockBarConfig, y_axes: rawAxisResponse, y_axis: overrides },
      fields: mockFields,
    })

    expect(transformedConfig.y_axis?.length).toEqual(rawAxisResponse.length)
    expect(transformedConfig.y_axis?.[0]).toEqual(
      expect.objectContaining({ tick_density: 50 }) // user override
    )
    expect(transformedConfig.y_axis?.[1]).toEqual(
      expect.objectContaining({ tick_density: 75 }) // derived value from sdk response
    )
  })

  test('y axis customizations are provided, but config.y_axis is undefined', () => {
    const customizations = {
      y_axis_reversed: false,
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
        reversed: customizations.y_axis_reversed,
        tick_density: customizations.y_axes[0].tickDensityCustom,
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
        y_axis_reversed: undefined,
        y_axis_gridlines: undefined,
      },
      fields: mockFields,
    })

    expect(transformedConfig.config.y_axis).toEqual([
      {
        gridlines: true,
        label: 'Orders Count',
        range: ['auto', 'auto'],
        reversed: false,
        tick_density: 'default',
        values: true,
      },
    ])
  })
})