/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import type { Theme } from '@looker/components'
import type { CLineSeries } from '@looker/visualizations-adapters'

/**
 * Sets marker fill color based on series configuration, with theme fallback
 *
 * @param series a series configuration object
 * @param lookerTheme our default theme context
 * @returns a color code or undefined
 */

export const getMarkerFill = (series: CLineSeries, lookerTheme: Theme) => {
  if (series.style === 'outline') {
    return lookerTheme.colors.background
  }
  if (series.color) {
    return series.color
  }
  return lookerTheme.colors.key
}
