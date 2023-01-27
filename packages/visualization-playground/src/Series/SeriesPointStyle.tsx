/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import React from 'react'
import type {
  CArea,
  CLine,
  CScatter,
  CLineSeries,
  PointStyles,
} from '@looker/visualizations-adapters'
import { FieldSelect } from '@looker/components'
import has from 'lodash/has'

/**
 * A list of relevant charts that access this configuration
 */
export type CPointStyleSupported = CArea | CLine | CScatter

const renderFor: Array<CPointStyleSupported['type']> = [
  'area',
  'line',
  'scatter',
]

const commonStyles: PointStyles[] = ['filled', 'outline']
const lineStyles: PointStyles[] = ['none']

export type SeriesPointStyleProps = {
  chartType: CPointStyleSupported['type']
  series: CLineSeries
  onSeriesChange: (series: CLineSeries) => void
}

export const SeriesPointStyle = (props: SeriesPointStyleProps) => {
  const { chartType, series, onSeriesChange } = props

  if (!renderFor.includes(chartType) && !has(series, 'style')) {
    // Early return! Only render for supported charts
    return null
  }

  const handleChange = (value: string) => {
    const draft = { ...series, style: value as PointStyles }
    onSeriesChange(draft)
  }

  const styleOptions = [
    ...(chartType !== 'scatter' ? lineStyles : []),
    ...commonStyles,
  ]

  return (
    <FieldSelect
      label="Point Style"
      onChange={handleChange}
      options={styleOptions.map(s => ({ value: s }))}
      value={series.style}
    />
  )
}
