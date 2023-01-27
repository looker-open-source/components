/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import { Axis } from '@visx/xychart'

export type XAxisDateProps = {
  label?: string
  showTicks?: boolean
}

/**
 * Axis component to be used when using a time scale
 */
export const XAxisDate = ({ label, showTicks }: XAxisDateProps) => (
  <Axis
    hideTicks={!showTicks}
    label={label}
    labelOffset={showTicks ? undefined : 0}
    orientation="bottom"
    tickValues={showTicks ? undefined : []}
  />
)
