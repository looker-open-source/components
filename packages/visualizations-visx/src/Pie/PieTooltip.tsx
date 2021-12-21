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

import React from 'react'
import { TooltipWithBounds } from '@visx/tooltip'
import { SpaceVertical } from '@looker/components'
import styled from 'styled-components'
import type {
  FieldMetadata,
  DimensionMetadata,
  SDKRecord,
} from '@looker/visualizations-adapters'
import { tooltipStyles } from '../XYTooltip'
import { DLGroup } from '../DLGroup'

type PieTooltipProps = {
  className?: string
  tooltipOpen: boolean
  tooltipLeft?: number
  tooltipTop?: number
  tooltipData?: SDKRecord
  measure: FieldMetadata
  dimension: DimensionMetadata
}

export const PieTooltip = styled(
  ({
    tooltipOpen,
    tooltipData,
    tooltipTop,
    tooltipLeft,
    measure,
    dimension,
    className,
  }: PieTooltipProps) => {
    if (tooltipOpen && tooltipData) {
      return (
        <TooltipWithBounds
          className={className}
          top={tooltipTop}
          left={tooltipLeft}
          unstyled
          applyPositionStyle
        >
          <dl>
            <SpaceVertical gap="u3">
              <DLGroup value={tooltipData[dimension.name]} />
              <DLGroup
                label={measure.label || measure.label_short}
                value={tooltipData[measure.name]}
              />
            </SpaceVertical>
          </dl>
        </TooltipWithBounds>
      )
    }
    return null
  }
)`
  ${tooltipStyles}
`
