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
  PointShapes,
} from '@looker/visualizations-adapters'
import has from 'lodash/has'
import { FieldSelect } from '@looker/components'

/**
 * A list of relevant charts that access this configuration
 */
export type CPointShapeSupported = CArea | CLine | CScatter

const renderFor: Array<CPointShapeSupported['type']> = [
  'area',
  'line',
  'scatter',
]

const shapes: PointShapes[] = [
  'circle',
  'diamond',
  'square',
  'triangle',
  'triangle-down',
]

export type SeriesPointShapeProps = {
  chartType: CPointShapeSupported['type']
  series: CLineSeries
  onSeriesChange: (series: CLineSeries) => void
}

export const SeriesPointShape = (props: SeriesPointShapeProps) => {
  const { chartType, series, onSeriesChange } = props

  if (!renderFor.includes(chartType) && !has(series, 'shape')) {
    // Early return! Only render for supported charts
    return null
  }

  const handleChange = (value: string) => {
    const draft = { ...series, shape: value as PointShapes }
    onSeriesChange(draft)
  }

  return (
    <FieldSelect
      label="Point Shape"
      onChange={handleChange}
      options={shapes.map(s => ({ value: s }))}
      value={series.shape}
    />
  )
}
