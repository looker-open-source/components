/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import React from 'react'
import type { Dispatch, SetStateAction, FormEvent } from 'react'
import type { CAll, CTable } from '@looker/visualizations-adapters'
import { FieldCheckbox } from '@looker/components'

/**
 * A list of relevant charts that access this configuration
 */
type SupportedChartConfig = CTable

type ShowtotalTotalsProps = {
  config: SupportedChartConfig
  onConfigChange: Dispatch<SetStateAction<Partial<CAll>>>
}

const renderFor: Array<SupportedChartConfig['type']> = ['table']

export const ShowRowTotals = (props: ShowtotalTotalsProps) => {
  const { config, onConfigChange } = props

  const { show_row_totals } = config

  if (!renderFor.includes(config.type)) {
    // Early return! Only render for supported charts
    return null
  }

  const handleChange = (e: FormEvent) => {
    const { checked } = e.target as HTMLInputElement
    const draft = { ...config, show_row_totals: checked }
    onConfigChange(draft)
  }

  return (
    <FieldCheckbox
      label="Show row totals"
      checked={show_row_totals}
      onChange={handleChange}
    />
  )
}
