/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import type { CPie, LegendValues } from '@looker/visualizations-adapters'

import numeral from 'numeral'

export const getLabelContent = (
  measureTotal: number,
  data: Record<string, number>,
  legendConfig: CPie['legend']
) => {
  const { value = 'label_percent' } = legendConfig || {}
  const [key, val] = Object.entries(data)[0]
  const percent = numeral(val / measureTotal).format('0.00%')

  const labels: Record<LegendValues, string> = {
    label: key,
    value: String(val),
    percent,
    label_value: `${key} \u2013 ${val}`,
    label_percent: `${key} \u2013 ${percent}`,
  }

  return labels[value]
}
