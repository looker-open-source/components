/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import React from 'react'
import type { Fields } from '@looker/visualizations-adapters'
import {
  buildChartConfig,
  mockSdkFieldsResponse,
  tabularResponse,
  mockSdkDataResponse,
  mockSdkConfigResponse,
  mockTotals,
} from '@looker/visualizations-adapters'
import { Visualization } from '../'

export default function Basic() {
  const data = tabularResponse([...mockSdkDataResponse])

  const config = buildChartConfig({
    config: {
      ...mockSdkConfigResponse,
      show_row_numbers: true,
      show_totals: true,
      type: 'table',
    },
    data,
    fields: mockSdkFieldsResponse as Fields,
  })

  return (
    <Visualization
      data={data}
      fields={mockSdkFieldsResponse as Fields}
      height={600}
      totals={mockTotals}
      config={config}
    />
  )
}
