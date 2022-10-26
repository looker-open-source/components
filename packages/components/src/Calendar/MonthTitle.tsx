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
import styled from 'styled-components'
import { Span } from '../Text'
import type { CalendarLocaleProps, RangeProps } from './types'
import { formatDateString, rangeTypeStyle } from './utils'

export type MonthTitleProps = Pick<CalendarLocaleProps, 'locale'> &
  RangeProps & {
    className?: string
    month: Date
    inline: boolean
  }

export const MonthTitle = styled(
  ({ className, locale, month }: MonthTitleProps) => {
    return (
      <Span
        className={className}
        fontSize="xsmall"
        color="text2"
        fontWeight="bold"
        px="u8"
        py="u2"
      >
        {formatDateString(month, 'MMM yyyy', locale)}
      </Span>
    )
  }
)`
  ${rangeTypeStyle}
  display: block;
  /* Title is inline with first week if month starts > 3 days after firstDayOfWeek */
  /* stylelint-disable */
  margin: ${({ inline, theme: { space } }) =>
    inline ? `0 0 -${space.u8} 0` : `${space.u05} 0`};
  /* stylelint-enable */
  position: relative;
  width: fit-content;
  z-index: ${({ theme }) => theme.zIndexFloor};
`
