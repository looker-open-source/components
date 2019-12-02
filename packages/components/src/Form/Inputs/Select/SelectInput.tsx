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

import React, {
  FormEvent,
  forwardRef,
  useLayoutEffect,
  useRef,
  useContext,
  Ref,
} from 'react'
import { useForkedRef } from '../../../utils'
import { InputText, InputTextProps } from '../InputText'
import { makeHash, useBlur, useKeyDown, wrapEvent } from './helpers'
import { SelectContext } from './SelectContext'
import { SelectActionType, SelectState } from './state'

export interface SelectInputProps extends Omit<InputTextProps, 'value'> {
  /**
   * If true, when the user clicks inside the text box the current value will
   * be selected. Use this if the user is likely to delete all the text anyway
   * (like the URL bar in browsers).
   *
   * However, if the user is likely to want to tweak the value, leave this
   * false, like a google search--the user is likely wanting to edit their
   * search, not replace it completely.
   *
   * @see Docs https://reacttraining.com/reach-ui/combobox#comboboxinput-selectonclick
   */
  selectOnClick?: boolean
  /**
   * Determines if the value in the input changes or not as the user navigates
   * with the keyboard. If true, the value changes, if false the value doesn't
   * change.
   *
   * Set this to false when you don't really need the value from the input but
   * want to populate some other state (like the recipient selector in Gmail).
   * But if your input is more like a normal `<input type="text"/>`, then leave
   * the `true` default.
   *
   * @see Docs https://reacttraining.com/reach-ui/combobox#comboboxinput-autocomplete
   */
  autocomplete?: boolean
  /**
   * @see Docs https://reacttraining.com/reach-ui/combobox#comboboxinput-value
   */
  value?: string
}

export const SelectInput = forwardRef(function SelectInput(
  {
    // highlights all the text in the box on click when true
    selectOnClick = false,

    // updates the value in the input when navigating w/ the keyboard
    autocomplete = true,

    // wrapped events
    onClick,
    onChange,
    onKeyDown,
    onBlur,
    onFocus,

    // might be controlled
    value: controlledValue,
    ...props
  }: SelectInputProps,
  forwardedRef: Ref<HTMLInputElement>
) {
  const {
    data: { navigationValue, value, lastActionType },
    inputRef,
    state,
    transition,
    listboxId,
    autocompletePropRef,
    openOnFocus,
  } = useContext(SelectContext)

  const ref = useForkedRef<HTMLInputElement>(inputRef, forwardedRef)

  // Because we close the List on blur, we need to track if the blur is
  // caused by clicking inside the list, and if so, don't close the List.
  const selectOnClickRef = useRef(false)

  const handleKeyDown = useKeyDown()

  const handleBlur = useBlur()

  const isControlled = controlledValue !== undefined

  useLayoutEffect(() => {
    if (autocompletePropRef) autocompletePropRef.current = autocomplete
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [autocomplete])

  const handleValueChange = (value: string) => {
    if (value.trim() === '') {
      transition && transition(SelectActionType.CLEAR)
    } else {
      transition && transition(SelectActionType.CHANGE, { value })
    }
  }

  // If they are controlling the value we still need to do our transitions, so
  // we have this derived state to emulate onChange of the input as we receive
  // new `value`s ...[*]
  if (controlledValue && controlledValue !== value) {
    handleValueChange(controlledValue)
  }

  // [*]... and when controlled, we don't trigger handleValueChange as the user
  // types, instead the developer controls it with the normal input onChange
  // prop
  const handleChange = (event: FormEvent<HTMLInputElement>) => {
    if (!isControlled) {
      handleValueChange(event.currentTarget.value)
    }
  }

  const handleFocus = () => {
    if (selectOnClick) {
      selectOnClickRef.current = true
    }

    // If we select an option with click, useFocusManagement will focus the
    // input, in those cases we don't want to cause the menu to open back up,
    // so we guard behind these states
    if (openOnFocus && lastActionType !== SelectActionType.SELECT_WITH_CLICK) {
      transition && transition(SelectActionType.FOCUS)
    }
  }

  const handleClick = () => {
    if (selectOnClickRef.current) {
      selectOnClickRef.current = false
      inputRef && inputRef.current && inputRef.current.select()
    }
  }

  const inputValue =
    autocomplete &&
    (state === SelectState.NAVIGATING || state === SelectState.INTERACTING)
      ? // When idle, we don't have a navigationValue on ArrowUp/Down
        navigationValue || controlledValue || value
      : controlledValue || value

  return (
    <InputText
      {...props}
      data-reach-combobox-input=""
      ref={ref}
      value={inputValue}
      onClick={wrapEvent(handleClick, onClick)}
      onBlur={wrapEvent(handleBlur, onBlur)}
      onFocus={wrapEvent(handleFocus, onFocus)}
      onChange={wrapEvent(handleChange, onChange)}
      onKeyDown={wrapEvent(handleKeyDown, onKeyDown)}
      id={listboxId}
      aria-autocomplete="both"
      aria-activedescendant={
        navigationValue ? String(makeHash(navigationValue)) : undefined
      }
    />
  )
})

SelectInput.displayName = 'SelectInput'
