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

import React, { useContext } from 'react'
import {
  DataProvider,
  BarSeries,
  XYChart,
  BarStack,
  BarGroup,
  ThemeContext as VisxThemeContext,
} from '@visx/xychart'
import type { AxisScaleOutput, AxisScale } from '@visx/axis'
import type { LinearScaleConfig } from '@visx/scale'
import type {
  BarProps,
  SDKRecord,
  CLineSeries,
} from '@looker/visualizations-adapters'
import {
  DEFAULT_HEIGHT,
  VisWrapper,
  pickLongestLabel,
  useMeasuredText,
  getVisibleMeasureNames,
  DEFAULT_MARGIN,
} from '@looker/visualizations-adapters'
import { XYLegend } from '../XYLegend'
import isArray from 'lodash/isArray'
import get from 'lodash/get'
import compact from 'lodash/compact'
import pick from 'lodash/pick'
import { XAxis, YAxis } from '../Axis'
import {
  concatDimensions,
  getX,
  getY,
  getYAxisRange,
  useChartTheme,
  isValidChartData,
  formatDateLabel,
  getXAxisFormat,
  getYAxisFormat,
} from '../utils'
import { XYTooltip } from '../XYTooltip'
import { Grid } from '../Grid'
import numeral from 'numeral'

export const Bar = ({
  data,
  config,
  height = DEFAULT_HEIGHT,
  width,
  fields,
}: BarProps) => {
  const { positioning, series: seriesList, legend } = config

  /**
   * The concatDimensions call will further format the data array returned from
   * the tabularReponse call. This new array combines existing dimension properties
   * with a single `dimension` property.
   */
  const formattedData = concatDimensions(data, fields)
  const chartTheme = useChartTheme(seriesList)
  const visxTheme = useContext(VisxThemeContext)

  const yAxisLabels = formattedData.map(datum =>
    formatDateLabel({
      dateString: datum.dimension,
      fields,
    })
  )
  const yAxisLongestLabel = pickLongestLabel(yAxisLabels)
  const { width: yAxisLongestLabelWidth } = useMeasuredText(yAxisLongestLabel, {
    fontFamily: visxTheme.axisStyles.x.bottom.tickLabel.fontFamily || 'Roboto',
    fontSize: visxTheme.axisStyles.x.bottom.tickLabel.fontSize || '1rem',
  })

  // CAUTION: yAxisConfig intentionally refers to x_axis properties in the config response.
  const yAxisConfig = config?.x_axis?.[0]
  const yAxisValueFormat = getXAxisFormat(fields)

  // -10 provides spacing between label and tick values / axis line
  const yAxisLabelDx = yAxisConfig?.values ? -yAxisLongestLabelWidth - 10 : -10

  /**
   * CAUTION: x and y axes from the vis config are flipped when used in Bar;
   * xAxisConfig intentionally refers to y_axis properties in the config response.
   */
  const xAxisConfig = config?.y_axis?.[0]
  const xAxisValueFormat = getYAxisFormat(config)

  /**
   * Borrowed from useAxis
   * assume xAxis comes from measure since yAxis is dimension
   * get measure name, then values from that measure name
   * compute average length taking into account value format
   * create boolean for when average length is certain size to peform rotation
   */
  const measureNames = getVisibleMeasureNames(fields, config)

  const measureValues = data.flatMap(d => {
    const datumMeasureValues = Object.values(pick(d, measureNames))
    return datumMeasureValues.map(value =>
      numeral(value).format(xAxisValueFormat)
    )
  })

  const xAxisLongestLabel = pickLongestLabel(measureValues)

  const { height: xAxisLongestLabelHeight, width: xAxisLongestLabelWidth } =
    useMeasuredText(xAxisLongestLabel, {
      fontFamily:
        visxTheme.axisStyles.x.bottom.tickLabel.fontFamily || 'Roboto',
      fontSize: visxTheme.axisStyles.x.bottom.tickLabel.fontSize || '1rem',
    })

  const averageMeasureValueLength =
    measureValues.join('').length / measureValues.length

  const hasRotatedXAxisLabels =
    xAxisConfig?.values && averageMeasureValueLength > 10

  const angledLabelHypotenuse = Math.sqrt(
    (xAxisLongestLabelWidth * xAxisLongestLabelWidth) / 2
  )

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

  // Early return if the data response is insufficient
  if (!isValidChartData(data, fields)) {
    return null
  }

  const domain =
    positioning === 'percent'
      ? [0, 1]
      : getYAxisRange({ config, data: formattedData, fields })

  const X_SCALE: LinearScaleConfig<AxisScaleOutput> = {
    type: 'linear',
    ...(domain && { domain, zero: false }),
  }

  const chartMarginBottom = hasRotatedXAxisLabels
    ? angledLabelHypotenuse + DEFAULT_MARGIN
    : DEFAULT_MARGIN

  const chartMargin = {
    right: 0,
    top: 0,
    bottom: chartMarginBottom,
    left: yAxisConfig?.values
      ? yAxisLongestLabelWidth + DEFAULT_MARGIN
      : DEFAULT_MARGIN,
  }

  const renderedBars: JSX.Element[] | undefined = compact(
    fields.measures.map((measure, i) => {
      const series: CLineSeries = isArray(seriesList)
        ? get(config, ['series', i])
        : get(config, ['series', measure.name])

      if (!series.visible) return undefined

      return (
        <BarSeries<
          AxisScale<AxisScaleOutput>,
          AxisScale<AxisScaleOutput>,
          SDKRecord
        >
          key={i}
          dataKey={measure.name}
          data={formattedData}
          xAccessor={(d: SDKRecord) => getY(d, i)}
          yAccessor={(d: SDKRecord) => getX(d)}
        />
      )
    })
  )

  return (
    <DataProvider
      // these props have been moved from XYChart to DataProvider
      // this allows us to move DataContext up a level such that we can
      // render an HTML legend that uses DataContext and an SVG chart
      // without doing this you would have to render XYChart as a child
      // of XYChart, which would then require the legend to be SVG-based
      // because HTML cannot be a child of SVG
      xScale={X_SCALE}
      yScale={{ type: 'band', paddingInner: 0.2 }}
      theme={chartTheme}
    >
      <VisWrapper legend={legend}>
        <XYChart margin={chartMargin} width={width} height={height}>
          <XAxis
            showTicks={xAxisConfig?.values}
            fields={fields}
            label={xAxisConfig?.label || ''}
            valueFormat={xAxisValueFormat}
            {...X_AXIS_STYLE}
          />
          <YAxis
            showTicks={yAxisConfig?.values}
            fields={fields}
            label={yAxisConfig?.label || ''}
            labelDx={yAxisLabelDx}
            valueFormat={yAxisValueFormat}
          />
          <Grid config={config} />
          <XYTooltip
            config={config}
            data={formattedData}
            fields={fields}
            showDatumGlyph={false}
            snapToDatum={false}
          />
          {positioning === 'stacked' || positioning === 'percent' ? (
            <BarStack offset={positioning === 'percent' ? 'expand' : 'none'}>
              {renderedBars}
            </BarStack>
          ) : (
            <BarGroup>{renderedBars}</BarGroup>
          )}
        </XYChart>
        <XYLegend chartWidth={width} config={config} fields={fields} />
      </VisWrapper>
    </DataProvider>
  )
}
