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

import type {
  KeyboardEvent,
  Reducer,
  Ref,
  RefObject,
  SyntheticEvent,
} from 'react'
import React, { forwardRef, useReducer, useEffect, useRef } from 'react'
import { shouldForwardProp } from '@looker/design-tokens'
import styled from 'styled-components'
import noop from 'lodash/noop'
import add from 'lodash/add'
import subtract from 'lodash/subtract'
import type { ValidationType } from '../../ValidationMessage'

import { ErrorIcon } from '../ErrorIcon'
import { getAutoFocusProps } from '../InputProps'
import {
  InputTextContent,
  inputCSS,
  inputTextHover,
  inputTextFocus,
  inputTextDisabled,
  inputTextValidation,
} from '../InputText'
import { inputHeight } from '../height'
import { innerInputStyle } from '../innerInputStyle'
import { simpleLayoutCSS } from '../../../Layout/utils/simple'
import type { SimpleLayoutProps } from '../../../Layout/utils/simple'
import type { TimeFormats } from './utils'
import { formatTimeString, parseBase10Int, isValidTime } from './utils'

export interface InputTimeProps extends Omit<SimpleLayoutProps, 'size'> {
  'aria-describedby'?: string
  'aria-labelledby'?: string
  autoFocus?: boolean
  format?: TimeFormats
  defaultValue?: string
  value?: string
  onChange?: (time?: string) => void
  validationType?: ValidationType
  onValidationFail?: (value?: string) => void
  className?: string
  disabled?: boolean
  readOnly?: boolean
  id?: string
  onFocus?: (e: SyntheticEvent) => void
  onBlur?: (e: SyntheticEvent) => void
  required?: boolean
}

type Periods = 'AM' | 'PM' | ''

type ActionTypes =
  | 'SET_FOCUS'
  | 'INCREMENT_CHAR_COUNT'
  | 'RESET_CHAR_COUNT'
  | 'FOCUS_NEXT_FIELD'
  | 'SET_HOUR_VALUE'
  | 'SET_MINUTE_VALUE'
  | 'SET_PERIOD_VALUE'

type SubInputs = 'NONE' | 'HOUR' | 'MINUTE' | 'PERIOD'

interface InputState {
  charCount: number
  subInputFocus?: SubInputs
  hour: string
  minute: string
  period: Periods
  isComplete: boolean
  format: TimeFormats
}

interface InputAction {
  type: ActionTypes
  payload?: SubInputs | string | Periods
}

const initialState: InputState = {
  charCount: 0,
  format: '12h',
  hour: '',
  isComplete: false,
  minute: '',
  period: '',
  subInputFocus: 'NONE',
}

const isNumericKey = (e: KeyboardEvent) =>
  (e.keyCode >= 48 && e.keyCode <= 57) || (e.keyCode >= 96 && e.keyCode <= 105)

const isArrowKey = (e: KeyboardEvent) =>
  e.key === 'ArrowUp' || e.key === 'ArrowDown'

const isDeleteKey = (e: KeyboardEvent) => {
  return e.key === 'Backspace' || e.key === 'Delete'
}

const selectNextInput = (current?: SubInputs) => {
  switch (current) {
    case 'HOUR':
      return 'MINUTE'
    case 'MINUTE':
      return 'PERIOD'
    case 'PERIOD':
      return 'NONE'
    default:
      return 'NONE'
  }
}

interface IsCompleteConfig {
  format: TimeFormats
  hour: string
  minute: string
  period: string
}

const isInputComplete = ({
  format,
  hour,
  minute,
  period,
}: IsCompleteConfig): boolean => {
  if (format === '12h') {
    return !!(hour.length && minute.length && period.length)
  }
  return !!(hour.length && minute.length)
}

const reducer: Reducer<InputState, InputAction> = (state, action) => {
  const { payload, type } = action
  const inputValues: IsCompleteConfig = {
    format: state.format,
    hour: state.hour,
    minute: state.minute,
    period: state.period,
  }
  switch (type) {
    case 'SET_FOCUS':
      return { ...state, subInputFocus: payload as SubInputs }
    case 'FOCUS_NEXT_FIELD':
      return { ...state, subInputFocus: selectNextInput(state.subInputFocus) }
    case 'INCREMENT_CHAR_COUNT':
      return { ...state, charCount: state.charCount + 1 }
    case 'RESET_CHAR_COUNT':
      return { ...state, charCount: 0 }
    case 'SET_HOUR_VALUE':
      return {
        ...state,
        hour: payload as string,
        isComplete: isInputComplete({
          ...inputValues,
          hour: payload as string,
        }),
      }
    case 'SET_MINUTE_VALUE':
      return {
        ...state,
        isComplete: isInputComplete({
          ...inputValues,
          minute: payload as string,
        }),
        minute: payload as string,
      }
    case 'SET_PERIOD_VALUE':
      return {
        ...state,
        isComplete: isInputComplete({
          ...inputValues,
          period: payload as string,
        }),
        period: payload as Periods,
      }
    default:
      return state
  }
}

type RefMap = {
  [k in SubInputs]: RefObject<HTMLInputElement>
}

const cycleValue = (
  currentValue: string,
  key: string,
  max: 12 | 23 | 59,
  min: 1 | 0
) => {
  const transform = key === 'ArrowUp' ? add : subtract
  const newValue = transform(parseBase10Int(currentValue), 1)
  if (newValue < min) {
    return formatTimeString(max)
  } else if (newValue > max) {
    return formatTimeString(min)
  } else {
    return formatTimeString(newValue)
  }
}

// take the value prop (a 24hr string) and break it into component parts
const parseValue = (format: TimeFormats, value = '') => {
  if (value.length) {
    const [hr24, minute] = value.split(':').map(parseBase10Int)
    const hr12 = hr24 <= 12 ? hr24 : hr24 - 12
    const period = hr24 >= 12 ? 'PM' : 'AM'
    return [
      formatTimeString(format === '12h' ? hr12 : hr24),
      formatTimeString(minute),
      period,
    ]
  }
  return ['', '', '']
}

// take a 12hr string (e.g. '01:15 pm') and convert to equivalent 24hr string (e.g. '13:15')
export const convert12To24HrString = (value: string) => {
  const period = value.includes('P') ? 'PM' : 'AM'
  const numericTime = value.replace(/[APM]/gi, '')
  const [hour = 0, minute = 0] = numericTime.split(':').map(parseBase10Int)

  let hr24
  if (period === 'AM' && hour === 12) {
    hr24 = 0
  } else if (period === 'PM' && hour < 12) {
    hr24 = hour + 12
  } else {
    hr24 = hour
  }

  return `${formatTimeString(hr24)}:${formatTimeString(minute)}`
}

const InputTimeInternal = forwardRef(
  (
    {
      className,
      defaultValue,
      'aria-describedby': ariaDescribedby,
      'aria-labelledby': ariaLabelledby,
      autoFocus,
      disabled,
      format = '12h',
      id,
      onChange,
      readOnly,
      onBlur,
      onFocus,
      onValidationFail,
      required,
      validationType,
      value,
    }: InputTimeProps,
    ref: Ref<HTMLDivElement>
  ) => {
    const [inputState, dispatch] = useReducer(reducer, {
      ...initialState,
      format,
    })

    const { hour, minute, period, isComplete, subInputFocus } = inputState

    const inputRefs: RefMap = {
      HOUR: useRef(null),
      MINUTE: useRef(null),
      NONE: useRef(null),
      PERIOD: useRef(null),
    }

    // run this listener for every valid numeric entry
    const handleValidKeyDown = () => {
      dispatch({ type: 'INCREMENT_CHAR_COUNT' })
      if (inputState.charCount > 0) {
        dispatch({ type: 'FOCUS_NEXT_FIELD' })
      }
    }

    const handleDelete = (setStateCB: () => void) => {
      onChange && onChange(undefined)
      setStateCB()
    }

    const handleHourKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
      const clearHourField = () => {
        dispatch({ payload: '', type: 'SET_HOUR_VALUE' })
        dispatch({ type: 'RESET_CHAR_COUNT' })
      }
      if (isNumericKey(e)) {
        const value = parseBase10Int(
          // append or replace new char to existing value based on length of input
          inputState.charCount === 1 ? `${hour}${e.key}` : e.key
        )
        if (value < 24) {
          // valid input!
          if (format === '12h' && value > 12) {
            dispatch({
              payload: formatTimeString(value - 12),
              type: 'SET_HOUR_VALUE',
            })
            dispatch({ payload: 'PM', type: 'SET_PERIOD_VALUE' })
          } else {
            dispatch({
              payload: formatTimeString(value),
              type: 'SET_HOUR_VALUE',
            })
          }
          handleValidKeyDown()
        } else {
          // reset if invalid value is entered (e.g. 62:87 pm)
          clearHourField()
        }
      } else if (isArrowKey(e)) {
        // cycle through possible values with up/down arrows
        const max = format === '12h' ? 12 : 23
        const min = format === '12h' ? 1 : 0
        dispatch({
          payload: cycleValue(hour, e.key, max, min),
          type: 'SET_HOUR_VALUE',
        })
      } else if (isDeleteKey(e)) {
        // user delete
        handleDelete(clearHourField)
      }
    }

    const handleMinuteKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
      const clearMinuteField = () => {
        dispatch({ payload: '', type: 'SET_MINUTE_VALUE' })
        dispatch({ type: 'RESET_CHAR_COUNT' })
      }
      if (isNumericKey(e)) {
        // append or replace new char to existing value
        const value = parseBase10Int(
          inputState.charCount === 1 ? `${minute}${e.key}` : e.key
        )
        if (value < 60) {
          // valid input!
          dispatch({
            payload: formatTimeString(value),
            type: 'SET_MINUTE_VALUE',
          })
          handleValidKeyDown()
        } else {
          // reset if invalid value is entered (e.g. 62:87 pm)
          clearMinuteField()
        }
      } else if (isArrowKey(e)) {
        // cycle through possible values with up/down arrows
        dispatch({
          payload: cycleValue(minute, e.key, 59, 0),
          type: 'SET_MINUTE_VALUE',
        })
      } else if (isDeleteKey(e)) {
        // user delete
        handleDelete(clearMinuteField)
      }
    }

    const handlePeriodKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
      const clearPeriodField = () => {
        dispatch({ payload: '', type: 'SET_PERIOD_VALUE' })
        dispatch({ type: 'RESET_CHAR_COUNT' })
      }
      const key = e.key.toUpperCase()
      if (key === 'P' || key === 'A') {
        dispatch({ payload: `${key}M`, type: 'SET_PERIOD_VALUE' })
        handleValidKeyDown()
      } else if (isArrowKey(e)) {
        // cycle through possible values with up/down arrows
        const nextPeriod = period === 'PM' ? 'AM' : 'PM'
        dispatch({ payload: nextPeriod, type: 'SET_PERIOD_VALUE' })
      } else if (isDeleteKey(e)) {
        // user delete
        handleDelete(clearPeriodField)
      }
    }

    const handleHourFocus = () =>
      dispatch({ payload: 'HOUR', type: 'SET_FOCUS' })
    const handleMinuteFocus = () =>
      dispatch({ payload: 'MINUTE', type: 'SET_FOCUS' })
    const handlePeriodFocus = () =>
      dispatch({ payload: 'PERIOD', type: 'SET_FOCUS' })
    const handleBlur = () => {
      dispatch({ payload: 'NONE', type: 'SET_FOCUS' })
      dispatch({ type: 'RESET_CHAR_COUNT' })
    }

    // Input UX: automatically advance cursor to specified input
    // Also track state for whether user is focusing or blurring any sub input
    useEffect(() => {
      const ref = subInputFocus && inputRefs[subInputFocus]
      if (ref?.current) {
        ref.current.focus()
      }

      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [subInputFocus])

    useEffect(
      () => {
        const valueProp = value || defaultValue
        // Controlled Component: update state on every value change
        if (isValidTime(valueProp)) {
          const [newHour, newMinute, newPeriod] = parseValue(format, valueProp)
          hour !== newHour &&
            dispatch({ payload: newHour, type: 'SET_HOUR_VALUE' })
          minute !== newMinute &&
            dispatch({ payload: newMinute, type: 'SET_MINUTE_VALUE' })
          period !== newPeriod &&
            dispatch({ payload: newPeriod, type: 'SET_PERIOD_VALUE' })
        } else {
          onValidationFail && onValidationFail(valueProp)
          // eslint-disable-next-line no-console
          console.error(
            `Invalid time ("${valueProp}") passed to <InputTime />. Value should be formatted as a 24-hour string (e.g. value="02:00" or value="23:15").`
          )
        }
      },
      // eslint-disable-next-line react-hooks/exhaustive-deps
      [value]
    )

    // controlled component: call 'onChange' if all sub-inputs are filled in
    useEffect(() => {
      if (isComplete) {
        const newValue =
          format === '12h'
            ? convert12To24HrString(`${hour}:${minute} ${period}`)
            : `${hour}:${minute}`
        if (newValue !== value) {
          onChange && onChange(`${newValue}`)
        }
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isComplete, hour, minute, period])

    return (
      <div
        className={`${className} ${disabled && 'disabled'}`}
        ref={ref}
        onFocus={onFocus}
        onBlur={onBlur}
        aria-invalid={validationType === 'error' ? 'true' : undefined}
        aria-describedby={ariaDescribedby}
        aria-labelledby={ariaLabelledby}
        aria-disabled={disabled}
      >
        <StyledInput
          id={id}
          value={hour}
          onKeyDown={readOnly ? noop : handleHourKeyDown}
          onFocus={handleHourFocus}
          onBlur={handleBlur}
          onChange={noop} // suppress controlled component warning
          ref={inputRefs.HOUR}
          data-testid="input-hour"
          disabled={disabled}
          readOnly={readOnly}
          required={required}
          {...getAutoFocusProps(autoFocus)}
        />
        <div>:</div>
        <StyledInput
          value={minute}
          onKeyDown={readOnly ? noop : handleMinuteKeyDown}
          onFocus={handleMinuteFocus}
          onBlur={handleBlur}
          onChange={noop} // suppress controlled component warning
          ref={inputRefs.MINUTE}
          data-testid="input-minute"
          disabled={disabled}
          readOnly={readOnly}
          required={required}
        />
        {format === '12h' ? (
          <StyledInput
            value={period}
            onKeyDown={readOnly ? noop : handlePeriodKeyDown}
            onFocus={handlePeriodFocus}
            onBlur={handleBlur}
            onChange={noop} // suppress controlled component warning
            ref={inputRefs.PERIOD}
            data-testid="input-period"
            disabled={disabled}
            readOnly={readOnly}
            required={required}
          />
        ) : (
          <span />
        )}
        {validationType && (
          <InputTextContent pr="u2">
            <ErrorIcon />
          </InputTextContent>
        )}
      </div>
    )
  }
)

const StyledInput = styled.input
  .withConfig({ shouldForwardProp })
  .attrs(() => ({
    maxLength: 2,
    placeholder: '--',
    type: 'text',
  }))`
  ${innerInputStyle}
  font-family: inherit;
  font-size: ${({ theme }) => theme.fontSizes.small};
  line-height: ${({ theme }) => theme.lineHeights.medium};
  padding: 0;
  text-align: center;
  width: ${({ theme }) => theme.space.u5};

  &:focus {
    background: ${({ theme }) => theme.colors.keyAccent};
  }
`

export const InputTime = styled(InputTimeInternal)`
  ${simpleLayoutCSS}
  ${inputCSS}

  align-items: center;
  display: inline-grid;
  grid-gap: 0.15rem;
  grid-template-columns: auto auto auto auto 1fr;
  height: ${inputHeight};
  padding: ${({ theme: { space } }) =>
    `${space.u05} ${space.u1} ${space.u05} ${space.u3}`};

  ${InputTextContent} {
    justify-self: end;
  }

  &:focus-within {
    ${inputTextFocus}
  }

  &:hover {
    ${inputTextHover}
  }

  &.disabled {
    ${inputTextDisabled}
  }

  ${inputTextValidation}
`
