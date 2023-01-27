/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React, { useContext } from 'react'
import {
  Axis,
  ThemeContext as VisxThemeContext,
  DataContext,
} from '@visx/xychart'
import type { XAxisProps } from './types'
import { Tick } from './Tick'

export const XAxis = ({
  fields,
  label,
  labelDy,
  showTicks,
  tickAngle,
  tickTextAnchor,
  tickSpace,
  valueFormat,
}: XAxisProps) => {
  const visxTheme = useContext(VisxThemeContext)
  const { width = 0 } = useContext(DataContext)

  const numTicks = Math.floor(width / tickSpace)

  return (
    <Axis
      hideTicks={!showTicks}
      label={label}
      labelOffset={showTicks ? undefined : 0}
      labelProps={{
        ...visxTheme.axisStyles.x.bottom.axisLabel,
        dy: labelDy,
      }}
      orientation="bottom"
      numTicks={numTicks}
      tickComponent={tickProps =>
        showTicks ? (
          <Tick fields={fields} valueFormat={valueFormat} {...tickProps} />
        ) : null
      }
      tickLabelProps={() => ({
        angle: tickAngle,
        textAnchor: tickTextAnchor,
      })}
    />
  )
}
