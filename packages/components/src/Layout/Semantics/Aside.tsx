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

import React, { FC, useRef, useState, useEffect } from 'react'
import { shouldForwardProp } from '@looker/design-tokens'
import styled, { css } from 'styled-components'
import { ResponsiveValue } from 'styled-system'
import { useResize } from '../../utils'
import { AsideSizeRamp, asideWidth } from './asideWidth'
import { SemanticLayoutBase, semanticLayoutCSS } from './semanticStyledBase'
import { borderHelper, SemanticBorderProps } from './semanticBorderHelper'

export interface AsideProps extends SemanticLayoutBase, SemanticBorderProps {
  /**
   * Prevent `Aside` from being rendered.
   * @default false
   */
  collapse?: boolean
  /**
   * To be used within the context of <Page fixed> container.
   * When true, this removes the inner overflow-y scrolling
   * and allows content within a Layout group to scroll together.
   * @default false
   */
  scrollWithin?: boolean
  /**
   * Specify width of aside
   * @default 'sidebar'
   */
  width?: ResponsiveValue<AsideSizeRamp | string>
}

export const Aside: FC<AsideProps> = ({ collapse, children, ...props }) => {
  const internalRef = useRef<HTMLDivElement>(null)
  const [hasOverflow, setHasOverflow] = useState(false)
  const [height, setHeight] = useState(0)

  const handleResize = () => {
    if (internalRef.current) {
      setHeight(internalRef.current.offsetHeight)
    }
  }

  useResize(internalRef.current, handleResize)

  useEffect(() => {
    const container = internalRef.current
    if (container) {
      setHasOverflow(container.offsetHeight < container.scrollHeight)
    }
  }, [height])
  return collapse ? null : (
    <InnerAside hasOverflow={hasOverflow} ref={internalRef} {...props}>
      {children}
    </InnerAside>
  )
}

interface InnerAsideProps extends AsideProps {
  hasOverflow: boolean
}

export const InnerAside = styled.aside
  .withConfig({
    shouldForwardProp: (prop) => prop === 'collapse' || shouldForwardProp(prop),
  })
  .attrs<AsideProps>(({ width = 'sidebar' }) => ({
    width,
  }))<InnerAsideProps>`
  ${semanticLayoutCSS}

  flex: 0 0 ${({ width }) => width};
  max-width: ${({ width }) => width};
  min-width: ${({ width }) => width};
  overflow: auto;
  width: 0;
  ${({ scrollWithin }) => scrollWithin && 'height: fit-content;'}

  ${borderHelper}
  ${asideWidth}

  ${({ hasOverflow, theme }) =>
    hasOverflow &&
    css`
      border-bottom: 1px solid ${theme.colors.ui2};
      border-top: 1px solid ${theme.colors.ui2};
      box-shadow: inset 0 -4px 4px -4px ${theme.colors.ui2};
    `}
`
