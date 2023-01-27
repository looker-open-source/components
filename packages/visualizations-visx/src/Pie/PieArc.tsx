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

import React, { useState } from 'react'
import { hsv } from 'd3-hsv'
import type { Arc } from 'd3-shape'
import { localPoint } from '@visx/event'
import type { SDKRecord } from '@looker/visualizations-adapters'
import { useTheme } from 'styled-components'
import type { PieArcDatum } from '@visx/shape/lib/shapes/Pie'
import type { Point } from '@visx/point'
import { PIE_SLICE_ZOOM } from './pieConstants'

type PieArcProps = {
  arc: PieArcDatum<SDKRecord>
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  path: Arc<any, PieArcDatum<SDKRecord>>
  onMouseOut: () => void
  onMouseOver: (arc: PieArcDatum<SDKRecord>, point: Point | null) => void
  renderTooltip: boolean
  datumColor: string
}

export const PieArc = ({
  arc,
  path,
  datumColor,
  onMouseOver,
  onMouseOut,
  renderTooltip,
}: PieArcProps) => {
  const [isHovered, setIsHovered] = useState(false)

  const theme = useTheme()

  const { h, s, v } = hsv(datumColor)
  const hoverColor = hsv(h, s, Math.min(v + 0.2, 1)).hex()

  return (
    <g>
      {/* hover "pizza crust" effect */}
      <path
        d={
          path({
            ...arc,
          }) || undefined
        }
        fill={isHovered ? datumColor : 'transparent'}
        transform={`scale(${PIE_SLICE_ZOOM})`}
        opacity="0.4"
      />
      {/* base pie section */}
      <path
        d={
          path({
            ...arc,
          }) || undefined
        }
        fill={isHovered ? hoverColor : datumColor}
        onMouseMove={e => {
          const coords = localPoint(
            (e.target as SVGElement).ownerSVGElement as Element,
            e
          )
          onMouseOver(arc, coords)
          if (renderTooltip) {
            setIsHovered(true)
          }
        }}
        onMouseLeave={() => {
          onMouseOut()
          setIsHovered(false)
        }}
        stroke={theme.colors.background}
        strokeWidth={1}
      />
    </g>
  )
}
