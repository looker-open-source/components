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

// Much of the following is pulled from https://github.com/reach/reach-ui
// because their work is fantastic (but is not in TypeScript)

import type { Ref, FormEvent } from 'react'
import React, {
  forwardRef,
  useContext,
  useCallback,
  useEffect,
  useRef,
} from 'react'
import styled from 'styled-components'
import { useForkedRef } from '../../../../utils'
import type { InputChipsBaseProps } from '../../InputChips'
import {
  InputChips,
  InputChipsBase,
  joinValues,
  splitInputValue,
} from '../../InputChips'
import { ComboboxMultiContext } from '../ComboboxContext'
import { comboboxStyles } from '../ComboboxInput'
import type { ComboboxMultiInputProps } from '../types'
import { getComboboxText, formatOptionAsString, parseOption } from '../utils'
import { makeHash } from '../utils/makeHash'
import {
  ComboboxActionType,
  ComboboxState,
  getOptionsFromValues,
} from '../utils/state'
import { useInputEvents } from '../utils/useInputEvents'
import { useInputPropRefs } from '../utils/useInputPropRefs'

function parseInputValue(value: string) {
  try {
    const parsed = JSON.parse(value)
    if (Array.isArray(parsed)) {
      return parsed.map(option =>
        typeof option === 'string' ? option : JSON.stringify(option)
      )
    }
    return splitInputValue(value)
  } catch (e) {
    return splitInputValue(value)
  }
}

function formatTextToCopy(selectedValues: string[]) {
  let noJson = true
  const jsonReadyValues = selectedValues.map(value => {
    try {
      JSON.parse(value)
      noJson = false
      return value
    } catch (e) {
      return `"${value}"`
    }
  })
  if (noJson) {
    return joinValues(selectedValues)
  }
  // Make it a JSON array string, so it can be parsed via JSON.parse and not need to escape commas
  return `[${jsonReadyValues.join(',')}]`
}

export const ComboboxMultiInputInternal = forwardRef(
  (props: ComboboxMultiInputProps, forwardedRef: Ref<HTMLInputElement>) => {
    const {
      // updates the value in the input when navigating w/ the keyboard
      autoComplete = true,
      inputReadOnly = false,
      readOnly = false,

      // wrapped events
      onClear,
      onInputChange,

      // might be controlled
      inputValue: controlledInputValue,

      // free form input
      freeInput = false,
      validate,
      formatInputValue,
      onValidationFail,
      onDuplicate,

      // localization
      chipIconLabel,
      clearIconLabel,

      ...rest
    } = props

    const {
      data: { navigationOption, options, inputValue: contextInputValue },
      onChange: contextOnChange,
      inputCallbackRef,
      state,
      transition,
      id,
      isVisible,
    } = useContext(ComboboxMultiContext)

    useInputPropRefs(props, ComboboxMultiContext)

    function handleClear() {
      transition && transition(ComboboxActionType.CLEAR)
      contextOnChange && contextOnChange([])
      onClear && onClear()
    }

    // if freeInput = false, only called when user removes chips from the input
    // if freeInput = true, this is called when user inputs values via separators (enter key, comma, tab char, newline)
    // or, if pasting chips from another ComboboxMultiInput with options where label != value, via JSON
    function handleChange(values: string[]) {
      transition &&
        transition(ComboboxActionType.CHANGE_VALUES, { inputValues: values })

      const newOptions = getOptionsFromValues(options, values)
      contextOnChange && contextOnChange(newOptions)
    }

    // Whether controlled or uncontrolled, we need to determine if the inputValue changed
    // from the user typing in the input - which should open the list, CHANGE - or otherwise
    // (input being cleared via clear button or value tokenization, external initial state, etc) -
    // which should not open the list, CHANGE_SILENT
    const isInputting = useRef(false)

    const handleInputValueChange = useCallback(
      (value: string) => {
        const action = isInputting.current
          ? ComboboxActionType.CHANGE
          : ComboboxActionType.CHANGE_SILENT
        transition?.(action, { inputValue: value })
      },
      [transition]
    )

    // Use latestInputValueRef to track whether the contextInputValue change
    // originated in this component. If it didn't (e.g. an option was selected
    // or the list was closed) call onInputChange b/c it has not been called yet
    const latestInputValueRef = useRef<string>()
    useEffect(() => {
      if (
        contextInputValue !== undefined &&
        contextInputValue !== latestInputValueRef.current
      ) {
        onInputChange?.(contextInputValue)
        latestInputValueRef.current = contextInputValue
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [contextInputValue])

    // If they are controlling the input value we still need to do transitions
    // and update the context inputValue state
    useEffect(() => {
      if (controlledInputValue !== undefined) {
        handleInputValueChange(controlledInputValue)
        latestInputValueRef.current = controlledInputValue
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [controlledInputValue])

    const isControlled = controlledInputValue !== undefined
    // [*]... and when controlled, we don't trigger handleValueChange as the user
    // types, instead the developer controls it with the onInputChange prop
    const handleInputChange = useCallback(
      (value: string, event?: FormEvent<HTMLInputElement>) => {
        isInputting.current = event !== undefined
        if (!isControlled) {
          handleInputValueChange(value)
        }
        requestAnimationFrame(() => {
          isInputting.current = false
        })
      },
      [handleInputValueChange, isControlled]
    )

    const inputValues = options.map(formatOptionAsString)

    let inputValue = contextInputValue || ''
    if (
      autoComplete &&
      (state === ComboboxState.NAVIGATING ||
        state === ComboboxState.INTERACTING) &&
      navigationOption
    ) {
      // When idle, we don't have a navigationOption on ArrowUp/Down
      inputValue = getComboboxText(navigationOption)
    }

    const wrappedOnInputChange = useCallback(
      (value: string, event?: FormEvent<HTMLInputElement>) => {
        handleInputChange(value, event)
        onInputChange?.(value, event)
        latestInputValueRef.current = value
      },
      [handleInputChange, onInputChange]
    )

    const inputEvents = useInputEvents(props, ComboboxMultiContext)

    function formatChip(value: string) {
      const option = parseOption(value)
      return option.label || option.value
    }

    const { selectOnClick: _selectOnClick, ...restForCommonProps } = rest

    const commonProps: InputChipsBaseProps = {
      ...restForCommonProps,
      ...inputEvents,
      'aria-activedescendant': navigationOption
        ? String(makeHash(navigationOption ? navigationOption.value : ''))
        : undefined,
      'aria-autocomplete': 'both',
      autoComplete: 'off',
      chipIconLabel,
      clearIconLabel,
      formatChip,
      formatTextToCopy,
      id: `listbox-input-${id}`,
      inputReadOnly,
      inputValue,
      isVisibleOptions: isVisible,
      onChange: handleChange,
      onClear: handleClear,
      onInputChange: wrappedOnInputChange,
      readOnly,
      showCaret: true,
      values: inputValues,
    }

    const ref = useForkedRef<HTMLInputElement>(inputCallbackRef, forwardedRef)

    return freeInput ? (
      <InputChips
        {...commonProps}
        validate={validate}
        formatInputValue={formatInputValue}
        onValidationFail={onValidationFail}
        onDuplicate={onDuplicate}
        parseInputValue={parseInputValue}
        ref={ref}
      />
    ) : (
      <InputChipsBase {...commonProps} ref={ref} />
    )
  }
)

export const ComboboxMultiInput = styled(ComboboxMultiInputInternal).attrs(
  ({ width = '100%' }) => ({ width })
)`
  ${comboboxStyles}
  padding-right: 0;
`
