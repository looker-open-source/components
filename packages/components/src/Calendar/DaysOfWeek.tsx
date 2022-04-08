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
import { Grid } from '../Layout'
import type { CalendarLocaleProps } from './types'

export type DaysOfWeekProps = CalendarLocaleProps & {
  className?: string
}

export const DaysOfWeek = styled(
  ({ className, firstDayOfWeek, locale }: DaysOfWeekProps) => {
    const allDays: string[] = Array.from(Array(7), (_, i) =>
      locale.localize?.day(i, { width: 'narrow' })
    )
    const daysOfWeek = [
      ...allDays.slice(firstDayOfWeek),
      ...allDays.slice(0, firstDayOfWeek),
    ]

    return (
      <div className={className}>
        <Grid columns={7} gap="none">
          {daysOfWeek.map((day, i) => (
            <div key={i}>{day}</div>
          ))}
        </Grid>
      </div>
    )
  }
)`
  background: ${({ theme }) => theme.colors.ui1};
  ${Grid} {
    padding-left: ${({ theme }) => theme.space.u5};
    width: fit-content;
    div {
      color: ${({ theme }) => theme.colors.text2};
      font-family: ${({ theme }) => theme.fonts.body};
      font-size: ${({ theme }) => theme.fontSizes.xsmall};
      line-height: ${({ theme }) => theme.space.u8};
      text-align: center;
      width: ${({ theme }) => theme.space.u8};
    }
  }
`
