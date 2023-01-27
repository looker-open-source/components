/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

// Much of the following is pulled from https://github.com/reach/reach-ui
// because their work is fantastic (but is not in TypeScript)
import type { Context, FocusEvent } from 'react'
import { useContext } from 'react'
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
    const nextFocusTarget = e.relatedTarget
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
