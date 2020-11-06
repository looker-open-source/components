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
import React, { FC, useState, useCallback, ReactNode } from 'react'
import styled from 'styled-components'
import { useIsTruncated } from '../utils/useIsTruncated'
import { useTooltip } from '../Tooltip'

export interface TruncateProps {
  children: ReactNode
}

/**
 * Prevent text wrapping on long labels and instead render truncated text.
 * Renders a tooltip to view the entire text content on hover.
 **/

export const Truncate: FC<TruncateProps> = ({ children }) => {
  const [domNode, setDomNode] = useState<HTMLDivElement | null>(null)

  const isTruncated = useIsTruncated(domNode)

  const textRef = useCallback((node: HTMLDivElement) => {
    setDomNode(node)
  }, [])

  /*
   * only render tooltip if text actually overflows
   */
  const { tooltip, domProps } = useTooltip({
    content: children,
    disabled: !isTruncated,
    placement: 'top-start',
    surfaceStyles: {
      backgroundColor: 'background',
      border: '1px solid',
      borderColor: 'ui2',
      color: 'text5',
    },
    textAlign: 'left',
    triggerElement: domNode,
    width: 'auto',
  })

  return (
    <>
      {tooltip}
      <TextStyle {...domProps} ref={textRef}>
        {children}
      </TextStyle>
    </>
  )
}

const TextStyle = styled.span`
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 100%;
`
