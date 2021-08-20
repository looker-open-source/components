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

import styled from 'styled-components'
import type { DensityRamp } from '@looker/design-tokens'
import { StyledIconBase } from '@styled-icons/styled-icon'
import type { AccordionIndicatorProps } from './types'
import { accordionDimensions } from './accordionDimensions'

const size = (density: DensityRamp = 0) =>
  accordionDimensions(density).indicatorSize
const gap = (density: DensityRamp = 0) =>
  accordionDimensions(density).indicatorGap

export const AccordionIndicator = styled.div<AccordionIndicatorProps>`
  align-items: center;
  display: flex;
  justify-content: center;

  ${({ density, indicatorPosition, theme: { space } }) =>
    indicatorPosition === 'left'
      ? `margin-right: ${space[gap(density)]};`
      : `margin-left: ${space[gap(density)]};`}

  ${StyledIconBase} {
    height: ${({ density, theme }) => theme.sizes[size(density)]};
    width: ${({ density, theme }) => theme.sizes[size(density)]};
  }
`
