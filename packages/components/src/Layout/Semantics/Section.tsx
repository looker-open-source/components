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

import React, { forwardRef, Ref } from 'react'
import { shouldForwardProp } from '@looker/design-tokens'
import styled, { css } from 'styled-components'
import { OverflowShadow, useOverflow, UseOverflowProps } from '../../utils'
import { SemanticLayoutBase, semanticLayoutCSS } from './semanticStyledBase'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface SectionProps extends SemanticLayoutBase {
  as?: 'main'
  /**
   * To be used within the context of <Page fixed> container.
   * When true, this removes the inner overflow-y scrolling
   * and allows content within a Layout group to scroll together.
   * @default false
   */
  scrollWithin?: boolean
}

interface OverflowProps extends SectionProps, UseOverflowProps {}

export const sectionCSS = css`
  ${semanticLayoutCSS}
  flex: 1 0 auto;
`

export const InnerSection = styled.section.withConfig({
  shouldForwardProp,
})<OverflowProps>`
  ${sectionCSS}
  overflow: auto;
  ${({ scrollWithin }) => scrollWithin && 'height: fit-content;'}
  ${({ hasOverflow }) => hasOverflow && OverflowShadow}
`

const SectionLayout = forwardRef(
  (
    { as, children, ...props }: SectionProps,
    forwardedRef: Ref<HTMLDivElement>
  ) => {
    const [hasOverflow, ref] = useOverflow(forwardedRef)

    return (
      <InnerSection
        forwardedAs={as}
        hasOverflow={hasOverflow}
        ref={ref}
        {...props}
      >
        {children}
      </InnerSection>
    )
  }
)

SectionLayout.displayName = 'SectionLayout'

export const Section = styled(SectionLayout)``
