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
import React, { useContext } from 'react'
import type { CCartesian, Fields } from '@looker/visualizations-adapters'
import { ThemeContext } from 'styled-components'
import { DataContext } from '@visx/xychart'
import { LegendOrdinal } from '@visx/legend'
import partial from 'lodash/partial'
import { seriesLabelFormatter } from '../utils'

type LegendProps = {
  config: CCartesian
  fields: Fields
}

const DEFAULT_LEGEND_WIDTH = 200

export const XYLegend: FC<LegendProps> = ({ config, fields }) => {
  const { colorScale, theme: visxTheme, margin } = useContext(DataContext)
  const {
    space: { small },
  } = useContext(ThemeContext)
  const { legend } = config

  // Early return if legend is either false or undefined
  if (!legend) {
    return <></>
  }

  // The distance between the VisWrapper left edge and the y-axis
  const yAxisSpacer = margin?.left
  const { direction, width } =
    legend.position === 'left' || legend.position === 'right'
      ? {
          direction: 'column' as const,
          width: DEFAULT_LEGEND_WIDTH,
        }
      : {
          direction: 'row' as const,
          width: `calc(100% - ${yAxisSpacer})`,
        }

  return (
    <LegendOrdinal
      direction={direction}
      itemMargin={`0 ${small} ${small} ${small}`}
      labelFormat={partial(seriesLabelFormatter, fields, config)}
      style={{
        color: visxTheme?.svgLabelBig.fill,
        display: 'flex',
        justifyContent: 'center',
        marginLeft: yAxisSpacer,
        /**
         * At the moment, unless we specify a width on the legend, the chart's underlying
         * <svg> will take up all avaiable width (relative to the <VisWrapper> parent).
         * Setting the width will prevent any sort of visx ref measuring from ignoring the
         * <Legend>.
         */
        width,
      }}
      // TODO: resolve non-null assertion -- https://b.corp.google.com/issues/199297029
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      scale={colorScale!}
      shape="line"
    />
  )
}
