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
import type { CCartesian, Fields } from '@looker/visualizations-adapters'
import { useTheme } from 'styled-components'
import { DataContext } from '@visx/xychart'
import { LegendOrdinal } from '@visx/legend'
import type { ScaleOrdinal } from 'd3-scale'
import partial from 'lodash/partial'
import { seriesLabelFormatter } from '../utils'

type LegendProps = {
  chartWidth?: number
  config: CCartesian
  fields: Fields
}

const DEFAULT_LEGEND_WIDTH = 200

export const XYLegend = ({ chartWidth, config, fields }: LegendProps) => {
  const {
    colorScale = {} as ScaleOrdinal<string, string, never>,
    theme: visxTheme,
    margin,
  } = useContext(DataContext)

  const {
    space: { xsmall, small },
  } = useTheme()
  const { legend } = config

  // Early return if legend is either false or undefined
  if (!legend) {
    return <></>
  }

  const legendWidth = legend.width || DEFAULT_LEGEND_WIDTH

  // The distance between the VisWrapper left edge and svg's y-axis
  const yAxisSpacer =
    legend.position === 'left' || legend.position === 'right'
      ? undefined
      : margin?.left

  const { direction, ...legendStyle } = {
    bottom: {
      direction: 'row' as const,
      marginLeft: yAxisSpacer,
      marginTop: small,
      width: `calc(${
        chartWidth ? `${chartWidth}px` : '100%'
      } - ${yAxisSpacer}px)`,
    },
    top: {
      direction: 'row' as const,
      marginLeft: yAxisSpacer,
      marginBottom: small,
      width: `calc(${
        chartWidth ? `${chartWidth}px` : '100%'
      } - ${yAxisSpacer}px)`,
    },
    left: {
      direction: 'column' as const,
      width: legendWidth,
    },
    right: {
      direction: 'column' as const,
      width: legendWidth,
    },
  }[legend.position]

  return (
    <LegendOrdinal
      direction={direction}
      itemMargin={`0 ${small} ${xsmall} ${small}`}
      labelFormat={partial(seriesLabelFormatter, fields, config)}
      style={{
        color: visxTheme?.svgLabelBig.fill,
        display: 'flex',
        flexShrink: 0,
        flexWrap: 'wrap',
        justifyContent: 'center',
        ...legendStyle,
      }}
      scale={colorScale}
      shape="line"
    />
  )
}
