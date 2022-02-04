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
import { ThemeContext } from 'styled-components'
import {
  GlyphCircle,
  GlyphSquare,
  GlyphDiamond,
  GlyphTriangle,
} from '@visx/glyph'
import type { CLineSeries } from '@looker/visualizations-adapters'

export type GlyphProps = {
  series: CLineSeries
  top?: number
  left?: number
  size?: number
  fill?: string
  stroke?: false | string
  styleObj?: Record<string, string>
}

const Glyphs = {
  circle: GlyphCircle,
  square: GlyphSquare,
  diamond: GlyphDiamond,
  triangle: GlyphTriangle,
  'triangle-down': GlyphTriangle,
}

export const Glyph = ({
  series,
  top,
  left,
  size,
  fill,
  styleObj,
  stroke,
}: GlyphProps) => {
  const theme = useContext(ThemeContext)
  const { shape = 'circle', line_width = 1 } = series
  const CurrGlyph = Glyphs[shape]

  const strokeWidth = () => {
    switch (true) {
      case line_width < 3:
        return line_width
      case line_width < 8:
        return line_width * 0.75
      default:
        return line_width * 0.5
    }
  }

  const renderedStroke = stroke || series.color || theme.colors.key

  return (
    <CurrGlyph
      top={top}
      left={left}
      size={size}
      fill={fill || theme.colors.key}
      transform={shape === 'triangle-down' ? 'rotate(180)' : ''}
      style={styleObj || {}}
      stroke={stroke === false ? undefined : renderedStroke}
      strokeWidth={strokeWidth()}
    />
  )
}
