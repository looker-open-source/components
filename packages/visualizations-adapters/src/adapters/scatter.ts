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

import type { TooltipDatum } from '@visx/xychart'
import type { RenderTooltipParams } from '@visx/xychart/lib/components/Tooltip'
import type { VisWrapperProps } from '../VisWrapper'
import type { CLineBase } from './'
import type {
  Fields,
  SDKRecord,
  CSeriesBasic,
  CSeriesPoints,
  CSeriesSize,
  CSeriesLine,
  SupportedChartTypes,
} from '../types'

export type CScatterSeries = CSeriesBasic &
  CSeriesPoints &
  CSeriesSize &
  CSeriesLine

export type CScatter = {
  series?: CScatterSeries[] | { [key: string]: CScatterSeries }
  type: SupportedChartTypes['scatter']
} & Omit<CLineBase, 'series'>

export type ScatterProps = VisWrapperProps & {
  data: SDKRecord[]
  fields: Fields
  config: CScatter
  renderTooltip?: (
    params: RenderTooltipParams<TooltipDatum<SDKRecord>>
  ) => React.ReactNode
}
