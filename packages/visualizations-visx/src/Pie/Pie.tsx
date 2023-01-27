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

import React, { Fragment } from 'react'
import { DEFAULT_HEIGHT } from '@looker/visualizations-adapters'
import type { PieArcDatum } from '@visx/shape/lib/shapes/Pie'
import VisxPie from '@visx/shape/lib/shapes/Pie'
import { scaleOrdinal } from '@visx/scale'
import type { ScaleOrdinal } from 'd3-scale'
import { Group } from '@visx/group'
import { useTooltip } from '@visx/tooltip'
import type {
  CPie,
  DimensionMetadata,
  PieProps,
  SDKRecord,
  LegendPositions,
  LegendTypes,
} from '@looker/visualizations-adapters'
import type { Point } from '@visx/point'
import isArray from 'lodash/isArray'
import pick from 'lodash/pick'
import styled, { css } from 'styled-components'
import { useLabelWidth } from './useLabelWidth'
import { getLabelContent } from './getLabelContent'
import { getChartGeometry } from './getChartGeometry'
import { PieTooltip } from './PieTooltip'
import { PieArc } from './PieArc'
import { PieLabel } from './PieLabel'
import { PieLegend } from './PieLegend'

const generateColorScale = (
  data: SDKRecord,
  seriesConfig: CPie['series'],
  dimension: DimensionMetadata
): ScaleOrdinal<string, string> => {
  const dataKey = dimension.name

  const range = isArray(seriesConfig)
    ? seriesConfig.map(s => s?.color)
    : data.map((d: Record<string, string>) => seriesConfig[d[dataKey]]?.color)

  return scaleOrdinal<string, string>({
    domain: data.map((d: Record<string, string>) => d[dataKey]),
    range,
  })
}

export const Pie = ({
  data,
  config,
  height = DEFAULT_HEIGHT,
  width = DEFAULT_HEIGHT,
  fields,
}: PieProps) => {
  const { showTooltip, hideTooltip, ...tooltipProps } = useTooltip()
  const { series, legend, tooltips = true } = config
  const {
    position: legendPosition = 'right',
    type: legendType,
    width: legendWidth,
  } = legend || {}

  // limit PIE chart to 50 sections
  const limitedData: SDKRecord[] = data.slice(0, 50)
  const firstMeasure = fields.measures[0] || {}
  const firstDimension = fields.dimensions[0] || {}

  // format data for use in legend
  const keyValData: Record<string, number> = Object.fromEntries(
    limitedData.map((d: SDKRecord) => [
      d[firstDimension.name],
      Number(d[firstMeasure.name]),
    ])
  )

  // measureTotal used for calculating percentages
  const measureTotal = Number(
    Object.values(keyValData).reduce((total, v) => Number(total) + Number(v), 0)
  )

  const labelWidth = useLabelWidth(measureTotal, keyValData, legend)

  const { canvasW, canvasH, pieCenterX, pieCenterY, outerRadius } =
    getChartGeometry({
      legendType: legend ? legend.type : undefined,
      width,
      height,
      labelWidth,
    })

  // derive colors based on series config
  const colorScale = generateColorScale(limitedData, series, firstDimension)

  let mouseOutTimer = 0

  const handleMouseOver = (
    { data: pieDatum }: PieArcDatum<SDKRecord>,
    coords: Point | null
  ) => {
    window.clearTimeout(mouseOutTimer)
    if (coords && tooltips) {
      showTooltip({
        tooltipData: pieDatum,
        tooltipTop: coords.y,
        tooltipLeft: coords.x,
      })
    }
  }

  const handleMouseOut = () => {
    mouseOutTimer = window.setTimeout(() => {
      hideTooltip()
    })
  }

  return (
    <>
      <PieGrid legendType={legend ? legend.type : undefined}>
        <PieChart
          legendPosition={legendPosition}
          width={canvasW}
          height={canvasH}
        >
          <Group top={pieCenterY} left={pieCenterX}>
            <VisxPie
              data={limitedData}
              pieValue={(d: SDKRecord) => d[firstMeasure.name]}
              pieSortValues={() => 1}
              outerRadius={outerRadius}
            >
              {({ arcs, path }) => {
                return arcs.map((arc, i) => {
                  const dimensonValue = arc.data[firstDimension.name]
                  const arcDatum = pick(keyValData, dimensonValue)

                  const datumColor: string =
                    colorScale(dimensonValue) || '#000000'

                  return (
                    <Fragment key={i}>
                      <PieArc
                        arc={arc}
                        path={path}
                        key={i}
                        datumColor={datumColor}
                        onMouseOver={handleMouseOver}
                        onMouseOut={handleMouseOut}
                        renderTooltip={tooltips}
                      />
                      {legendType === 'labels' && (
                        <PieLabel
                          arc={arc}
                          outerRadius={outerRadius}
                          labelContent={getLabelContent(
                            measureTotal,
                            arcDatum,
                            legend
                          )}
                          datumColor={datumColor}
                        />
                      )}
                    </Fragment>
                  )
                })
              }}
            </VisxPie>
          </Group>
        </PieChart>
        {legend && legendType === 'legend' && (
          <LegendWrapper legendPosition={legendPosition}>
            <PieLegend
              legendConfig={legend}
              scale={colorScale}
              data={keyValData}
              measureTotal={measureTotal}
              height={canvasH}
              width={legendWidth || canvasW}
            />
          </LegendWrapper>
        )}
      </PieGrid>
      <PieTooltip
        {...tooltipProps}
        measure={firstMeasure}
        dimension={firstDimension}
      />
    </>
  )
}

type LegendLayoutProps = {
  legendPosition?: LegendPositions
  legendType?: LegendTypes
}

const PieGrid = styled.div<LegendLayoutProps>`
  align-items: center;
  display: grid;
  grid-column-gap: ${({ theme, legendType }) =>
    legendType === 'legend' ? theme.space.medium : 0};
  grid-template-areas:
    'top top'
    'left right'
    'bottom bottom';
  grid-template-columns: fit-content(250px) 1fr;
`

const PieChart = styled.svg<LegendLayoutProps>`
  ${({ legendPosition }) => css`
    grid-area: ${legendPosition === `left` ? `right` : `left`};
  `}
`

const LegendWrapper = styled.div<LegendLayoutProps>`
  ${({ legendPosition }) => css`
    grid-area: ${legendPosition};
  `}
`
