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

import type { ReactNode, Ref, FC } from 'react'
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
  ref?: Ref<HTMLDivElement>
}

const VisWrapperInternal: FC<VisWrapperInternalProps> = forwardRef(
  ({ legend, ...props }, ref) => {
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
