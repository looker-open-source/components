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

import { FocusEvent, KeyboardEvent, Ref, useRef, useState } from 'react'
import { getNextFocus as getNextFocusDefault } from './getNextFocus'
import { useForkedRef } from './useForkedRef'
import { useWrapEvent } from './useWrapEvent'

export interface UseArrowKeyNavProps<E extends HTMLElement> {
  /**
   * vertical for up/down arrow keys, horizontal for left/right, both for all (grid)
   * @default vertical
   */
  axis?: 'vertical' | 'horizontal' | 'both'
  /**
   * A custom getter for the next item to focus
   */
  getNextFocus?: (
    direction: 1 | -1,
    element: E,
    vertical?: boolean
  ) => HTMLElement | null
  /**
   * will be merged with the ref in the return
   */
  ref?: Ref<E>
  /**
   * will be merged with the onBlur in the return
   */
  onBlur?: (e: FocusEvent<E>) => void
  /**
   * will be merged with the onFocus in the return
   */
  onFocus?: (e: FocusEvent<E>) => void
  /**
   * will be merged with the onKeyDown in the return
   */
  onKeyDown?: (e: KeyboardEvent<E>) => void
}

/**
 * Returns props to spread onto container element for arrow key navigation.
 * Add tabIndex={-1} to child elements.
 */
export const useArrowKeyNav = <E extends HTMLElement = HTMLElement>({
  axis = 'vertical',
  getNextFocus = getNextFocusDefault,
  ref,
  onBlur,
  onFocus,
  onKeyDown,
}: UseArrowKeyNavProps<E>) => {
  const internalRef = useRef<E>(null)
  const [focusedItem, setFocusedItem] = useState<HTMLElement | null>(null)
  const [focusInside, setFocusInside] = useState(false)

  const handleArrowKey = (
    e: KeyboardEvent<E>,
    direction: 1 | -1,
    vertical: boolean
  ) => {
    if (internalRef.current) {
      const newFocusedItem = getNextFocus(
        direction,
        internalRef.current,
        vertical
      )
      if (newFocusedItem) {
        e.preventDefault()
        newFocusedItem.focus()
        setFocusedItem(newFocusedItem)
      }
    }
  }

  const handleKeyDown = (e: KeyboardEvent<E>) => {
    switch (e.key) {
      case 'ArrowUp':
        axis !== 'horizontal' && handleArrowKey(e, -1, true)
        break
      case 'ArrowDown':
        axis !== 'horizontal' && handleArrowKey(e, 1, true)
        break
      case 'ArrowLeft':
        axis !== 'vertical' && handleArrowKey(e, -1, false)
        break
      case 'ArrowRight':
        axis !== 'vertical' && handleArrowKey(e, 1, false)
        break
    }
  }

  const handleFocus = (e: FocusEvent<E>) => {
    setFocusInside(true)
    // When focus lands on the container
    if (e.target === internalRef.current) {
      // Check if there's a previously focused item that is still rendered
      if (focusedItem && internalRef.current.contains(focusedItem)) {
        focusedItem.focus()
      } else {
        const toFocus = getNextFocus(1, internalRef.current)
        if (toFocus) {
          // No need to update focusedItem with this since it's the default
          toFocus.focus()
        }
      }
    }
  }

  const handleBlur = () => {
    setFocusInside(false)
  }

  return {
    onBlur: useWrapEvent(handleBlur, onBlur),
    onFocus: useWrapEvent(handleFocus, onFocus),
    onKeyDown: useWrapEvent(handleKeyDown, onKeyDown),
    ref: useForkedRef(internalRef, ref),
    // Remove tabIndex from container if focus is inside to prevent focus from
    // landing back on the container when shift-tabbing from the first item
    tabIndex: focusInside ? undefined : 0,
  }
}
