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

import React, { FC, Ref, ReactNode, forwardRef } from 'react'
import styled, { css } from 'styled-components'
import { CompatibleHTMLProps, shouldForwardProp } from '@looker/design-tokens'
import { FocusVisibleProps, focusVisibleCSSWrapper } from '../utils'
import { AccordionIndicatorPosition } from './types'

export type Accordion2DisclosureProps = CompatibleHTMLProps<HTMLElement> &
  FocusVisibleProps & {
    ref?: Ref<HTMLDivElement>
    indicator: ReactNode
    indicatorPosition?: AccordionIndicatorPosition
  }

const Accordion2DisclosureInternal: FC<Accordion2DisclosureProps> = forwardRef(
  ({ children, indicator, indicatorPosition, ...props }, ref) => {
    return (
      <div ref={ref} {...props}>
        {indicatorPosition === 'left' && indicator}
        <AccordionLabel>{children}</AccordionLabel>
        {indicatorPosition !== 'left' && indicator}
      </div>
    )
  }
)

Accordion2DisclosureInternal.displayName = 'Accordion2DisclosureInternal'

const AccordionLabel = styled.div`
  flex: 1;
  width: 100%;
`

/**
 * Default AccordionLabel typography styles.
 *
 * Must be specified on `Accordion2Disclosure` so that `Accordion` can override
 * these depending on props specified. When `Accordion` is remove this can be merged
 * directly into`AccordionLabel`
 *
 * @TODO 3.x / Accordion removal
 */
const labelTypographyDefaults = css`
  font-size: ${({ theme }) => theme.fontSizes.small};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  text-align: left;
`

/**
 * This is provided for legacy implementation support within `Tree` & `NavList`
 * The component may be removed without triggering a MAJOR release. Use with caution
 *
 * @private
 * @deprecated Use `useAccordion2` if you need to control styling within an Accordion2
 */
export const Accordion2Disclosure = styled(
  Accordion2DisclosureInternal
).withConfig({
  shouldForwardProp: (prop) =>
    ['indicator', 'indicatorPosition'].includes(prop)
      ? true
      : shouldForwardProp(prop),
})`
  align-items: center;
  color: ${({ theme }) => theme.colors.text5};
  cursor: pointer;
  display: flex;
  outline: none;
  position: relative;
  width: 100%;

  ${labelTypographyDefaults}

  &[disabled] {
    color: ${({ theme }) => theme.colors.text1};
    cursor: not-allowed;
  }

  ${focusVisibleCSSWrapper(
    ({ theme }) => css`
      box-shadow: inset 0 0 0 2px ${theme.colors.keyFocus};
    `
  )}
`
