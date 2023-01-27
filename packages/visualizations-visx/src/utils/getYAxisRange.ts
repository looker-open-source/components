/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import type { ContinuousDomain, ContinuousInput } from '@visx/scale'
import type { GetDataRangeProps } from '@looker/visualizations-adapters'
import { getDataRange } from '@looker/visualizations-adapters'

/**
 * Returns a 2-tuple where the first element is the y-axis min
 * and the second element is the y-axis max
 */
export const getYAxisRange = ({
  config,
  data,
  fields,
}: GetDataRangeProps): ContinuousDomain => {
  const [configMin = 'auto', configMax = 'auto'] =
    config?.y_axis?.[0]?.range || []

  const [dataMin, dataMax] = getDataRange({ config, data, fields })

  const min: ContinuousInput =
    configMin === 'auto' ? Math.min(0, Math.floor(dataMin)) : Number(configMin)
  const max: ContinuousInput =
    configMax === 'auto' ? Math.max(0, Math.ceil(dataMax)) : Number(configMax)

  return [min, max]
}
