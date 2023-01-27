/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
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
import has from 'lodash/has'

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

  if (!renderFor.includes(chartType) && !has(series, 'line_width')) {
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
