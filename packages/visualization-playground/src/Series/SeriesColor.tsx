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
import React from 'react'
import type { FormEvent } from 'react'
import type {
  CArea,
  CBar,
  CColumn,
  CLine,
  CScatter,
  CSparkline,
  CSeriesBasic,
  CSingleValue,
  CPie,
} from '@looker/visualizations'
import { FieldColor } from '@looker/components'

/**
 * A list of relevant charts that access this configuration
 */
export type CColorSupported =
  | CArea
  | CBar
  | CColumn
  | CLine
  | CPie
  | CScatter
  | CSparkline
  | CSingleValue

const renderFor: Array<CColorSupported['type']> = [
  'area',
  'bar',
  'column',
  'line',
  'pie',
  'scatter',
  'sparkline',
  'single_value',
]

export type SeriesColorProps = {
  chartType: CColorSupported['type']
  series: CSeriesBasic
  onSeriesChange: (series: CSeriesBasic) => void
  disabled: boolean
}

export const SeriesColor = (props: SeriesColorProps) => {
  const { chartType, series, onSeriesChange, ...restProps } = props

  if (!renderFor.includes(chartType)) {
    // Early return! Only render for supported charts
    return null
  }

  const handleChange = (e: FormEvent) => {
    const draft = { ...series, color: (e.target as HTMLInputElement).value }
    onSeriesChange(draft)
  }

  return (
    <FieldColor
      label="Color"
      onChange={handleChange}
      value={series.color}
      {...restProps}
    />
  )
}
