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
  CLine,
  CScatter,
  CSparkline,
  CSeriesLine,
} from '@looker/visualizations-adapters'
import { FieldSlider } from '@looker/components'

/**
 * A list of relevant charts that access this configuration
 */
export type CLineWidthSupported = CArea | CLine | CSparkline | CScatter

const renderFor: Array<CLineWidthSupported['type']> = [
  'area',
  'line',
  'scatter',
  'sparkline',
]

export type SeriesLineWidthProps = {
  chartType: CLineWidthSupported['type']
  series: CSeriesLine
  onSeriesChange: (series: CSeriesLine) => void
  disabled: boolean
}

export const SeriesLineWidth = (props: SeriesLineWidthProps) => {
  const { chartType, series, onSeriesChange, ...restProps } = props

  if (!renderFor.includes(chartType)) {
    // Early return! Only render for supported charts
    return null
  }

  const handleChange = (e: FormEvent) => {
    const draft = {
      ...series,
      line_width: parseInt((e.target as HTMLInputElement).value),
    }
    onSeriesChange(draft)
  }

  return (
    <FieldSlider
      label={chartType === 'scatter' ? 'Point Border Width' : 'Line Width'}
      min={1}
      max={15}
      onChange={handleChange}
      value={series.line_width}
      {...restProps}
    />
  )
}
