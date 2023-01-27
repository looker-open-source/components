/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

// This hook allows you to merge click and mousedown behavior to a single callback
// which will trigger on mousedown or on click if mousedown has not already been triggered
// onMouseUp is an optional callback parameter for any necessary cleanup or cancellations
// because the user changed their mind and dragged out of the element before mouseup

import type { MouseEvent as ReactMouseEvent } from 'react'
import { useEffect, useRef, useCallback } from 'react'
/**
 * @param onMouseDownClick callback with React.MouseEvent for the first of either mousedown OR click
 * @param onMouseUp callback with DOM MouseEvent for mouseup (may be outside the element)
 */
export function useMouseDownClick<E extends HTMLElement>(
  onMouseDownClick: (e: ReactMouseEvent<E>) => void,
  onMouseUp?: (e: MouseEvent) => void
) {
  const mouseDownTriggered = useRef(false)

  // User may hold the mouse down for an unspecified length of time
  // and they may drag out of the element in question before mouseup
  // in which case, onMouseDown has been called but not onClick
  // so we need to provide the opportunity to "reverse" the action (e.g. close the menu)
  const handleMouseUp = useCallback(
    (e: MouseEvent) => {
      window.requestAnimationFrame(() => {
        mouseDownTriggered.current = false
        onMouseUp && onMouseUp(e)
      })
    },
    [onMouseUp]
  )

  useEffect(() => {
    return () => {
      document.removeEventListener('mouseup', handleMouseUp)
    }
  }, [handleMouseUp])

  return {
    onClick: useCallback(
      (e: ReactMouseEvent<E>) => {
        if (!mouseDownTriggered.current) {
          onMouseDownClick(e)
        }
      },
      [onMouseDownClick]
    ),
    onMouseDown: useCallback(
      (e: ReactMouseEvent<E>) => {
        mouseDownTriggered.current = true
        onMouseDownClick(e)
        document.addEventListener('mouseup', handleMouseUp)
      },
      [handleMouseUp, onMouseDownClick]
    ),
  }
}
