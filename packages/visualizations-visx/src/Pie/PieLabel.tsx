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

import type { FC } from 'react'
import React, { useContext } from 'react'
import { Annotation, Label, Connector } from '@visx/annotation'
import { pointRadial } from 'd3-shape'
import { ThemeContext } from 'styled-components'
import type { PieArcDatum } from '@visx/shape/lib/shapes/Pie'
import type { SDKRecord } from '@looker/visualizations-adapters'
import { getConnectorLength } from './getConnectorLength'

type PieLabelProps = {
  arc: PieArcDatum<SDKRecord>
  outerRadius: number
  labelContent: string
  datumColor: string
}

export const PieLabel: FC<PieLabelProps> = ({
  arc,
  outerRadius,
  labelContent,
  datumColor,
}) => {
  const theme = useContext(ThemeContext)
  const { startAngle, endAngle } = arc
  const averageAngle = (startAngle + endAngle) / 2

  const [connectorX, connectorY] = pointRadial(averageAngle, outerRadius)

  const connectorLength = getConnectorLength(averageAngle, outerRadius)
  const [labelX, labelY] = pointRadial(averageAngle, connectorLength)

  const ANCHOR_POSITION = connectorX > 0 ? 'start' : 'end'

  return (
    <Annotation x={connectorX} y={connectorY} dx={labelX} dy={labelY}>
      <Connector
        stroke={datumColor}
        pathProps={{ strokeWidth: 2 }}
        type="line"
      />
      <Label
        titleFontSize={theme.fontSizes.xsmall}
        backgroundFill="transparent"
        backgroundPadding={{ top: 5, right: 5, bottom: 5, left: 5 }}
        showAnchorLine={false}
        horizontalAnchor={ANCHOR_POSITION}
        verticalAnchor="middle"
        title={labelContent}
      />
    </Annotation>
  )
}
