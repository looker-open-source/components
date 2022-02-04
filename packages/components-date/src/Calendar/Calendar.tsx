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
import React from 'react'
import type { FC } from 'react'
import type { RangeModifier } from 'react-day-picker'
import DayPicker, { LocaleUtils } from 'react-day-picker'
import styled, { css } from 'styled-components'
import has from 'lodash/has'
import noop from 'lodash/noop'
import { reset, calendarMixColor } from '@looker/design-tokens'
import type { Locale } from 'date-fns'
import { formatDateString } from '../locale'
import { calendarSize, calendarSpacing } from './calendar-size'
import { CalendarContext } from './CalendarContext'
import { CalendarNav } from './CalendarNav'
import { dayPickerCss } from './dayPickerCss'
import { formatMonthTitle } from './formatMonthTitle'
import { YearMonthForm, fromMonth, toMonth } from './YearMonthForm'

type NavCB = (date: Date) => void

export type CalendarLocaleProps = {
  /**
   * The day to use as first day of the week, starting from 0 (Sunday) to 6 (Saturday).
   * Uses the locale default (0 for en-US)
   */
  firstDayOfWeek?: number
  /**
   * Locale object from date-fns
   * @default date-fns/locale/en-US
   * @example
   * import ko from 'date-fns/locale/ko'
   */
  locale?: Locale
}

export type CalendarProps = CalendarLocaleProps & {
  className?: string
  disabled?: boolean
  onDayClick?: NavCB
  onMonthChange?: NavCB
  onNextClick?: NavCB
  onNowClick?: NavCB
  onPrevClick?: NavCB
  readOnly?: boolean
  /**
   * use selectMonth to have month and year in a drop down menu for selection
   */
  selectMonth?: boolean
  selectedDates?: Date | Date[] | RangeModifier
  showNextButton?: boolean
  showPreviousButton?: boolean
  viewMonth?: Date
}

const getLocaleProps = ({
  firstDayOfWeek,
  locale = getDateLocale(),
}: CalendarLocaleProps) => {
  const localeUtils: typeof LocaleUtils = {
    ...LocaleUtils,
    formatDay: date => formatDateString(date, 'iii PP', locale),
    formatMonthTitle: formatMonthTitle(locale),
    formatWeekdayLong: date => locale.localize?.day(date),
    formatWeekdayShort: date => locale.localize?.day(date, { width: 'short' }),
  }

  return {
    firstDayOfWeek,
    locale: locale.code,
    localeUtils,
  }
}

const NoopComponent: FC = () => null

const InternalCalendar: FC<CalendarProps> = ({
  className,
  selectMonth,
  disabled,
  firstDayOfWeek: propsFirstDayOfWeek,
  locale,
  onDayClick,
  onMonthChange,
  onNextClick,
  onNowClick,
  onPrevClick,
  readOnly,
  selectedDates,
  showNextButton = true,
  showPreviousButton = true,
  viewMonth,
}) => {
  const firstDayOfWeek = propsFirstDayOfWeek ?? locale?.options?.weekStartsOn

  const renderDateRange = selectedDates && has(selectedDates, 'from')
  const modifiers = renderDateRange ? selectedDates : {}

  const disableCallback = (cb: NavCB = noop) => {
    // allows provided callback to be circumvented by disabled prop
    // eslint-disable-next-line node/no-callback-literal
    return (date: Date) => (disabled ? noop() : cb(date))
  }

  const { localeUtils, ...localeProps } = getLocaleProps({
    firstDayOfWeek,
    locale,
  })
  const form = (
    <YearMonthForm
      selectMonth={selectMonth}
      date={viewMonth}
      disabled={disabled}
      localeUtils={localeUtils}
      onChange={onMonthChange}
      onNowClick={onNowClick}
      size="medium"
    />
  )

  const nav = <CalendarNav>{form}</CalendarNav>

  return (
    <CalendarContext.Provider
      value={{
        onNextClick: disableCallback(onNextClick),
        onNowClick: disableCallback(onNowClick),
        onPrevClick: disableCallback(onPrevClick),
        showNextButton: (!disabled || !readOnly) && showNextButton,
        showPreviousButton: (!disabled || !readOnly) && showPreviousButton,
        size: 'medium',
      }}
    >
      <DayPicker
        localeUtils={localeUtils}
        {...localeProps}
        className={`${renderDateRange && 'render-date-range'} ${className}`}
        month={viewMonth}
        fromMonth={fromMonth}
        toMonth={toMonth}
        onDayClick={disableCallback(onDayClick)}
        navbarElement={!disabled ? nav : form}
        captionElement={NoopComponent}
        selectedDays={selectedDates}
        showOutsideDays={true}
        modifiers={modifiers}
        onMonthChange={onMonthChange}
      />
    </CalendarContext.Provider>
  )
}

/* stylelint-disable max-nesting-depth, no-descending-specificity */
export const Calendar = styled(InternalCalendar).attrs(() => ({
  size: 'medium',
}))`
  ${reset}
  ${dayPickerCss}
  ${calendarSpacing}

  .DayPicker-NavBar {
    display: none;
  }
  .DayPicker-wrapper {
    border: 2px solid transparent;

    &:focus {
      outline: none;
      ${({ disabled }) =>
        !disabled &&
        css`
          border-color: ${({ theme }) => theme.colors.key};
        `}
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

  .DayPicker-Weekdays {
    display: block;
    margin-top: 0;
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
        background-color: ${({ theme: { colors }, disabled, readOnly }) =>
          disabled || readOnly
            ? colors.neutralInteractive
            : colors.keyInteractive};
      }
    }

    &:focus {
      border-color: ${({ theme: { colors }, disabled, readOnly }) =>
        disabled || readOnly ? 'transparent' : colors.keyBorder};
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
        ${calendarMixColor}
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
