/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import React from 'react'
import { mockPivotedQuery } from '@looker/visualizations-adapters'
import { Visualization } from '../'

export default function HorizontalScroll() {
  // demonstrates horizontal virtual scrolling functionality
  return (
    <Visualization
      {...mockPivotedQuery}
      height={600}
      config={{ type: 'table', show_totals: true }}
    />
  )
}
