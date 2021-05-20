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
import { CompatibleHTMLProps } from '@looker/design-tokens'
import styled, { css } from 'styled-components'
import { simpleLayoutCSS, SimpleLayoutProps } from '../utils/simple'
import { OverflowShadow, useOverflow, UseOverflowProps } from '../../utils'
import { Section } from './Section'

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

interface OverflowProps extends LayoutProps, UseOverflowProps {}

const hasAsideCSS = css`
  flex-direction: row;
  & > ${Section} {
    width: 0;
  }
`
const InnerLayout = styled.div<OverflowProps>`
  ${({ hasOverflow }) => hasOverflow && OverflowShadow}
`

const LayoutLayout = forwardRef(
  ({ children, ...props }: LayoutProps, forwardedRef: Ref<HTMLDivElement>) => {
    const [hasOverflow, ref] = useOverflow(forwardedRef)

    return (
      <InnerLayout hasOverflow={hasOverflow} ref={ref} {...props}>
        {children}
      </InnerLayout>
    )
  }
)

LayoutLayout.displayName = 'LayoutLayout'

export const Layout = styled(LayoutLayout)`
  ${simpleLayoutCSS}
  display: flex;
  flex: 1 1 auto;
  overflow: ${({ fixed }) => (fixed ? 'hidden' : 'auto')};
  ${({ hasAside }) => (hasAside ? hasAsideCSS : 'flex-direction: column;')}
`
