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

import { useState, useEffect } from 'react'
import throttle from 'lodash/throttle'
import get from 'lodash/get'

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

  const updateMousePos = (e: globalThis.TouchEvent | globalThis.MouseEvent) => {
    // use e.touches[0] for touch events, or simply e for mouse events
    const event = get(e, 'touches[0]', e)
    // e.clientX and e.clientY fallbacks are included for testing purposes. jsDOM doesn't support pageX/pageY attributes
    const { pageX, clientX, pageY, clientY } = event
    setMousePos({ x: pageX || clientX, y: pageY || clientY })
  }

  const handleStart = (e: globalThis.TouchEvent | globalThis.MouseEvent) => {
    // update mouse down state AFTER mouse position state is updated
    requestAnimationFrame(() => {
      setIsMouseDown(true)
    })
    updateMousePos(e)
  }

  const handleMove = throttle(updateMousePos, 50)

  const handleEnd = () => {
    requestAnimationFrame(() => {
      setIsMouseDown(false)
    })
  }

  useEffect(() => {
    targetRef && targetRef.addEventListener('mousedown', handleStart)
    targetRef && targetRef.addEventListener('touchstart', handleStart)
    window.addEventListener('mouseup', handleEnd)
    window.addEventListener('touchend', handleEnd)

    if (isMouseDown) {
      window.addEventListener('touchmove', handleMove)
      window.addEventListener('mousemove', handleMove)
      window.addEventListener('mouseleave', handleEnd)
    }

    return () => {
      targetRef && targetRef.removeEventListener('mousedown', handleStart)
      targetRef && targetRef.removeEventListener('touchstart', handleStart)
      window.removeEventListener('mouseup', handleEnd)
      window.removeEventListener('touchend', handleEnd)

      if (isMouseDown) {
        window.removeEventListener('touchmove', handleMove)
        window.removeEventListener('mousemove', handleMove)
        window.removeEventListener('mouseleave', handleEnd)
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isMouseDown, targetRef])

  return { isMouseDown, mousePos: mousePos }
}
