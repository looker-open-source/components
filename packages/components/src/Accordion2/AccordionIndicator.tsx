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

import pick from 'lodash/pick'
import React from 'react'
import styled from 'styled-components'
import type { DensityRamp } from '@looker/design-tokens'
import { StyledIconBase } from '@styled-icons/styled-icon'
import {
  rippleHandlerKeys,
  rippleStyle,
  useRipple,
  useRippleHandlers,
} from '../Ripple'
import type { AccordionIndicatorProps } from './types'
import { accordionDimensions } from './accordionDimensions'

const size = (density: DensityRamp = 0) =>
  accordionDimensions(density).indicatorSize
const gap = (density: DensityRamp = 0) =>
  accordionDimensions(density).indicatorGap

// TODO: Get ripple onto AccordionIndicator
export const AccordionIndicator = styled(
  ({
    children,
    density,
    indicatorPosition,
    ...props
  }: AccordionIndicatorProps) => {
    const {
      callbacks,
      className: rippleClassName,
      style: rippleStyle,
    } = useRipple({
      color: 'neutral',
    })

    const rippleHandlers = useRippleHandlers(
      callbacks,
      pick(props, rippleHandlerKeys)
    )

    const rippleContainerProps = {
      className: rippleClassName,
      style: rippleStyle,
    }

    /**
     * Ripple effect should only appear when the
     * indicator is a separate click target from the
     * rest of its disclosure. When it is a separate click
     * target, it receives tabIndex -1 from the parent disclosure.
     */
    const isIndicatorToggleOnly = props.tabIndex === -1

    return (
      <div {...props} {...(isIndicatorToggleOnly && rippleHandlers)}>
        <RippleContainer density={density || 0} {...rippleContainerProps}>
          {children}
        </RippleContainer>
      </div>
    )
  }
)<AccordionIndicatorProps>`
  align-items: center;
  display: flex;
  justify-content: center;
  outline: none;

  ${({ density, indicatorPosition, theme: { space } }) =>
    indicatorPosition === 'left'
      ? `margin-right: ${space[gap(density)]};`
      : `margin-left: ${space[gap(density)]};`}

  ${StyledIconBase} {
    height: ${({ density, theme }) => theme.sizes[size(density)]};
    /*
      Default vertical-align is set to middle which shifts indicator icon
      below mid-point
    */
    vertical-align: top;
    width: ${({ density, theme }) => theme.sizes[size(density)]};
  }
`

const RippleContainer = styled.div<{ density: DensityRamp }>`
  ${rippleStyle}
  border-radius: 50%;
  height: ${({ density, theme }) => theme.sizes[size(density)]};
  width: ${({ density, theme }) => theme.sizes[size(density)]};
`
