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
import React, {
  forwardRef,
  useEffect,
  useCallback,
  useMemo,
  useState,
} from 'react'
import styled from 'styled-components'
import isFunction from 'lodash/isFunction'
import isEmpty from 'lodash/isEmpty'
import { isBefore, isSameDay } from 'date-fns'
import type { Locale } from 'date-fns'
import { CalendarToday } from '@styled-icons/material/CalendarToday'
import { useTranslation } from '../../../utils'
import type { RangeModifier } from '../../../Calendar/types'
import { Calendar } from '../../../Calendar/Calendar'
import { formatDateString, parseDateFromString } from '../../../Calendar/utils'
import { VisuallyHidden } from '../../../VisuallyHidden'
import { usePopover } from '../../../Popover'
import type { InlineInputTextProps } from '../InlineInputText'
import { InlineInputTextBase } from '../InlineInputText'
import { InputTextContent } from '../InputText/InputTextContent'
import { ErrorIcon } from '../ErrorIcon'
import { IconButton } from '../../../Button/IconButton'
import { Space } from '../../../Layout/Space'
import { useToggle, useID } from '../../../utils/'
import type { ValidationType } from '../../ValidationMessage'
import {
  inputCSS,
  inputTextDisabled,
  inputTextFocus,
  inputTextHover,
  inputTextValidation,
} from '../InputText'
import { inputHeight } from '../height'

export type InputDateRangeProps = {
  'aria-labelledby'?: string
  dateStringFormat?: string
  disabled?: boolean
  id?: string
  locale?: Locale
  onChange: (range: RangeModifier) => void
  onValidationFail?: (value: string) => void
  readOnly?: boolean
  ref?: Ref<HTMLInputElement>
  validationType?: ValidationType
  value: RangeModifier
}

type Endpoint = keyof RangeModifier

const getTextForDate =
  (range?: RangeModifier, dateStringFormat?: string, locale?: Locale) =>
  (endpoint?: Endpoint) => {
    const date = endpoint ? range?.[endpoint] : undefined
    return formatDateString(date, dateStringFormat, locale)
  }

const getViewMonthFromValue = (value: RangeModifier) =>
  value.from || value.to || new Date()

export const InputDateRange = styled(
  // eslint-disable-next-line react/display-name
  forwardRef((props: InputDateRangeProps, ref: Ref<HTMLInputElement>) => {
    const {
      'aria-labelledby': ariaLabelledby,
      dateStringFormat,
      disabled,
      locale,
      id,
      onChange,
      onValidationFail,
      readOnly,
      value,
      validationType,
    } = props
    const { t } = useTranslation('InputDateRange')

    const [viewMonth, setViewMonth] = useState(getViewMonthFromValue(value))

    const startDateLabelledby = `startDate-labelledby-${id}`
    const endDateLabelledby = `endDate-labelledby-${id}`

    const dateTexts = useMemo(() => {
      const getText = getTextForDate(value, dateStringFormat, locale)
      return {
        from: getText('from'),
        to: getText('to'),
      }
    }, [value, dateStringFormat, locale])

    // FROM state
    const [fromTextInputValue, setFromTextInputValue] = useState(dateTexts.from)
    useEffect(() => {
      setFromTextInputValue(dateTexts.from)
    }, [dateTexts.from])

    const fromID = useID(id && `from-${id}`)

    // TO state
    const [toTextInputValue, setToTextInputValue] = useState(dateTexts.to)
    useEffect(() => {
      setToTextInputValue(dateTexts.to)
    }, [dateTexts.to])

    const toID = useID(id && `to-${id}`)

    // Based on an event's target, get the endpoint by the id attribute
    const getEndpoint = useCallback(
      ({ id }: HTMLInputElement) => {
        return id === fromID ? 'from' : 'to'
      },
      [fromID]
    )

    // Called from blur and enter key events, parse the date when user is done typing
    const updateRangeFromInput = useCallback(
      (currentTarget: HTMLInputElement) => {
        const inputValue = currentTarget.value
        const endpoint = getEndpoint(currentTarget)
        let validationMessage = inputValue
        const valueEndpoint = value[endpoint]

        if (inputValue === '') {
          // empty string is valid
          validationMessage = ''
          if (valueEndpoint) {
            // Input has been cleared, remove the endpoint's date
            const newRange = { ...value }
            delete newRange[endpoint]
            onChange(newRange)
          }
        } else {
          const parsedValue = parseDateFromString(
            inputValue,
            locale,
            dateStringFormat
          )
          // Check if the date has changed
          if (parsedValue) {
            // string was parse-able as a date
            const newRange = { ...value, [endpoint]: parsedValue }
            validationMessage =
              newRange.from &&
              newRange.to &&
              !isBefore(newRange.from, newRange.to)
                ? 'Invalid range'
                : ''
            if (!valueEndpoint || !isSameDay(valueEndpoint, parsedValue)) {
              // User has entered a new and valid date – call onChange
              // with an updated range, and update the Calendar's viewMonth
              setViewMonth(parsedValue)
              onChange(newRange)
            }
          }
        }
        if (validationMessage && isFunction(onValidationFail)) {
          onValidationFail(validationMessage)
        }
      },
      [dateStringFormat, getEndpoint, locale, onChange, onValidationFail, value]
    )

    const handleBlur = useCallback(
      (e: FocusEvent<HTMLInputElement>) => {
        updateRangeFromInput(e.currentTarget)
      },
      [updateRangeFromInput]
    )

    const handleKeyDown = useCallback(
      (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
          // Don't submit a form if there is one
          e.preventDefault()
          // Update values when the user hits return
          updateRangeFromInput(e.currentTarget)
        }
      },
      [updateRangeFromInput]
    )

    const handleInputChange = (e: FormEvent<HTMLInputElement>) => {
      const { currentTarget } = e
      const { value } = currentTarget
      const endpoint = getEndpoint(currentTarget)
      if (endpoint === 'from') {
        setFromTextInputValue(value)
      } else {
        setToTextInputValue(value)
      }
    }

    // Calendar Popover
    const { value: isOpen, change: setOpen, toggle } = useToggle()
    // Update the Calendar viewMonth to reflect the current value
    // each time the icon is clicked
    const handleIconClick = useCallback(() => {
      setViewMonth(getViewMonthFromValue(value))
      toggle()
    }, [toggle, value])

    const { popover, ref: popoverRef } = usePopover({
      content: (
        <div>
          <VisuallyHidden aria-live="assertive">
            {viewMonth ? formatDateString(viewMonth, 'MMMM-yyyy', locale) : ''}
          </VisuallyHidden>
          <Calendar
            disabled={disabled}
            locale={locale}
            isRange
            onSelectRange={onChange}
            selectedRange={value}
            viewMonth={viewMonth}
            onMonthChange={setViewMonth}
          />
        </div>
      ),
      focusTrap: false,
      isOpen,
      placement: 'bottom-start',
      ref,
      setOpen,
      triggerToggle: false,
    })

    // Props shared by both inputs
    const commonInputProps: InlineInputTextProps = {
      disabled,
      fontSize: 'small',
      onBlur: handleBlur,
      onChange: handleInputChange,
      onKeyDown: handleKeyDown,
      readOnly,
    }

    return (
      <InputTextGroupWrapper
        ref={popoverRef}
        disabled={disabled}
        validationType={validationType}
      >
        <InlineInputTextBase
          placeholder={t('Start date')}
          data-testid="date-from-text-input"
          id={fromID}
          value={fromTextInputValue}
          aria-labelledby={`${ariaLabelledby} ${startDateLabelledby}`}
          {...commonInputProps}
        />
        <HyphenWrapper hasInputValues={!isEmpty(value)} aria-hidden="true">
          &ndash;
        </HyphenWrapper>
        <VisuallyHidden id={endDateLabelledby}>{'End date'}</VisuallyHidden>
        <InlineInputTextBase
          placeholder={t('End date')}
          data-testid="date-to-text-input"
          id={toID}
          value={toTextInputValue}
          aria-labelledby={`${ariaLabelledby} ${endDateLabelledby}`}
          {...commonInputProps}
        />
        <Space gap="xxsmall" justify="end" pr="u2">
          <IconButton
            size="xsmall"
            label={'Open calendar'}
            icon={<CalendarToday />}
            onClick={handleIconClick}
            disabled={readOnly || disabled}
          />
          {validationType === 'error' && (
            <InputTextContent pl="u1">
              <ErrorIcon />
            </InputTextContent>
          )}
        </Space>
        {popover}
      </InputTextGroupWrapper>
    )
  })
)``

const HyphenWrapper = styled.span<{ hasInputValues: boolean }>`
  align-items: center;
  color: ${({ theme, hasInputValues }) =>
    hasInputValues ? theme.colors.text3 : theme.colors.text1};
  display: flex;
  .label-down & {
    display: none;
  }
`

interface InputTextGroupWrapperProps {
  disabled?: boolean
  validationType?: 'error'
}

const InputTextGroupWrapper = styled.div<InputTextGroupWrapperProps>`
  ${inputCSS}
  align-items: stretch;
  display: flex;
  font-family: ${({ theme }) => theme.fonts.body};
  height: ${inputHeight};
  justify-content: space-evenly;
  padding: ${({ theme: { space } }) => `${space.u05} ${space.u1}`};
  width: 100%;
  &:hover {
    ${inputTextHover}
  }

  &:focus-within {
    ${inputTextFocus}
  }

  ${inputTextValidation}

  ${({ disabled }) => disabled && inputTextDisabled}

  input {
    font-family: inherit;
  }
  ${InlineInputTextBase} {
    flex-shrink: 0;
    margin: ${({ theme }) => theme.space.u05} 0;
    &:focus-within {
      background: ${({ theme }) => theme.colors.keyAccent};
    }
    input,
    span {
      padding: 0 ${({ theme }) => theme.space.u2};
    }
  }
`
