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

import React, { useContext } from 'react'
import { ThemeContext } from 'styled-components'
import { Marker as VisxMarker } from '@visx/marker'
import { Glyph } from '../Glyph'
import { getMarkerFill, getDefaultGlyphSize } from '../utils'
import type { CLineSeries } from '@looker/visualizations-adapters'

export type MarkerProps = {
  series: CLineSeries
  id: string
}

export const Marker = ({ series, id }: MarkerProps) => {
  const theme = useContext(ThemeContext)
  const { line_width = 1 } = series
  const fill = getMarkerFill(series, theme)
  const size = getDefaultGlyphSize(line_width)
  const top = size / 2
  const left = size / 2

  return (
    <VisxMarker
      id={`${id}`}
      fill={fill}
      markerWidth={size}
      markerHeight={size}
      refX={left}
      refY={top}
    >
      <Glyph series={series} top={top} left={left} size={size} fill={fill} />
    </VisxMarker>
  )
}
