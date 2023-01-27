/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
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
