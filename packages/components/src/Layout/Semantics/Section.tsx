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

import React, { FC, useRef } from 'react'
import { shouldForwardProp } from '@looker/design-tokens'
import styled, { css } from 'styled-components'
import { useOverflow } from '../../utils'
import { SemanticLayoutBase, semanticLayoutCSS } from './semanticStyledBase'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface SectionProps extends SemanticLayoutBase {
  /**
   * To be used within the context of <Page fixed> container.
   * When true, this removes the inner overflow-y scrolling
   * and allows content within a Layout group to scroll together.
   * @default false
   */
  scrollWithin?: boolean
}

export const Section: FC<SectionProps> = ({ children, ...props }) => {
  const internalRef = useRef<HTMLDivElement>(null)
  const hasOverflow = useOverflow(internalRef)

  return (
    <InnerSection hasOverflow={hasOverflow} ref={internalRef} {...props}>
      {children}
    </InnerSection>
  )
}

interface InnerSectionProps extends SectionProps {
  hasOverflow: boolean
}

export const sectionCSS = css`
  ${semanticLayoutCSS}
  flex: 1 0 auto;
`

const InnerSection = styled.main.withConfig({
  shouldForwardProp,
})<InnerSectionProps>`
  ${sectionCSS}
  overflow: auto;
  ${({ scrollWithin }) => scrollWithin && 'height: fit-content;'}

  ${({ hasOverflow, theme }) =>
    hasOverflow &&
    css`
      border-bottom: 1px solid ${theme.colors.ui2};
      border-top: 1px solid ${theme.colors.ui2};
      box-shadow: inset 0 -4px 4px -4px ${theme.colors.ui2};
    `}
`
