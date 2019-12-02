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
import React, { forwardRef, useRef, Ref } from 'react'
import uuid from 'uuid/v4'
import styled from 'styled-components'
import { isVisible, useFocusManagement } from './helpers'
import { useReducerMachine } from './state'
import { SelectContext } from './SelectContext'

export interface SelectProps
  extends LayoutProps,
    PositionProps,
    SpaceProps,
    Omit<CompatibleHTMLProps<HTMLDivElement>, 'onSelect'> {
  /**
   * Called with the selection value when the user makes a selection from the
   * list.
   *
   * @see Docs https://reacttraining.com/reach-ui/combobox#combobox-onselect
   */
  onSelect?: (value: string) => void
  /**
   * If true, the popover opens when focus is on the text box.
   *
   * @see Docs https://reacttraining.com/reach-ui/combobox#combobox-openonfocus
   */
  openOnFocus?: boolean
}

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
  const optionsRef = useRef<string[]>([])

  // Need this to focus it
  const inputRef = useRef<HTMLInputElement>(null)

  const popoverRef = useRef<HTMLDivElement>(null)

  const buttonRef = useRef<HTMLButtonElement>(null)

  // When <SelectInput autocomplete={false} /> we don't want cycle back to
  // the user's value while navigating (because it's always the user's value),
  // but we need to know this in useKeyDown which is far away from the prop
  // here, so we do something sneaky and write it to this ref on context so we
  // can use it anywhere else 😛. Another new trick for me and I'm excited
  // about this one too!
  const autocompletePropRef = useRef(true)

  const persistSelectionRef = useRef(false)

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
      <SelectContainer
        {...rest}
        data-reach-combobox=""
        ref={forwardedRef}
        role="select"
        aria-haspopup="listbox"
        aria-owns={listboxId}
        aria-expanded={context.isVisible}
      >
        {children}
      </SelectContainer>
    </SelectContext.Provider>
  )
})

Select.displayName = 'Select'

const SelectContainer = styled.div`
  ${reset}
  ${layout}
  ${position}
  ${space}
`
