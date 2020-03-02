import React, { FC, useState, SyntheticEvent, useEffect } from 'react'
import styled from 'styled-components'
import isFunction from 'lodash/isFunction'
import isEqual from 'lodash/isEqual'
import { BorderProps, SpaceProps } from '@looker/design-tokens'
import { InputText } from '../InputText'
import { Calendar } from '../../../Calendar'
import { ValidationType } from '../../ValidationMessage'
import {
  LocaleCodes,
  Locales,
  formatDateString,
  parseDateFromString,
} from '../../../utils'

interface InputDateProps extends SpaceProps, BorderProps {
  defaultValue?: Date
  value?: Date
  onChange?: (date?: Date) => void
  validationType?: ValidationType
  onValidationFail?: (value: string) => void
  locale?: LocaleCodes
}

const isDateInView = (value: Date, viewMonth: Date) => {
  if (!value) {
    return false
  }

  if (
    value.getFullYear() === viewMonth.getFullYear() &&
    value.getMonth() === viewMonth.getMonth()
  ) {
    return true
  }

  return false
}

export const InputDate: FC<InputDateProps> = ({
  onChange,
  defaultValue,
  locale = Locales.English,
  validationType,
  onValidationFail,
  value,
}) => {
  const [selectedDate, setSelectedDate] = useState(value || defaultValue)
  const [validDate, setValidDate] = useState(validationType !== 'error')
  const [textInputValue, setTextInputValue] = useState(
    selectedDate ? formatDateString(selectedDate, locale) : ''
  )
  const [viewMonth, setViewMonth] = useState<Date | undefined>(
    defaultValue || new Date(Date.now())
  )

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

  useEffect(() => {
    // controlled component: update state when value changes externally
    if (value && !isEqual(value, selectedDate)) {
      setSelectedDate(value)
      value && setTextInputValue(formatDateString(value, locale))
      value &&
        viewMonth &&
        !isDateInView(value, viewMonth) &&
        setViewMonth(value)
    }

    // render a console warning if developers pass in a value without a change listener
    if (value && !onChange) {
      // eslint-disable-next-line no-console
      console.error(
        'Warning: Failed prop type: You provided a `value` prop to <InputDate /> without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue` instead. Otherwise, please provide an `onChange` callback.'
      )
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [textInputValue, value, onChange])

  return (
    <InputDateWrapper>
      <InputTextWrapper>
        <InputText
          placeholder={`Date (${formatDateString(
            new Date(Date.now()),
            locale
          )})`}
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
          onNowClick={handleNavClick}
          onNextClick={handleNavClick}
          onPrevClick={handleNavClick}
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
