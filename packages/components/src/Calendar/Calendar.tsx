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

import { getDateLocale } from '@looker/i18n'
import type { CompatibleHTMLProps } from '@looker/design-tokens'
import { isAfter, isBefore, isSameDay } from 'date-fns'
import React, {
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react'
import styled from 'styled-components'
import { Divider } from '../Divider'
import { useToggle } from '../utils'
import { DialogContext } from '../Dialog/DialogContext'
import { DaysOfWeek } from './DaysOfWeek'
import type { CalendarLocaleProps, NavCB, RangeModifier } from './types'
import { CalendarNav } from './CalendarNav'
import { MonthList } from './MonthList'
import { MonthPickerNav } from './MonthPickerNav'

export type CalendarProps = Partial<CalendarLocaleProps> &
  CompatibleHTMLProps<HTMLDivElement> & {
    onMonthChange: NavCB
    readOnly?: boolean
    showNextButton?: boolean
    showPreviousButton?: boolean
    /**
     * Set the month displayed. Defaults to the current month
     */
    viewMonth: Date
    /**
     * Set to true for range selection mode
     */
    isRange?: boolean
    /**
     * Control the selected date for single date selection mode
     */
    selectedDate?: Date
    /**
     * Callback when the user selects a date (both single date and range selection mode)
     */
    onSelectDate?: NavCB
    /**
     * Control the date range for range selection mode (use with isRange: true)
     */
    selectedRange?: RangeModifier
    /**
     * Callback for range selection mode (use with isRange: true)
     */
    onSelectRange?: (range: RangeModifier) => void
  }

const getDatesSelected = (date?: Date, range?: RangeModifier): Date[] => {
  // single date selection
  if (date && !range) return [date]
  // range selection
  if (range) {
    // may only have `from` or may have `to` as well
    return [
      ...(range.from ? [range.from] : []),
      ...(range.to ? [range.to] : []),
    ]
  }
  // no current selection
  return []
}

export const Calendar = styled(
  ({
    className,
    firstDayOfWeek,
    isRange,
    locale = getDateLocale(),
    onSelectDate,
    onSelectRange,
    onMonthChange,
    readOnly,
    selectedDate,
    selectedRange,
    showNextButton,
    showPreviousButton,
    viewMonth = new Date(),
    ...props
  }: CalendarProps) => {
    const datesSelected = getDatesSelected(selectedDate, selectedRange)
    // For showing the user the potential range selection as they hover/focus
    // after selecting the from date
    const [draftTo, setDraftTo] = useState<Date>()
    // The base for the scrolling list of months
    // to be updated when user scrolls all the way to the top or bottom
    const [baseMonth, setBaseMonth] = useState(viewMonth)

    const [activeInput, setActiveInput] = useState<'from' | 'to'>('from')

    // Toggle the month picker view
    const { value: showMonthPicker, setOn, setOff } = useToggle(false)
    const onOpenMonthPicker = useCallback(() => {
      setOn()
      // Reset the baseMonth for MonthList so it will scroll to the
      // right location if the month picker view closes without
      // selecting a new month
      setBaseMonth(viewMonth)
    }, [setOn, viewMonth])

    const handleDraftSelect = useCallback(
      (date: Date) => {
        if (isRange && selectedRange?.from && !selectedRange.to) {
          if (
            isSameDay(date, selectedRange.from) ||
            isBefore(date, selectedRange.from)
          ) {
            setDraftTo(undefined)
          } else {
            setDraftTo(date)
          }
        }
      },
      [isRange, selectedRange]
    )
    const { closeModal } = useContext(DialogContext)

    const handleSelect = useCallback(
      (date: Date) => {
        // Always call onSelectDate whether single or range mode
        // it may also be useful for range selection, for validation, etc
        onSelectDate?.(date)

        if (isRange) {
          // check if date is earlier than from
          const beforeFrom =
            selectedRange?.from && isBefore(date, selectedRange.from)
          // check if date is after to
          const afterTo = selectedRange?.to && isAfter(date, selectedRange.to)
          // if activeInput is from and
          if (activeInput === 'from') {
            // if date clicked is not later than to
            if (!afterTo) {
              onSelectRange?.({ ...selectedRange, from: date })
              setActiveInput('to')
            } else {
              // otherwise expand selection by setting date to to
              onSelectRange?.({ ...selectedRange, to: date })
            }
          } else if (activeInput === 'to') {
            // if date clicked is not earlier than from
            if (!beforeFrom) {
              onSelectRange?.({ ...selectedRange, to: date })
              setActiveInput('from')
            } else {
              // otherwise expand selection by setting date to from
              onSelectRange?.({ ...selectedRange, from: date })
            }
          }
        } else {
          closeModal()
        }
      },
      [
        closeModal,
        selectedRange,
        onSelectRange,
        onSelectDate,
        activeInput,
        isRange,
      ]
    )

    // Keep track of when the month was updated from scrolling
    // and don't update the baseMonth in that case
    const monthChangedFromScroll = useRef(false)
    useEffect(() => {
      if (!monthChangedFromScroll.current) {
        setBaseMonth(viewMonth)
      }
    }, [viewMonth])
    const handleMonthChangeByScroll = useCallback(
      (newMonth: Date) => {
        monthChangedFromScroll.current = true
        onMonthChange(newMonth)
        window.setTimeout(() => {
          monthChangedFromScroll.current = false
        }, 50)
      },
      [onMonthChange]
    )

    const localeProps = {
      firstDayOfWeek: firstDayOfWeek || locale.options?.weekStartsOn || 0,
      locale,
    }
    return (
      <div className={className} {...props}>
        {showMonthPicker ? (
          <MonthPickerNav
            locale={locale}
            date={viewMonth}
            onClose={setOff}
            onMonthChange={onMonthChange}
          />
        ) : (
          <>
            <CalendarNav
              locale={locale}
              monthYear={viewMonth}
              onMonthChange={onMonthChange}
              onOpenMonthPicker={onOpenMonthPicker}
            />
            <Divider appearance="light" />
            <DaysOfWeek {...localeProps} />
            <MonthList
              {...localeProps}
              onSelect={handleSelect}
              onDraftSelect={handleDraftSelect}
              draftTo={draftTo}
              currentDate={viewMonth}
              datesSelected={datesSelected}
              onMonthChange={handleMonthChangeByScroll}
              baseMonth={baseMonth}
              setBaseMonth={setBaseMonth}
            />
          </>
        )}
      </div>
    )
  }
)`
  font-family: ${({ theme }) => theme.fonts.brand};
  width: fit-content;
`
