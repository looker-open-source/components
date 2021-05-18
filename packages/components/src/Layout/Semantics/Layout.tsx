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
import { CompatibleHTMLProps, shouldForwardProp } from '@looker/design-tokens'
import styled, { css } from 'styled-components'
import { simpleLayoutCSS, SimpleLayoutProps } from '../utils/simple'
import { useOverflow } from '../../utils'

export interface LayoutProps
  extends SimpleLayoutProps,
    CompatibleHTMLProps<HTMLElement> {
  /**
   * fixed position for header and footer
   * @default false
   */
  fixed?: boolean
  /**
   * Supports scroll
   * @default true
   */
  hasAside?: boolean
}

const hasAsideCSS = css`
  flex-direction: row;
  & > main {
    width: 0;
  }
`
export const Layout: FC<LayoutProps> = ({
  children,
  fixed,
  hasAside,
  ...props
}) => {
  const internalRef = useRef<HTMLDivElement>(null)
  const hasOverflow = useOverflow(internalRef)

  return (
    <InnerLayout
      fixed={fixed}
      hasAside={hasAside}
      hasOverflow={hasOverflow}
      ref={internalRef}
      {...props}
    >
      {children}
    </InnerLayout>
  )
}

interface InnerLayoutProps extends LayoutProps {
  hasOverflow: boolean
}

const InnerLayout = styled.div.withConfig({
  shouldForwardProp,
})<InnerLayoutProps>`
  ${simpleLayoutCSS}
  display: flex;
  flex: 1 1 auto;
  overflow: ${({ fixed }) => (fixed ? 'hidden' : 'auto')};
  ${({ hasAside }) => (hasAside ? hasAsideCSS : 'flex-direction: column;')}

  ${({ hasOverflow, theme }) =>
    hasOverflow &&
    css`
      border-bottom: 1px solid ${theme.colors.ui2};
      border-top: 1px solid ${theme.colors.ui2};
      box-shadow: 0 -4px 4px -4px ${theme.colors.ui2},
        inset 0 -4px 4px -4px ${theme.colors.ui2};
    `}
`
