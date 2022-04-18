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

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type SDKRecord = Record<string, any>

export type ChartData = (SDKRecord & {
  /**
   * If multiple dimensions are present in the raw data objects,
   * they should be condensed down to a single dimension string
   * (usually by concatenation).
   */
  dimension: string
})[]

export type FieldMetadata = {
  label: string
  is_numeric: boolean
  name: string
  sortable: boolean
  sorted?: { desc: boolean; sort_index: number }
  view: string
  view_label: string
  label_short: string
  value_format: string | null
}

export type MeasureMetadata = FieldMetadata & {
  /**
   * An alternate label used when rendering a pivot query.
   * This pivoted_label should include the measure's associated
   * unique pivot value (i.e. "Orders Count: Complete").
   */
  pivoted_label?: string
  type: string
}

export type DimensionMetadata = FieldMetadata & {
  is_filter: boolean
  is_fiscal: boolean
  is_timeframe: boolean
  type:
    | 'date_month'
    | 'date_date'
    | 'date_year'
    | 'date_week'
    | 'date_time'
    | 'date_quarter'
    | 'date_month_num'
    | 'date_hour_of_day'
    | 'count_distinct'
    | 'string'
    | 'zipcode'
    | 'number'
}

export type Fields = {
  dimensions: DimensionMetadata[]
  measures: MeasureMetadata[]
}

export type Pivots = {
  data: SDKRecord
  key: string
  is_total: boolean
  /**
   * `label` value is derived by our own helper functions, and not expected
   *  to be returned by sdk.
   */
  label?: string
}[]

export type Totals = Record<string, { value: number }>
