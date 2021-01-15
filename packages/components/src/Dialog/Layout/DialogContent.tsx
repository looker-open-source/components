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

import {
  CompatibleHTMLProps,
  PaddingProps,
  padding,
  reset,
  LayoutProps,
  layout,
  omitStyledProps,
  pickStyledProps,
} from '@looker/design-tokens'
import React, { FC, useRef, useState, useEffect } from 'react'
import ReactResizeDetector from 'react-resize-detector'
import styled from 'styled-components'
import omit from 'lodash/omit'

export interface DialogContentProps
  extends LayoutProps,
    CompatibleHTMLProps<HTMLDivElement> {
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

interface DialogContentLayoutProps extends DialogContentProps {
  renderedHeight: string
}

const DialogContentLayout: FC<DialogContentLayoutProps> = ({
  children,
  className,
  renderedHeight,
  hasFooter,
  hasHeader,
  ...props
}) => {
  const internalRef = useRef<HTMLDivElement>(null)
  const [overflow, setOverflow] = useState(false)

  useEffect(() => {
    /**
     * Once you overflow, you never go back (tough luck chuck)
     */
    if (!overflow) {
      const container = internalRef.current

      if (container) {
        setOverflow(container.offsetHeight < container.scrollHeight)
      }
    }
  }, [overflow, renderedHeight])

  return (
    <div
      className={overflow ? `overflow ${className}` : className}
      ref={internalRef}
      {...omit(omitStyledProps(props), ['renderedHeight'])}
    >
      <Inner
        px={['medium', 'xlarge']}
        pb={overflow || !!hasFooter ? 'large' : 'xxxsmall'}
        pt={overflow || !!hasHeader ? 'large' : 'xxxsmall'}
        {...pickStyledProps(props)}
      >
        {children}
      </Inner>
    </div>
  )
}

const Inner = styled.div<PaddingProps>`
  ${padding}
`

const DialogContentStyled = styled(DialogContentLayout)`
  ${reset}
  ${layout}

  flex: 1 1 auto;
  overflow: auto;

  &.overflow {
    border-bottom: 1px solid ${({ theme }) => theme.colors.ui2};
    border-top: 1px solid ${({ theme }) => theme.colors.ui2};
    box-shadow: inset 0 -4px 4px -4px ${({ theme }) => theme.colors.ui2};
  }
`

export const DialogContent = (props: DialogContentProps) => {
  return (
    <ReactResizeDetector handleHeight>
      {(height: string) => (
        <DialogContentStyled renderedHeight={height} {...props} />
      )}
    </ReactResizeDetector>
  )
}
