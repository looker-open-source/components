/*

 MIT License

 Copyright (c) 2020 Looker Data Sciences, Inc.

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

import { CompatibleHTMLProps } from '@looker/design-tokens'
import styled from 'styled-components'
import React, { forwardRef, Ref, useState } from 'react'
import { simpleLayoutCSS, SimpleLayoutProps } from '../utils/simple'
import { LayoutContext } from './LayoutContext'

export interface LayoutProps
  extends SimpleLayoutProps,
    CompatibleHTMLProps<HTMLElement> {
  /**
   * Supports scroll
   * @default true
   */
  supportsScroll?: boolean
}

const LayoutLayout = forwardRef(
  (props: LayoutProps, ref: Ref<HTMLDivElement>) => {
    const [hasAside, setHasAside] = useState(false)
    /**
     * registerAside doesn't need to update state value if an aside has already been registered.
     *
     * May eventually need to explore named-asides so that asides can be "unregistered" by
     * identifier but initial implementation doesn't need to support that.
     */
    const registerAside = () => setHasAside(true)

    const [isFixed, setIsFixed] = useState(false)
    const registerFixed = () => setIsFixed(true)

    return (
      <LayoutContext.Provider
        value={{ hasAside, isFixed, registerAside, registerFixed }}
      >
        <LayoutStyle
          {...props}
          isFixed={isFixed}
          hasAside={hasAside}
          ref={ref}
        />
      </LayoutContext.Provider>
    )
  }
)

LayoutLayout.displayName = 'LayoutLayout'

interface LayoutStyleProps extends LayoutProps {
  hasAside: boolean
  isFixed: boolean
}

const LayoutStyle = styled.div<LayoutStyleProps>`
  ${simpleLayoutCSS}

  display: flex;
  flex-direction: ${({ hasAside }) => (hasAside ? 'row' : 'column')};
  width: ${({ hasAside }) => hasAside && '100%'};
`

export const Layout = styled(LayoutLayout)``

/* @TODO:
  Layout is child of <layout isFixed>
  flex: 1 0 auto;
  height: 0;
  overflow: auto; */
