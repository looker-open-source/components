/*

 MIT License

 Copyright (c) 2019 Looker Data Sciences, Inc.

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

import isEqual from 'lodash/isEqual'
import React, { forwardRef, useRef, useContext, Ref, useCallback } from 'react'
import styled from 'styled-components'
import { useForkedRef, useWrapEvent } from '../../../utils'
import {
  InputChipsBase,
  InputChipsCommonProps,
  InputChipsInputValueControlProps,
} from '../InputChips'
import { ComboboxMultiContext } from './ComboboxContext'
import { ComboboxInputPropsCommon, comboboxStyles } from './ComboboxInput'
import { getComboboxText } from './utils/getComboboxText'
import { makeHash } from './utils/makeHash'
import { ComboboxActionType, ComboboxState } from './utils/state'
import { useInputEvents } from './utils/useInputEvents'
import { useInputPropRefs } from './utils/useInputPropRefs'

export interface ComboboxMultiInputProps
  extends Omit<InputChipsCommonProps, 'autoComplete'>,
    Partial<InputChipsInputValueControlProps>,
    ComboboxInputPropsCommon {}

export const ComboboxMultiInputInternal = forwardRef(
  (props: ComboboxMultiInputProps, forwardedRef: Ref<HTMLInputElement>) => {
    const {
      // updates the value in the input when navigating w/ the keyboard
      autoComplete = true,
      readOnly = false,

      // wrapped events
      onClear,
      onChange,
      onInputChange,

      // might be controlled
      values: controlledValues,
      inputValue: controlledInputValue,
      ...rest
    } = props

    const {
      data: {
        navigationOption,
        options,
        inputValue: contextInputValue,
        inputValues: contextInputValues,
      },
      onChange: contextOnChange,
      inputCallbackRef,
      state,
      transition,
      id,
    } = useContext(ComboboxMultiContext)

    useInputPropRefs(props, ComboboxMultiContext)

    function handleClear() {
      transition && transition(ComboboxActionType.CLEAR)
      contextOnChange && contextOnChange([])
    }

    const handleInputValueChange = useCallback(
      (value: string) => {
        transition &&
          transition(ComboboxActionType.CHANGE, { inputValue: value })
      },
      [transition]
    )

    const handleValuesChange = useCallback(
      (values: string[]) => {
        transition &&
          transition(ComboboxActionType.ENTER_VALUES, { inputValues: values })
      },
      [transition]
    )

    // Need to determine whether the updated value come from change event on the input
    // or from a new value prop (controlled)
    const isInputting = useRef(false)
    // If they are controlling the value we still need to do our transitions, so
    // we have this derived state to emulate onChange of the input as we receive
    // new `value`s ...[*]
    if (
      controlledValues !== undefined &&
      contextInputValues &&
      !isEqual(controlledValues, contextInputValues)
    ) {
      if (isInputting.current) {
        handleValuesChange(controlledValues)
      } else {
        // this is most likely the initial value so we want to
        // update the value without transitioning to suggesting
        transition &&
          transition(ComboboxActionType.CHANGE_SILENT, {
            inputValues: controlledValues,
          })
      }
    }
    if (
      controlledInputValue !== undefined &&
      contextInputValue &&
      controlledInputValue !== contextInputValue
    ) {
      if (isInputting.current) {
        handleInputValueChange(controlledInputValue)
      } else {
        // this is most likely the initial value so we want to
        // update the value without transitioning to suggesting
        transition &&
          transition(ComboboxActionType.CHANGE_SILENT, {
            inputValue: controlledInputValue,
          })
      }
    }

    const isControlled = controlledValues !== undefined
    // [*]... and when controlled, we don't trigger handleValueChange as the user
    // types, instead the developer controls it with the normal input onChange
    // prop
    const handleInputChange = useCallback(
      (value: string) => {
        isInputting.current = true
        if (!isControlled) {
          handleInputValueChange(value)
        }
        requestAnimationFrame(() => {
          isInputting.current = false
        })
      },
      [handleInputValueChange, isControlled]
    )

    // called when user removes chips from the input
    const handleChange = useCallback(
      (values: string[]) => {
        isInputting.current = true
        if (!isControlled) {
          handleValuesChange(values)
        }
        requestAnimationFrame(() => {
          isInputting.current = false
        })
      },
      [handleValuesChange, isControlled]
    )

    const inputValues =
      contextInputValues !== undefined
        ? contextInputValues
        : options.map(option => getComboboxText(option))

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

    const wrappedOnClear = useWrapEvent(handleClear, onClear)
    const wrappedOnChange = useCallback(
      (values: string[]) => {
        handleChange(values)
        onChange && onChange(values)
      },
      [handleChange, onChange]
    )
    const wrappedOnInputChange = useCallback(
      (value: string) => {
        handleInputChange(value)
        onInputChange && onInputChange(value)
      },
      [handleInputChange, onInputChange]
    )

    const inputEvents = useInputEvents(props, ComboboxMultiContext)

    const ref = useForkedRef<HTMLInputElement>(inputCallbackRef, forwardedRef)

    return (
      <InputChipsBase
        {...rest}
        {...inputEvents}
        ref={ref}
        readOnly={readOnly}
        values={inputValues}
        onChange={wrappedOnChange}
        onClear={wrappedOnClear}
        inputValue={inputValue}
        onInputChange={wrappedOnInputChange}
        id={`listbox-${id}`}
        autoComplete="off"
        aria-autocomplete="both"
        aria-activedescendant={
          navigationOption
            ? String(makeHash(navigationOption ? navigationOption.value : ''))
            : undefined
        }
      />
    )
  }
)

ComboboxMultiInputInternal.displayName = 'ComboboxMultiInputInternal'

export const ComboboxMultiInput = styled(ComboboxMultiInputInternal)`
  ${comboboxStyles}
`

ComboboxMultiInput.defaultProps = {
  width: '100%',
}
