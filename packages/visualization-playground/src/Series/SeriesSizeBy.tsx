/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import React from 'react'
import type {
  CScatter,
  CScatterSeries,
  Fields,
} from '@looker/visualizations-adapters'
import has from 'lodash/has'
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

  if (!renderFor.includes(chartType) && !has(series, 'size_by')) {
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
