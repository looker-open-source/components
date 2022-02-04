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

import type { CSeriesBasic, LegendPositions } from '../types'

export type CommonAxisConfig = {
  /**
   * Render grid lines in chart
   */
  gridlines?: boolean
  /**
   * Axis label content, disabled with `false`
   */
  label?: string | false
  /**
   * Render axis values
   */
  values?: boolean
}

export type XAxisConfig = CommonAxisConfig & {
  /**
   * Reverse data direction
   */
  reversed?: boolean
}

export type YAxisEndpoint = number | 'auto' | undefined
export type YAxisConfig = CommonAxisConfig & {
  /**
   * Set min and max values for Y-Axis
   */
  range?: [YAxisEndpoint, YAxisEndpoint]
}

export type CartesianLegend = {
  /**
   * Determines position of legend items
   */
  position: LegendPositions
  /**
   * Width in pixels when legend is left or right positioned
   */
  width?: number
}

export type CommonCartesianProperties = {
  /**
   * Toggle tooltips on hover
   */
  tooltips?: boolean
  /**
   * Configure legend properties, or disable it altogether by setting value to false.
   */
  legend?: false | CartesianLegend
  /**
   * Customize the series settings either by an ordered array or a named object.
   * Can be used like series: [{color: '#000000'}] or series: { name: { color: '#000000' }}
   */
  series?: CSeriesBasic[] | { [key: string]: CSeriesBasic }
  /**
   * Configure an array of x-axis settings. Charts will only render a single x-axis for now.
   */
  x_axis?: XAxisConfig[]
  /**
   * Configure an array of y-axis settings.
   */
  y_axis?: YAxisConfig[]
}
