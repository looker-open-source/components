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
import type { CScatter, CScatterSeries, Fields } from '@looker/visualizations'
import { FieldSelect } from '@looker/components'

/**
 * A list of relevant charts that access this configuration
 */
export type CSeriesSizeBySupported = CScatter

const renderFor: Array<CSeriesSizeBySupported['type']> = ['scatter']

export type SeriesSizeByProps = {
  chartType: CSeriesSizeBySupported['type']
  fields: Fields
  series: CScatterSeries
  onSeriesChange: (series: CScatterSeries) => void
}

export const SeriesSizeBy = (props: SeriesSizeByProps) => {
  const { chartType, fields, series, onSeriesChange } = props

  if (!renderFor.includes(chartType)) {
    // Early return! Only render for supported charts
    return null
  }

  const handleChange = (value: string) => {
    const draft = { ...series, size_by: value }
    onSeriesChange(draft)
  }

  const sizeByOptions = ['none', ...fields.measures.map(m => m.name)]

  return (
    <FieldSelect
      label="Size By"
      onChange={handleChange}
      options={sizeByOptions.map(s => ({ value: s }))}
      value={series.size_by || 'none'}
    />
  )
}
