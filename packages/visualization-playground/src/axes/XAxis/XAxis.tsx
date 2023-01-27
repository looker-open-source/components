/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import type { Dispatch, SetStateAction } from 'react'
import React from 'react'
import { Fieldset } from '@looker/components'
import type {
  CArea,
  CBar,
  CColumn,
  CLine,
  CScatter,
  CAll,
  XAxisConfig,
} from '@looker/visualizations-adapters'
import has from 'lodash/has'
import { Core } from '../Core'

/**
 * A list of relevant charts that access this configuration
 */
type SupportedChartConfig = CArea | CBar | CColumn | CLine | CScatter

const renderFor: Array<SupportedChartConfig['type']> = [
  'area',
  'bar',
  'column',
  'line',
  'scatter',
]

export type XAxisProps = {
  config: SupportedChartConfig
  onConfigChange: Dispatch<SetStateAction<Partial<CAll>>>
}

export const XAxis = (props: XAxisProps) => {
  const {
    config,
    config: { x_axis = [] },
    onConfigChange,
  } = props

  if (!renderFor.includes(config.type) && !has(config, 'x_axis')) {
    // Early return! Only render for supported charts
    return null
  }

  const handleConfigChange = (axisIndex: number, axis: XAxisConfig) => {
    const draftAxis = [...x_axis]
    draftAxis[axisIndex] = axis
    onConfigChange({ ...config, x_axis: [...draftAxis] })
  }

  return (
    <Fieldset legend="X-Axis" defaultOpen accordion>
      <Core axisConfig={x_axis} onAxisChange={handleConfigChange} />
    </Fieldset>
  )
}
