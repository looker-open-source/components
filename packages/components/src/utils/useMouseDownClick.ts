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

// This hook allows you to merge click and mousedown behavior to a single callback
// which will trigger on mousedown or on click if mousedown has not already been triggered
// onMouseUp is an optional callback parameter for any necessary cleanup or cancellations
// because the user changed their mind and dragged out of the element before mouseup

import {
  MouseEvent as ReactMouseEvent,
  useEffect,
  useRef,
  useCallback,
} from 'react'
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
