/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import React from 'react'
import type { Dispatch, SetStateAction, FormEvent } from 'react'
import type {
  CAll,
  CPie,
  CLine,
  CArea,
  CBar,
  CColumn,
  CScatter,
} from '@looker/visualizations-adapters'
import { FieldCheckbox } from '@looker/components'

/**
 * A list of relevant charts that access this configuration
 */
type SupportedChartConfig = CPie | CLine | CArea | CBar | CColumn | CScatter

type TooltipsProps = {
  config: SupportedChartConfig
  onConfigChange: Dispatch<SetStateAction<Partial<CAll>>>
}

const renderFor: Array<SupportedChartConfig['type']> = [
  'area',
  'bar',
  'column',
  'line',
  'pie',
  'scatter',
]

export const Tooltips = (props: TooltipsProps) => {
  const { config, onConfigChange } = props

  const { tooltips } = config

  if (!renderFor.includes(config.type)) {
    // Early return! Only render for supported charts
    return null
  }

  const handleChange = (e: FormEvent) => {
    const { checked } = e.target as HTMLInputElement
    const draft = { ...config, tooltips: checked }
    onConfigChange(draft)
  }

  return (
    <FieldCheckbox
      label="Tooltips"
      checked={tooltips}
      onChange={handleChange}
    />
  )
}
