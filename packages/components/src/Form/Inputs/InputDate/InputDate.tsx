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

import type { FocusEvent, FormEvent, KeyboardEvent, Ref } from 'react'
import React, { useCallback, useState, useEffect, forwardRef } from 'react'
import styled from 'styled-components'
import isFunction from 'lodash/isFunction'
import isEqual from 'lodash/isEqual'
import type { BorderProps, SpaceProps } from '@looker/design-tokens'
import { format } from 'date-fns'
import { CalendarToday } from '@styled-icons/material/CalendarToday'
import { InputText } from '../InputText'
import { useReadOnlyWarn, useToggle, useTranslation } from '../../../utils'
import { formatDateString, parseDateFromString } from '../../../Calendar/utils'
import { Calendar } from '../../../Calendar'
import { usePopover } from '../../../Popover'
import { VisuallyHidden } from '../../../VisuallyHidden'
import { IconButton } from '../../../Button/IconButton'
import type { ValidationType } from '../../ValidationMessage'

export type InputDateProps = SpaceProps &
  BorderProps & {
    'aria-describedby'?: string
    'aria-labelledby'?: string
    /**
     * Format to display the date string in, may vary by locale.
     * Supports full, long, medium, and short as well as all patterns supported by date-fns
     * @default medium
     */
    dateStringFormat?: string
    defaultValue?: Date
    disabled?: boolean
    id?: string
    /**
     * Locale object from date-fns
     * @default date-fns/locale/en-US
     * import ko from 'date-fns/locale/ko'
     */
    locale?: Locale
    onValidationFail?: (value: string) => void
    onChange?: (date?: Date) => void
    readOnly?: boolean
    ref?: Ref<HTMLInputElement>
    validationType?: ValidationType
    value?: Date
  }

const isDateInView = (value: Date, viewMonth: Date) =>
  !!(
    value.getFullYear() === viewMonth.getFullYear() &&
    value.getMonth() === viewMonth.getMonth()
  )

export const InputDate = styled(
  forwardRef((props: InputDateProps, ref: Ref<HTMLInputElement>) => {
    const {
      'aria-describedby': ariaDescribedby,
      'aria-labelledby': ariaLabelledby,
      dateStringFormat,
      defaultValue,
      disabled,
      id,
      locale,
      onChange,
      onValidationFail,
      readOnly,
      validationType,
      value,
    } = props

    const { t } = useTranslation('InputDate')
    useReadOnlyWarn('InputDate', value, onChange)

    const [selectedDate, setSelectedDate] = useState(value || defaultValue)

    const [textInputValue, setTextInputValue] = useState(
      selectedDate
        ? formatDateString(selectedDate, dateStringFormat, locale)
        : ''
    )

    const [viewMonth, setViewMonth] = useState<Date>(
      value || defaultValue || new Date(Date.now())
    )

    const handleDateChange = useCallback(
      (date?: Date) => {
        setSelectedDate(date)
        setViewMonth(date || new Date())
        if (isFunction(onChange)) {
          onChange(date)
        }
      },
      [onChange]
    )

    const handleTextInputChange = useCallback(
      (e: FormEvent<HTMLInputElement>) => {
        if (e.target === e.currentTarget) {
          const value = e.currentTarget.value
          setTextInputValue(value)
        }
      },
      []
    )

    const updateDateFromInput = useCallback(
      (currentTarget: HTMLInputElement) => {
        // don't re-validate if validationType is passed in externally
        const { value } = currentTarget
        // is valid if text input is blank or parseDateFromString returns a date object
        const isValid =
          value.length === 0 ||
          !!parseDateFromString(value, locale, dateStringFormat)
        if (!isValid && isFunction(onValidationFail)) {
          onValidationFail(value)
        }

        if (value.length === 0) {
          handleDateChange()
        } else {
          const parsedValue = parseDateFromString(
            value,
            locale,
            dateStringFormat
          )
          if (parsedValue) {
            handleDateChange(parsedValue)
          }
        }
      },
      [dateStringFormat, handleDateChange, locale, onValidationFail]
    )

    const handleBlur = useCallback(
      (e: FocusEvent<HTMLInputElement>) => {
        updateDateFromInput(e.currentTarget)
      },
      [updateDateFromInput]
    )

    const handleKeyDown = useCallback(
      (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
          // Don't submit a form if there is one
          e.preventDefault()
          // Update values when the user hits return
          updateDateFromInput(e.currentTarget)
        }
      },
      [updateDateFromInput]
    )
    const handleCalendarClose = useCallback(
      (date: Date) => {
        setTextInputValue(formatDateString(date, dateStringFormat, locale))
        handleDateChange(date)
      },
      [dateStringFormat, handleDateChange, locale]
    )

    useEffect(() => {
      // controlled component: update state when value changes externally
      if (value && !isEqual(value, selectedDate)) {
        setSelectedDate(value)
        value &&
          setTextInputValue(formatDateString(value, dateStringFormat, locale))
        value &&
          viewMonth &&
          !isDateInView(value, viewMonth) &&
          setViewMonth(value)
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [textInputValue, value, onChange])

    const { value: isOpen, change: setOpen, toggle } = useToggle()

    const { popover, ref: popoverRef } = usePopover({
      content: (
        <div>
          <VisuallyHidden aria-live="assertive" data-testid="hidden-value">
            {viewMonth ? format(viewMonth, 'MMMM-yyyy') : ''}
          </VisuallyHidden>
          <Calendar
            selectedDate={selectedDate}
            onSelectDate={handleCalendarClose}
            viewMonth={viewMonth}
            onMonthChange={setViewMonth}
          />
        </div>
      ),
      focusTrap: false,
      isOpen,
      placement: 'bottom-start',
      setOpen,
      triggerToggle: false,
    })

    return (
      <div ref={popoverRef}>
        <InputText
          aria-describedby={ariaDescribedby}
          aria-labelledby={ariaLabelledby}
          after={
            <IconButton
              size="xsmall"
              label={t('Open calendar')}
              icon={<CalendarToday />}
              onClick={toggle}
            />
          }
          value={textInputValue}
          onChange={handleTextInputChange}
          validationType={validationType}
          onBlur={handleBlur}
          onKeyDown={handleKeyDown}
          data-testid="text-input"
          id={id}
          ref={ref}
          disabled={disabled}
          readOnly={readOnly}
        />
        {popover}
      </div>
    )
  })
)`
  width: 100%;
`
