/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import type { CCartesian } from '@looker/visualizations-adapters'
import { Grid as VisXGrid } from '@visx/xychart'
import every from 'lodash/every'

export type GridProps = {
  config: CCartesian
}

export const Grid = ({ config }: GridProps) => {
  const x_axis = config?.x_axis || []
  const y_axis = config?.y_axis || []
  const showGridX = every(x_axis, ['gridlines', true])
  const showGridY = every(y_axis, ['gridlines', true])

  return <VisXGrid rows={showGridY} columns={showGridX} />
}
