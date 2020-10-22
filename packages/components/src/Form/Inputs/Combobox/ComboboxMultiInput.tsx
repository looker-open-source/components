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

// Much of the following is pulled from https://github.com/reach/reach-ui
// because their work is fantastic (but is not in TypeScript)

import omit from 'lodash/omit'
import React, {
  forwardRef,
  useContext,
  Ref,
  useCallback,
  FormEvent,
} from 'react'
import styled from 'styled-components'
import { useForkedRef } from '../../../utils'
import {
  InputChips,
  InputChipsBase,
  InputChipsBaseProps,
  InputChipsCommonProps,
  InputChipsInputControlProps,
  InputChipsValidationProps,
  joinValues,
  splitInputValue,
} from '../InputChips'
import { ComboboxMultiContext } from './ComboboxContext'
import { ComboboxInputCommonProps, comboboxStyles } from './ComboboxInput'
import { getComboboxText, formatOptionAsString, parseOption } from './utils'
import { makeHash } from './utils/makeHash'
import {
  ComboboxActionType,
  ComboboxState,
  getOptionsFromValues,
} from './utils/state'
import { useInputEvents } from './utils/useInputEvents'
import { useInputPropRefs } from './utils/useInputPropRefs'

export interface ComboboxMultiInputProps
  extends Omit<InputChipsCommonProps, 'autoComplete'>,
    InputChipsValidationProps,
    ComboboxInputCommonProps,
    Partial<InputChipsInputControlProps> {
  onClear?: () => void
  /**
   * Allows inputting of values (whether found in options or not) via typing or pasting
   * Use validate, onValidationFail, and onDuplicate for validation on typed or pasted values
   * @default false
   */
  freeInput?: boolean
}

function parseInputValue(value: string) {
  try {
    const parsed = JSON.parse(value)
    if (Array.isArray(parsed)) {
      return parsed.map((option) =>
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
  const jsonReadyValues = selectedValues.map((value) => {
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
      readOnly = false,

      // wrapped events
      onClear,
      onInputChange,

      // might be controlled
      inputValue: controlledInputValue,

      // free form input
      freeInput = false,
      validate,
      onValidationFail,
      onDuplicate,

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

    // Need to determine whether the updated value come from change event on the input
    // or from a new value prop (controlled)
    const handleInputValueChange = useCallback(
      (value: string, event?: FormEvent<HTMLInputElement>) => {
        const action = event
          ? ComboboxActionType.CHANGE
          : ComboboxActionType.CHANGE_SILENT
        transition?.(action, { inputValue: value })
      },
      [transition]
    )

    // If they are controlling the value we still need to do our transitions, so
    // we have this derived state to emulate onChange of the input as we receive
    // new `value`s ...[*]
    if (
      controlledInputValue !== undefined &&
      contextInputValue &&
      controlledInputValue !== contextInputValue
    ) {
      handleInputValueChange(controlledInputValue)
    }

    const isControlled = controlledInputValue !== undefined
    // [*]... and when controlled, we don't trigger handleValueChange as the user
    // types, instead the developer controls it with the normal input onChange
    // prop
    const handleInputChange = useCallback(
      (value: string, event?: FormEvent<HTMLInputElement>) => {
        if (!isControlled) {
          handleInputValueChange(value, event)
        }
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
        onInputChange && onInputChange(value, event)
      },
      [handleInputChange, onInputChange]
    )

    const inputEvents = useInputEvents(props, ComboboxMultiContext)

    function formatChip(value: string) {
      const option = parseOption(value)
      return option.label || option.value
    }

    const commonProps: InputChipsBaseProps = {
      ...omit(rest, 'selectOnClick'),
      ...inputEvents,
      'aria-activedescendant': navigationOption
        ? String(makeHash(navigationOption ? navigationOption.value : ''))
        : undefined,
      'aria-autocomplete': 'both',
      autoComplete: 'off',
      formatChip,
      formatTextToCopy,
      id: `listbox-${id}`,
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

ComboboxMultiInputInternal.displayName = 'ComboboxMultiInputInternal'

export const ComboboxMultiInput = styled(ComboboxMultiInputInternal)`
  ${comboboxStyles}
  padding-right: 0;
`

ComboboxMultiInput.defaultProps = {
  width: '100%',
}
