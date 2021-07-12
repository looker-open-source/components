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

import { CompatibleHTMLProps } from '@looker/design-tokens'
import React, { forwardRef, Ref } from 'react'
import styled from 'styled-components'
import { commonLayoutCSS, CommonLayoutProps } from '../../utils/common'
import { OverflowShadow, useOverflow } from '../../../utils'

export type SectionProps = CommonLayoutProps &
  CompatibleHTMLProps<HTMLElement> & {
    /**
     * When true the DOM element transition from section to main.
     * @default false
     */
    main?: boolean
    /**
     * To be used within the context of <Page fixed> container.
     * When true, this removes the inner overflow-y scrolling
     * and allows content within a Layout group to scroll together.
     * @default false
     */
    scrollWithin?: boolean
  }

const SectionLayout = forwardRef(
  (
    { main, children, ...props }: SectionProps,
    forwardedRef: Ref<HTMLDivElement>
  ) => {
    const [hasOverflow, ref] = useOverflow(forwardedRef)
    return (
      <OverflowShadow
        as={main ? 'main' : 'section'}
        hasOverflow={hasOverflow}
        ref={ref}
        {...props}
      >
        {children}
      </OverflowShadow>
    )
  }
)

SectionLayout.displayName = 'SectionLayout'

export const Section = styled(SectionLayout)`
  ${commonLayoutCSS}
  flex: 1 0 auto;
  overflow: auto;
  ${({ scrollWithin }) => scrollWithin && 'height: fit-content;'}
`
