/*

 MIT License

 Copyright (c) 2021 Looker Data Sciences, Inc.

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

import { useTranslation } from 'react-i18next'
import type { FC, SyntheticEvent, Ref } from 'react'
import React, { useState, useEffect, forwardRef } from 'react'
import styled from 'styled-components'
import isFunction from 'lodash/isFunction'
import isEqual from 'lodash/isEqual'
import type { BorderProps, SpaceProps } from '@looker/design-tokens'
import { InputText, VisuallyHidden, useReadOnlyWarn } from '@looker/components'
import { Calendar, formatMonthTitle } from '../Calendar'
import { formatDateString, parseDateFromString } from '../locale'
import { getLocale } from '../locale/deprecated'
import type { InputDateBaseProps } from '../types'

export type InputDateProps = SpaceProps &
  BorderProps &
  InputDateBaseProps & {
    'aria-describedby'?: string
    defaultValue?: Date
    onChange?: (date?: Date) => void
    readOnly?: boolean
    ref?: Ref<HTMLInputElement>
    value?: Date
  }

const isDateInView = (value: Date, viewMonth: Date) => {
  if (
    value.getFullYear() === viewMonth.getFullYear() &&
    value.getMonth() === viewMonth.getMonth()
  ) {
    return true
  }

  return false
}

export const InputDate: FC<InputDateProps> = forwardRef(
  (
    {
      'aria-describedby': ariaDescribedby,
      'aria-labelledby': ariaLabelledby,
      dateStringFormat,
      dateStringLocale,
      defaultValue,
      disabled,
      firstDayOfWeek,
      localization,
      id,
      locale: propsLocale,
      onChange,
      onValidationFail,
      readOnly,
      validationType,
      value,
    },
    ref: Ref<HTMLInputElement>
  ) => {
    const locale = dateStringLocale ? getLocale(dateStringLocale) : propsLocale

    const { t } = useTranslation('InputDate')
    useReadOnlyWarn('InputDate', value, onChange)

    const [selectedDate, setSelectedDate] = useState(value || defaultValue)
    const [validDate, setValidDate] = useState(validationType !== 'error')
    const [textInputValue, setTextInputValue] = useState(
      selectedDate
        ? formatDateString(selectedDate, locale, dateStringFormat)
        : ''
    )
    const [viewMonth, setViewMonth] = useState<Date | undefined>(
      value || defaultValue || new Date(Date.now())
    )

    const handleDateChange = (date?: Date) => {
      if (!validationType) {
        setValidDate(true)
      }
      setSelectedDate(date)
      setViewMonth(date)
      if (isFunction(onChange)) {
        onChange(date)
      }
    }

    const handleDayClick = (date: Date) => {
      setTextInputValue(formatDateString(date, locale, dateStringFormat))
      handleDateChange(date)
    }

    const handleTextInputChange = (e: SyntheticEvent<HTMLInputElement>) => {
      const value = (e.target as HTMLInputElement).value
      setTextInputValue(value)

      if (value.length === 0) {
        handleDateChange()
      } else {
        const parsedValue = parseDateFromString(value, locale, dateStringFormat)
        if (parsedValue) {
          handleDateChange(parsedValue)
        }
      }
    }

    const handleValidation = (e: SyntheticEvent<HTMLInputElement>) => {
      // don't re-validate if validationType is passed in externally
      if (!validationType) {
        const value = (e.target as HTMLInputElement).value
        // is valid if text input is blank or parseDateFromString returns a date object
        const isValid =
          value.length === 0 ||
          !!parseDateFromString(value, locale, dateStringFormat)
        setValidDate(isValid)
        if (!isValid && isFunction(onValidationFail)) {
          onValidationFail(value)
        }
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
        value &&
          setTextInputValue(formatDateString(value, locale, dateStringFormat))
        value &&
          viewMonth &&
          !isDateInView(value, viewMonth) &&
          setViewMonth(value)
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [textInputValue, value, onChange])

    return (
      <InputDateWrapper>
        <InputText
          aria-describedby={ariaDescribedby}
          aria-labelledby={ariaLabelledby}
          placeholder={`${t('Date')} (${formatDateString(
            new Date(Date.now()),
            locale,
            dateStringFormat
          )})`}
          value={textInputValue}
          onChange={handleTextInputChange}
          validationType={renderedValidationType}
          onBlur={handleValidation}
          data-testid="text-input"
          id={id}
          ref={ref}
          disabled={disabled}
          readOnly={readOnly}
        />
        <CalendarWrapper>
          <VisuallyHidden aria-live="assertive">
            {viewMonth ? formatMonthTitle(locale)(viewMonth) : ''}
          </VisuallyHidden>
          <Calendar
            selectedDates={selectedDate}
            onDayClick={handleDayClick}
            localization={localization}
            locale={locale}
            firstDayOfWeek={firstDayOfWeek}
            viewMonth={viewMonth}
            onMonthChange={setViewMonth}
            onNowClick={handleNavClick}
            onNextClick={handleNavClick}
            onPrevClick={handleNavClick}
            disabled={disabled}
            readOnly={readOnly}
          />
        </CalendarWrapper>
      </InputDateWrapper>
    )
  }
)

InputDate.displayName = 'InputDate'

const InputDateWrapper = styled.div`
  width: 100%;
`

const CalendarWrapper = styled.div`
  ${Calendar} {
    padding: 0;
  }
`
