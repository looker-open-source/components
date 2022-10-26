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

import type { FocusEvent, KeyboardEvent, Ref } from 'react'
import { useCallback, useEffect, useRef, useState } from 'react'
import { checkElementRemoved } from './checkElementRemoved'
import { getNextFocus as getNextFocusDefault } from './getNextFocus'
import { useForkedRef } from './useForkedRef'
import { useWrapEvent } from './useWrapEvent'

export type ArrowKeyAxis = 'vertical' | 'horizontal' | 'both'

export interface UseArrowKeyNavProps<E extends HTMLElement> {
  /**
   * vertical for up/down arrow keys, horizontal for left/right, both for all (grid)
   * @default vertical
   */
  axis?: ArrowKeyAxis
  /**
   * If true, nothing is returned from the useArrowKeyNav call
   * Note: Used internally by Tree's nested List
   * @private
   */
  disabled?: boolean
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

export type UseArrowKeyNavResult<E extends HTMLElement> = Pick<
  UseArrowKeyNavProps<E>,
  'ref' | 'onBlur' | 'onFocus' | 'onKeyDown'
> & {
  tabIndex?: number
}

/**
 * Returns props to spread onto container element for arrow key navigation.
 * Add tabIndex={-1} to child elements.
 */
export const useArrowKeyNav = <E extends HTMLElement = HTMLElement>({
  axis = 'vertical',
  disabled,
  getNextFocus = getNextFocusDefault,
  ref,
  onBlur,
  onFocus,
  onKeyDown,
}: UseArrowKeyNavProps<E>): UseArrowKeyNavResult<E> => {
  const internalRef = useRef<E>(null)
  const focusedItemRef = useRef<HTMLElement>()
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

  const placeInitialFocus = useCallback(() => {
    if (internalRef.current) {
      const toFocus = getNextFocus(1, internalRef.current)
      if (toFocus) {
        // Since this is called when the user is scrolling a windowed list and
        // the focused element is removed because it leaves the window,
        // we preventScroll to avoid jumpiness
        // (getNextFocus should return an element that is inside the visible window)
        toFocus.focus({ preventScroll: true })
      }
    }
  }, [getNextFocus])

  const handleFocus = (e: FocusEvent<E>) => {
    // When focus lands on the container
    if (e.target === internalRef.current) {
      // Check if there's a previously focused item that is still rendered
      // and return focus there
      if (
        focusedItemRef.current &&
        internalRef.current.contains(focusedItemRef.current)
      ) {
        focusedItemRef.current.focus()
      } else {
        try {
          // Otherwise check if the focus is via keyboard (if supported)
          if (internalRef.current.matches(':focus-visible')) {
            // If so, focus the first item
            placeInitialFocus()
          }
        } catch (e) {
          // If :focus-visible is not supported, always focus the first item
          placeInitialFocus()
        }
      }
    } else {
      // Focus has moved to an item
      focusedItemRef.current = e.target
      // Remove tabIndex={0} from the container
      setFocusInside(true)
    }
  }

  const handleBlur = () => {
    // Replace tabIndex={0} on the container
    setFocusInside(false)
  }

  useEffect(() => {
    const element = internalRef.current

    // Create an observer to check if the focused element is removed
    const observer = new MutationObserver(mutationsList => {
      if (checkElementRemoved(mutationsList, focusedItemRef.current)) {
        // If it was, start focus back at the beginning
        placeInitialFocus()
      }
    })

    if (focusInside && element) {
      // Observe the descendants as well as direct children
      observer.observe(element, { childList: true, subtree: true })
    }
    return () => {
      observer.disconnect()
    }
  }, [focusInside, placeInitialFocus])

  const navProps = {
    onBlur: useWrapEvent(handleBlur, onBlur),
    onFocus: useWrapEvent(handleFocus, onFocus),
    onKeyDown: useWrapEvent(handleKeyDown, onKeyDown),
    ref: useForkedRef(internalRef, ref),
    // Toggle container's tabIndex so that
    // 1) when focus is outside, the container is the intial focus target,
    // and from there arrow keys move focus around within
    // 2) when focus is inside, only items can be focused, not the container
    tabIndex: focusInside ? undefined : 0,
  }

  return disabled ? {} : navProps
}
