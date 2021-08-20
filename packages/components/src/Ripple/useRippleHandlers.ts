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

import type { KeyboardEvent } from 'react'
import { useCallback } from 'react'
import type { CompatibleHTMLProps } from '@looker/design-tokens'
import { useWrapEvent } from '../utils'
import type { RippleCallbacks } from './types'

export const rippleHandlerKeys = [
  'onBlur',
  'onFocus',
  'onKeyDown',
  'onKeyUp',
  'onMouseDown',
  'onMouseEnter',
  'onMouseLeave',
  'onMouseUp',
] as const

export type RippleHandlers<E extends HTMLElement> = Pick<
  CompatibleHTMLProps<E>,
  typeof rippleHandlerKeys[number]
>

/**
 *
 * @param callbacks from useRipple, start and end functions for foreground and background
 * @param currentHandlers existing event handlers for the element will be wrapped
 * @param disabled
 * @returns wrapped event handlers
 */
export const useRippleHandlers = <E extends HTMLElement>(
  { startBG, endBG, startFG, endFG }: RippleCallbacks,
  currentHandlers: RippleHandlers<E>,
  disabled?: boolean
): RippleHandlers<E> => {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      switch (e.key) {
        // Only start the ripple for enter or space key
        case 'Enter':
        case ' ':
          startFG()
          break
      }
    },
    [startFG]
  )

  const handleMouseLeave = useCallback(() => {
    endBG()
    // If the user hovers off of the element while pressing, end the ripple
    endFG()
  }, [endFG, endBG])

  const wrappedCallbacks = {
    onBlur: useWrapEvent(endBG, currentHandlers.onBlur),
    onFocus: useWrapEvent(startBG, currentHandlers.onFocus),
    onKeyDown: useWrapEvent(handleKeyDown, currentHandlers.onKeyDown),
    onKeyUp: useWrapEvent(endFG, currentHandlers.onKeyUp),
    onMouseDown: useWrapEvent(startFG, currentHandlers.onMouseDown),
    onMouseEnter: useWrapEvent(startBG, currentHandlers.onMouseEnter),
    onMouseLeave: useWrapEvent(handleMouseLeave, currentHandlers.onMouseLeave),
    onMouseUp: useWrapEvent(endFG, currentHandlers.onMouseUp),
  }

  return disabled ? {} : wrappedCallbacks
}
