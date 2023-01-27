/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import React from 'react'
import type { Fields } from '@looker/visualizations-adapters'
import {
  buildChartConfig,
  buildPivotFields,
  mockSdkPivotedFieldsResponse,
  mockPivots,
  tabularPivotResponse,
  mockSdkPivotDataResponse,
  mockSdkConfigResponse,
} from '@looker/visualizations-adapters'
import { Visualization } from '../Visualization'

export default function Pivot() {
  const mockPivotFields = buildPivotFields({
    fields: mockSdkPivotedFieldsResponse as Fields,
    pivots: mockPivots,
  })

  const mockPivotData = tabularPivotResponse({
    data: [...mockSdkPivotDataResponse],
    fields: mockSdkPivotedFieldsResponse as Fields,
    pivots: mockPivots,
  })

  const config = buildChartConfig({
    config: { ...mockSdkConfigResponse, type: 'table' },
    data: mockPivotData,
    fields: mockPivotFields,
  })

  return (
    <Visualization
      config={config}
      data={mockPivotData}
      fields={mockPivotFields}
      pivots={mockPivots}
      height={600}
    />
  )
}
