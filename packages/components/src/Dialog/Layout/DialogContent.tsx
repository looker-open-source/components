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
  PaddingProps,
  padding,
  reset,
  LayoutProps,
  layout,
  pickStyledProps,
} from '@looker/design-tokens'
import React, { FC, useRef, useState, useEffect } from 'react'
import styled, { css } from 'styled-components'
import { useResize } from '../../utils'

interface DialogStyleProps
  extends LayoutProps,
    CompatibleHTMLProps<HTMLDivElement> {}

export interface DialogContentProps extends DialogStyleProps {
  /**
   * If the Dialog does not have a footer use this property to manually render padding
   * at the bottom of the DialogContent. (`hasFooter={false}`)
   * @default true
   */
  hasFooter?: boolean
  /**
   * If the Dialog does not have a header use this property to manually render padding
   * at the top of the DialogContent. (`hasHeader={false}`)
   * @default true
   */
  hasHeader?: boolean
}

export const DialogContent: FC<DialogContentProps> = ({
  children,
  className,
  hasFooter,
  hasHeader,
  ...props
}) => {
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

  return (
    <InnerDialogContent
      hasOverflow={hasOverflow}
      ref={internalRef}
      px={['medium', 'xlarge']}
      pb={hasOverflow || !!hasFooter ? 'large' : 'xxxsmall'}
      pt={hasOverflow || !!hasHeader ? 'large' : 'xxxsmall'}
      {...pickStyledProps(props)}
      data-testid="dialog-content"
    >
      {children}
    </InnerDialogContent>
  )
}

interface InnerDialogContentProps extends DialogStyleProps, PaddingProps {
  hasOverflow: boolean
}

const InnerDialogContent = styled.div<InnerDialogContentProps>`
  ${reset}
  ${layout}
  ${padding}

  flex: 1 1 auto;
  overflow: auto;

  ${({ hasOverflow, theme }) =>
    hasOverflow &&
    css`
      border-bottom: 1px solid ${theme.colors.ui2};
      border-top: 1px solid ${theme.colors.ui2};
      box-shadow: inset 0 -4px 4px -4px ${theme.colors.ui2};
    `}
`
