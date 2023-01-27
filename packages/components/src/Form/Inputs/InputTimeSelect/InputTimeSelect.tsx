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
import type { KeyboardEvent, Ref, SyntheticEvent } from 'react'
import React, { useMemo, forwardRef, useState, useEffect } from 'react'
import styled from 'styled-components'
import reduce from 'lodash/reduce'
import map from 'lodash/map'
import isFunction from 'lodash/isFunction'
import find from 'lodash/find'
import trim from 'lodash/trim'
import last from 'lodash/last'
import head from 'lodash/head'
import sortedIndex from 'lodash/sortedIndex'
import throttle from 'lodash/throttle'
import type {
  BorderProps,
  SpaceProps,
  CompatibleHTMLProps,
} from '@looker/design-tokens'
import type {
  ComboboxOptionObject,
  MaybeComboboxOptionObject,
} from '../Combobox/types'
import type { ValidationType } from '../../ValidationMessage'
import { Combobox } from '../Combobox'
import { ComboboxInput } from '../Combobox/ComboboxInput'
import { ComboboxList } from '../Combobox/ComboboxList'
import { ComboboxOption } from '../Combobox/ComboboxOption'
import { pickAriaAndValidationProps } from '../ariaProps'
import { useReadOnlyWarn, useTranslation } from '../../../utils'
import type { TimeFormats } from '../InputTime/utils'
import {
  formatTimeString,
  parseBase10Int,
  isValidTime,
} from '../InputTime/utils'

/*
 * We've limited allowed intervals to a few approved options rather than
 * accepting any number. This is to protect against uninteded use where an
 * engineer might specify 1-minute intervals and generate an unusable
 * select box with 1400 options. We also wouldn't want to support bizarre
 * instances of a random numbers like 37 or 152 minute intervals.
 */

type intervals = 5 | 10 | 15 | 20 | 30 | 60

export interface InputTimeSelectProps
  extends SpaceProps,
    BorderProps,
    Omit<CompatibleHTMLProps<HTMLDivElement>, 'value' | 'onChange'> {
  format?: TimeFormats
  interval?: intervals
  defaultValue?: string
  value?: string
  onChange?: (val?: string) => void
  onBlur?: () => void
  validationType?: ValidationType
  onValidationFail?: (value: string) => void
}

// if format is `12h`, repeat hours 1-12 twice
const cycleHourDisplay = (format: TimeFormats, hour: number) => {
  if (format === '12h') {
    if (hour === 0) {
      return 12 // 12:00 am
    } else if (hour > 12) {
      return hour - 12 // 1:00 pm - 11:00 pm
    }
  }
  return hour
}

// human readable value returned based on 12h or 24h formats
// e.g. instead of 13:45 display "01:45 pm"
const formatLabel = (format: TimeFormats, hour: number, minute: number) => {
  const formattedHour = formatTimeString(cycleHourDisplay(format, hour))
  const formattedMinute = formatTimeString(minute)
  const period = format === '12h' && (hour < 12 ? 'am' : 'pm')

  return trim(`${formattedHour}:${formattedMinute} ${period || ''}`)
}

// generates all values from 0-60 that match provided interval setting
// e.g. if interval is 15, return [0, 15, 30, 45]
const generateMinuteIntervals = (interval: intervals) => {
  const minutes = new Array(60 / interval)
  return map(minutes, (_, index) => formatTimeString(index * interval))
}

// generates all time options based on format and interval settings
const generateTimes = (format: TimeFormats, interval: intervals) => {
  const hours = new Array(24)
  const minutes = generateMinuteIntervals(interval)

  return reduce(
    hours,
    (result: ComboboxOptionObject[], _, hour: number) => {
      const formatLabel = format === '12h' && (hour < 12 ? 'am' : 'pm')
      const formattedHour = formatTimeString(cycleHourDisplay(format, hour))

      const hourWithMinutes: ComboboxOptionObject[] = map(
        minutes,
        (minute: string) => {
          const label = trim(`${formattedHour}:${minute} ${formatLabel || ''}`)
          const value = `${formatTimeString(hour)}:${minute}` // value always in 24hr time
          return {
            label,
            value,
          }
        }
      )
      return [...result, ...hourWithMinutes]
    },
    []
  )
}

// takes a non-normalized time value (e.g. 10:13) and rounds to the nearest valid interval (e.g. 10:15)
const matchClosestMinute = (interval: intervals, timeCode?: string) => {
  const minuteOptions = map(generateMinuteIntervals(interval), parseBase10Int)
  const now = new Date(Date.now()) // Include Date.now for easy test mocks
  const currentMinute = timeCode
    ? parseBase10Int(timeCode.split(':')[1])
    : now.getMinutes()
  const currentHour = timeCode
    ? parseBase10Int(timeCode.split(':')[0])
    : now.getHours()

  // round current minute to closest option
  const index = sortedIndex(minuteOptions, currentMinute)
  const optionBefore =
    minuteOptions[index - 1] || (head(minuteOptions) as number)
  const optionAfter = minuteOptions[index] || (last(minuteOptions) as number)
  const roundedMinute =
    currentMinute - optionBefore < optionAfter - currentMinute
      ? optionBefore
      : optionAfter

  // format and return time string
  const formattedHour = formatTimeString(currentHour)
  const formattedMinute = formatTimeString(roundedMinute)

  return `${formattedHour}:${formattedMinute}`
}

// take in a string value ('03:45') and return a formatted option object
// e.g. {label:'03:45 am', value: '03:45'}
const createOptionFromStringValue = (format: TimeFormats, value: string) => {
  const [hour, minute] = map(value.split(':'), parseBase10Int)

  return {
    label: formatLabel(format, hour, minute),
    value,
  }
}

// convert times like "2:00 pm" or "12:15 am" to 24 hour equivalents
const convert12to24hr = (hour: number, period: 'am' | 'pm') => {
  if (hour + period === '12am') {
    return 0
  } else if (period === 'pm' && hour < 12) {
    return hour + 12
  } else {
    return hour
  }
}

// take in a shorthand string label ('2pm') and return a formatted object
// e.g. {label: '02:00 pm', value: '14:00'}
const createOptionFromLabel = (format: TimeFormats, label: string) => {
  const period = label.toLowerCase().includes('p') ? 'pm' : 'am'
  const numericTime = label.replace(/[apm]/gi, '')
  const [hour = 0, minute = 0] = numericTime.split(':').map(parseBase10Int)
  const hr24 = convert12to24hr(hour, period)
  const value = `${formatTimeString(hr24)}:${formatTimeString(minute)}`

  if (isValidTime(value)) {
    return { label: formatLabel(format, hr24, minute), value }
  }

  return undefined
}

// pass in a string value ('03:45') and return full option object
// e.g. {label:'03:45 am', value: '03:45'}
const matchStringValueToOption = (
  options: ComboboxOptionObject[],
  format: TimeFormats,
  value?: string
) => {
  if (value && isValidTime(value)) {
    const option = find(options, { value })
    return option || createOptionFromStringValue(format, value)
  }
  return undefined
}

// take in a string label ('1:45 pm') and returns matching object
// e.g. {label: '01:45 pm', value: '13:45'}
// used in controlled components where value might not match the list of options
const matchStringLabelToOption = (
  options: ComboboxOptionObject[],
  label?: string
) => {
  if (label) {
    return find(options, o => {
      return o.label ? o.label.includes(label) : false
    })
  }
  return undefined
}

// choose one option to scroll into visible menu area
// adds {scrollIntoView: true} metadata to matching option
const setScrollIntoView = (
  options: ComboboxOptionObject[],
  interval: intervals,
  selectedOption?: ComboboxOptionObject
) => {
  // CASE 1: scroll currently selected option into view
  if (selectedOption) {
    return map(options, option =>
      matchClosestMinute(interval, selectedOption.value) === option.value
        ? { ...option, scrollIntoView: true }
        : option
    )
  }

  // CASE 2: scroll current time into view
  const now = matchClosestMinute(interval)
  return map(options, option =>
    option.value === now ? { ...option, scrollIntoView: true } : option
  )
}

const arrowKeys = ['ArrowDown', 'ArrowUp', 'ArrowRight', 'ArrowLeft']

const InputTimeSelectLayout = forwardRef(
  (
    {
      className,
      interval = 15,
      format = '12h',
      onChange,
      onBlur,
      value = '',
      defaultValue,
      validationType,
      disabled,
      autoFocus,
      id,
      ...props
    }: InputTimeSelectProps,
    ref: Ref<HTMLDivElement>
  ) => {
    useReadOnlyWarn('InputTimeSelect', value, onChange)
    const valueProp = value || defaultValue
    if (!isValidTime(valueProp)) {
      // eslint-disable-next-line no-console
      console.error(
        `Invalid time ("${valueProp}") passed to <InputTimeSelect />. Value should be formatted as a 24-hour string (e.g. value="02:00" or value="23:15").`
      )
    }

    const timeOptions = generateTimes(format, interval)

    const [selectedOption, setSelectedOption] =
      useState<MaybeComboboxOptionObject>()

    const [inputTextValue, setInputTextValue] = useState('')

    useEffect(() => {
      // controlled component behavior: update state when value prop changes
      setSelectedOption(
        matchStringValueToOption(timeOptions, format, value || defaultValue)
      )
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value])

    const throttledHandleChange = useMemo(
      () =>
        throttle(
          (newSelectedOption: MaybeComboboxOptionObject) => {
            setSelectedOption(newSelectedOption)
            const newValue = newSelectedOption
              ? newSelectedOption.value
              : undefined
            if (isFunction(onChange) && isValidTime(newValue)) {
              onChange(newValue)
            }
          },
          50,
          { trailing: false }
        ),
      [onChange]
    )

    const handleTextInputChange = (e: SyntheticEvent) => {
      setInputTextValue((e.target as HTMLInputElement).value)
    }

    const handleTextInputBlur = () => {
      onBlur && onBlur()
      setInputTextValue('')
    }

    const [isNavigating, setIsNavigating] = useState(false)

    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
      const { key } = e
      if (arrowKeys.includes(key)) {
        setIsNavigating(true)
      } else if (key === 'Enter' || key === 'Tab') {
        if (inputTextValue.length) {
          // allow entering shortcuts like `2pm` to select `02:00 pm` on enter
          const option = createOptionFromLabel(format, inputTextValue)
          // don't fire change event here if user is selecting an option from the dropdown list
          !isNavigating && throttledHandleChange(option)
        }
      } else {
        setIsNavigating(false)
      }
    }

    // scroll dropdown to relevant value
    // inputTextValue: user input typeahead match
    // selectedOption.value: current component state
    // value: prop value passed in externally
    const optionToFocus =
      matchStringLabelToOption(timeOptions, inputTextValue) || selectedOption

    const timeOptionsFocused = setScrollIntoView(
      timeOptions,
      interval,
      optionToFocus
    )

    const ariaProps = pickAriaAndValidationProps(props)
    const { t } = useTranslation('InputTimeSelect')

    return (
      <Combobox
        className={className}
        ref={ref}
        onChange={throttledHandleChange}
        value={selectedOption}
        wrapperAriaLabel={t('Select time')}
      >
        <ComboboxInput
          placeholder={t('Select time')}
          onChange={handleTextInputChange}
          onBlur={handleTextInputBlur}
          onKeyDown={handleKeyDown}
          autoComplete={false}
          validationType={validationType}
          disabled={disabled}
          autoFocus={autoFocus}
          id={id}
          {...ariaProps}
        />
        <ComboboxList persistSelection aria-label={t('Select time')}>
          {timeOptionsFocused.map((option, index) => (
            <ComboboxOption {...option} key={index} />
          ))}
        </ComboboxList>
      </Combobox>
    )
  }
)

InputTimeSelectLayout.displayName = 'InputTimeSelectLayout'

export const InputTimeSelect = styled(InputTimeSelectLayout)`
  width: 100%;
`
