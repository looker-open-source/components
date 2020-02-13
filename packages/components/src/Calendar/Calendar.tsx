import React, { FC } from 'react'
import DayPicker from 'react-day-picker'
import 'react-day-picker/lib/style.css'
import MomentLocaleUtils from 'react-day-picker/moment'
import styled from 'styled-components'
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
  selectedDates?: Date | Date[]
  onDayClick?: (day: Date) => void
  className?: string
  size?: CalendarSize
  showNextButton?: boolean
  showPreviousButton?: boolean
  onNavClick?: (date: Date) => void
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
  onNavClick,
  viewMonth,
  selectedDates,
}) => {
  return (
    <CalendarContext.Provider
      value={{ onNavClick, showNextButton, showPreviousButton, size }}
    >
      <DayPicker
        className={className}
        selectedDays={selectedDates}
        localeUtils={MomentLocaleUtils}
        locale={locale}
        month={viewMonth}
        showOutsideDays={true}
        onDayClick={onDayClick}
        navbarElement={CalendarNav}
        captionElement={NoopComponent}
      />
    </CalendarContext.Provider>
  )
}

/* stylelint-disable max-nesting-depth */
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
    grid-gap: 8px;
  }
  .DayPicker-Week,
  .DayPicker-WeekdaysRow {
    display: grid;
    grid-template-columns: repeat(7, auto);
    grid-gap: 8px;
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
      border-color: ${props => props.theme.colors.palette.purple300};
      outline: none;
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
