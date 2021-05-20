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
import React, { FC, useState, useCallback } from 'react'
import styled from 'styled-components'
import { width as widthHelper, WidthProps } from 'styled-system'
import { useIsTruncated } from '../utils/useIsTruncated'
import { useTooltip } from '../Tooltip'
import { Span } from '../Text/Span'

export interface TruncateProps extends WidthProps {
  className?: string
  /**
   * Specifying `description` will cause truncation tooltip to _always_ be presented
   * Text specified in `description` property will be displayed below `children` supplied
   */
  description?: string
}

export type TruncateProp = undefined | boolean | { description: string }

/**
 * Prevent text wrapping on long labels and instead render truncated text.
 * Renders a tooltip to view the entire text content on hover.
 **/
const TruncateLayout: FC<TruncateProps> = ({
  children,
  className: propsClassName,
  description,
  width = '100%',
}) => {
  const [domNode, setDomNode] = useState<HTMLDivElement | null>(null)

  const isTruncated = useIsTruncated(domNode)

  const textRef = useCallback((node: HTMLDivElement) => {
    setDomNode(node)
  }, [])

  /*
   * only render tooltip if text actually overflows
   */

  const { tooltip, domProps } = useTooltip({
    content: (
      <>
        {children}
        {description && (
          <>
            <br />
            <Span color="text2">{description}</Span>
          </>
        )}
      </>
    ),
    disabled: !description && !isTruncated,
    invert: false,
    placement: 'top-start',
    textAlign: 'left',
    triggerElement: domNode,
    width: 'auto',
  })

  const { className: tooltipClassName, ...otherDomProps } = domProps
  const className = [tooltipClassName, propsClassName].join(' ')

  return (
    <>
      {tooltip}
      <TextStyle
        {...otherDomProps}
        className={className}
        ref={textRef}
        width={width}
      >
        {children}
      </TextStyle>
    </>
  )
}

/**
 * @a11y-TODO we should support :focus-visible emulation here if focus can be drawn by an anchor/link within
 * the truncate children.
 **/

const TextStyle = styled.span<WidthProps>`
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  ${widthHelper}
  white-space: nowrap;

  :focus-within {
    a {
      outline: none;
    }
  }
`

export const Truncate = styled(TruncateLayout)``
