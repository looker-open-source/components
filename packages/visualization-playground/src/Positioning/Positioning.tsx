/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import React from 'react'
import type { Dispatch, SetStateAction } from 'react'
import type {
  CAll,
  CArea,
  CBar,
  CColumn,
  CLine,
  CScatter,
  LinearPositions,
  BarPositions,
} from '@looker/visualizations-adapters'
import { FieldSelect } from '@looker/components'

/**
 * A list of relevant charts that access this configuration
 */
type SupportedChartConfig = CBar | CColumn | CArea | CLine | CScatter

const renderFor: Array<SupportedChartConfig['type']> = ['area', 'bar', 'column']

const barPositions: BarPositions[] = ['grouped', 'stacked', 'percent']
const linePositions: LinearPositions[] = ['overlay', 'stacked', 'percent']

export type PositioningProps = {
  config: SupportedChartConfig
  onConfigChange: Dispatch<SetStateAction<Partial<CAll>>>
}

export const Positioning = (props: PositioningProps) => {
  const { config, onConfigChange } = props
  if (!renderFor.includes(config.type)) {
    // Early return! Only render for supported charts
    return null
  }

  const handleChange = (newPosition: string) => {
    const draft = { ...config, positioning: newPosition }
    onConfigChange(draft as SupportedChartConfig)
  }

  const positions =
    config.type === 'bar' || config.type === 'column'
      ? barPositions
      : linePositions

  return (
    <FieldSelect
      label="Positioning"
      value={config.positioning}
      onChange={handleChange}
      options={positions.map(p => ({ value: p }))}
    />
  )
}
