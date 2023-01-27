/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import { Annotation, Label, Connector } from '@visx/annotation'
import { pointRadial } from 'd3-shape'
import { useTheme } from 'styled-components'
import type { PieArcDatum } from '@visx/shape/lib/shapes/Pie'
import type { SDKRecord } from '@looker/visualizations-adapters'
import { getConnectorLength } from './getConnectorLength'

type PieLabelProps = {
  arc: PieArcDatum<SDKRecord>
  outerRadius: number
  labelContent: string
  datumColor: string
}

export const PieLabel = ({
  arc,
  outerRadius,
  labelContent,
  datumColor,
}: PieLabelProps) => {
  const theme = useTheme()
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
