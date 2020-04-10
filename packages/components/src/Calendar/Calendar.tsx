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
import DayPicker, { RangeModifier } from 'react-day-picker'
import 'react-day-picker/lib/style.css'
import MomentLocaleUtils from 'react-day-picker/moment'
import styled from 'styled-components'
import has from 'lodash/has'
import { mix } from 'polished'
import { reset } from '@looker/design-tokens'
import { LocaleCodes } from '../utils/i18n'
import { inputTextFocus } from '../Form/Inputs/InputText'
import { CalendarSize, calendarSize, calendarSpacing } from './calendar-size'
import { CalendarContext } from './CalendarContext'
import { CalendarNav } from './CalendarNav'

// Import required data for all supported locales
import 'moment/locale/ar'
import 'moment/locale/de'
import 'moment/locale/es'
import 'moment/locale/fr'
import 'moment/locale/it'
import 'moment/locale/ja'
import 'moment/locale/ko'
import 'moment/locale/nl'
import 'moment/locale/pl'
import 'moment/locale/pt'
import 'moment/locale/pt-br'
import 'moment/locale/ru'
import 'moment/locale/sv'
import 'moment/locale/tr'
import 'moment/locale/zh-cn'
import 'moment/locale/zh-tw'

interface CalendarProps {
  locale?: LocaleCodes
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
}

const NoopComponent: FC = () => null

const InternalCalendar: FC<CalendarProps> = ({
  locale = 'en',
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
}) => {
  const renderDateRange = selectedDates && has(selectedDates, 'from')
  const modifiers = renderDateRange ? selectedDates : {}

  return (
    <CalendarContext.Provider
      value={{
        onNextClick,
        onNowClick,
        onPrevClick,
        showNextButton,
        showPreviousButton,
        size,
      }}
    >
      <DayPicker
        className={`${renderDateRange && 'render-date-range'} ${className}`}
        selectedDays={selectedDates}
        localeUtils={MomentLocaleUtils}
        locale={locale}
        month={viewMonth}
        showOutsideDays={true}
        onDayClick={onDayClick}
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
      ${inputTextFocus}
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
    color: ${({ theme }) => theme.colors.palette.charcoal700};
    &.DayPicker-Day--outside {
      color: ${({ theme }) => theme.colors.palette.charcoal300};
    }
    &--today {
      color: ${({ theme }) => theme.colors.semanticColors.primary.main};
    }
    &--selected:not(.DayPicker-Day--disabled):not(.DayPicker-Day--outside) {
      position: static;
      background-color: ${({ theme }) =>
        theme.colors.semanticColors.primary.main};
      &:hover {
        background-color: ${({ theme }) =>
          theme.colors.semanticColors.primary.dark};
      }
    }
    &:focus {
      border-width: 2px;
      border-color: ${(props) => props.theme.colors.palette.purple300};
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
        background-color: ${({ theme }) =>
          theme.colors.semanticColors.primary.light};
        color: ${({ theme }) =>
          mix(
            0.65,
            theme.colors.semanticColors.primary.light,
            theme.colors.semanticColors.neutral.altText
          )};
      }
      &:not(.DayPicker-Day--to):not(.DayPicker-Day--from):not(.DayPicker-Day--outside) {
        color: ${({ theme }) => theme.colors.semanticColors.neutral.altText};
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
        background-color: ${({ theme }) =>
          theme.colors.semanticColors.primary.light};
        color: ${({ theme }) => theme.colors.semanticColors.primary.main};
      }
    }
  }
`

Calendar.defaultProps = { size: 'medium' }
