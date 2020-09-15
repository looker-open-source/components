/*

 MIT License

 Copyright (c) 2020 Looker Data Sciences, Inc.

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

import {
  FocusEvent,
  MouseEvent as ReactMouseEvent,
  useRef,
  useContext,
  useCallback,
  Context,
} from 'react'
import { useMouseDownClick, useWrapEvent } from '../../../../utils'
import { ComboboxInputProps } from '../ComboboxInput'
import { ComboboxMultiInputProps } from '../ComboboxMultiInput'
import {
  ComboboxContextProps,
  ComboboxMultiContextProps,
} from '../ComboboxContext'
import { ComboboxActionType, ComboboxState } from './state'
import { useBlur } from './useBlur'
import { useKeyDown } from './useKeyDown'

// Walks up the dom tree from an element to a containingAncestor checking for a button
// Used for determining whether a mousedown/click should toggle the option list
function checkForButton(
  element: Element,
  containingAncestor: Element
): boolean {
  if (element === containingAncestor) return false
  if (!element.parentElement) return false
  if (element.tagName === 'BUTTON') {
    return true
  }
  return checkForButton(element.parentElement, containingAncestor)
}

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
    readOnly = false,
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
    const input = e.currentTarget
    if (readOnly && input) {
      window.requestAnimationFrame(() => {
        input.selectionEnd = input.selectionStart = 0
      })
    } else if (selectOnClick) {
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
      if (checkForButton(e.target as Element, e.currentTarget as Element)) {
        return
      }
      if (state === ComboboxState.IDLE && openOnClick) {
        // Opening a closed list
        transition &&
          transition(ComboboxActionType.FOCUS, {
            persistSelection:
              persistSelectionPropRef && persistSelectionPropRef.current,
          })
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

  const {
    onMouseDown: handleMouseDown,
    onClick: handleClick,
  } = useMouseDownClick(handleMouseDownClick, handleMouseUp)

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
