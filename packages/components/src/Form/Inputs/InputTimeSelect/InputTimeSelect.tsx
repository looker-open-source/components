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
  KeyboardEvent,
  FC,
  useState,
  useEffect,
  SyntheticEvent,
} from 'react'
import styled from 'styled-components'
import reduce from 'lodash/reduce'
import map from 'lodash/map'
import isFunction from 'lodash/isFunction'
import find from 'lodash/find'
import trim from 'lodash/trim'
import last from 'lodash/last'
import head from 'lodash/head'
import sortedIndex from 'lodash/sortedIndex'
import { BorderProps, SpaceProps } from '@looker/design-tokens'
import {
  Combobox,
  ComboboxInput,
  ComboboxList,
  ComboboxOption,
  ComboboxOptionObject,
} from '../Combobox'
import { ComboboxCallback, MaybeComboboxOptionObject } from '../Combobox/types'
import { ValidationType } from '../../ValidationMessage'
import { useReadOnlyWarn } from '../../../utils'
import {
  formatTimeString,
  parseBase10Int,
  isValidTime,
  TimeFormats,
} from '../utils'

type intervals = 5 | 10 | 15 | 30

export interface InputTimeSelectProps extends SpaceProps, BorderProps {
  format?: TimeFormats
  interval?: intervals
  defaultValue?: string
  value?: string
  onChange?: (val?: string) => void
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

// take in a shorthand string label ('2pm') and return a formatted object
// e.g. {label: '02:00 pm', value: '14:00'}
const createOptionFromLabel = (format: TimeFormats, label: string) => {
  const period = label.toLowerCase().includes('p') ? 'pm' : 'am'
  const numericTime = label.replace(/[apm]/gi, '')
  const [hour = 0, minute = 0] = numericTime.split(':').map(parseBase10Int)
  const hr24 = hour + (period === 'pm' ? 12 : 0)
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
    const option = find(options, { value: value })
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
    return find(options, (o) => {
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
    return map(options, (option) =>
      matchClosestMinute(interval, selectedOption.value) === option.value
        ? { ...option, scrollIntoView: true }
        : option
    )
  }

  // CASE 2: scroll current time into view
  const now = matchClosestMinute(interval)
  return map(options, (option) =>
    option.value === now ? { ...option, scrollIntoView: true } : option
  )
}

export const InputTimeSelect: FC<InputTimeSelectProps> = ({
  interval = 15,
  format = '12h',
  onChange,
  value = '',
  defaultValue,
}) => {
  useReadOnlyWarn('InputTimeSelect', value, onChange)
  const valueProp = value || defaultValue
  if (!isValidTime(valueProp)) {
    // eslint-disable-next-line no-console
    console.error(
      `Invalid time ("${valueProp}") passed to <InputTimeSelect />. Value should be formatted as a 24-hour string (e.g. value="02:00" or value="23:15").`
    )
  }

  const timeOptions = generateTimes(format, interval)

  const [selectedOption, setSelectedOption] = useState<
    MaybeComboboxOptionObject
  >()

  const [inputTextValue, setInputTextValue] = useState('')

  useEffect(() => {
    // controlled component behavior: update state when value prop changes
    setSelectedOption(
      matchStringValueToOption(timeOptions, format, value || defaultValue)
    )
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value])

  const handleChange: ComboboxCallback<MaybeComboboxOptionObject> = (
    newSelectedOption: MaybeComboboxOptionObject
  ) => {
    setSelectedOption(newSelectedOption)
    const newValue = newSelectedOption ? newSelectedOption.value : undefined
    if (isFunction(onChange) && isValidTime(newValue)) {
      onChange(newValue)
    }
  }

  const handleTextInputChange = (e: SyntheticEvent) => {
    setInputTextValue((e.target as HTMLInputElement).value)
  }

  const handleTextInputBlur = () => {
    setInputTextValue('')
  }

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      if (inputTextValue.length) {
        // allow entering shortcuts like `2pm` to select `02:00 pm` on enter
        const option = createOptionFromLabel(format, inputTextValue)
        handleChange(option)
      }
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

  return (
    <InputTimeSelectWrapper>
      <Combobox value={selectedOption} onChange={handleChange}>
        <ComboboxInput
          placeholder="Select time"
          onChange={handleTextInputChange}
          onBlur={handleTextInputBlur}
          onKeyDown={handleKeyDown}
          autoComplete={false}
        />
        <ComboboxList persistSelection>
          {timeOptionsFocused.map((option, index) => (
            <ComboboxOption {...option} key={index} />
          ))}
        </ComboboxList>
      </Combobox>
    </InputTimeSelectWrapper>
  )
}

const InputTimeSelectWrapper = styled.div`
  display: inline-block;
`
