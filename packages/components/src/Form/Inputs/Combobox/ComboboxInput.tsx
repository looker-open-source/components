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
import React, { FormEvent, forwardRef, useRef, useContext, Ref } from 'react'
import styled, { css } from 'styled-components'
import { useForkedRef, useWrapEvent } from '../../../utils'
import { InputText, InputTextProps } from '../InputText'
import { AdvancedInputControls } from '../AdvancedInputControls'
import { ComboboxContext } from './ComboboxContext'
import { getComboboxText } from './utils/getComboboxText'
import { makeHash } from './utils/makeHash'
import { ComboboxActionType, ComboboxState } from './utils/state'
import { useInputEvents } from './utils/useInputEvents'
import { useInputPropRefs } from './utils/useInputPropRefs'

export interface ComboboxInputCommonProps {
  /**
   * If true, when the user clicks inside the text box the current value will
   * be selected. Use this if the user is likely to delete all the text anyway
   * (like the URL bar in browsers).
   *
   * However, if the user is likely to want to tweak the value, leave this
   * false, like a google search--the user is likely wanting to edit their
   * search, not replace it completely.
   */
  selectOnClick?: boolean
  /**
   * Determines if the value in the input changes or not as the user navigates
   * with the keyboard. If true, the value changes, if false the value doesn't
   * change.
   *
   * Set this to false when you don't really need the value from the input but
   * want to populate some other state (like the recipient selector in an email client).
   * But if your input is more like a normal `<input type="text"/>`, then leave
   * the `true` default.
   */
  autoComplete?: boolean
  isClearable?: boolean
}

export interface ComboboxInputProps
  extends Omit<InputTextProps, 'autoComplete' | 'value' | 'defaultValue'>,
    ComboboxInputCommonProps {
  value?: string
  defaultValue?: string
}

export const ComboboxInputInternal = forwardRef(
  (props: ComboboxInputProps, forwardedRef: Ref<HTMLInputElement>) => {
    const {
      // updates the value in the input when navigating w/ the keyboard
      autoComplete = true,
      readOnly = false,
      // wrapped events
      onChange,
      // might be controlled
      value: controlledValue,
      validationType,
      disabled,
      isClearable,
      ...rest
    } = props

    const {
      data: { navigationOption, option, inputValue: contextInputValue },
      onChange: contextOnChange,
      inputCallbackRef,
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
    if (
      controlledValue !== undefined &&
      contextInputValue &&
      controlledValue !== contextInputValue
    ) {
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
      inputOption =
        navigationOption ||
        (controlledValue !== undefined ? controlledValue : option)
    }
    const inputValue = getComboboxText(inputOption)

    const wrappedOnChange = useWrapEvent(handleChange, onChange)

    const inputEvents = useInputEvents(props, ComboboxContext)

    return (
      <InputText
        {...omit(rest, 'selectOnClick')}
        {...inputEvents}
        disabled={disabled}
        after={
          <AdvancedInputControls
            validationType={validationType}
            onClear={handleClear}
            isVisibleOptions={isVisible}
            disabled={disabled}
            renderSearchControls={!!(isClearable && inputValue)}
          />
        }
        ref={ref}
        value={inputValue}
        readOnly={readOnly}
        onChange={wrappedOnChange}
        id={`listbox-${id}`}
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

ComboboxInputInternal.displayName = 'ComboboxInputInternal'

export const comboboxStyles = css<{ disabled?: boolean; readOnly?: boolean }>`
  ${({ readOnly }) =>
    readOnly
      ? css`
          cursor: default;
          input {
            cursor: default;
          }
        `
      : ''}
`

export const ComboboxInput = styled(ComboboxInputInternal)`
  ${comboboxStyles}
`

ComboboxInput.defaultProps = {
  width: '100%',
}
