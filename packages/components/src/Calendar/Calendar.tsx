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
import React, { FC } from 'react'
import DayPicker, { RangeModifier, LocaleUtils } from 'react-day-picker'
import 'react-day-picker/lib/style.css'
import styled from 'styled-components'
import has from 'lodash/has'
import { mix } from 'polished'
import noop from 'lodash/noop'
import { reset } from '@looker/design-tokens'
import { inputTextFocus } from '../Form/Inputs/InputText'
import { CalendarSize, calendarSize, calendarSpacing } from './calendar-size'
import { CalendarContext } from './CalendarContext'
import { CalendarNav } from './CalendarNav'

export interface CalendarLocalization {
  months: string[]
  weekdaysShort: string[]
  firstDayOfWeek: number
}

interface CalendarProps {
  localization?: CalendarLocalization
  selectedDates?: Date | Date[] | RangeModifier
  onDayClick?: (day: Date) => void
  className?: string
  size?: CalendarSize
  showNextButton?: boolean
  showPreviousButton?: boolean
  onNextClick?: (date: Date) => void
  onNowClick?: (date: Date) => void
  onPrevClick?: (date: Date) => void
  onMonthChange?: (month: Date) => void
  viewMonth?: Date
  disabled?: boolean
}

const NoopComponent: FC = () => null

const InternalCalendar: FC<CalendarProps> = ({
  localization = {},
  onDayClick,
  className,
  size,
  showNextButton = true,
  showPreviousButton = true,
  onMonthChange,
  onNextClick,
  onNowClick,
  onPrevClick,
  viewMonth,
  selectedDates,
  disabled,
}) => {
  const renderDateRange = selectedDates && has(selectedDates, 'from')
  const modifiers = renderDateRange ? selectedDates : {}

  const disableCallback = (cb: Function = noop) => {
    // allows provided callback to be circumvented by disabled prop
    return (...args: any[]) => (disabled ? noop() : cb(...args)) // eslint-disable-line standard/no-callback-literal
  }

  const formatMonthTitle = (month: Date) => {
    if (localization.months) {
      return `${localization.months[month.getMonth()]} ${month.getFullYear()}`
    } else {
      return LocaleUtils.formatMonthTitle(month)
    }
  }

  return (
    <CalendarContext.Provider
      value={{
        onNextClick: disableCallback(onNextClick),
        onNowClick: disableCallback(onNowClick),
        onPrevClick: disableCallback(onPrevClick),
        showNextButton: !disabled && showNextButton,
        showPreviousButton: !disabled && showPreviousButton,
        size,
      }}
    >
      <DayPicker
        {...localization}
        localeUtils={{ ...LocaleUtils, formatMonthTitle }}
        className={`${renderDateRange && 'render-date-range'} ${className}`}
        selectedDays={selectedDates}
        month={viewMonth}
        showOutsideDays={true}
        onDayClick={disableCallback(onDayClick)}
        navbarElement={CalendarNav}
        captionElement={NoopComponent}
        modifiers={modifiers}
        onMonthChange={onMonthChange}
      />
    </CalendarContext.Provider>
  )
}

/* stylelint-disable max-nesting-depth, no-descending-specificity */
export const Calendar = styled<FC<CalendarProps>>(InternalCalendar)`
  ${reset}
  ${calendarSpacing}

  .DayPicker-wrapper {
    padding: 0;
    border: 1px solid transparent;
    &:focus {
      outline: none;
      ${({ disabled }) => !disabled && inputTextFocus}
    }
  }
  .DayPicker-Month {
    padding: 0;
    margin: 0;
  }
  .DayPicker-Body {
    display: grid;
    grid-gap: 1px;
  }
  .DayPicker-Week,
  .DayPicker-WeekdaysRow {
    display: grid;
    grid-template-columns: repeat(7, auto);
  }
  .DayPicker-Day {
    ${calendarSize}
    line-height: 1;
    padding: 0;
    display: grid;
    align-items: center;
    justify-items: center;
    border: 1px solid transparent;
    transition: background-color 110ms linear;
    color: ${({ theme: { colors }, disabled }) =>
      disabled ? colors.text4 : colors.text2};
    cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};
    &.DayPicker-Day--outside {
      color: ${({ theme }) => theme.colors.text6};
    }
    &--today {
      color: ${({ theme, disabled }) => !disabled && theme.colors.key};
    }
    &--selected:not(.DayPicker-Day--disabled):not(.DayPicker-Day--outside) {
      position: static;
      background-color: ${({ theme, disabled }) =>
        disabled ? theme.colors.neutral : theme.colors.key};
      &:hover {
        background-color: ${({ theme, disabled }) =>
          disabled
            ? theme.colors.neutralInteractive
            : theme.colors.keyInteractive};
      }
    }
    &:focus {
      border-width: 2px;
      border-color: ${({ theme: { colors }, disabled }) =>
        disabled ? colors.neutralBorder : colors.keyBorder};
      outline: none;
    }
  }

  /*
   * Date range style overrides
   */
  &.render-date-range {
    .DayPicker-Day--selected {
      &.DayPicker-Day--outside,
      &:not(.DayPicker-Day--to):not(.DayPicker-Day--from) {
        background-color: ${({ theme, disabled }) =>
          disabled ? theme.colors.neutralAccent : theme.colors.keyAccent};
        color: ${({ theme }) =>
          mix(0.65, theme.colors.keyAccent, theme.colors.neutralInteractive)};
      }
      &:not(.DayPicker-Day--to):not(.DayPicker-Day--from):not(.DayPicker-Day--outside) {
        color: ${({ theme }) => theme.colors.neutralInteractive};
      }
      border-radius: 0;
      &:not(.DayPicker-Day--from) {
        &:first-child {
          ${({ theme: { radii } }) => `
            border-top-left-radius: ${radii.medium};
            border-bottom-left-radius: ${radii.medium};`}
        }
      }
      &:not(.DayPicker-Day--to) {
        &:last-child {
          ${({ theme: { radii } }) => `
            border-top-right-radius: ${radii.medium};
            border-bottom-right-radius: ${radii.medium};`}
        }
      }
    }
    .DayPicker-Day--from {
      border-top-left-radius: 50%;
      border-bottom-left-radius: 50%;
    }
    .DayPicker-Day--to {
      border-top-right-radius: 50%;
      border-bottom-right-radius: 50%;
    }
  }

  /*
   * Standard view date hover styles.
   * Had to get gross with the specificity in order to override react-day-picker hover styles without using !important
   */
  &:not(.DayPicker--interactionDisabled) {
    .DayPicker-Day:not(.DayPicker-Day--disabled):not(.DayPicker-Day--selected):not(.DayPicker-Day--outside):hover {
      &:hover {
        background-color: ${({ theme, disabled }) =>
          disabled ? 'transparent' : theme.colors.keyAccent};
        color: ${({ theme, disabled }) => !disabled && theme.colors.key};
      }
    }
  }
`

Calendar.defaultProps = { size: 'medium' }
