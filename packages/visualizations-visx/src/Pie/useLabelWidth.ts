/*

 MIT License

 Copyright (c) 2022 Looker Data Sciences, Inc.

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all
 copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 SOFTWARE.

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
