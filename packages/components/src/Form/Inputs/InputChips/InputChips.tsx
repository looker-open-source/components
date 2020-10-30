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
  forwardRef,
  ClipboardEvent,
  KeyboardEvent,
  Ref,
  useRef,
  useState,
  FormEvent,
} from 'react'
import styled from 'styled-components'

import { useControlWarn, useWrapEvent } from '../../../utils'
import {
  InputChipsBase,
  InputChipsCommonProps,
  InputChipsControlProps,
  InputChipsInputControlProps,
} from './InputChipsBase'

/**
 * InputChips is a component that appears to be a regular text input,
 * but also allows (validated) user inputs to be stored as 'chips' (see the Chip element)
 */

export interface InputChipsValidationProps {
  /**
   * for checking each value before converting to a chip
   */
  validate?: (value: string) => boolean
  /**
   * callback when values fail validation
   */
  onValidationFail?: (values: string[]) => void
  /**
   * callback when values are duplicates
   */
  onDuplicate?: (values: string[]) => void
}

export function splitInputValue(inputValue: string) {
  // Preserve escaped commas & tabs using these strings produced by a random string generator
  const commaKey = '0UX1bJKsFBFQonIIXq9oyeV40ITHwtew'
  const tabKey = 'heF6X4qMBtIti8c8U9nMhskYOQUQiXqx'
  const removedEscapes = inputValue
    .replace(/\\,/g, commaKey)
    .replace(/\\\t/g, tabKey)

  // Values may be separated by ',' '\t', '\n' and ' '
  const splitRegexp = `[,\\t\\n\\r]+`
  return removedEscapes
    .split(new RegExp(splitRegexp))
    .map((value) =>
      value
        .replace(new RegExp(commaKey, 'g'), ',')
        .replace(new RegExp(tabKey, 'g'), '\t')
    )
}

export interface InputChipsProps
  extends Omit<InputChipsCommonProps, 'onValidationFail'>,
    InputChipsControlProps,
    Partial<InputChipsInputControlProps>,
    InputChipsValidationProps {
  /**
   * How to convert a typed or pasted string into an array of values
   * @default splitInputValue
   */
  parseInputValue?: (value: string) => string[]
}

export function validateValues(
  newValues: string[],
  currentValues: string[],
  validate?: (value: string) => boolean
) {
  const duplicateValues: string[] = []
  const invalidValues: string[] = []
  const unusedValues: string[] = []
  const validValues: string[] = []

  newValues.forEach((val: string) => {
    const trimmedValue = val.trim()
    if (trimmedValue === '') return
    // Make sure each value is valid and doesn't already exist
    if (validate && !validate(trimmedValue)) {
      unusedValues.push(trimmedValue)
      return invalidValues.push(trimmedValue)
    } else if (currentValues && currentValues.includes(trimmedValue)) {
      unusedValues.push(trimmedValue)
      return duplicateValues.push(trimmedValue)
    } else {
      return validValues.push(trimmedValue)
    }
  })

  return { duplicateValues, invalidValues, unusedValues, validValues }
}

export const InputChipsInternal = forwardRef(
  (
    {
      values,
      onChange,
      inputValue: controlledInputValue,
      onInputChange,
      parseInputValue = splitInputValue,
      validate,
      onValidationFail,
      onDuplicate,

      // event handlers needing to be wrapped
      onBlur,
      onKeyDown,
      onPaste,

      ...props
    }: InputChipsProps,
    ref: Ref<HTMLInputElement>
  ) => {
    const isControlled = useControlWarn({
      controllingProps: ['inputValue', 'onInputChange'],
      isControlledCheck: () =>
        controlledInputValue !== undefined && onInputChange !== undefined,
      name: 'InputChips',
    })

    const [uncontrolledValue, setUncontrolledValue] = useState('')
    const inputValue = isControlled
      ? controlledInputValue || ''
      : uncontrolledValue

    const setInputValue = (
      val: string,
      event?: FormEvent<HTMLInputElement>
    ) => {
      if (!isControlled) {
        setUncontrolledValue(val)
      }
      if (val !== inputValue) {
        onInputChange && onInputChange(val, event)
      }
    }

    function updateValues(newInputValue?: string) {
      const inputValues = parseInputValue(newInputValue || inputValue)
      const {
        duplicateValues,
        invalidValues,
        unusedValues,
        validValues,
      } = validateValues(inputValues, values, validate)

      // Save valid values and keep invalid ones in the input
      const updatedInputValue = unusedValues.join(', ')
      const updatedValues = validValues.length && [...values, ...validValues]
      if (updatedValues) {
        onChange(updatedValues)
      }

      if (invalidValues.length > 0) {
        onValidationFail && onValidationFail(invalidValues)
      }
      if (duplicateValues.length > 0) {
        onDuplicate && onDuplicate(duplicateValues)
      }

      setInputValue(updatedInputValue)
    }

    function handleBlur() {
      updateValues()
    }

    function handleKeyDown(e: KeyboardEvent<HTMLInputElement>) {
      if (e.key === 'Enter') {
        // Don't submit a form if there is one
        e.preventDefault()
        // Update values when the user hits return
        updateValues()
      }
    }

    const pastedValue = useRef<string | null>()
    function handlePaste(e: ClipboardEvent<HTMLInputElement>) {
      // Save the pasted value to detect newlines before the browser strips them
      pastedValue.current = e.clipboardData.getData('Text')
    }

    function handleInputChange(
      value: string,
      event?: FormEvent<HTMLInputElement>
    ) {
      // If the last character is a comma, update the values
      // Or, if the user pastes content, we assume that the final value is complete
      // even if there's no comma at the end
      if (pastedValue.current || value.endsWith(',')) {
        // Use the pasted value if there is one
        // (before newlines are stripped by the browser)
        updateValues(pastedValue.current || value)
        pastedValue.current = null
      } else {
        setInputValue(value, event)
      }
    }

    const wrappedEvents = {
      onBlur: useWrapEvent(handleBlur, onBlur),
      onKeyDown: useWrapEvent(handleKeyDown, onKeyDown),
      onPaste: useWrapEvent(handlePaste, onPaste),
    }

    return (
      <InputChipsBase
        ref={ref}
        values={values}
        onChange={onChange}
        inputValue={inputValue}
        onInputChange={handleInputChange}
        {...wrappedEvents}
        {...props}
      />
    )
  }
)

InputChipsInternal.displayName = 'InputChipsInternal'

export const InputChips = styled(InputChipsInternal)``
