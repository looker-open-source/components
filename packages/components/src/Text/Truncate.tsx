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
import React, { FC, useState, useCallback } from 'react'
import styled from 'styled-components'
import { Tooltip } from '../Tooltip'
import { useIsTextTruncated } from './useIsTextTruncated'

export interface TruncateProps {
  children: string
}

/*
 * Identity Component: transparently pass through children
 */
const IdentityComponent: FC<any> = ({ children }) => <>{children}</>

/**
 * Prevent text wrapping on long labels and instead render truncated text.
 * Renders a tooltip to view the entire text content on hover.
 **/

export const Truncate: FC<TruncateProps> = ({ children }) => {
  const [domNode, setDomNode] = useState<HTMLDivElement | null>(null)

  const isTruncated = useIsTextTruncated(domNode)

  const textRef = useCallback((node: HTMLDivElement) => {
    setDomNode(node)
  }, [])

  /*
   * only render tooltip if text actually overflows
   */
  const TooltipComponent = isTruncated ? Tooltip : IdentityComponent

  return (
    <TextWrapper>
      <TooltipComponent
        content={children}
        placement="top-start"
        width="auto"
        maxWidth="700px"
        textAlign="left"
        surfaceStyles={{
          backgroundColor: 'background',
          border: '1px solid',
          borderColor: 'ui3',
          color: 'text3',
        }}
      >
        <TextStyle>{children}</TextStyle>
      </TooltipComponent>
      {/*
       * Tooltip clobbers refs on any children.
       * We must use a hidden text element to reliably detect whether content
       * is truncated.
       */}
      <HiddenText ref={textRef}>{children}</HiddenText>
    </TextWrapper>
  )
}

const TextStyle = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 100%;
`

const HiddenText = styled(TextStyle)`
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  visibility: hidden;
  width: 100%;
`

const TextWrapper = styled.div`
  position: relative;
`
