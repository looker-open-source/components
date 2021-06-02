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

import {
  CompatibleHTMLProps,
  padding,
  reset,
  LayoutProps,
  layout,
  pickStyledProps,
} from '@looker/design-tokens'
import React, { forwardRef, Ref } from 'react'
import styled from 'styled-components'
import { OverflowShadow, useOverflow } from '../../utils'
import { SpaceHelperProps } from '../../Layout/Space'

interface ModalStyleProps
  extends LayoutProps,
    CompatibleHTMLProps<HTMLDivElement> {}

export interface ModalContentProps extends ModalStyleProps, SpaceHelperProps {
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

const ModalContentLayout = forwardRef(
  (
    { children, hasFooter, hasHeader, ...props }: ModalContentProps,
    forwardedRef: Ref<HTMLDivElement>
  ) => {
    const [hasOverflow, ref] = useOverflow(forwardedRef)

    return (
      <OverflowShadow
        hasOverflow={hasOverflow}
        ref={ref}
        pt={hasOverflow || !!hasHeader ? 'large' : 'xxxsmall'}
        pb={hasOverflow || !!hasHeader ? 'large' : 'xxxsmall'}
        {...pickStyledProps(props)}
      >
        {children}
      </OverflowShadow>
    )
  }
)

ModalContentLayout.displayName = 'ModalContentLayout'

export const ModalContent = styled(ModalContentLayout)`
  ${reset}
  ${layout}
  ${padding}
  flex: 1 1 auto;
  overflow: auto;
`
