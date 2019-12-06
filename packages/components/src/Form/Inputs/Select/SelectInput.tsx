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
  useCallback,
} from 'react'
import styled from 'styled-components'
import { useForkedRef, useWrapEvent } from '../../../utils'
import { InputText, InputTextProps } from '../InputText'
import { makeHash, useBlur, useKeyDown } from './helpers'
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
  autocomplete?: boolean
  value?: string
}

export const SelectInputInternal = forwardRef(function SelectInput(
  {
    // highlights all the text in the box on click when true
    selectOnClick = false,

    // updates the value in the input when navigating w/ the keyboard
    autocomplete = true,
    readOnly = false,

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
    data: { navigationOption, option, lastActionType },
    inputRef,
    state,
    transition,
    listboxId,
    autocompletePropRef,
    readOnlyPropRef,
    openOnFocus,
  } = useContext(SelectContext)

  const ref = useForkedRef<HTMLInputElement>(inputRef, forwardedRef)

  // Because we close the List on blur, we need to track if the blur is
  // caused by clicking inside the list, and if so, don't close the List.
  const selectOnClickRef = useRef(false)

  const handleKeyDown = useKeyDown()

  const handleBlur = useBlur()

  const isControlled = controlledValue !== undefined

  // Need to determine whether the updated value come from change event on the input
  // or from a new value prop (controlled)
  const isInputting = useRef(false)

  useLayoutEffect(() => {
    if (autocompletePropRef) autocompletePropRef.current = autocomplete
    if (readOnlyPropRef) readOnlyPropRef.current = readOnly
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [autocomplete, readOnly])

  const handleValueChange = useCallback(
    (value: string) => {
      if (value.trim() === '') {
        transition && transition(SelectActionType.CLEAR)
      } else {
        transition && transition(SelectActionType.CHANGE, { option: { value } })
      }
    },
    [transition]
  )

  // If they are controlling the value we still need to do our transitions, so
  // we have this derived state to emulate onChange of the input as we receive
  // new `value`s ...[*]
  if (controlledValue && option && controlledValue !== option.value) {
    if (!isInputting.current) {
      // this is most likely the initial value so we want to
      // update the value without transitioning to suggesting
      transition &&
        transition(SelectActionType.CHANGE_SILENT, {
          option: { value: controlledValue },
        })
    } else {
      handleValueChange(controlledValue)
    }
  }

  // [*]... and when controlled, we don't trigger handleValueChange as the user
  // types, instead the developer controls it with the normal input onChange
  // prop
  const handleChange = useCallback(
    (event: FormEvent<HTMLInputElement>) => {
      isInputting.current = true
      if (!isControlled) {
        handleValueChange(event.currentTarget.value)
      }
      setTimeout(() => {
        isInputting.current = false
      }, 0)
    },
    [isInputting, isControlled, handleValueChange]
  )

  const handleFocus = useCallback(() => {
    if (selectOnClick) {
      selectOnClickRef.current = true
    }

    // If we select an option with click, useFocusManagement will focus the
    // input, in those cases we don't want to cause the menu to open back up,
    // so we guard behind these states
    if (openOnFocus && lastActionType !== SelectActionType.SELECT_WITH_CLICK) {
      transition && transition(SelectActionType.FOCUS)
    }
  }, [openOnFocus, lastActionType, selectOnClick, transition])

  const handleClick = useCallback(() => {
    if (selectOnClickRef.current) {
      selectOnClickRef.current = false
      inputRef && inputRef.current && inputRef.current.select()
    }
  }, [selectOnClickRef, inputRef])

  const inputOption =
    autocomplete &&
    (state === SelectState.NAVIGATING || state === SelectState.INTERACTING)
      ? // When idle, we don't have a navigationOption on ArrowUp/Down
        navigationOption || controlledValue || option
      : controlledValue || option
  const inputValue =
    typeof inputOption === 'string'
      ? inputOption
      : inputOption && inputOption.value

  const wrappedOnClick = useWrapEvent(handleClick, onClick)
  const wrappedOnBlur = useWrapEvent(handleBlur, onBlur)
  const wrappedOnFocus = useWrapEvent(handleFocus, onFocus)
  const wrappedOnChange = useWrapEvent(handleChange, onChange)
  const wrappedOnKeyDown = useWrapEvent(handleKeyDown, onKeyDown)

  return (
    <InputText
      {...props}
      ref={ref}
      value={inputValue}
      readOnly={readOnly}
      onClick={wrappedOnClick}
      onBlur={wrappedOnBlur}
      onFocus={wrappedOnFocus}
      onChange={wrappedOnChange}
      onKeyDown={wrappedOnKeyDown}
      id={listboxId}
      aria-autocomplete="both"
      aria-activedescendant={
        navigationOption
          ? String(makeHash(navigationOption ? navigationOption.value : ''))
          : undefined
      }
    />
  )
})

SelectInputInternal.displayName = 'SelectInputInternal'

const indicatorRaw = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.41 8L12 12.58L16.59 8L18 9.41L12 15.41L6 9.41L7.41 8Z" fill="#1C2125"/>
</svg>`
const indicatorSize = '1rem'
const indicatorPadding = '.25rem'
const indicatorPrefix = 'data:image/svg+xml;base64,'
export const selectIndicatorBG = (color: string) =>
  typeof window !== 'undefined' &&
  `url('${indicatorPrefix}${window.btoa(
    indicatorRaw.replace('#1C2125', color)
  )}')`

export const SelectInput = styled(SelectInputInternal)`
  background-image: ${props =>
    selectIndicatorBG(props.theme.colors.palette.charcoal500)};
  background-repeat: no-repeat, repeat;
  background-position: right ${indicatorPadding} center, 0 0;
  background-size: ${indicatorSize}, 100%;
  padding-right: calc(2 * ${indicatorPadding} + ${indicatorSize});
`

SelectInput.defaultProps = {
  width: '100%',
}
