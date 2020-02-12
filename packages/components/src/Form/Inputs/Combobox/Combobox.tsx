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

import React, { forwardRef, useRef, useState, Ref, useEffect } from 'react'
import styled from 'styled-components'
import { useID, useCallbackRef, useForkedRef } from '../../../utils'
import { Box, BoxProps } from '../../../Layout/Box'
import { useFocusManagement } from './helpers'
import { useReducerMachine, ComboboxActionType, ComboboxState } from './state'
import { ComboboxContext, defaultData } from './ComboboxContext'
import { ComboboxOptionObject, getComboboxText } from './ComboboxOption'

const visibleStates = [
  ComboboxState.SUGGESTING,
  ComboboxState.NAVIGATING,
  ComboboxState.INTERACTING,
]

export const getIsVisible = (state: ComboboxState) =>
  visibleStates.includes(state)

export type OnComboboxChange = (option?: ComboboxOptionObject) => void

export function useControlledCombobox(initialValue = '') {
  const [value, setOption] = useState(initialValue)
  function handleChange(option: ComboboxOptionObject) {
    setOption(option.value)
  }
  function handleInputChange(e: React.FormEvent<HTMLInputElement>) {
    setOption(e.currentTarget.value)
  }
  return {
    inputProps: { onChange: handleInputChange },
    onChange: handleChange,
    value,
  }
}

export interface ComboboxProps
  extends Omit<
    BoxProps,
    'size' | 'readOnly' | 'onChange' | 'value' | 'defaultValue'
  > {
  /**
   * If true, the popover opens when focus is on the text box.
   */
  openOnFocus?: boolean
  /**
   * Called when an option is selected (not when user types – use ComboboxInput.onChange for that)
   */
  onChange?: OnComboboxChange
  /**
   * The current option (controlled)
   */
  value?: ComboboxOptionObject
  /**
   * The initial option (uncontrolled)
   */
  defaultValue?: ComboboxOptionObject
  /**
   * Called when the suggestion list closes, whether via blur, escape or selection
   */
  onClose?: (option?: ComboboxOptionObject) => void
  /**
   * Called when the suggestion list opens, whether via typing, click, or focus
   */
  onOpen?: (option?: ComboboxOptionObject) => void
}

export const ComboboxInternal = forwardRef(function Combobox(
  {
    // opens the list when the input receives focused (but only if there are
    // items in the list)
    openOnFocus = false,

    children,
    onChange,
    value,
    defaultValue,
    onClose,
    onOpen,

    ...rest
  }: ComboboxProps,
  forwardedRef: Ref<HTMLDivElement>
) {
  // We store the values of all the ComboboxOptions on this ref. This makes it
  // possible to perform the keyboard navigation from the input on the list. We
  // manipulate this array through context so that we don't have to enforce a
  // parent/child relationship between ComboboxList and ComboboxOption with
  // cloneElement or fall back to DOM traversal. It's a new trick for me and
  // I'm pretty excited about it.
  const optionsRef = useRef<ComboboxOptionObject[]>([])

  // Need this to focus it
  const [inputElement, inputCallbackRef] = useCallbackRef<HTMLInputElement>()

  // Need this to get the menu width
  const [wrapperElement, wrapperCallbackRef] = useCallbackRef<HTMLDivElement>()
  const ref = useForkedRef(forwardedRef, wrapperCallbackRef)

  const popoverRef = useRef<HTMLDivElement>(null)

  const buttonRef = useRef<HTMLButtonElement>(null)

  // When <ComboboxInput autoComplete={false} /> we don't want cycle back to
  // the user's value while navigating (because it's always the user's value),
  // but we need to know this in useKeyDown which is far away from the prop
  // here, so we do something sneaky and write it to this ref on context so we
  // can use it anywhere else 😛. Another new trick for me and I'm excited
  // about this one too!
  const autoCompletePropRef = useRef(true)
  const readOnlyPropRef = useRef(false)

  const persistSelectionRef = useRef(false)
  const initialValue = value || defaultValue
  const initialData = initialValue
    ? { inputValue: getComboboxText(initialValue), option: initialValue }
    : {}

  const [state, data, transition] = useReducerMachine({
    ...defaultData,
    ...initialData,
  })
  const { option } = data

  if (value !== undefined && (!option || option.value !== value.value)) {
    transition &&
      transition(ComboboxActionType.SELECT_SILENT, {
        option: value,
      })
  }

  useFocusManagement(data.lastActionType, inputElement)

  const id = useID(rest.id)
  const listboxId = `listbox-${id}`

  const isVisible = getIsVisible(state)
  const isVisibleRef = useRef(isVisible)

  useEffect(() => {
    if (isVisible && !isVisibleRef.current) {
      onOpen && onOpen(option)
      isVisibleRef.current = true
    } else if (!isVisible && isVisibleRef.current) {
      onClose && onClose(option)
      isVisibleRef.current = false
    }
  }, [isVisible, isVisibleRef, onOpen, onClose, option])

  const context = {
    autoCompletePropRef,
    buttonRef,
    data,
    inputCallbackRef,
    inputElement,
    isVisible,
    listboxId,
    onChange,
    openOnFocus,
    optionsRef,
    persistSelectionRef,
    popoverRef,
    readOnlyPropRef,
    state,
    transition,
    wrapperElement,
  }

  return (
    <ComboboxContext.Provider value={context}>
      <Box
        display="inline-block"
        ref={ref}
        role="combobox"
        aria-haspopup="listbox"
        aria-owns={listboxId}
        aria-expanded={context.isVisible}
        {...rest}
      >
        {children}
      </Box>
    </ComboboxContext.Provider>
  )
})

ComboboxInternal.displayName = 'ComboboxInternal'

export const Combobox = styled(ComboboxInternal)``
