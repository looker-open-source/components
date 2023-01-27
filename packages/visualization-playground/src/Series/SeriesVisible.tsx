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
} from '@looker/visualizations-adapters'
import has from 'lodash/has'
import { FieldToggleSwitch } from '@looker/components'

/**
 * A list of relevant charts that access this configuration
 */
export type CVisibleSupported =
  | CArea
  | CBar
  | CColumn
  | CLine
  | CScatter
  | CTable

const renderFor: Array<CVisibleSupported['type']> = [
  'area',
  'bar',
  'column',
  'line',
  'scatter',
  'table',
]

export type SeriesVisibleProps = {
  chartType: CVisibleSupported['type']
  series: CSeriesBasic
  onSeriesChange: (series: CSeriesBasic) => void
}

export const SeriesVisible = (props: SeriesVisibleProps) => {
  const { chartType, series, onSeriesChange } = props

  if (!renderFor.includes(chartType) && !has(series, 'visible')) {
    // Early return! Only render for supported charts
    return null
  }

  const handleChange = (e: FormEvent) => {
    const draft = { ...series, visible: (e.target as HTMLInputElement).checked }
    onSeriesChange(draft)
  }

  return (
    <FieldToggleSwitch
      label="Visible"
      onChange={handleChange}
      on={!!series.visible}
    />
  )
}
