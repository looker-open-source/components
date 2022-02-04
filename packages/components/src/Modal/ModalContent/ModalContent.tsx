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

import type {
  CompatibleHTMLProps,
  PaddingProps,
  SpacingSizes,
} from '@looker/design-tokens'
import type { Ref } from 'react'
import React, { forwardRef } from 'react'
import styled from 'styled-components'
import { OverflowShadow, useOverflow } from '../../utils'

export type ModalContentProps = CompatibleHTMLProps<HTMLDivElement> &
  PaddingProps & {
    /**
     * If the Modal does not have a footer use this property to manually render padding
     * at the bottom of the ModalContent. (`hasFooter={false}`)
     * @default true
     */
    hasFooter?: boolean
    /**
     * If the Modal does not have a header use this property to manually render padding
     * at the top of the ModalContent. (`hasHeader={false}`)
     * @default true
     */
    hasHeader?: boolean
  }

type ModalContentPropsInternal = ModalContentProps & {
  /**
   * Used for vertical `y` padding when content does not have overflow and does have
   * an adjacent footer or header.
   * @private
   * @default 'xxxsmall'
   */
  overflowVerticalPadding?: SpacingSizes
}

const ModalContentLayout = forwardRef(
  (
    {
      children,
      hasFooter,
      hasHeader,
      pb,
      pt,
      py,
      p,
      overflowVerticalPadding = 'u05',
      ...props
    }: ModalContentPropsInternal,
    forwardedRef: Ref<HTMLDivElement>
  ) => {
    const [hasOverflow, ref] = useOverflow(forwardedRef)

    return (
      <OverflowShadow
        hasOverflow={hasOverflow}
        ref={ref}
        p={p}
        pb={hasFooter && !hasOverflow ? overflowVerticalPadding : pb || py || p}
        pt={hasHeader && !hasOverflow ? overflowVerticalPadding : pt || py || p}
        {...props}
      >
        {children}
      </OverflowShadow>
    )
  }
)

ModalContentLayout.displayName = 'ModalContentLayout'

export const ModalContent = styled(
  ModalContentLayout
)<ModalContentPropsInternal>`
  flex: 1 1 auto;
  overflow: auto;
`
