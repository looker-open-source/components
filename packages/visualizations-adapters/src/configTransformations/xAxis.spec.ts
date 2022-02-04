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

import { xAxis } from './xAxis'
import { mockBarConfig, mockFields, mockSdkDataResponse } from '../__mocks__'
import type { XAxisConfig } from '../types'

describe('xAxis', () => {
  test('config.x_axis is provided', () => {
    const x_axis: XAxisConfig[] = [
      {
        gridlines: false,
        label: 'label name',
        reversed: true,
        values: false,
      },
    ]

    const transformedConfig = xAxis({
      config: { ...mockBarConfig, x_axis },
      data: mockSdkDataResponse,
      fields: mockFields,
    })

    expect(transformedConfig.config.x_axis).toEqual(x_axis)
  })

  test('x axis customizations are provided, but config.x_axis is undefined', () => {
    const customizations = {
      show_x_axis_label: true,
      show_x_axis_ticks: false,
      x_axis_gridlines: false,
      x_axis_reversed: true,
      x_axis_label: 'default label',
    }

    const transformedConfig = xAxis({
      config: { ...mockBarConfig, x_axis: undefined, ...customizations },
      data: mockSdkDataResponse,
      fields: mockFields,
    })

    expect(transformedConfig.config.x_axis).toEqual([
      {
        gridlines: customizations.x_axis_gridlines,
        label: customizations.x_axis_label,
        reversed: customizations.x_axis_reversed,
        values: customizations.show_x_axis_ticks,
      },
    ])
  })

  test('config.x_axis and x axis customizations are all undefined', () => {
    const transformedConfig = xAxis({
      config: {
        ...mockBarConfig,
        show_x_axis_ticks: undefined,
        show_x_axis_label: undefined,
        x_axis_gridlines: undefined,
        x_axis_reversed: undefined,
        x_axis: undefined,
      },
      data: mockSdkDataResponse,
      fields: mockFields,
    })

    // x axis customizations will be set to default values
    expect(transformedConfig.config.x_axis).toEqual([
      {
        gridlines: true,
        label: 'Orders Created Date',
        reversed: false,
        values: true,
      },
    ])
  })
})
