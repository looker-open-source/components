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
import React from 'react'
import { DEFAULT_HEIGHT } from '@looker/visualizations-adapters'
import type { PieArcDatum } from '@visx/shape/lib/shapes/Pie'
import VisxPie from '@visx/shape/lib/shapes/Pie'
import { scaleOrdinal } from '@visx/scale'
import { Group } from '@visx/group'
import { useTooltip } from '@visx/tooltip'
import type {
  CPie,
  DimensionMetadata,
  PieProps,
  SDKRecord,
  LegendPositions,
} from '@looker/visualizations-adapters'
import { LegendOrdinal } from '@visx/legend'
import type { Point } from '@visx/point'
import isArray from 'lodash/isArray'
import pick from 'lodash/pick'
import styled, { css } from 'styled-components'
import { labelFormatter } from './labelFormatter'
import { PieTooltip } from './PieTooltip'
import { PieArc } from './PieArc'

export const PIE_SLICE_ZOOM = 1.03

const generateColorScale = (
  data: SDKRecord,
  seriesConfig: CPie['series'],
  dimension: DimensionMetadata
) => {
  const dataKey = dimension.name

  const range = isArray(seriesConfig)
    ? seriesConfig.map(s => s?.color)
    : data.map((d: Record<string, string>) => seriesConfig[d[dataKey]]?.color)

  return scaleOrdinal<string, string>({
    domain: data.map((d: Record<string, string>) => d[dataKey]),
    range,
  })
}

export const Pie: FC<PieProps> = ({
  data,
  config,
  height = DEFAULT_HEIGHT,
  width = DEFAULT_HEIGHT,
  fields,
}) => {
  const { showTooltip, hideTooltip, ...tooltipProps } = useTooltip()
  const { series, legend, tooltips = true } = config

  // calculate chart dimensions
  const diameter = Math.min(width, height)
  const radius = diameter / 2
  const padding = diameter - diameter / PIE_SLICE_ZOOM

  // limit PIE chart to 50 sections
  const limitedData: SDKRecord[] = data.slice(0, 50)
  const firstMeasure = fields.measures[0]
  const firstDimension = fields.dimensions[0]

  // derive colors based on series config
  const colorScale = generateColorScale(limitedData, series, firstDimension)

  // format data for use in legend
  const keyValData = Object.fromEntries(
    limitedData.map((d: SDKRecord) => [
      d[firstDimension.name],
      Number(d[firstMeasure.name]),
    ])
  )

  // measureTotal used for calculating percentages
  const measureTotal = Number(
    Object.values(keyValData).reduce((total, v) => Number(total) + Number(v), 0)
  )

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

  const { position: legendPosition = 'right' } = legend || {}

  return (
    <>
      <PieGrid>
        <PieChart
          legendPosition={legendPosition}
          width={diameter}
          height={diameter}
        >
          <Group top={radius} left={radius}>
            <VisxPie
              data={limitedData}
              pieValue={(d: SDKRecord) => d[firstMeasure.name]}
              pieSortValues={() => 1}
              outerRadius={radius - padding}
            >
              {({ arcs, path }) => {
                return arcs.map((arc, i) => (
                  <PieArc
                    arc={arc}
                    dimension={firstDimension}
                    path={path}
                    key={i}
                    colorScale={colorScale}
                    onMouseOver={handleMouseOver}
                    onMouseOut={handleMouseOut}
                    renderTooltip={tooltips}
                  />
                ))
              }}
            </VisxPie>
          </Group>
        </PieChart>
        {legend && (
          <LegendWrapper legendPosition={legendPosition}>
            <LegendOrdinal
              direction={
                legendPosition === 'top' || legendPosition === 'bottom'
                  ? 'row'
                  : 'column'
              }
              labelFormat={label => {
                const datum = pick(keyValData, label as string)
                return labelFormatter(measureTotal, datum, legend)
              }}
              scale={colorScale}
              shape="circle"
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

type LegendLayoutProps = { legendPosition?: LegendPositions }

const PieGrid = styled.div`
  align-items: center;
  display: grid;
  grid-column-gap: ${({ theme }) => theme.space.medium};
  grid-template-areas:
    'top top'
    'left right'
    'bottom bottom';
  grid-template-columns: fit-content(250px) 1fr;
`

const PieChart = styled.svg<LegendLayoutProps>`
  ${({ legendPosition }) => css`
    grid-area: ${legendPosition === 'left' ? 'right' : 'left'};
  `}
`

const LegendWrapper = styled.div<LegendLayoutProps>`
  ${({ legendPosition }) => css`
    grid-area: ${legendPosition};
  `}
`
