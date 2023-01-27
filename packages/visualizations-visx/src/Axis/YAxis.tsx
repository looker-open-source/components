/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import { Axis, ThemeContext as VisxThemeContext } from '@visx/xychart'
import React, { useContext } from 'react'
import type { Fields } from '@looker/visualizations-adapters'
import { Tick } from './Tick'

export type YAxisProps = {
  fields: Fields
  showTicks?: boolean
  label?: string
  labelDx: number
  valueFormat?: string | null
}

export const YAxis = ({
  showTicks,
  label,
  labelDx,
  valueFormat,
  fields,
}: YAxisProps) => {
  const visxTheme = useContext(VisxThemeContext)

  return (
    <Axis
      hideTicks={!showTicks}
      label={label}
      labelOffset={showTicks ? undefined : 0}
      labelProps={{ ...visxTheme.axisStyles.y.left.axisLabel, dx: labelDx }}
      tickComponent={tickProps =>
        showTicks ? (
          <Tick fields={fields} valueFormat={valueFormat} {...tickProps} />
        ) : null
      }
      orientation="left"
    />
  )
}
