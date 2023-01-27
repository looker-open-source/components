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

import type { FormEvent, Ref } from 'react'
import React, { forwardRef, useRef, useContext } from 'react'
import styled, { css } from 'styled-components'
import {
  useForkedRef,
  useSafeLayoutEffect,
  useWrapEvent,
} from '../../../../utils'
import { InputText } from '../../InputText'
import { AdvancedInputControls } from '../../AdvancedInputControls'
import { ComboboxContext } from '../ComboboxContext'
import type { ComboboxInputProps } from '../types'
import { getComboboxText } from '../utils/getComboboxText'
import { makeHash } from '../utils/makeHash'
import { ComboboxActionType, ComboboxState } from '../utils/state'
import { useInputEvents } from '../utils/useInputEvents'
import { useInputPropRefs } from '../utils/useInputPropRefs'

export const ComboboxInputInternal = forwardRef(
  (props: ComboboxInputProps, forwardedRef: Ref<HTMLInputElement>) => {
    const {
      // updates the value in the input when navigating w/ the keyboard
      autoComplete = true,
      disabled,
      freeInput,
      clearIconLabel,
      inputReadOnly = false,
      isClearable,
      // wrapped events
      onChange,
      noErrorIcon,
      readOnly = false,
      summary,
      validationType,
      // might be controlled
      value: controlledValue,
      ...rest
    } = props

    const {
      data: { navigationOption, option, inputValue: contextInputValue },
      onChange: contextOnChange,
      inputCallbackRef,
      inputElement,
      state,
      transition,
      id,
      isVisible,
    } = useContext(ComboboxContext)

    useInputPropRefs(props, ComboboxContext)

    const ref = useForkedRef<HTMLInputElement>(inputCallbackRef, forwardedRef)

    const isControlled = controlledValue !== undefined

    function handleClear() {
      contextOnChange && contextOnChange(undefined)
      transition && transition(ComboboxActionType.CLEAR)
      inputElement?.focus()
    }

    function handleValueChange(value: string) {
      transition && transition(ComboboxActionType.CHANGE, { inputValue: value })
    }

    // Need to determine whether the updated value come from change event on the input
    // or from a new value prop (controlled)
    const isInputting = useRef(false)
    // If they are controlling the value we still need to do our transitions, so
    // we have this derived state to emulate onChange of the input as we receive
    // new `value`s ...[*]
    useSafeLayoutEffect(() => {
      if (controlledValue !== undefined) {
        if (isInputting.current) {
          handleValueChange(controlledValue)
        } else {
          // this is most likely the initial value so we want to
          // update the value without transitioning to suggesting
          transition &&
            transition(ComboboxActionType.CHANGE_SILENT, {
              inputValue: controlledValue,
            })
        }
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [controlledValue])

    // [*]... and when controlled, we don't trigger handleValueChange as the user
    // types, instead the developer controls it with the normal input onChange
    // prop
    function handleChange(event: FormEvent<HTMLInputElement>) {
      isInputting.current = true
      if (!isControlled) {
        handleValueChange(event.currentTarget.value)
      }
      requestAnimationFrame(() => {
        isInputting.current = false
      })
    }

    let inputOption =
      contextInputValue !== undefined ? contextInputValue : option

    if (
      autoComplete &&
      (state === ComboboxState.NAVIGATING ||
        state === ComboboxState.INTERACTING)
    ) {
      // When idle, we don't have a navigationOption on ArrowUp/Down
      inputOption = navigationOption || option
    }
    const inputValue =
      controlledValue !== undefined
        ? controlledValue
        : getComboboxText(inputOption)

    const wrappedOnChange = useWrapEvent(handleChange, onChange)

    const inputEvents = useInputEvents(props, ComboboxContext)

    const { selectOnClick: _selectOnClick, ...restForInputText } = rest

    return (
      <InputText
        {...restForInputText}
        {...inputEvents}
        disabled={disabled}
        after={
          <AdvancedInputControls
            disabled={disabled}
            clearIconLabel={clearIconLabel}
            isVisibleOptions={isVisible}
            onClear={handleClear}
            showCaret={!freeInput}
            showClear={!!(isClearable && inputValue) && !disabled && !readOnly}
            summary={summary}
            errorIcon={!noErrorIcon && validationType === 'error'}
          />
        }
        ref={ref}
        value={inputValue}
        readOnly={inputReadOnly || readOnly}
        onChange={wrappedOnChange}
        id={`listbox-input-${id}`}
        autoComplete="off"
        aria-autocomplete="both"
        validationType={validationType}
        aria-activedescendant={
          navigationOption
            ? String(makeHash(navigationOption ? navigationOption.value : ''))
            : undefined
        }
      />
    )
  }
)

export const comboboxStyles = css<{ inputReadOnly?: boolean }>`
  ${({ inputReadOnly }) =>
    inputReadOnly
      ? css`
          cursor: default;
          input {
            cursor: default;
          }
        `
      : ''}
`

export const ComboboxInput = styled(ComboboxInputInternal).attrs(
  ({ width = '100%' }) => ({
    width,
  })
)`
  ${comboboxStyles}
`
