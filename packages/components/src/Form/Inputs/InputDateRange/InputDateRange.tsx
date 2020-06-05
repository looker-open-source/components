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
import React, {
  FC,
  useState,
  SyntheticEvent,
  useEffect,
  forwardRef,
  Ref,
} from 'react'
import { RangeModifier } from 'react-day-picker'
import styled from 'styled-components'
import isFunction from 'lodash/isFunction'
import partial from 'lodash/partial'
import min from 'lodash/min'
import max from 'lodash/max'
import isEmpty from 'lodash/isEmpty'
import isEqual from 'lodash/isEqual'
import values from 'lodash/values'
import {
  border,
  SpaceProps,
  color,
  space,
  BorderProps,
  ColorProps,
} from '@looker/design-tokens'
import { Icon } from '../../../Icon'
import { ValidationType } from '../../ValidationMessage'

import {
  inputTextDefaults,
  inputTextDisabled,
  inputTextHover,
  inputTextFocus,
  inputTextValidation,
} from '../InputText'
import { InlineInputText } from '../InlineInputText'
import { Calendar, CalendarLocalization } from '../../../Calendar'
import {
  Locales,
  formatDateString,
  parseDateFromString,
  useID,
  useReadOnlyWarn,
} from '../../../utils'

export interface InputDateRangeProps {
  value?: RangeModifier
  defaultValue?: RangeModifier
  onChange?: (range?: Partial<RangeModifier>) => void
  onValidationFail?: (value: string) => void
  localization?: CalendarLocalization
  dateStringLocale?: Locales
  validationType?: ValidationType
  id?: string
  ref?: Ref<HTMLDivElement>
  disabled?: boolean
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

const isDateRangeInView = (
  dateRange: Partial<RangeModifier>,
  viewMonth: Date
) => {
  if (!dateRange.from || !dateRange.to) {
    return false
  }
  const monthOneTimestamp = viewMonth.getTime()
  const monthTwoTimestamp = transformMonth(viewMonth, 2).getTime()
  const fromTimestamp = dateRange.from.getTime()
  const toTimestamp = dateRange.to.getTime()

  if (fromTimestamp < monthOneTimestamp || toTimestamp >= monthTwoTimestamp) {
    return false
  }

  return true
}

export const InputDateRange: FC<InputDateRangeProps> = forwardRef(
  (
    {
      defaultValue = {},
      localization,
      dateStringLocale,
      onChange,
      onValidationFail,
      validationType,
      value,
      id,
      disabled,
    },
    ref: Ref<HTMLDivElement>
  ) => {
    useReadOnlyWarn('InputDateRange', value, onChange)

    /*
     * JOINT State
     */
    const [dateRange, setDateRange] = useState<Partial<RangeModifier>>(
      value || defaultValue
    )

    // toggle between selecting start and end dates
    const [activeDateInput, setActiveDateInput] = useState<Endpoint>('from')

    // Calendar 1 view
    const [viewMonth, setViewMonth] = useState<Date>(
      value && value.from
        ? value.from
        : defaultValue && defaultValue.from
        ? defaultValue.from
        : new Date(Date.now())
    )

    // Calendar 2 view
    const viewNextMonth = new Date(viewMonth)
    viewNextMonth.setMonth(viewNextMonth.getMonth() + 1)

    /*
     * FROM State
     */
    const [fromTextInputValue, setFromTextInputValue] = useState(
      formatDateString(dateRange.from, dateStringLocale)
    )
    const [validFromDate, setValidFromDate] = useState(
      validationType !== 'error'
    )
    const fromID = useID(id && `from-${id}`)

    /*
     * TO State
     */
    const [toTextInputValue, setToTextInputValue] = useState(
      formatDateString(dateRange.to, dateStringLocale)
    )
    const [validToDate, setValidToDate] = useState(validationType !== 'error')
    const toID = useID(id && `to-${id}`)

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
        value.from &&
          inputs.from.setValue(formatDateString(value.from, dateStringLocale))
        value.to &&
          inputs.to.setValue(formatDateString(value.to, dateStringLocale))
        value.from &&
          !isDateRangeInView(value, viewMonth) &&
          setViewMonth(value.from)
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
      /* eslint-disable sort-keys-fix/sort-keys-fix */
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
        formatDateString(newDateRange[nonActiveInput], dateStringLocale)
      )

      if (!validationType) {
        // clear potentially stale date validation errors
        inputs.from.isValid || inputs.from.setIsValid(true)
        inputs.to.isValid || inputs.to.setIsValid(true)
      }

      // update final selected date range
      setDateRange(newDateRange)
      if (isFunction(onChange)) {
        onChange(newDateRange)
      }
    }

    const handleCalendarClick = (date: Date) => {
      const dateToSet = chooseDateToSet(activeDateInput, date, dateRange)
      inputs[dateToSet].setValue(formatDateString(date, dateStringLocale))
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
        const parsedValue = parseDateFromString(value, dateStringLocale)
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
      // only revalidate if validationType is not set externally
      if (!validationType) {
        const value = (e.target as HTMLInputElement).value
        // is valid if text input is blank or parseDateFromString returns a date object
        const isValid =
          value.length === 0 || !!parseDateFromString(value, dateStringLocale)
        inputs[activeDateInput].setIsValid(isValid)
        if (!isValid && isFunction(onValidationFail)) {
          onValidationFail(value)
        }
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
      <InputDateRangeWrapper ref={ref}>
        <InputTextGroupWrapper
          disabled={disabled}
          active={activeDateInput === 'from'}
          validationType={
            inputs.from.isValid && inputs.to.isValid ? undefined : 'error'
          }
        >
          <InputTextWrapper inputLength={inputs.from.value.length}>
            <InlineInputText
              placeholder={`Date (${formatDateString(
                new Date(Date.now()),
                dateStringLocale
              )})`}
              value={inputs.from.value}
              onChange={handleTextInputChange}
              onBlur={handleValidation}
              data-testid="date-from-text-input"
              id={fromID}
              onFocus={partial(handleTextInputFocus, 'from')}
              fontSize="small"
              disabled={disabled}
            />
          </InputTextWrapper>
          <HyphenWrapper hasInputValues={!isEmpty(dateRange)}>
            &ndash;
          </HyphenWrapper>
          <InputTextWrapper inputLength={inputs.to.value.length}>
            <InlineInputText
              placeholder={`Date (${formatDateString(
                new Date(Date.now()),
                dateStringLocale
              )})`}
              value={inputs.to.value}
              onChange={handleTextInputChange}
              onBlur={handleValidation}
              data-testid="date-to-text-input"
              id={toID}
              onFocus={partial(handleTextInputFocus, 'to')}
              fontSize="small"
              disabled={disabled}
            />
          </InputTextWrapper>
          {(inputs.from.isValid && inputs.to.isValid) || (
            <IconWrapper>
              <Icon
                key="warning"
                name="CircleInfo"
                size={20}
                color="critical"
                mr="xxsmall"
              />
            </IconWrapper>
          )}
        </InputTextGroupWrapper>
        <MultiCalendarLayout>
          <CalendarWrapper>
            <Calendar
              selectedDates={dateRange as RangeModifier}
              onDayClick={handleCalendarClick}
              localization={localization}
              viewMonth={viewMonth}
              onNowClick={handleNowClick}
              onPrevClick={handlePrevClick}
              showNextButton={false}
              onMonthChange={partial(handleMonthChange, 0)}
              disabled={disabled}
            />
          </CalendarWrapper>
          <CalendarWrapper>
            <Calendar
              selectedDates={dateRange as RangeModifier}
              onDayClick={handleCalendarClick}
              localization={localization}
              viewMonth={viewNextMonth}
              onNowClick={handleNowClick}
              onNextClick={handleNextClick}
              showPreviousButton={false}
              onMonthChange={partial(handleMonthChange, -1)}
              disabled={disabled}
            />
          </CalendarWrapper>
        </MultiCalendarLayout>
      </InputDateRangeWrapper>
    )
  }
)

InputDateRange.displayName = 'InputDateRange'

const HyphenWrapper = styled.div<{ hasInputValues: boolean }>`
  color: ${({ theme, hasInputValues }) =>
    hasInputValues ? theme.colors.text3 : theme.colors.text6};
`

const InputDateRangeWrapper = styled.div`
  width: 100%;
`

const MultiCalendarLayout = styled.div<SpaceProps>`
  ${space}
  display: inline-grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: ${({ theme }) => theme.space.large};
`

interface InputTextGroupWrapperProps extends BorderProps, ColorProps {
  active: boolean
  disabled?: boolean
  validationType?: 'error'
}

const InputTextGroupWrapper = styled.div<InputTextGroupWrapperProps>`
  ${border}
  ${color}

  display: inline-grid;
  grid-template-columns: auto auto auto 1fr;
  grid-gap: ${({ theme }) => theme.space.xsmall};
  align-items: center;
  margin: ${({ theme }) => `${theme.space.xxsmall} 0`};
  padding: ${({ theme }) => `0 ${theme.space.small}`};
  width: 100%;

  &:hover {
    ${inputTextHover}
  }

  &:focus-within {
    ${inputTextFocus}
  }

  ${({ disabled }) => disabled && inputTextDisabled}

  ${inputTextValidation}
`

const IconWrapper = styled.div`
  justify-self: right;
`

const InputTextWrapper = styled.div<{ inputLength: number }>`
  padding: ${({ theme }) => `${theme.space.xxsmall} 0`};
  ${InlineInputText} {
    border: none;
    border-radius: 0;
    height: ${({ theme }) => theme.lineHeights.large};
    background: transparent;
    /* stylelint-disable */
    &:focus-within {
      background: ${({ theme }) => theme.colors.keyAccent};
    }
    /* stylelint-enabled */
  }
`

InputTextGroupWrapper.defaultProps = {
  ...inputTextDefaults,
}

const CalendarWrapper = styled.div`
  ${Calendar} {
    padding: 0;
  }
`
