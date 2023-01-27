/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import type { CArea, CLine } from '../adapters'
import type { ConfigHelper, RawApiConfigResponse } from '../types'

/**
 * Convert 'stacking' prop to 'positioning' and set Area chart default value
 */
export const linePositioning: ConfigHelper<CArea | CLine> = ({
  config,
  data,
  fields,
}) => {
  type AllKeys = RawApiConfigResponse['stacking'] | 'default'

  const { positioning, stacking, ...restConfig } = config

  const currentPositioning = positioning || stacking || ''

  const GROUP_MODES: Record<AllKeys, CArea['positioning']> = {
    default: 'overlay',
    grouped: 'overlay',
    normal: 'stacked',
    overlay: 'overlay',
    percent: 'percent',
    stacked: 'stacked',
  }

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
