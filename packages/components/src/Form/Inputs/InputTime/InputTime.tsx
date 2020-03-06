import React, {
  KeyboardEvent,
  FC,
  useState,
  useReducer,
  Reducer,
  useEffect,
  useRef,
  RefObject,
  Dispatch,
  SetStateAction,
} from 'react'
import styled from 'styled-components'
import noop from 'lodash/noop'
import add from 'lodash/add'
import subtract from 'lodash/subtract'
import partial from 'lodash/partial'
import some from 'lodash/some'
import {
  BorderProps,
  SpaceProps,
  border,
  space,
  reset,
} from '@looker/design-tokens'
import {
  InputText,
  inputTextHover,
  inputTextFocus,
  inputTextDisabled,
  inputTextValidation,
  inputTextDefaults,
  CustomizableInputTextAttributes,
} from '../InputText'
import {
  formatTimeString,
  TimeFormats,
  parseBase10Int,
  isValidTime,
} from '../utils'

import { ValidationType } from '../../ValidationMessage'

interface InputTimeProps extends SpaceProps, BorderProps {
  format?: TimeFormats
  defaultValue?: string
  value?: string
  onChange?: (time?: string) => void
  validationType?: ValidationType
  onValidationFail?: (value: string) => void
}

type ActionTypes =
  | 'SET_FOCUS'
  | 'INCREMENT_CHAR_COUNT'
  | 'RESET_CHAR_COUNT'
  | 'FOCUS_NEXT_FIELD'
type SubInputs = 'NONE' | 'HOUR' | 'MINUTE' | 'PERIOD'

interface InputState {
  charCount: number
  inputFocus?: SubInputs
}

interface InputAction {
  type: ActionTypes
  payload?: SubInputs
}

const initialState: InputState = {
  charCount: 0,
  inputFocus: 'NONE',
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

const reducer: Reducer<InputState, InputAction> = (state, action) => {
  const { payload, type } = action
  switch (type) {
    case 'SET_FOCUS':
      return { ...state, inputFocus: payload }
    case 'FOCUS_NEXT_FIELD':
      return { ...state, inputFocus: selectNextInput(state.inputFocus) }
    case 'INCREMENT_CHAR_COUNT':
      return { ...state, charCount: state.charCount + 1 }
    case 'RESET_CHAR_COUNT':
      return { ...state, charCount: 0 }
  }
}

type RefMap = {
  [k in SubInputs]: RefObject<HTMLInputElement>
}

type SetStateFn = Dispatch<SetStateAction<string>>

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
  const period = value.toLowerCase().includes('p') ? 'pm' : 'am'
  const numericTime = value.replace(/[apm]/gi, '')
  const [hour = 0, minute = 0] = numericTime.split(':').map(parseBase10Int)
  const hr24 = hour + (period === 'pm' && hour < 12 ? 12 : 0)

  return `${formatTimeString(hr24)}:${formatTimeString(minute)}`
}

const isInputComplete = (
  format: TimeFormats,
  hour: string,
  minute: string,
  period: string
) => {
  if (format === '12h') {
    return hour.length && minute.length && period.length
  }
  return hour.length && minute.length
}

export const InputTime: FC<InputTimeProps> = ({
  format = '12h',
  onChange,
  defaultValue,
  value,
}) => {
  const [inputState, dispatch] = useReducer(reducer, initialState)

  const [hour, setHour] = useState('')
  const [minute, setMinute] = useState('')
  const [period, setPeriod] = useState('')

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

  const clearField = (setStateFn: SetStateFn) => {
    setStateFn('')
    dispatch({ type: 'RESET_CHAR_COUNT' })
  }

  const handleHourKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    const clearHourField = partial(clearField, setHour)
    if (isNumericKey(e)) {
      // append or replace new char to existing value
      const value = parseBase10Int(
        inputState.charCount === 1 ? `${hour}${e.key}` : e.key
      )
      if (value < 24) {
        // valid input!
        if (format === '12h' && value > 12) {
          setHour(formatTimeString(value - 12))
          setPeriod('PM')
        } else {
          setHour(formatTimeString(value))
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
      setHour(cycleValue(hour, e.key, max, min))
    } else if (isDeleteKey(e)) {
      // user delete
      clearHourField()
    }
  }

  const handleMinuteKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    const clearMinuteField = partial(clearField, setMinute)
    if (isNumericKey(e)) {
      // append or replace new char to existing value
      const value = parseBase10Int(
        inputState.charCount === 1 ? `${minute}${e.key}` : e.key
      )
      if (value < 60) {
        // valid input!
        setMinute(formatTimeString(value))
        handleValidKeyDown()
      } else {
        // reset if invalid value is entered (e.g. 62:87 pm)
        clearMinuteField()
      }
    } else if (isArrowKey(e)) {
      // cycle through possible values with up/down arrows
      setMinute(cycleValue(minute, e.key, 59, 0))
    } else if (isDeleteKey(e)) {
      // user delete
      clearMinuteField()
    }
  }

  const handlePeriodKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    const clearPeriodField = partial(clearField, setPeriod)
    const key = e.key.toUpperCase()
    if (key === 'P' || key === 'A') {
      setPeriod(`${key}M`)
      handleValidKeyDown()
    } else if (isArrowKey(e)) {
      // cycle through possible values with up/down arrows
      const nextPeriod = period === 'PM' ? 'AM' : 'PM'
      setPeriod(nextPeriod)
    } else if (isDeleteKey(e)) {
      // user delete
      clearPeriodField()
    }
  }

  const handleHourFocus = () => dispatch({ payload: 'HOUR', type: 'SET_FOCUS' })
  const handleMinuteFocus = () =>
    dispatch({ payload: 'MINUTE', type: 'SET_FOCUS' })
  const handlePeriodFocus = () =>
    dispatch({ payload: 'PERIOD', type: 'SET_FOCUS' })
  const handleBlur = () => {
    dispatch({ payload: 'NONE', type: 'SET_FOCUS' })
    dispatch({ type: 'RESET_CHAR_COUNT' })
  }

  // Input UX: automatically advance cursor to specified input
  useEffect(() => {
    const ref = inputRefs[inputState.inputFocus || '']
    if (ref.current) {
      ref.current.focus()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inputState.inputFocus])

  // Change event: fire onChange when all sub inputs are filled and valid

  // TODO: figure out infinite loop issue when firing the change event

  // useEffect(() => {
  //   if (isInputComplete(format, hour, minute, period) && onChange) {
  //     const newValue = `${hour}:${minute}`
  //     if (format === '12h') {
  //       onChange(convert12To24HrString(`${newValue} ${period}`))
  //     } else {
  //       onChange(newValue)
  //     }
  //   } else {
  //     onChange && onChange(undefined)
  //   }
  // }, [hour, minute, period, format, onChange])

  // Controlled Component: update state on every value change
  useEffect(
    () => {
      const valueProp = value || defaultValue
      if (isValidTime(valueProp)) {
        const [newHour, newMinute, newPeriod] = parseValue(format, valueProp)
        setHour(newHour)
        setMinute(newMinute)
        setPeriod(newPeriod)
      } else {
        // eslint-disable-next-line no-console
        console.error(
          `Invalid time ("${valueProp}") passed to <InputTime />. Value should be formatted as a 24-hour string (e.g. value="02:00" or value="23:15").`
        )
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [value]
  )

  const hasInputValues = some([hour, minute, period], 'length')

  return (
    <InputTimeWrapper hasInputValues={hasInputValues}>
      <InputTimeLayout>
        <InputText
          maxLength={2}
          placeholder="--"
          value={hour}
          onKeyDown={handleHourKeyDown}
          onFocus={handleHourFocus}
          onBlur={handleBlur}
          onChange={noop}
          ref={inputRefs.HOUR}
        />
        <div>:</div>
        <InputText
          maxLength={2}
          placeholder="--"
          value={minute}
          onKeyDown={handleMinuteKeyDown}
          onFocus={handleMinuteFocus}
          onBlur={handleBlur}
          onChange={noop}
          ref={inputRefs.MINUTE}
        />
        {format === '12h' ? (
          <InputText
            maxLength={2}
            placeholder="--"
            value={period}
            onKeyDown={handlePeriodKeyDown}
            onFocus={handlePeriodFocus}
            onBlur={handleBlur}
            onChange={noop}
            ref={inputRefs.PERIOD}
          />
        ) : (
          <span />
        )}
      </InputTimeLayout>
    </InputTimeWrapper>
  )
}

const InputTimeWrapper = styled.div.attrs({
  ...inputTextDefaults,
  ...CustomizableInputTextAttributes,
})<{ hasInputValues: boolean }>`
  ${reset}
  ${border}
  ${space}

  display: inline-block;
  padding: ${({ theme }) => theme.space.xxsmall};
  color: ${({ theme, hasInputValues }) =>
    hasInputValues
      ? theme.colors.palette.charcoal600
      : theme.colors.palette.charcoal300};
  &:hover {
    ${inputTextHover}
  }

  &:focus-within {
    ${inputTextFocus}
  }

  &:disabled {
    ${inputTextDisabled}
  }

  ${inputTextValidation}

  ${InputText} {
    border: none;
    border-radius: 0;
    padding: 0;
    margin: 0;
    box-shadow: none;
    background: transparent;
    width: 1.75rem;
    height: auto;
    line-height: ${({ theme }) => theme.lineHeights.medium};
    text-align: center;
    color: inherit;
    &::placeholder {
      color: inherit;
    }
    &:focus {
      background: ${({ theme }) => theme.colors.palette.purple100};
    }
  }
`

const InputTimeLayout = styled.div`
  display: grid;
  grid-gap: 0.15rem;
  grid-template-columns: repeat(4, auto);
  align-items: center;
`
