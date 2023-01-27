/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import React from 'react'
import type { FormEvent } from 'react'
import type { CTable, CTableSeries } from '@looker/visualizations-adapters'
import { FieldCheckbox } from '@looker/components'
import has from 'lodash/has'

/**
 * A list of relevant charts that access this configuration
 */
export type CCellVisualizationSupported = CTable

const renderFor: Array<CCellVisualizationSupported['type']> = ['table']

export type SeriesCellVisualizationProps = {
  chartType: CCellVisualizationSupported['type']
  series: CTableSeries
  onSeriesChange: (series: CTableSeries) => void
}

export const SeriesCellVisualization = (
  props: SeriesCellVisualizationProps
) => {
  const { chartType, series, onSeriesChange } = props

  if (!renderFor.includes(chartType) && !has(series, 'cell_visualization')) {
    // Early return! Only render for supported charts
    return null
  }

  const handleChange = (e: FormEvent) => {
    const draft = {
      ...series,
      cell_visualization: (e.target as HTMLInputElement).checked,
    }
    onSeriesChange(draft)
  }

  return (
    <FieldCheckbox
      label="Cell visualization"
      onChange={handleChange}
      checked={!!series.cell_visualization}
    />
  )
}
