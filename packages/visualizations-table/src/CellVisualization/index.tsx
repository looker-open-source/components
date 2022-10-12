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

import React from 'react'
import type { FC } from 'react'
import styled, { useTheme } from 'styled-components'
import { deriveColorBlend } from '@looker/visualizations-adapters'

type CellVisualizationProps = {
  min: number
  max: number
  value: number
  color?: string
}

const COLOR_BAND_COUNT = 10

export const CellVisualization: FC<CellVisualizationProps> = props => {
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
