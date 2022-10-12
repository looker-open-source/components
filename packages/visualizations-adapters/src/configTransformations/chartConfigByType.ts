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

import type { ConfigHelper, SupportedChartTypes } from '../types'

import { barPositioning } from './barPositioning'
import { linePositioning } from './linePositioning'
import { legendPosition } from './legendPosition'
import { legendType } from './legendType'
import { legendValue } from './legendValue'
import { renderNullValues } from './renderNullValues'
import { seriesCellVis } from './seriesCellVis'
import { seriesColors } from './seriesColors'
import { seriesLabels } from './seriesLabels'
import { seriesLineWidth } from './seriesLineWidth'
import { dimensionSeriesColors } from './dimensionSeriesColors'
import { seriesPointShape } from './seriesPointShape'
import { seriesPointStyle } from './seriesPointStyle'
import { seriesSize } from './seriesSize'
import { seriesVisible } from './seriesVisible'
import { tooltips } from './tooltips'
import { truncateHeader } from './truncateHeader'
import { truncateText } from './truncateText'
import { xAxis } from './xAxis'
import { yAxis } from './yAxis'
import { yAxisRange } from './yAxisRange'
import { seriesValueFormat } from './seriesValueFormat'
import { showTotals } from './showTotals'
import { showRowTotals } from './showRowTotals'

export const commonCartesianDefaults = [
  seriesLabels,
  seriesColors,
  seriesValueFormat,
  seriesVisible,
  legendPosition,
  tooltips,
  xAxis,
  yAxis,
]

export const commonLineDefaults = [
  seriesPointStyle,
  seriesPointShape,
  renderNullValues,
]

export const chartConfigByType: Record<
  keyof SupportedChartTypes | 'default',
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ConfigHelper<any>[]
> = {
  area: [
    ...commonLineDefaults,
    ...commonCartesianDefaults,
    linePositioning,
    seriesLineWidth,
  ],
  bar: [barPositioning, ...commonCartesianDefaults],
  column: [barPositioning, ...commonCartesianDefaults],
  default: [...commonCartesianDefaults],
  table: [
    seriesCellVis,
    seriesLabels,
    seriesVisible,
    truncateHeader,
    truncateText,
    seriesValueFormat,
    seriesColors,
    showTotals,
    showRowTotals,
  ],
  line: [...commonLineDefaults, ...commonCartesianDefaults, seriesLineWidth],
  pie: [
    legendPosition,
    legendType,
    legendValue,
    dimensionSeriesColors,
    tooltips,
  ],
  scatter: [
    ...commonLineDefaults,
    ...commonCartesianDefaults,
    seriesLineWidth,
    seriesSize,
    renderNullValues,
  ],
  single_value: [seriesLabels, seriesColors, seriesValueFormat],
  sparkline: [seriesColors, seriesLineWidth, renderNullValues, yAxisRange],
}
