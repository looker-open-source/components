/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import React from 'react'
import type { FormEvent } from 'react'
import type {
  CArea,
  CBar,
  CColumn,
  CLine,
  CScatter,
  CTable,
  CSeriesBasic,
  CSingleValue,
} from '@looker/visualizations-adapters'
import { FieldText } from '@looker/components'
import has from 'lodash/has'

/**
 * A list of relevant charts that access this configuration
 */
export type CValueFormatSupported =
  | CArea
  | CBar
  | CColumn
  | CLine
  | CScatter
  | CTable
  | CSingleValue

const renderFor: Array<CValueFormatSupported['type']> = [
  'area',
  'bar',
  'column',
  'line',
  'scatter',
  'table',
  'single_value',
]

export type SeriesValueFormatProps = {
  chartType: CValueFormatSupported['type']
  series: CSeriesBasic
  onSeriesChange: (series: CSeriesBasic) => void
}

export const SeriesValueFormat = (props: SeriesValueFormatProps) => {
  const { chartType, series, onSeriesChange } = props

  if (!renderFor.includes(chartType) && !has(series, 'value_format')) {
    // Early return! Only render for supported charts
    return null
  }

  const handleChange = (e: FormEvent) => {
    const draft = {
      ...series,
      value_format: (e.target as HTMLInputElement).value,
    }
    onSeriesChange(draft)
  }

  return (
    <FieldText
      label="Value Format"
      onChange={handleChange}
      value={series.value_format}
    />
  )
}
