/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import type { CBar, CLine, CPie, CScatter, CTable } from '../adapters'

export const mockBarConfig: CBar = {
  type: 'bar',
  positioning: 'grouped',
  legend: { position: 'bottom' },
  series: [
    { color: '#ffcccc', visible: true },
    { color: '#00ffcc', visible: true },
  ],
  x_axis: [
    {
      reversed: false,
      label: 'Orders',
      values: true,
      gridlines: true,
    },
  ],
  y_axis: [
    {
      label: false,
      values: true,
      gridlines: true,
      range: ['auto', 'auto'],
    },
  ],
}

export const mockPieConfig: CPie = {
  type: 'pie',
  legend: { position: 'bottom', value: 'label', type: 'legend' },
  series: [{ color: '#fa8072' }],
}

export const mockLineConfig: CLine = {
  type: 'line',
  legend: { position: 'bottom' },
  series: [
    { color: '#ff0000', style: 'filled' },
    { color: '#00FF00', shape: 'diamond' },
  ],
  y_axis: [
    {
      range: ['auto', 'auto'],
    },
  ],
}

export const mockTableConfig: CTable = {
  type: 'table',
}

export const mockScatterConfig: CScatter = {
  type: 'scatter',
}
