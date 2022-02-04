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

import type { PointShapes, PointStyles } from './'

export type CSeriesBasic = {
  /**
   * Hex Code
   */
  color?: string
  /**
   * String label to render
   */
  label?: string
  /**
   * Hide this series from the chart
   */
  visible?: boolean
  /**
   * Default value format
   */
  value_format?: string
}

export type CSeriesPoints = {
  /**
   * Point shapes
   */
  shape?: PointShapes
  /**
   * Point styles
   */
  style?: PointStyles
}

export type CSeriesLine = {
  /**
   * Thickness of line(s) in pixels:
   */
  line_width?: number
}

export type CSeriesSize = {
  /**
   * Adjust datapoint appearance relative to the value of provided series name.
   * size_by accepts a string representing the series name.
   */
  size_by?: string | false
}
