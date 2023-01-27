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

import pick from 'lodash/pick'
import React, { useContext } from 'react'
import { ThemeContext as VisxThemeContext } from '@visx/xychart'
import {
  useMeasuredText,
  pickLongestLabel,
  getVisibleMeasureNames,
  DEFAULT_MARGIN,
} from '@looker/visualizations-adapters'
import type {
  ChartData,
  Fields,
  CCartesian,
} from '@looker/visualizations-adapters'
import { MAX_TICK_LABEL_LENGTH, XAxis, XAxisDate, YAxis } from '../Axis'
import { formatDateLabel, getYAxisRange, isDateQuery } from '.'
import { getYAxisFormat, getXAxisFormat } from '../utils'

export type UseAxisProps = {
  config: CCartesian
  data: ChartData
  fields: Fields
}

/**
 * In the event that visx decides to render a tick label of the longest length
 * (as per pickLongestLabel), we should have a small buffer between the longest
 * tick label and the optional axis label.
 */
const TICK_LABEL_TO_AXIS_LABEL_SPACER = 10

/**
 * useAxis accepts chart information and outputs axes compatible with
 * a visx XYChart. It also outputs the proper margin object for the calling
 * chart component (necessary when x-axis tick labels are angled).
 */
export const useAxis = ({ config, data, fields }: UseAxisProps) => {
  const visxTheme = useContext(VisxThemeContext)

  /**
   * Need an array of formatted date strings (i.e. values as they'd appear on the
   * x-axis) in order to properly calculate tick spacing
   */
  const xAxisLabels = data.map(datum =>
    formatDateLabel({
      dateString: datum.dimension,
      fields,
    }).slice(0, MAX_TICK_LABEL_LENGTH)
  )
  const xAxisLongestLabel = pickLongestLabel(xAxisLabels)
  const { height: xAxisLongestLabelHeight, width: xAxisLongestLabelWidth } =
    useMeasuredText(xAxisLongestLabel, {
      fontFamily:
        visxTheme.axisStyles.x.bottom.tickLabel.fontFamily || 'Roboto',
      fontSize: visxTheme.axisStyles.x.bottom.tickLabel.fontSize || '1rem',
    })
  const averageLabelLength = xAxisLabels.join('').length / xAxisLabels.length

  const renderXAxisTicks = config?.x_axis?.[0]?.values
  const hasRotatedXAxisLabels = renderXAxisTicks && averageLabelLength > 10
  const angledLabelHypotenuse =
    Math.sqrt((xAxisLongestLabelWidth * xAxisLongestLabelWidth) / 2) +
    TICK_LABEL_TO_AXIS_LABEL_SPACER

  const X_AXIS_STYLE = hasRotatedXAxisLabels
    ? {
        labelDy: angledLabelHypotenuse,
        tickAngle: -45,
        tickSpace: xAxisLongestLabelHeight * 2,
        tickTextAnchor: 'end' as const,
      }
    : {
        labelDy: 0,
        tickAngle: 0,
        tickSpace: xAxisLongestLabelWidth + DEFAULT_MARGIN,
        tickTextAnchor: 'inherit' as const,
      }

  const xAxisValueFormat = getXAxisFormat(fields)

  const XAxisWrapped = () =>
    isDateQuery(fields) && config.type !== 'column' ? (
      <XAxisDate
        label={config?.x_axis?.[0]?.label || undefined}
        showTicks={renderXAxisTicks}
      />
    ) : (
      <XAxis
        showTicks={renderXAxisTicks}
        fields={fields}
        label={config?.x_axis?.[0]?.label || undefined}
        valueFormat={xAxisValueFormat}
        {...X_AXIS_STYLE}
      />
    )

  const renderYAxisTicks = config?.y_axis?.[0]?.values

  /**
   * If all measures are numeric, we can just use the getDataRange helper.
   *
   * Otherwise, treat all measure values as strings.
   */
  let yAxisLongestLabel
  if (fields.measures.every(measure => measure.is_numeric)) {
    /**
     * Currently ignoring custom value formats from Looker vis config and instead
     * assuming y-axis tick values will be integers.
     *
     * TODO: Consider value format when determining y-max string.
     */
    const dataRangeStrings = getYAxisRange({
      config,
      data,
      fields,
    }).map(d => String(Math.round(d as number)))

    yAxisLongestLabel = pickLongestLabel(dataRangeStrings)
  } else {
    const measureNames = getVisibleMeasureNames(fields, config)
    const measureValues = data.flatMap(d => {
      const datumMeasureValues = Object.values(pick(d, measureNames))
      return datumMeasureValues.map(value => String(value))
    })
    yAxisLongestLabel = pickLongestLabel(measureValues)
  }

  const { width: yAxisLongestLabelWidth } = useMeasuredText(yAxisLongestLabel, {
    fontFamily: visxTheme.axisStyles.y.left.tickLabel.fontFamily || 'Roboto',
    fontSize: visxTheme.axisStyles.y.left.tickLabel.fontSize || '1rem',
  })

  // -10 provides spacing between label and tick values / axis line
  const yAxisLabelDx = renderYAxisTicks ? -yAxisLongestLabelWidth - 10 : -10

  const yAxisValueFormat = getYAxisFormat(config)

  const YAxisWrapped = () => (
    <YAxis
      showTicks={renderYAxisTicks}
      fields={fields}
      label={config?.y_axis?.[0]?.label || undefined}
      labelDx={yAxisLabelDx}
      valueFormat={yAxisValueFormat}
    />
  )

  const yAxisLabelWidth = renderYAxisTicks
    ? yAxisLongestLabelWidth + DEFAULT_MARGIN
    : DEFAULT_MARGIN

  const chartMarginBottom = hasRotatedXAxisLabels
    ? angledLabelHypotenuse + DEFAULT_MARGIN
    : DEFAULT_MARGIN
  const chartMarginLeft = hasRotatedXAxisLabels
    ? Math.max(angledLabelHypotenuse, yAxisLabelWidth)
    : yAxisLabelWidth

  const chartMargin = {
    top: 0,
    right: 0,
    bottom: chartMarginBottom,
    left: chartMarginLeft,
  }

  return { XAxis: XAxisWrapped, YAxis: YAxisWrapped, chartMargin }
}
