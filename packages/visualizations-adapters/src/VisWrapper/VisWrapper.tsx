/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import type { ReactNode, Ref } from 'react'
import React, { forwardRef } from 'react'
import styled, { css, useTheme } from 'styled-components'
import { ComponentsProvider } from '@looker/components'
import type { CommonCartesianProperties, LegendPositions } from '../types'

export type VisWrapperProps = {
  children?: ReactNode
  legend?: CommonCartesianProperties['legend']
}

export type VisWrapperInternalProps = VisWrapperProps & {
  className?: string
}

const VisWrapperInternal = forwardRef(
  (
    { legend, ...props }: VisWrapperInternalProps,
    ref?: Ref<HTMLDivElement>
  ) => {
    const theme = useTheme()

    if (!theme) {
      // Recursively wrap VisWrapper in ComponentsProvider to ensure that
      // individual chart components can be rendered outside of Looker Components context
      // without breaking.
      return (
        <ComponentsProvider>
          <VisWrapperInternal {...props} ref={ref} />
        </ComponentsProvider>
      )
    }

    return <div {...props} ref={ref} />
  }
)

VisWrapperInternal.displayName = `VisWrapperInternal`

const flexDirection = ({ legend }: Pick<VisWrapperProps, 'legend'>) => {
  const POSITION_MAP: Record<LegendPositions, string> = {
    top: 'column-reverse',
    right: 'row',
    left: 'row-reverse',
    bottom: 'column',
  }

  const POSITION = legend ? legend.position : 'bottom'

  return css`
    flex-direction: ${POSITION_MAP[POSITION]};
    justify-content: ${POSITION === 'left' ? `flex-end` : `flex-start`};
  `
}

export const VisWrapper = styled(VisWrapperInternal)`
  /*
    Flex properties primarily used to reposition legend
    based on prop.
   */
  display: flex;
  flex: 1;
  ${flexDirection}

  /*
    This style override allows longer dimension to fully render on x-axis.
    Without it, long dimension values get cut off (after being rotated).
  */
  & > div > svg {
    overflow: visible;
  }
`
