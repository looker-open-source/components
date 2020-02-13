import React, { FC, useState, SyntheticEvent } from 'react'
import styled from 'styled-components'
import format from 'date-fns/format'
import isFunction from 'lodash/isFunction'
import isValid from 'date-fns/isValid'
import parse from 'date-fns/parse'
import { BorderProps, SpaceProps } from '@looker/design-tokens'
import { InputText } from '../InputText'
import { Calendar } from '../../../Calendar'
import { LocaleCodes, Locales, dateFnLocaleMap } from '../../../utils'
import { InputProps } from '../InputProps'

interface InputDateProps
  extends Omit<InputProps, 'defaultValue' | 'onChange'>,
    SpaceProps,
    BorderProps {
  defaultValue?: Date
  onChange?: (date?: Date) => void
  onValidationFail?: (value: string) => void
  locale?: LocaleCodes
}

export const formatDateString = (
  date: Date = new Date(Date.now()), // specify Date.now for easy test mocks
  locale: LocaleCodes
): string => {
  return format(date, 'P', {
    locale: dateFnLocaleMap[locale],
  })
}

const formatYear = (date: Date): number => {
  const year = date.getFullYear()
  if (year < 100) {
    // convert 2-digit year (2/2/20) to 4-digit year (2/2/2020)
    return year + 2000
  } else if (year < 1000) {
    // convert 3-digit partial-year (2/2/201) to 4-digit year (2/2/2010)
    return parseInt(`${year}0`)
  }
  return year
}

const parseDateFromString = (value: string, locale: Locales): Date | false => {
  // Date format 'P' represents localized dates in date-fns
  const parsedValue = parse(value, 'P', new Date(), {
    locale: dateFnLocaleMap[locale],
  })

  parsedValue.setFullYear(formatYear(parsedValue))

  return isValid(parsedValue) && parsedValue
}

export const InputDate: FC<InputDateProps> = ({
  onChange,
  defaultValue,
  locale = Locales.English,
  validationType,
  onValidationFail,
}) => {
  const [selectedDate, setSelectedDate] = useState(defaultValue)
  const [validDate, setValidDate] = useState(validationType !== 'error')
  const [textInputValue, setTextInputValue] = useState(
    selectedDate ? formatDateString(selectedDate, locale) : ''
  )
  const [viewMonth, setViewMonth] = useState(defaultValue)

  const handleDateChange = (date?: Date) => {
    setValidDate(true)
    setSelectedDate(date)
    setViewMonth(date)
    if (isFunction(onChange)) {
      onChange(date)
    }
  }

  const handleDayClick = (date: Date) => {
    setTextInputValue(formatDateString(date, locale))
    handleDateChange(date)
  }

  const handleTextInputChange = (e: SyntheticEvent<HTMLInputElement>) => {
    const value = (e.target as HTMLInputElement).value
    setTextInputValue(value)

    if (value.length === 0) {
      handleDateChange()
    } else {
      const parsedValue = parseDateFromString(value, locale)
      if (parsedValue) {
        handleDateChange(parsedValue)
      }
    }
  }

  const handleValidation = (e: SyntheticEvent<HTMLInputElement>) => {
    const value = (e.target as HTMLInputElement).value
    // is valid if text input is blank or parseDateFromString returns a date object
    const isValid = value.length === 0 || !!parseDateFromString(value, locale)
    setValidDate(isValid)
    if (!isValid && isFunction(onValidationFail)) {
      onValidationFail(value)
    }
  }

  // navigate next/previous months in the calendar
  const handleNavClick = (month: Date) => {
    setViewMonth(month)
  }

  const renderedValidationType = !validDate ? 'error' : undefined

  return (
    <InputDateWrapper>
      <InputTextWrapper>
        <InputText
          placeholder={`Date (${formatDateString(undefined, locale)})`}
          value={textInputValue}
          onChange={handleTextInputChange}
          validationType={renderedValidationType}
          onBlur={handleValidation}
          data-testid="text-input"
        />
      </InputTextWrapper>
      <CalendarWrapper>
        <Calendar
          selectedDates={selectedDate}
          onDayClick={handleDayClick}
          locale={locale}
          viewMonth={viewMonth}
          onNavClick={handleNavClick}
        />
      </CalendarWrapper>
    </InputDateWrapper>
  )
}

const InputDateWrapper = styled.div`
  display: inline-block;
`

const InputTextWrapper = styled.div`
  padding: ${({ theme }) => theme.space.small};
  ${InputText} {
    width: 100%;
  }
`

const CalendarWrapper = styled.div`
  ${Calendar} {
    padding: 0;
  }
`
