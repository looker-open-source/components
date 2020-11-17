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
  SpaceProps,
  reset,
  LayoutProps,
  layout,
} from '@looker/design-tokens'
import React, { FC, useRef, useState, useEffect } from 'react'
import ReactResizeDetector from 'react-resize-detector'
import styled from 'styled-components'
import omit from 'lodash/omit'

export interface DialogContentProps
  extends LayoutProps,
    CompatibleHTMLProps<HTMLDivElement> {}

interface DialogContentLayoutProps extends DialogContentProps {
  renderedHeight: string
}

const DialogContentLayout: FC<DialogContentLayoutProps> = ({
  children,
  className,
  renderedHeight,
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
      {...omit(props, ['renderedHeight'])}
    >
      <Inner>{children}</Inner>
    </div>
  )
}

const Inner = styled.div<SpaceProps>`
  padding: 0 ${({ theme }) => theme.space.xlarge};
`

const DialogContentStyled = styled(DialogContentLayout)`
  ${reset}
  ${layout}

  flex: 1 1 auto;
  overflow: auto;

  ${Inner} {
    padding-bottom: ${({ theme }) => theme.space.xxxsmall};
    padding-top: ${({ theme }) => theme.space.xxxsmall};
  }

  &.overflow {
    border-bottom: 1px solid ${({ theme }) => theme.colors.ui2};
    border-top: 1px solid ${({ theme }) => theme.colors.ui2};
    box-shadow: inset 0 -4px 4px -4px ${({ theme }) => theme.colors.ui2};

    ${Inner} {
      padding-bottom: ${({ theme }) => theme.space.large};
      padding-top: ${({ theme }) => theme.space.large};
    }
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
