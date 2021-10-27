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
import { VisWrapper } from '@looker/visualizations-adapters'

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
  chartRect: DOMRect
  min: number
  max: number
  lineWidth: number
  render_null_values: boolean
}

// Calculate line path points based on data and chart dimensions.
const generatePoints = ({
  data,
  chartRect,
  min,
  max,
  lineWidth,
  render_null_values,
}: PointConfig) => {
  // by default, sparkline should show a gap where the value equals null
  // this is accomplished by rendering multiple LinePaths, with one set ending
  // at the null value and beginning a new shape after
  const dataChunks = render_null_values ? [data] : chunkByNull(data)

  const chartPadding = lineWidth / 2 // pad the svg area so that thick strokes don't get cropped
  const chartWidth = chartRect.width - chartPadding * 2
  const chartHeight = chartRect.height - chartPadding * 2
  const pointSpacing = chartWidth / Math.max(data.length - 1, 1)
  const valueRange = max - min

  return dataChunks.map((chunk, chunkId) => {
    const prevChunks = dataChunks.slice(0, chunkId)
    const countFrom = prevChunks.flatMap(c => c).length
    return chunk.map((d, i) => {
      return new Point({
        x: (i + countFrom + chunkId) * pointSpacing + chartPadding,
        y:
          chartHeight -
          ((Number(d) - min) / valueRange) * chartHeight +
          chartPadding,
      })
    })
  })
}

export const Sparkline: FC<SparklineProps> = ({
  data = [],
  config,
  fields,
  height = 300,
  width = 500,
}) => {
  const { render_null_values = false, series = {} } = config || {}

  const firstSeries = Array.isArray(series)
    ? series[0]
    : series[fields?.measures?.[0].name || '']

  const { line_width: lineWidth = 3 } = firstSeries || {}

  const [wrapperRef, setWrapperRef] = useState<HTMLDivElement | null>(null)
  const themeContext = useContext(ThemeContext)
  const [wrapperRect, refreshRect] = useMeasuredElement(wrapperRef)

  // track min and max values to automatically calibrate Y axis bounds.
  let minValue = Infinity
  let maxValue = 0

  // extract line values and min/max from two dimensional data.
  const dataPoints = data?.map(d => {
    const val = d[fields.measures[0].name]
    const nullValue = render_null_values ? Number(val) : val
    if (val < minValue && nullValue !== null) {
      minValue = val
    }
    if (val > maxValue && nullValue !== null) {
      maxValue = val
    }
    return nullValue
  })

  const [yMin = minValue, yMax = maxValue] = config?.y_axis?.range || []

  const chartPoints = generatePoints({
    // FIXME
    // https://github.com/looker-open-source/components/pull/2202
    chartRect: wrapperRect as DOMRect,
    data: dataPoints || [],
    lineWidth: lineWidth || 1,
    max: yMax === 'auto' ? maxValue : yMax,
    min: yMin === 'auto' ? minValue : yMin,
    render_null_values,
  })

  useEffect(() => {
    refreshRect()
  }, [wrapperRef, refreshRect])

  if (!data || data.length === 0) {
    return null
  }

  return (
    <VisWrapper
      ref={(el: HTMLDivElement) => {
        setWrapperRef(el)
      }}
    >
      <svg width={width} height={height} data-testid="sparkline-chart">
        {chartPoints.length &&
          chartPoints.map((chunk, i) => (
            <LinePath
              key={i}
              data={chunk}
              stroke={themeContext.colors.key}
              strokeWidth={lineWidth}
              x={(d: Point) => d.x || 0}
              y={(d: Point) => d.y || 0}
            />
          ))}
      </svg>
    </VisWrapper>
  )
}
