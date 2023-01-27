/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
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

  const handleMove = throttle(updateMousePos, 100)

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

  return { isMouseDown, mousePos }
}
