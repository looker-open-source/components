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

import type { ReactNode } from 'react'
import styled, { css } from 'styled-components'
import type { CommonCartesianProperties, LegendPositions } from '../types'

export type VisWrapperProps = {
  children?: ReactNode
  height?: number
  legend?: CommonCartesianProperties['legend']
  width?: number
  minHeight?: number
}

const flexDirection = ({ legend }: Pick<VisWrapperProps, 'legend'>) => {
  const positionMap: Record<LegendPositions, string> = {
    top: 'column-reverse',
    right: 'row',
    left: 'row-reverse',
    bottom: 'column',
  }

  const position = legend ? legend.position : 'bottom'

  return css`
    flex-direction: ${positionMap[position]};
  `
}

export const VisWrapper = styled.div`
  /*
    Flex properties primarily used to reposition legend
    based on prop.
   */
  display: flex;
  ${flexDirection}

  /*
    This style override allows longer dimension to fully render on x-axis.
    Without it, long dimension values get cut off (after being rotated).
  */
  & > div > svg {
    overflow: visible;
  }
`
