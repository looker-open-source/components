/*

 MIT License

 Copyright (c) 2021 Looker Data Sciences, Inc.

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
import type { Context, FocusEvent } from 'react'
import { useContext } from 'react'
import { getNextFocusTarget } from '../../../../utils'
import type {
  ComboboxContextProps,
  ComboboxMultiContextProps,
} from '../ComboboxContext'
import { ComboboxActionType, ComboboxState } from './state'

export function useBlur<
  TContext extends
    | ComboboxContextProps
    | ComboboxMultiContextProps = ComboboxContextProps
>(context: Context<TContext>) {
  const {
    data: { inputValue },
    state,
    transition,
    listRef,
    inputElement,
    freeInputPropRef,
  } = useContext(context)

  function closeList(action: ComboboxActionType) {
    // When freeInput is true, the current inputValue should not be changed on blur
    // (for Multi, InputChips will tokenize the inputValue on blur)
    const payload =
      freeInputPropRef && freeInputPropRef.current ? { inputValue } : undefined

    transition && transition(action, payload)
  }

  return function handleBlur(e?: FocusEvent) {
    if (!e) {
      // handleBlur was called directly (via popover close)
      // only need to close the list
      if (state !== ComboboxState.IDLE) {
        closeList(ComboboxActionType.ESCAPE)
      }
      return
    }
    // we on want to close only if focus rests outside the select
    const nextFocusTarget = getNextFocusTarget(e)
    const popoverCurrent = listRef ? listRef.current : null
    if (popoverCurrent) {
      const focusInList =
        popoverCurrent && popoverCurrent.contains(nextFocusTarget)

      if (focusInList && state !== ComboboxState.INTERACTING) {
        // focus landed inside the select, keep it open
        transition && transition(ComboboxActionType.INTERACT)
      } else if (!focusInList && nextFocusTarget !== inputElement) {
        // focus landed outside the select, close it
        closeList(ComboboxActionType.BLUR)
      }
      // Stop ComboboxMultiInput + freeInput underlying InputChips blur handler from
      // tokenizing input value when an option is clicked
      focusInList &&
        freeInputPropRef &&
        freeInputPropRef.current &&
        e.preventDefault()
    }
  }
}
