/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
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
