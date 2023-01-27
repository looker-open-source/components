/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import styled, { useTheme } from 'styled-components'
import { deriveColorBlend } from '@looker/visualizations-adapters'

type CellVisualizationProps = {
  min: number
  max: number
  value: number
  color?: string
}

const COLOR_BAND_COUNT = 10

export const CellVisualization = (props: CellVisualizationProps) => {
  const { colors } = useTheme()
  const { max, value, color = colors.measure } = props

  if (max === 0) {
    return null
  }

  const cellVisWidth = value / max // width in percent

  const colorBands = deriveColorBlend(
    color,
    colors.background,
    COLOR_BAND_COUNT
  )

  const colorIndex = Math.round((1 - cellVisWidth) * COLOR_BAND_COUNT)

  return (
    <SingleBar
      color={colorBands[colorIndex]}
      width={cellVisWidth}
      data-testid="single-bar"
    />
  )
}

type SingleBarProps = { color?: string; width: number }

const SingleBar = styled.div.attrs<SingleBarProps>(({ width, color }) => ({
  style: { flex: width, background: color },
}))<SingleBarProps>`
  height: ${({ theme }) => theme.sizes.small};
`
