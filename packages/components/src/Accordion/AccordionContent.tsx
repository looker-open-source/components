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

import React, { useContext, FC } from 'react'
import styled from 'styled-components'

import { AccordionContext } from './AccordionContext'

export interface AccordionContentProps {
  border?: boolean
  borderDepth?: number
  className?: string
}

const AccordionContentLayout: FC<AccordionContentProps> = ({
  children,
  className,
}) => {
  const { isOpen } = useContext(AccordionContext)

  return isOpen ? <div className={className}>{children}</div> : null
}

export const AccordionContent = styled(AccordionContentLayout)`
  background: ${({ border, borderDepth, theme }) => {
    const borderSize = '1px'
    const itemPadding = theme.space.xxsmall
    const depthPadding = `${theme.space.large} * ${borderDepth}`
    const indicatorSize = theme.space.small
    const spacer = `${borderSize} + ${itemPadding} + ${depthPadding} + (${indicatorSize} / 2)`
    return (
      border &&
      `linear-gradient(90deg, transparent calc(${spacer} - 1px), ${theme.colors.ui3}, transparent calc(${spacer} + 1px))`
    )
  }};
`
