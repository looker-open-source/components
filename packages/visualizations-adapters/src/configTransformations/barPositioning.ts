/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import type { CBar, CColumn } from '../adapters'
import type { ConfigHelper, RawApiConfigResponse } from '../types'

type AllKeys = RawApiConfigResponse['stacking'] | 'default'

const GROUP_MODES: Record<AllKeys, CBar['positioning']> = {
  default: 'grouped',
  grouped: 'grouped',
  normal: 'stacked',
  overlay: 'grouped',
  percent: 'percent',
  stacked: 'stacked',
}

/**
 * Convert 'stacking' prop to 'positioning' and set Bar chart default value
 */
export const barPositioning: ConfigHelper<CBar | CColumn> = ({
  config,
  data,
  fields,
}) => {
  const { positioning, stacking, ...restConfig } = config

  const currentPositioning = positioning || stacking || ''

  return {
    config: {
      ...restConfig,
      positioning:
        GROUP_MODES[currentPositioning as AllKeys] || GROUP_MODES.default,
    },
    data,
    fields,
  }
}
