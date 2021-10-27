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

import type { VisWrapperProps } from '../VisWrapper'
import type {
  SDKRecord,
  Fields,
  YAxisConfig,
  CSeriesBasic,
  CSeriesLine,
  SupportedChartTypes,
} from '../types'

type YAxisSparkline = Pick<YAxisConfig, 'range'>
export type CSparklineSeries = Pick<CSeriesBasic, 'color' | 'visible'> &
  CSeriesLine

export type CSparkline = {
  // Color Scheme
  series?: CSparklineSeries[] | { [key: string]: CSparklineSeries }
  /**
   * Modify Y Axis range:
   */
  y_axis?: YAxisSparkline
  /**
   * Either render a gap where data is null, or treat it as a value 0
   */
  render_null_values?: boolean
  type: SupportedChartTypes['sparkline']
}

export type SparklineProps = VisWrapperProps & {
  data: SDKRecord[]
  fields: Fields
  config: CSparkline
}
