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
import styled from 'styled-components'
import has from 'lodash/has'
import noop from 'lodash/noop'
import { reset, calendarMixColor } from '@looker/design-tokens'
import { inputTextFocus } from '../Form/Inputs/InputText'
import { CalendarSize, calendarSize, calendarSpacing } from './calendar-size'
import { CalendarContext } from './CalendarContext'
import { CalendarNav } from './CalendarNav'
import { dayPickerCss } from './dayPickerCss'

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
  ${dayPickerCss}
  ${calendarSpacing}

  .DayPicker-wrapper {
    border: 1px solid transparent;
    padding: 0;

    &:focus {
      outline: none;
      ${({ disabled }) => !disabled && inputTextFocus}
    }
  }
  .DayPicker-Month {
    margin: 0;
    padding: 0;
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
    align-items: center;
    border: 1px solid transparent;
    color: ${({ theme: { colors }, disabled }) =>
      disabled ? colors.text2 : colors.text4};
    cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};
    display: grid;
    justify-items: center;
    line-height: 1;
    padding: 0;
    transition: background-color 110ms linear;

    &.DayPicker-Day--outside {
      color: ${({ theme: { colors } }) => colors.text1};
    }

    &--today {
      color: ${({ theme: { colors }, disabled }) => !disabled && colors.key};
    }

    &--selected:not(.DayPicker-Day--disabled):not(.DayPicker-Day--outside) {
      background-color: ${({ theme: { colors }, disabled }) =>
        disabled ? colors.neutral : colors.key};
      position: static;

      &:hover {
        background-color: ${({ theme: { colors }, disabled }) =>
          disabled ? colors.neutralInteractive : colors.keyInteractive};
      }
    }

    &:focus {
      border-color: ${({ theme: { colors }, disabled }) =>
        disabled ? colors.neutralBorder : colors.keyBorder};
      border-width: 2px;
      outline: none;
    }
  }

  /*
   * Date range style overrides
   */

  /* stylelint-disable no-descending-specificity */
  &.render-date-range {
    .DayPicker-Day--selected {
      border-radius: 0;

      &:not(.DayPicker-Day--from):first-child {
        border-bottom-left-radius: ${({ theme: { radii } }) => radii.medium};
        border-top-left-radius: ${({ theme: { radii } }) => radii.medium};
      }

      &:not(.DayPicker-Day--to):last-child {
        border-bottom-right-radius: ${({ theme: { radii } }) => radii.medium};
        border-top-right-radius: ${({ theme: { radii } }) => radii.medium};
      }

      &.DayPicker-Day--outside,
      &:not(.DayPicker-Day--to):not(.DayPicker-Day--from) {
        background-color: ${({ theme: { colors }, disabled }) =>
          disabled ? colors.neutralAccent : colors.keyAccent};
        color: ${calendarMixColor};
      }

      &:not(.DayPicker-Day--to):not(.DayPicker-Day--from):not(.DayPicker-Day--outside) {
        color: ${({ theme: { colors } }) => colors.neutralInteractive};
      }
    }
    /* stylelint-enable no-descending-specificity */

    .DayPicker-Day--from {
      border-bottom-left-radius: 50%;
      border-top-left-radius: 50%;
    }

    .DayPicker-Day--to {
      border-bottom-right-radius: 50%;
      border-top-right-radius: 50%;
    }
  }

  /*
   * Standard view date hover styles.
   * Had to get gross with the specificity in order to override react-day-picker hover styles without using !important
   */
  &:not(.DayPicker--interactionDisabled) {
    .DayPicker-Day:not(.DayPicker-Day--disabled):not(.DayPicker-Day--selected):not(.DayPicker-Day--outside):hover {
      &:hover {
        background-color: ${({ theme: { colors }, disabled }) =>
          disabled ? 'transparent' : colors.keyAccent};
        color: ${({ theme: { colors }, disabled }) => !disabled && colors.key};
      }
    }
  }
`

Calendar.defaultProps = { size: 'medium' }
