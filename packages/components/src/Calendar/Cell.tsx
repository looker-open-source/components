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
import React from 'react'
import type { ReactNode } from 'react'
import styled, { css } from 'styled-components'
import type { RangeProps } from './types'
import { rangeTypeStyle } from './utils'

export type CellProps = RangeProps & {
  children?: ReactNode
  className?: string
  weekEnd?: boolean
  weekStart?: boolean
}

const rangePositionWidth = ({
  rangePosition,
  weekStart,
  weekEnd,
}: CellProps) => {
  if (!rangePosition || rangePosition === 'middle') {
    return css`
      width: 100%;
    `
  }
  if (
    (rangePosition === 'end' && weekStart) ||
    (rangePosition === 'start' && weekEnd)
  ) {
    return css`
      width: calc(100% - ${({ theme: { space } }) => space.u4});
    `
  }
  return css`
    width: ${({ theme }) => theme.space.u4};
  `
}

const rangePositionLeft = ({ rangePosition, weekStart }: CellProps) => {
  if (rangePosition === 'start') {
    if (weekStart) {
      return css`
        left: auto;
        right: 0;
      `
    } else {
      return css`
        left: ${({ theme }) => theme.space.u4};
      `
    }
  }
  return css`
    left: 0;
  `
}

export const Cell = styled(({ children, className }: CellProps) => {
  return <div className={className}>{children}</div>
})`
  margin: ${({ theme }) => theme.space.u05} 0;
  padding-left: ${({ theme, weekStart }) => (weekStart ? theme.space.u5 : '0')};
  padding-right: ${({ theme, weekEnd }) => (weekEnd ? theme.space.u5 : '0')};
  position: relative;
  &::before {
    content: ' ';
    height: 100%;
    position: absolute;
    ${rangePositionWidth}
    ${rangePositionLeft}
     ${rangeTypeStyle}
  }
`
