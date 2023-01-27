/*

 MIT License

 Copyright (c) 2022 Looker Data Sciences, Inc.

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

import type { FocusEvent, MouseEvent as ReactMouseEvent, Context } from 'react'
import { useRef, useContext, useCallback } from 'react'
import {
  targetIsButton,
  useMouseDownClick,
  useWrapEvent,
} from '../../../../utils'
import type {
  ComboboxContextProps,
  ComboboxMultiContextProps,
} from '../ComboboxContext'
import type { ComboboxInputProps, ComboboxMultiInputProps } from '../types'
import { ComboboxActionType, ComboboxState } from './state'
import { useBlur } from './useBlur'
import { useKeyDown } from './useKeyDown'

export function useInputEvents<
  TProps extends
    | ComboboxInputProps
    | ComboboxMultiInputProps = ComboboxInputProps,
  TContext extends
    | ComboboxContextProps
    | ComboboxMultiContextProps = ComboboxContextProps
>(
  {
    disabled,
    // highlights all the text in the box on click when true
    selectOnClick = false,
    inputReadOnly = false,
    // wrapped events
    onClick,
    onMouseDown,
    onKeyDown,
    onBlur,
    onFocus,
  }: TProps,
  context: Context<TContext>
) {
  const {
    data: { lastActionType },
    inputElement,
    openOnFocus,
    openOnClick,
    persistSelectionPropRef,
    state,
    transition,
  } = useContext(context)
  // Because we close the List on blur, we need to track if the blur is
  // caused by clicking inside the list, and if so, don't close the List.
  const selectOnClickRef = useRef(false)

  const handleKeyDown = useKeyDown()

  const handleBlur = useBlur(context)

  function handleFocus(e: FocusEvent<HTMLInputElement>) {
    if (inputReadOnly) {
      // User can't type in the input so deselect the text
      // if it gets naturally selected from focusing via keyboard
      const input = e.currentTarget
      input.selectionStart = input.selectionEnd
    } else if (selectOnClick) {
      // If user can type in the input, and selectOnClick is true,
      // a newly focused input should select the text on next click
      // because the user is likely to want to replace it
      selectOnClickRef.current = true
    }

    // If we select an option with click, useFocusManagement will focus the
    // input, in those cases we don't want to cause the menu to open back up,
    // so we guard behind these states
    if (
      openOnFocus &&
      lastActionType !== ComboboxActionType.SELECT_WITH_CLICK &&
      lastActionType !== ComboboxActionType.NAVIGATE
    ) {
      transition &&
        transition(ComboboxActionType.FOCUS, {
          persistSelection:
            persistSelectionPropRef && persistSelectionPropRef.current,
        })
    }
  }

  const selectText = useCallback(() => {
    if (selectOnClickRef.current) {
      selectOnClickRef.current = false
      inputElement && inputElement.select()
    }
  }, [inputElement])

  const handleMouseDownClick = useCallback(
    (e: ReactMouseEvent<HTMLElement>) => {
      if (disabled) return
      // Without this, when clicking on a "clear" or "remove value" icon button
      // the list will flash open & closed (if closed)
      // or unnecessarily close (if open)
      if (targetIsButton(e)) {
        return
      }
      if (state === ComboboxState.IDLE) {
        if (openOnClick) {
          // Opening a closed list
          transition &&
            transition(ComboboxActionType.FOCUS, {
              persistSelection:
                persistSelectionPropRef && persistSelectionPropRef.current,
            })
        }
      } else {
        // Closing an opened list
        transition && transition(ComboboxActionType.ESCAPE)
      }
      if (e.type === 'click') {
        selectText()
      }
    },
    [
      disabled,
      openOnClick,
      persistSelectionPropRef,
      state,
      selectText,
      transition,
    ]
  )

  const handleMouseUp = useCallback(
    (e: MouseEvent) => {
      if (e.target === inputElement) {
        selectText()
      }
    },
    [inputElement, selectText]
  )

  const { onMouseDown: handleMouseDown, onClick: handleClick } =
    useMouseDownClick(handleMouseDownClick, handleMouseUp)

  const wrappedOnBlur = useWrapEvent(handleBlur, onBlur)
  const wrappedOnClick = useWrapEvent(handleClick, onClick)
  const wrappedOnFocus = useWrapEvent(handleFocus, onFocus)
  const wrappedOnMouseDown = useWrapEvent(handleMouseDown, onMouseDown)
  const wrappedOnKeyDown = useWrapEvent(handleKeyDown, onKeyDown)

  return {
    onBlur: wrappedOnBlur,
    onClick: wrappedOnClick,
    onFocus: wrappedOnFocus,
    onKeyDown: wrappedOnKeyDown,
    onMouseDown: wrappedOnMouseDown,
  }
}
