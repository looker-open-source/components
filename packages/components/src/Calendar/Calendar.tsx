import React, { FC } from 'react'
import DayPicker from 'react-day-picker'
import 'react-day-picker/lib/style.css'
import MomentLocaleUtils from 'react-day-picker/moment'
import styled from 'styled-components'
import { reset } from '@looker/design-tokens'
import { LocaleCodes } from './calendar-types'
import { CalendarSize, calendarSize } from './calendar-size'
import { CalendarNavWithSize } from './CalendarNav'

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
}

const BlankComponent: FC = () => null

const InternalCalendar: FC<CalendarProps> = ({
  locale = LocaleCodes.En,
  onDayClick,
  selectedDates,
  className,
  size,
}) => {
  const CalendarNav = CalendarNavWithSize(size)
  return (
    <DayPicker
      className={className}
      selectedDays={selectedDates}
      localeUtils={MomentLocaleUtils}
      locale={locale}
      showOutsideDays={true}
      onDayClick={onDayClick}
      navbarElement={CalendarNav}
      captionElement={BlankComponent}
    />
  )
}

/* stylelint-disable max-nesting-depth */
export const Calendar = styled<FC<CalendarProps>>(InternalCalendar)`
  ${reset}

  .DayPicker-Body {
    display: grid;
    grid-template-rows: repeat(6, ${props => calendarSize(props).height});
    grid-gap: 2px;
  }
  .DayPicker-Week,
  .DayPicker-WeekdaysRow {
    display: grid;
    grid-template-columns: repeat(7, ${props => calendarSize(props).width});
    grid-gap: 2px;
    font-size: ${props => calendarSize(props).fontSize};
  }
  .DayPicker-Day {
    line-height: 1;
    padding: 0;
    display: grid;
    align-items: center;
    justify-items: center;
    border: 1px solid transparent;
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
      border-color: ${props => props.theme.colors.palette.purple300};
      box-shadow: 0 0 0 2px ${props => props.theme.colors.palette.purple100};
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
      }
    }
  }
`

Calendar.defaultProps = { size: 'medium' }
