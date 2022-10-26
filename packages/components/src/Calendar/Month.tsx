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

import {
  endOfMonth,
  getDay,
  getDaysInMonth,
  isSameDay,
  startOfMonth,
  setDate,
  isAfter,
  isBefore,
} from 'date-fns'
import React, { useCallback } from 'react'
import styled, { useTheme } from 'styled-components'
import { fadeIn } from '@looker/design-tokens'
import { Grid } from '../Layout'
import { Day } from './Day'
import { Cell } from './Cell'
import { MonthTitle } from './MonthTitle'
import type {
  ScrollableDateListItemProps,
  DateStateProps,
  MonthBaseProps,
} from './types'

export type MonthPropsWithScroll = MonthBaseProps & ScrollableDateListItemProps

const getMonthPadding = (month: Date, firstDayOfWeek: number) => {
  const startDate = startOfMonth(month)
  const endDate = endOfMonth(month)
  const startDay = getDay(startDate)
  const endDay = getDay(endDate)
  const startPadding = correctNegativePadding(startDay - firstDayOfWeek)
  const endPadding = 6 - endDay + firstDayOfWeek
  return { endPadding, startPadding }
}

/**
 * Negative padding never makes sense, so add 7 if it's negative.
 * broken use case was 0 start day, 1 firstDayOfWeek which created -1 startPadding
 * before this function
 * @returns padding + 7 if it's negative, otherwise return padding unchanged
 */
const correctNegativePadding = (padding: number) =>
  padding < 0 ? padding + 7 : padding

type CalendarCell = Date | 'before' | 'after'

const getDaysArray = (
  month: Date,
  startPadding: number,
  endPadding: number
): CalendarCell[] => {
  const daysInMonth = getDaysInMonth(month)
  const totalDays = startPadding + daysInMonth + endPadding
  return Array.from(Array(totalDays), (_, i) => {
    // spacers for the days before the 1st of the month
    if (i < startPadding) return 'before'
    // spacers for the days after the last of the month
    if (i > totalDays - endPadding - 1) return 'after'
    // date at the nth of the month
    const dayOfMonth = i - startPadding + 1
    return setDate(month, dayOfMonth)
  })
}

const getRangeType = ({ datesSelected, draftTo }: DateStateProps) => {
  if (datesSelected.length === 2) return 'selected'
  if (draftTo) return 'draft'
  return 'none'
}

const getRangePosition = (
  day: CalendarCell,
  month: Date,
  { datesSelected, draftTo }: DateStateProps
) => {
  const start = datesSelected[0]
  const end = datesSelected[1] || draftTo
  if (!start || !end) return undefined

  if (day === 'before') {
    // Empty cell at the beginning of the month & range spans months
    if (
      start &&
      end &&
      isBefore(start, startOfMonth(month)) &&
      isAfter(end, startOfMonth(month))
    ) {
      return 'middle'
    }
    return undefined
  }

  if (day === 'after') {
    // Empty cell at the beginning of the month & range spans months
    if (
      start &&
      end &&
      isBefore(start, endOfMonth(month)) &&
      isAfter(end, endOfMonth(month))
    ) {
      return 'middle'
    }
    return undefined
  }

  // Range starts AND ends on the day
  if (isSameDay(day, start) && isSameDay(day, end)) return undefined
  // Range starts on the day
  if (isSameDay(day, start)) return 'start'
  // Range ends on the day
  if (isSameDay(day, end)) return 'end'
  // Range spans across the day
  if (isAfter(day, start) && isBefore(day, end)) return 'middle'
  // Day is outside range
  return undefined
}

export const Month = styled(
  ({
    className,
    datesSelected,
    draftTo,
    firstDayOfWeek,
    fullRender,
    index,
    locale,
    onSelect,
    onDraftSelect,
    date,
    setItemPosition,
  }: MonthPropsWithScroll) => {
    const { startPadding, endPadding } = getMonthPadding(date, firstDayOfWeek)
    const days = getDaysArray(date, startPadding, endPadding)
    // For highlighting the range on the Cell
    const rangeType = getRangeType({ datesSelected, draftTo })

    // Calls setItemPosition to store the current child's position
    // in the parent list
    const ref = useCallback(
      (element: HTMLElement | null) => {
        if (element) {
          setItemPosition(index, element)
        }
      },
      [setItemPosition, index]
    )

    // If there are 3 or more empty days in the 1st week
    // title should go inline
    const titleInline = startPadding > 2
    // Does the selected/draft range span this month?
    const firstDayRangePosition = getRangePosition(startOfMonth(date), date, {
      datesSelected,
      draftTo,
    })
    // If so, the background should also go on the title
    // but not till fully rendered and not needed if it's inline
    const titleRangeType =
      !titleInline && fullRender && firstDayRangePosition === 'middle'
        ? rangeType
        : 'none'

    const { space } = useTheme()
    const height = `calc(${space.u8} * ${days.length / 7})`

    return (
      <div className={className} ref={ref}>
        <MonthTitle
          month={date}
          rangePosition={firstDayRangePosition}
          rangeType={titleRangeType}
          inline={titleInline}
          locale={locale}
        />
        <Grid
          columns={7}
          gap="none"
          height={height}
          className={fullRender ? 'full-render' : ''}
        >
          {fullRender &&
            days.map((day, i) => {
              const rangePosition = getRangePosition(day, date, {
                datesSelected,
                draftTo,
              })
              return (
                <Cell
                  key={i}
                  weekStart={i % 7 === 0}
                  weekEnd={i % 7 === 6}
                  rangeType={rangeType}
                  rangePosition={rangePosition}
                >
                  {typeof day !== 'string' && (
                    <Day
                      date={day}
                      locale={locale}
                      onSelect={onSelect}
                      onDraftSelect={onDraftSelect}
                      selected={datesSelected.some(date =>
                        isSameDay(date, day)
                      )}
                    />
                  )}
                </Cell>
              )
            })}
        </Grid>
      </div>
    )
  }
)`
  width: fit-content;
  ${Grid} {
    /* Use auto instead of the default minmax(0, 1fr)
    so that 1st & last cells in the row can be larger */
    grid-template-columns: repeat(7, auto);
    &.full-render {
      animation-duration: ${({ theme }) => `${theme.transitions.moderate}ms`};
      animation-fill-mode: forwards;
      animation-name: ${fadeIn};
    }
  }
`
