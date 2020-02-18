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

import some from 'lodash/some'
import every from 'lodash/every'
import React, { forwardRef, useRef, useState, Ref, useEffect } from 'react'
import styled from 'styled-components'
import { useID, useCallbackRef, useForkedRef } from '../../../utils'
import { Box } from '../../../Layout/Box'
import { useFocusManagement } from './helpers'
import {
  useReducerMultiMachine,
  ComboboxActionType,
  ComboboxMultiData,
} from './state'
import { ComboboxMultiContext, defaultMultiData } from './ComboboxContext'
import { ComboboxOptionObject, getComboboxText } from './ComboboxOption'
import { ComboboxBaseProps, getIsVisible } from './Combobox'

function compareOptions(
  optionsA: ComboboxOptionObject[],
  optionsB: ComboboxOptionObject[],
  compare: typeof some | typeof every
) {
  return compare(optionsA, optionA =>
    optionsB.find(optionB => optionA.value === optionB.value)
  )
}

export type OnComboboxMultiChange = (options: ComboboxOptionObject[]) => void

export function useControlledComboboxMulti(initialValue = '') {
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
interface ComboboxMultiProps extends ComboboxBaseProps {
  /**
   * Called when an option is selected (not when user types – use ComboboxInput.onChange for that)
   */
  onChange?: OnComboboxMultiChange
  /**
   * The current option (controlled)
   */
  values?: ComboboxOptionObject[]
  /**
   * The initial option (uncontrolled)
   */
  defaultValues?: ComboboxOptionObject[]
  /**
   * Called when the suggestion list closes, whether via blur, escape or selection
   */
  onClose?: (options?: ComboboxOptionObject[]) => void
  /**
   * Called when the suggestion list opens, whether via typing, click, or focus
   */
  onOpen?: (options?: ComboboxOptionObject[]) => void
}

export const ComboboxMultiInternal = forwardRef(function Combobox(
  {
    // opens the list when the input receives focused (but only if there are
    // items in the list)
    openOnFocus = false,

    children,
    onChange,
    values,
    defaultValues,
    onClose,
    onOpen,

    ...rest
  }: ComboboxMultiProps,
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
  const initialValues = values || defaultValues
  const initialData: ComboboxMultiData = {
    inputValues: initialValues
      ? initialValues.map(initialVal => getComboboxText(initialVal))
      : [],
    options: initialValues || [],
  }

  const [state, data, transition] = useReducerMultiMachine({
    ...defaultMultiData,
    ...initialData,
  })
  const { options } = data

  if (
    values !== undefined &&
    (options.length === 0 || compareOptions(options, values, every))
  ) {
    transition &&
      transition(ComboboxActionType.SELECT_SILENT, {
        inputValues: values.map(val => getComboboxText(val)),
        options: values,
      })
  }

  useFocusManagement(data.lastActionType, inputElement)

  const id = useID(rest.id)
  const listboxId = `listbox-${id}`

  const isVisible = getIsVisible(state)
  const isVisibleRef = useRef(isVisible)

  useEffect(() => {
    if (isVisible && !isVisibleRef.current) {
      onOpen && onOpen(options)
      isVisibleRef.current = true
    } else if (!isVisible && isVisibleRef.current) {
      onClose && onClose(options)
      isVisibleRef.current = false
    }
  }, [isVisible, isVisibleRef, onOpen, onClose, options])

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
    <ComboboxMultiContext.Provider value={context}>
      <Box
        display="inline-block"
        {...rest}
        ref={ref}
        role="combobox"
        aria-haspopup="listbox"
        aria-owns={listboxId}
        aria-expanded={context.isVisible}
      >
        {children}
      </Box>
    </ComboboxMultiContext.Provider>
  )
})

ComboboxMultiInternal.displayName = 'ComboboxMultiInternal'

export const ComboboxMulti = styled(ComboboxMultiInternal)``

ComboboxMulti.defaultProps = {
  display: 'flex',
}
