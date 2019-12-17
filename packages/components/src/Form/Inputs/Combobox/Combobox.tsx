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

import {
  CompatibleHTMLProps,
  layout,
  LayoutProps,
  position,
  PositionProps,
  reset,
  space,
  SpaceProps,
} from '@looker/design-tokens'
import React, { forwardRef, useRef, useState, Ref } from 'react'
import styled from 'styled-components'
import { useID, useCallbackRef } from '../../../utils'
import { ValidationType } from '../../ValidationMessage'
import { isVisible, useFocusManagement } from './helpers'
import { useReducerMachine } from './state'
import { ComboboxContext } from './ComboboxContext'
import { ComboboxInputProps, ComboboxInput } from './ComboboxInput'
import { ComboboxList, ComboboxListProps } from './ComboboxList'
import {
  ComboboxOption,
  ComboboxOptionObject,
  ComboboxOptionProps,
} from './ComboboxOption'

export type OnCombobox = (option: ComboboxOptionObject) => void

export function useControlledCombobox(initialValue = '') {
  const [value, setOption] = useState(initialValue)
  function handleCombobox(option: ComboboxOptionObject) {
    setOption(option.value)
  }
  function handleChange(e: React.FormEvent<HTMLInputElement>) {
    setOption(e.currentTarget.value)
  }
  return {
    inputProps: { onChange: handleChange },
    onCombobox: handleCombobox,
    value,
  }
}

export interface ComboboxProps
  extends LayoutProps,
    PositionProps,
    SpaceProps,
    Omit<
      CompatibleHTMLProps<HTMLDivElement>,
      'readOnly' | 'onCombobox' | 'onChange'
    > {
  /**
   * Called with the selection value when the user makes a selection from the
   * list.
   */
  onCombobox?: OnCombobox
  /**
   * If true, the popover opens when focus is on the text box.
   */
  openOnFocus?: boolean
  /**
   * Use options to build a select with props instead of children
   * (do not use if also using children)
   */
  options?: ComboboxOptionObject[]
  /**
   * Props for the internal ComboboxInput component when building a select with the options prop
   * (do not use if also using children)
   */
  inputProps?: ComboboxInputProps
  /**
   * Props for the internal ComboboxList component when building a select with the options prop
   * (do not use if also using children)
   */
  listProps?: ComboboxListProps
  /**
   * Props for the internal ComboboxOptions components when building a select with the options prop
   * (do not use if also using children)
   */
  optionProps?: ComboboxOptionProps
  /**
   * Provides error styling
   */
  validationType?: ValidationType
  /**
   * The current value, for controlled use
   * (do not use if also using children – instead use value on ComboboxInput)
   */
  value?: string
}

export const ComboboxInternal = forwardRef(function Combobox(
  {
    // Called whenever the user selects an item from the list
    onCombobox,

    // opens the list when the input receives focused (but only if there are
    // items in the list)
    openOnFocus = false,

    children,

    // these props allow the user to build a Combobox without children
    inputProps,
    listProps,
    optionProps,
    options,
    value,
    'aria-label': ariaLabel,
    'aria-labelledby': ariaLabelledby,

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

  const popoverRef = useRef<HTMLDivElement>(null)

  const buttonRef = useRef<HTMLButtonElement>(null)

  // When <ComboboxInput autocomplete={false} /> we don't want cycle back to
  // the user's value while navigating (because it's always the user's value),
  // but we need to know this in useKeyDown which is far away from the prop
  // here, so we do something sneaky and write it to this ref on context so we
  // can use it anywhere else 😛. Another new trick for me and I'm excited
  // about this one too!
  const autocompletePropRef = useRef(true)
  const readOnlyPropRef = useRef(false)

  const persistComboboxionRef = useRef(false)

  const [state, data, transition] = useReducerMachine()

  useFocusManagement(data.lastActionType, inputElement)

  const id = useID(rest.id)
  const listboxId = `listbox-${id}`
  const ariaProps = {
    'aria-label': ariaLabel,
    'aria-labelledby': ariaLabelledby,
  }

  const context = {
    autocompletePropRef,
    buttonRef,
    data,
    inputCallbackRef,
    inputElement,
    isVisible: isVisible(state),
    listboxId,
    onCombobox,
    openOnFocus,
    options,
    optionsRef: options ? undefined : optionsRef,
    persistComboboxionRef,
    popoverRef,
    readOnlyPropRef,
    state,
    transition,
  }

  let content = children

  if (!children) {
    content = (
      <>
        <ComboboxInput value={value} {...ariaProps} {...inputProps} />
        <ComboboxList {...ariaProps} {...listProps}>
          {options &&
            options.map((option: ComboboxOptionObject) => {
              return (
                <ComboboxOption
                  {...optionProps}
                  {...option}
                  key={option.value}
                />
              )
            })}
        </ComboboxList>
      </>
    )
  } else if (options) {
    // eslint-disable-next-line no-console
    console.warn(`Options and children cannot be used together on Combobox.
If you wish to build your Combobox with the options prop, do not define any children.`)
  }

  return (
    <ComboboxContext.Provider value={context}>
      <div
        {...rest}
        ref={forwardedRef}
        role="select"
        aria-haspopup="listbox"
        aria-owns={listboxId}
        aria-expanded={context.isVisible}
      >
        {content}
      </div>
    </ComboboxContext.Provider>
  )
})

ComboboxInternal.displayName = 'ComboboxInternal'

export const Combobox = styled(ComboboxInternal)`
  ${reset}
  ${layout}
  ${position}
  ${space}
`
