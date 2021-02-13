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

import { useState, useEffect } from 'react'
import throttle from 'lodash/throttle'

interface MouseState {
  mousePos: { x: number; y: number }
  isMouseDown: boolean
}

/*
 * Starts tracking mouse position when user clicks inside targetRef.
 * Stops  updating mouse position when user releases mouse ANYWHERE in the window
 */
export function useMouseDragPosition(
  targetRef: HTMLElement | null
): MouseState {
  const [isMouseDown, setIsMouseDown] = useState(false)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  const handleMouseDown = (e: globalThis.MouseEvent) => {
    setMousePos({ x: e.pageX, y: e.pageY })
    setIsMouseDown(true)
  }

  const handleMouseUp = () => {
    setIsMouseDown(false)
  }

  const handleMouseMove = throttle((e: globalThis.MouseEvent) => {
    if (isMouseDown) {
      // e.clientX and e.clientY fallbacks are included for testing purposes. jsDOM doesn't support pageX/pageY attributes
      setMousePos({ x: e.pageX || e.clientX, y: e.pageY || e.clientY })
    }
  }, 50)

  const handleMouseLeave = () => {
    setIsMouseDown(false)
  }

  useEffect(
    () => {
      targetRef && targetRef.addEventListener('mousedown', handleMouseDown)
      window.addEventListener('mouseup', handleMouseUp)
      window.addEventListener('mousemove', handleMouseMove)
      window.addEventListener('handleMouseLeave', handleMouseLeave)

      return () => {
        targetRef && targetRef.removeEventListener('mousedown', handleMouseDown)
        window.removeEventListener('mouseup', handleMouseUp)
        window.removeEventListener('mousemove', handleMouseMove)
        window.removeEventListener('handleMouseLeave', handleMouseLeave)
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [isMouseDown, targetRef]
  )

  return { isMouseDown, mousePos: mousePos }
}
