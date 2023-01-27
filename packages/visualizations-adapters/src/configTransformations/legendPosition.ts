/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import type {
  ConfigHelper,
  CommonCartesianProperties,
  LegendPositions,
} from '../types'

/**
 * Combine `legend_position` and `hide_legend` into a single `legend` object.
 */
export const legendPosition: ConfigHelper<CommonCartesianProperties> = ({
  config,
  data,
  fields,
}) => {
  type DefaultApiResponse = 'left' | 'center' | 'right'
  type AllKeys = DefaultApiResponse & LegendPositions & ''

  const { hide_legend, legend_position, legend, ...restConfig } = config

  // Pie charts render legend to the right by default. All other cartesian charts
  // render the legend below.
  const DEFAULT_POSITION = config.type === 'pie' ? 'right' : 'bottom'

  const LEGEND_POSITION: Record<AllKeys, LegendPositions> = {
    '': DEFAULT_POSITION,
    bottom: 'bottom',
    center: DEFAULT_POSITION,
    left: 'left',
    right: 'right',
    top: 'top',
  }

  const positionValue =
    LEGEND_POSITION[
      ((legend && legend.position) || legend_position || '') as AllKeys
    ]

  return {
    config: {
      ...restConfig,
      legend:
        hide_legend === true || legend === false
          ? false
          : {
              ...legend,
              position: positionValue,
            },
    },
    data,
    fields,
  }
}
