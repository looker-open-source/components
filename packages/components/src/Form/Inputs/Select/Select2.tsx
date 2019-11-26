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

// Much of the following is pulled directly from https://github.com/reach/reach-ui
// because their work is exceptional (but is not written in TypeScript)

import React, {
  FormEvent,
  forwardRef,
  useEffect,
  useLayoutEffect,
  useRef,
  useContext,
  useMemo,
  Ref,
} from 'react'
import uuid from 'uuid/v4'
// import { makeId, wrapEvent, useForkedRef } from "@reach/utils";
// import { findAll } from "highlight-words-core";
// import escapeRegexp from "escape-regexp";
// import { useId } from "@reach/auto-id";
// import Popover, { positionMatchWidth } from "@reach/popover";
import { Box } from '../../../Layout'
import { usePopover } from '../../../Popover'
import { useForkedRef } from '../../../utils'
import { InputText } from '../InputText'
import {
  isVisible,
  makeHash,
  useBlur,
  useFocusManagement,
  useKeyDown,
  wrapEvent,
} from './helpers'
import { SelectActionType, SelectState, useReducerMachine } from './state'
import { SelectInputProps, SelectListProps, SelectProps } from './types'
import { SelectContext } from './SelectContext'

// Select

export const Select = forwardRef(function Select(
  {
    // Called whenever the user selects an item from the list
    onSelect,

    // opens the list when the input receives focused (but only if there are
    // items in the list)
    openOnFocus = false,

    children,
    ...rest
  }: SelectProps,
  forwardedRef: Ref<HTMLDivElement>
) {
  // We store the values of all the SelectOptions on this ref. This makes it
  // possible to perform the keyboard navigation from the input on the list. We
  // manipulate this array through context so that we don't have to enforce a
  // parent/child relationship between SelectList and SelectOption with
  // cloneElement or fall back to DOM traversal. It's a new trick for me and
  // I'm pretty excited about it.
  const optionsRef = useRef(null)

  // Need this to focus it
  const inputRef = useRef<HTMLInputElement>(null)

  const popoverRef = useRef<HTMLElement>(null)

  const buttonRef = useRef<HTMLButtonElement>(null)

  // When <SelectInput autocomplete={false} /> we don't want cycle back to
  // the user's value while navigating (because it's always the user's value),
  // but we need to know this in useKeyDown which is far away from the prop
  // here, so we do something sneaky and write it to this ref on context so we
  // can use it anywhere else 😛. Another new trick for me and I'm excited
  // about this one too!
  const autocompletePropRef = useRef(true)

  const persistSelectionRef = useRef(true)

  const [state, data, transition] = useReducerMachine()

  useFocusManagement(data.lastActionType, inputRef)

  const id = rest.id || uuid()
  const listboxId = `listbox-${id}`

  const context = {
    autocompletePropRef,
    buttonRef,
    data,
    inputRef,
    isVisible: isVisible(state),
    listboxId,
    onSelect,
    openOnFocus,
    optionsRef,
    persistSelectionRef,
    popoverRef,
    state,
    transition,
  }

  return (
    <SelectContext.Provider value={context}>
      <Box
        {...rest}
        data-reach-combobox=""
        ref={forwardedRef}
        role="combobox"
        aria-haspopup="listbox"
        aria-owns={listboxId}
        aria-expanded={context.isVisible}
      >
        {children}
      </Box>
    </SelectContext.Provider>
  )
})

Select.displayName = 'Select'

// SelectInput

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

export const SelectList = forwardRef(function SelectList(
  {
    // when true, and the list opens again, the option with a matching value will be
    // automatically highlighted.
    persistSelection = false,
    ...props
  }: SelectListProps,
  forwardedRef: Ref<HTMLUListElement>
) {
  const { optionsRef, persistSelectionRef } = useContext(SelectContext)

  if (persistSelection) {
    if (persistSelectionRef) persistSelectionRef.current = true
  }

  // WEIRD? Reset the options ref every render so that they are always
  // accurate and ready for keyboard navigation handlers. Using layout
  // effect to schedule this effect before the SelectOptions push into
  // the array
  useLayoutEffect(() => {
    if (optionsRef) optionsRef.current = []
    return () => {
      if (optionsRef) optionsRef.current = []
    }
  })
  const { popoverRef, inputRef, isVisible } = useContext(SelectContext)
  const handleKeyDown = useKeyDown()
  const handleBlur = useBlur()

  const content = (
    <ul
      {...props}
      ref={forwardedRef}
      data-reach-combobox-list=""
      role="listbox"
    />
  )
  const { popover } = usePopover({
    content,
    isOpen: isVisible,
    triggerRef: inputRef,
  })
  return popover
})

SelectList.displayName = 'SelectList'

export const SelectOption = forwardRef(function SelectOption(
  { children, value, onClick, ...props },
  forwardedRef
) {
  const {
    onSelect,
    data: { navigationValue },
    transition,
    optionsRef,
  } = useContext(SelectContext)

  useEffect(() => {
    optionsRef.current.push(value)
  })

  const isActive = navigationValue === value

  const handleClick = () => {
    onSelect && onSelect(value)
    transition(SELECT_WITH_CLICK, { value })
  }

  return (
    <OptionContext.Provider value={value}>
      <li
        {...props}
        data-reach-combobox-option=""
        ref={forwardedRef}
        id={makeHash(value)}
        role="option"
        aria-selected={isActive}
        data-highlighted={isActive ? '' : undefined}
        // without this the menu will close from `onBlur`, but with it the
        // element can be `document.activeElement` and then our focus checks in
        // onBlur will work as intended
        tabIndex="-1"
        onClick={wrapEvent(handleClick, onClick)}
        children={children || <SelectOptionText />}
      />
    </OptionContext.Provider>
  )
})

SelectOption.displayName = 'SelectOption'

////////////////////////////////////////////////////////////////////////////////
// SelectOptionText

// We don't forwardRef or spread props because we render multiple spans or null,
// should be fine 🤙
export function SelectOptionText() {
  const value = useContext(OptionContext)
  const {
    data: { value: contextValue },
  } = useContext(SelectContext)

  const results = useMemo(
    () =>
      findAll({
        searchWords: escapeRegexp(contextValue).split(/\s+/),
        textToHighlight: value,
      }),
    [contextValue, value]
  )

  return results.length
    ? results.map((result, index) => {
        const str = value.slice(result.start, result.end)
        return (
          <span
            key={index}
            data-user-value={result.highlight ? true : undefined}
            data-suggested-value={result.highlight ? undefined : true}
          >
            {str}
          </span>
        )
      })
    : value
}

SelectOptionText.displayName = 'SelectOptionText'

////////////////////////////////////////////////////////////////////////////////
// SelectButton

export const SelectButton = forwardRef(function SelectButton(
  { as: Comp = 'button', onClick, onKeyDown, ...props },
  forwardedRef
) {
  const { transition, state, buttonRef, listboxId, isVisible } = useContext(
    SelectContext
  )
  const ref = useForkedRef(buttonRef, forwardedRef)

  const handleKeyDown = useKeyDown()

  const handleClick = () => {
    if (state === IDLE) {
      transition(OPEN_WITH_BUTTON)
    } else {
      transition(CLOSE_WITH_BUTTON)
    }
  }

  return (
    <Comp
      data-reach-combobox-button=""
      aria-controls={listboxId}
      aria-haspopup="listbox"
      aria-expanded={isVisible}
      ref={ref}
      onClick={wrapEvent(handleClick, onClick)}
      onKeyDown={wrapEvent(handleKeyDown, onKeyDown)}
      {...props}
    />
  )
})

SelectButton.displayName = 'SelectButton'

////////////////////////////////////////////////////////////////////////////////
// The rest is all implementation details

// Move focus back to the input if we start navigating w/ the
// keyboard after focus has moved to any focusable content in
// the popup.
