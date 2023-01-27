/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import {
  pickLongestLabel,
  useMeasuredText,
} from '@looker/visualizations-adapters'
import type { CPie } from '@looker/visualizations-adapters'
import { useTheme } from 'styled-components'
import { getLabelContent } from './getLabelContent'

export const MIN_LABEL_SPACE = 90

/**
 * Utility function measures the actual dom space required for the longest label in
 * a pie chart data set.
 *
 * @param measureTotal the total value represented by the pie chart data
 * @param keyValData the data used to render a pie chart
 * @param legend the legend config
 * @returns the width in pixels of the longest label
 */
export const useLabelWidth = (
  measureTotal: number,
  keyValData: Record<string, number>,
  legend: CPie['legend']
) => {
  const { type: legendType = 'legend' } = legend || {}
  const theme = useTheme()

  const longestLabel = pickLongestLabel(
    Object.entries(keyValData).map(([key, val]) => {
      return getLabelContent(measureTotal, { [key]: val }, legend)
    })
  )

  const { width: labelWidth } = useMeasuredText(longestLabel, {
    fontSize:
      legendType === 'legend' ? theme.fontSizes.medium : theme.fontSizes.xsmall,
    fontFamily: theme.fonts.body,
  })

  return Math.max(labelWidth + 20, MIN_LABEL_SPACE)
}
