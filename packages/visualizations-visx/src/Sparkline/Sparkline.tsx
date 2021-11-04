/*

 MIT License

 Copyright (c) 2021 Looker Data Sciences, Inc.

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
import type { FC } from 'react'
import React, { useState, useContext, useEffect } from 'react'
import { ThemeContext } from 'styled-components'
import { LinePath } from '@visx/shape'
import { Point } from '@visx/point'
import { useMeasuredElement } from '@looker/components'
import type { SparklineProps } from '@looker/visualizations-adapters'
import {
  VisWrapper,
  isNumeric,
  DEFAULT_HEIGHT,
} from '@looker/visualizations-adapters'
import { getSeriesColor } from '../utils'

// When encountering a null value, the Sparkline will render a blank space.
// This means that it is actually rendering two separate lines in the SVG,
// and to accomplish this we need to chunk the data into groups of valid data.
const chunkByNull = (data: number[]) =>
  data.reduce<number[][]>(
    (chunks, d) => {
      if (d === null) {
        // We encountered a null value. Add a new empty data set.
        chunks.push([])
      } else {
        // Add value to the last data set
        chunks[chunks.length - 1].push(d)
      }
      return chunks
    },
    [[]]
  )

interface PointConfig {
  data: number[]
  chartDimensions: { width: number; height: number }
  yRange: [number, number]
  lineWidth: number
  render_null_values: boolean
}

// Calculate line path points based on data and chart dimensions.
const generatePoints = ({
  data,
  chartDimensions,
  yRange,
  lineWidth,
  render_null_values,
}: PointConfig) => {
  // by default, sparkline should show a gap where the value equals null
  // this is accomplished by rendering multiple LinePaths, with one set ending
  // at the null value and beginning a new shape after
  const dataChunks = render_null_values ? [data] : chunkByNull(data)
  const [yMin, yMax] = yRange

  const chartPadding = lineWidth / 2 // pad the svg area so that thick strokes don't get cropped
  const chartWidth = chartDimensions.width - chartPadding * 2
  const chartHeight = chartDimensions.height - chartPadding * 2
  const pointSpacing = chartWidth / Math.max(data.length - 1, 1)
  const valueRange = yMax - yMin

  return dataChunks.map((chunk, chunkId) => {
    const prevChunks = dataChunks.slice(0, chunkId)
    const countFrom = prevChunks.flatMap(c => c).length
    return chunk.map((d, i) => {
      return new Point({
        x: (i + countFrom + chunkId) * pointSpacing + chartPadding,
        y:
          chartHeight -
          ((Number(d) - yMin) / valueRange) * chartHeight +
          chartPadding,
      })
    })
  })
}

export const Sparkline: FC<SparklineProps> = ({
  data = [],
  config,
  fields,
  height = DEFAULT_HEIGHT,
  width,
}) => {
  const { render_null_values = false, series = {} } = config || {}

  // only allow one measure for sparklines
  const firstMeasure = fields.measures[0]
  const firstSeries = Array.isArray(series)
    ? series[0]
    : series[firstMeasure.name || '']

  const themeContext = useContext(ThemeContext)

  // get VisWrapper dimensions to support 100% width sparklines
  const [wrapperRef, setWrapperRef] = useState<HTMLDivElement | null>(null)
  const [wrapperRect, refreshRect] = useMeasuredElement(wrapperRef)

  useEffect(() => {
    refreshRect()
  }, [wrapperRef, refreshRect])

  const { line_width: lineWidth = 3 } = firstSeries || {}

  let dataMin = Infinity
  let dataMax = -Infinity

  // extract line values and min/max from two dimensional data.
  const dataPoints = data?.map(d => {
    const val = d[firstMeasure.name]
    const nullValue = render_null_values ? Number(val) : val
    if (val < dataMin && nullValue !== null) {
      dataMin = val
    }
    if (val > dataMax && nullValue !== null) {
      dataMax = val
    }
    return nullValue
  })

  const [configMin, configMax] = config?.y_axis?.[0]?.range || []

  const chartPoints = generatePoints({
    chartDimensions: { width: width || wrapperRect.width, height },
    data: dataPoints || [],
    lineWidth: lineWidth || 1,
    yRange: [
      isNumeric(configMin) ? (configMin as number) : dataMin,
      isNumeric(configMax) ? (configMax as number) : dataMax,
    ],
    render_null_values,
  })

  if (!data || data.length === 0) {
    return null
  }

  return (
    <VisWrapper ref={setWrapperRef}>
      <svg width={width} height={height} data-testid="sparkline-chart">
        {chartPoints.length &&
          chartPoints.map((chunk, i) => {
            return (
              <LinePath
                key={i}
                data={chunk}
                stroke={getSeriesColor(firstSeries, themeContext)}
                strokeWidth={lineWidth}
                x={(d: Point) => d.x || 0}
                y={(d: Point) => d.y || 0}
              />
            )
          })}
      </svg>
    </VisWrapper>
  )
}
