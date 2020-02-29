import React, { FC, useState, SyntheticEvent, useEffect } from 'react'
import { RangeModifier } from 'react-day-picker'
import styled from 'styled-components'
import isFunction from 'lodash/isFunction'
import partial from 'lodash/partial'
import min from 'lodash/min'
import max from 'lodash/max'
import isEqual from 'lodash/isEqual'
import values from 'lodash/values'
import { border, SpaceProps, color, space } from '@looker/design-tokens'
import { ValidationType } from '../../ValidationMessage'

import {
  InputText,
  inputTextHover,
  inputTextFocus,
  inputTextDefaults,
  inputTextValidation,
  CustomizableInputTextAttributes,
} from '../InputText'
import { Calendar } from '../../../Calendar'
import {
  LocaleCodes,
  Locales,
  formatDateString,
  parseDateFromString,
  useID,
} from '../../../utils'

interface InputDateRangeProps {
  value?: RangeModifier
  defaultValue?: RangeModifier
  onChange?: (range?: Partial<RangeModifier>) => void
  onValidationFail?: (value: string) => void
  locale?: LocaleCodes
  validationType?: ValidationType
}

type Endpoint = 'to' | 'from'

// Add or subtract given number of months to provided date
const transformMonth = (
  date: Date = new Date(Date.now()),
  monthDiff: number
) => {
  const newDate = new Date(date)
  newDate.setDate(1) // normalize to 1st of the month, so that no impossible dates are returned (e.g. Feb 31)
  newDate.setMonth(newDate.getMonth() + monthDiff)
  return newDate
}

// decide which date (from or to) gets updated based on active state and current value
// example, if newDate is later than dateRange.to, update dateRange.to regardless
// of the activeDateInput value
const chooseDateToSet = (
  activeDateInput: Endpoint,
  newDate?: Date,
  dateRange: Partial<RangeModifier> = {}
): Endpoint => {
  const { from, to } = dateRange
  if (newDate) {
    if (from && newDate < from) {
      return 'from'
    } else if (to && newDate > to) {
      return 'to'
    }
  }
  return activeDateInput
}

export const InputDateRange: FC<InputDateRangeProps> = ({
  defaultValue = {},
  locale = Locales.English,
  onChange,
  onValidationFail,
  validationType,
  value,
}) => {
  /*
   * JOINT State
   */
  const [dateRange, setDateRange] = useState<Partial<RangeModifier>>(
    value || defaultValue
  )

  // toggle between selecting start and end dates
  const [activeDateInput, setActiveDateInput] = useState<Endpoint>('from')

  // Calendar 1 view
  const [viewMonth, setViewMonth] = useState(
    defaultValue ? defaultValue.from : undefined
  )

  // Calendar 2 view
  const viewNextMonth = viewMonth ? new Date(viewMonth) : new Date()
  viewNextMonth.setMonth(viewNextMonth.getMonth() + 1)

  /*
   * FROM State
   */
  const [fromTextInputValue, setFromTextInputValue] = useState(
    formatDateString(dateRange.from, locale)
  )
  const [validFromDate, setValidFromDate] = useState(validationType !== 'error')
  const fromID = useID()

  /*
   * TO State
   */
  const [toTextInputValue, setToTextInputValue] = useState(
    formatDateString(dateRange.to, locale)
  )
  const [validToDate, setValidToDate] = useState(validationType !== 'error')
  const toID = useID()

  /*
   * Combine state into one easily traversable object
   */
  const inputs = {
    from: {
      isValid: validFromDate,
      setIsValid: setValidFromDate,
      setValue: setFromTextInputValue,
      value: fromTextInputValue,
    },
    to: {
      isValid: validToDate,
      setIsValid: setValidToDate,
      setValue: setToTextInputValue,
      value: toTextInputValue,
    },
  }

  /*
   * Set up necessary callbacks
   */

  useEffect(() => {
    // controlled component: update state when value changes externally
    if (value && !isEqual(value, dateRange)) {
      setDateRange(value)
      value.from && inputs.from.setValue(formatDateString(value.from, locale))
      value.to && inputs.to.setValue(formatDateString(value.to, locale))
      value.from && setViewMonth(value.from)
    }

    // render a console warning if developers pass in a value without a change listener
    if (value && !onChange) {
      // eslint-disable-next-line no-console
      console.error(
        'Warning: Failed prop type: You provided a `value` prop to <InputDateRange /> without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue` instead. Otherwise, please provide an `onChange` callback.'
      )
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inputs.from, inputs.to, value, onChange])

  const toggleActiveDateInput = () => {
    if (activeDateInput === 'from') {
      setActiveDateInput('to')
    } else {
      setActiveDateInput('from')
    }
  }

  const handleDateChange = (dateToSet: Endpoint, date?: Date) => {
    /* eslint-disable sort-keys */
    const newDateRange: Partial<RangeModifier> = {
      ...dateRange,
      [dateToSet]: date,
    }

    // prevent reversed date ranges like Feb 23 - Jan 1
    // also make sure that there is always a `from` and `to` value
    if (activeDateInput === 'from') {
      // process `to` first so that you can always push the date range later than current `to` value
      newDateRange.to = max(values(newDateRange))
      newDateRange.from = min(values(newDateRange))
    } else {
      // process `from` first so that you can always push the date range earlier than current `from` value
      newDateRange.from = min(values(newDateRange))
      newDateRange.to = max(values(newDateRange))
    }

    // update input boxes to match selected dates
    // only update inactive input so as not to block manual keyboard input
    const nonActiveInput = dateToSet === 'from' ? 'to' : 'from'
    inputs[nonActiveInput].setValue(
      formatDateString(newDateRange[nonActiveInput], locale)
    )

    // clear potentially stale date validation errors
    inputs.from.isValid || inputs.from.setIsValid(true)
    inputs.to.isValid || inputs.to.setIsValid(true)

    // update final selected date range
    setDateRange(newDateRange)
    if (isFunction(onChange)) {
      onChange(newDateRange)
    }
  }

  const handleCalendarClick = (date: Date) => {
    const dateToSet = chooseDateToSet(activeDateInput, date, dateRange)
    inputs[dateToSet].setValue(formatDateString(date, locale))
    handleDateChange(dateToSet, date)
    if (dateToSet === activeDateInput) {
      toggleActiveDateInput()
    }
  }

  const handleTextInputChange = (e: SyntheticEvent<HTMLInputElement>) => {
    const value = (e.target as HTMLInputElement).value
    inputs[activeDateInput].setValue(value)

    if (value.length === 0) {
      handleDateChange(activeDateInput)
    } else {
      const parsedValue = parseDateFromString(value, locale)
      if (parsedValue) {
        const newMonthFocus =
          activeDateInput === 'to'
            ? transformMonth(parsedValue, -1)
            : parsedValue
        setViewMonth(newMonthFocus)
        handleDateChange(activeDateInput, parsedValue)
      }
    }
  }

  const handleValidation = (e: SyntheticEvent<HTMLInputElement>) => {
    const value = (e.target as HTMLInputElement).value
    // is valid if text input is blank or parseDateFromString returns a date object
    const isValid = value.length === 0 || !!parseDateFromString(value, locale)
    inputs[activeDateInput].setIsValid(isValid)
    if (!isValid && isFunction(onValidationFail)) {
      onValidationFail(value)
    }
  }

  const handleNextClick = () => {
    setViewMonth(transformMonth(viewMonth, 1))
  }

  const handlePrevClick = () => {
    setViewMonth(transformMonth(viewMonth, -1))
  }

  const handleNowClick = () => {
    setViewMonth(new Date(Date.now()))
  }

  const handleTextInputFocus = (label: Endpoint) => setActiveDateInput(label)

  const handleMonthChange = (viewMonthDiff: number, month: Date) => {
    setViewMonth(transformMonth(month, viewMonthDiff))
  }

  return (
    <InputDateRangeWrapper>
      <MultiCalendarLayout px="small">
        <InputTextWrapper
          active={activeDateInput === 'from'}
          validationType={inputs.from.isValid ? undefined : 'error'}
        >
          <InputLabel active={activeDateInput === 'from'} htmlFor={fromID}>
            From:
          </InputLabel>
          <InputText
            placeholder={`Date (${formatDateString(
              new Date(Date.now()),
              locale
            )})`}
            value={inputs.from.value}
            onChange={handleTextInputChange}
            onBlur={handleValidation}
            data-testid="date-from-text-input"
            id={fromID}
            onFocus={partial(handleTextInputFocus, 'from')}
          />
        </InputTextWrapper>
        <InputTextWrapper
          active={activeDateInput === 'to'}
          validationType={inputs.to.isValid ? undefined : 'error'}
        >
          <InputLabel active={activeDateInput === 'to'} htmlFor={toID}>
            To:
          </InputLabel>
          <InputText
            placeholder={`Date (${formatDateString(
              new Date(Date.now()),
              locale
            )})`}
            value={inputs.to.value}
            onChange={handleTextInputChange}
            onBlur={handleValidation}
            data-testid="date-to-text-input"
            id={toID}
            onFocus={partial(handleTextInputFocus, 'to')}
          />
        </InputTextWrapper>
      </MultiCalendarLayout>
      <MultiCalendarLayout>
        <CalendarWrapper>
          <Calendar
            selectedDates={dateRange as RangeModifier}
            onDayClick={handleCalendarClick}
            locale={locale}
            viewMonth={viewMonth}
            onNowClick={handleNowClick}
            onPrevClick={handlePrevClick}
            showNextButton={false}
            onMonthChange={partial(handleMonthChange, 0)}
          />
        </CalendarWrapper>
        <CalendarWrapper>
          <Calendar
            selectedDates={dateRange as RangeModifier}
            onDayClick={handleCalendarClick}
            locale={locale}
            viewMonth={viewNextMonth}
            onNowClick={handleNowClick}
            onNextClick={handleNextClick}
            showPreviousButton={false}
            onMonthChange={partial(handleMonthChange, -1)}
          />
        </CalendarWrapper>
      </MultiCalendarLayout>
    </InputDateRangeWrapper>
  )
}

const InputLabel = styled.label<{ active: boolean }>`
  color: ${({ theme: { colors }, active }) =>
    active
      ? colors.semanticColors.primary.main
      : colors.semanticColors.neutral.main};
  font-weight: bold;
  text-transform: uppercase;
  font-size: ${({ theme }) => theme.fontSizes.xsmall};
  border-top-left-radius: ${({ theme }) => theme.radii.medium};
  border-bottom-left-radius: ${({ theme }) => theme.radii.medium};
  padding: 0.5rem;
`

const InputDateRangeWrapper = styled.div`
  display: inline-block;
`

const MultiCalendarLayout = styled.div<SpaceProps>`
  ${space}
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: ${({ theme }) => theme.space.large};
`

const InputTextWrapper = styled.div.attrs({
  ...inputTextDefaults,
  ...CustomizableInputTextAttributes,
})<{ active: boolean; validationType?: 'error' }>`
  ${border}
  ${color}
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  margin-bottom: 1rem;

  &:hover {
    ${inputTextHover}
  }

  &:focus-within {
    ${inputTextFocus}
  }

  ${inputTextValidation}

  ${InputText} {
    border: none;
    border-radius: 0;
    padding: 0;
    margin: 0;
    box-shadow: none;
    background: transparent;
  }
`

const CalendarWrapper = styled.div`
  ${Calendar} {
    padding: 0;
  }
`
