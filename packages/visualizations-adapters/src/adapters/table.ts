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

import type { VisWrapperProps } from '../VisWrapper'
import type {
  Fields,
  SDKRecord,
  CSeriesBasic,
  SupportedChartTypes,
  ChartLayoutProps,
  Totals,
} from '../types'

export type CTableSeries = { cell_visualization?: boolean } & CSeriesBasic

export type CTable = {
  // Tables should probably never use an ordered array, but we need to keep this symmetrical with other adapters
  series?: CTableSeries[] | { [key: string]: CTableSeries }
  truncate_text?: boolean
  truncate_header?: boolean
  type: SupportedChartTypes['table']
}

export type TableProps = VisWrapperProps &
  ChartLayoutProps & {
    data: SDKRecord[]
    config: CTable
    fields: Fields
    totals?: Totals
  }
