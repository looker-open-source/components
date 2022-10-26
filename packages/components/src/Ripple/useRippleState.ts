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

import type { Reducer } from 'react'
import { useCallback, useEffect, useReducer, useRef } from 'react'
import { useTheme } from 'styled-components'

export interface RippleAction {
  type: 'START' | 'END' | 'DONE'
}

export type RippleState = 'IN' | 'OUT' | 'OFF'

const reducer: Reducer<RippleState, RippleAction> = (state, action) => {
  switch (action.type) {
    case 'START':
      return 'IN'
    case 'END':
      // Tabbing onto the element would give us keyup without keydown
      // this ensures we don't see the ripple fade-out without rippling-in
      return state === 'IN' ? 'OUT' : state
    case 'DONE':
      return 'OFF'
  }
}

const getRippleClassName = (rippling: RippleState) => {
  if (rippling === 'IN') {
    return 'fg-in'
  } else if (rippling === 'OUT') {
    return 'fg-out'
  }
  return ''
}

export const useRippleState = () => {
  const [rippling, dispatch] = useReducer(reducer, 'OFF')
  // Tracks the "in" (i.e. pressed) status to determine if ripple-out should fire
  const isInRef = useRef(false)
  // Tracks "lock" status for the ripple
  // which ensures the ripple-in gets enough time to fully animate
  const isLockedRef = useRef(false)
  // Get the transitions to match the ripple-in & -out animation durations
  const {
    transitions: { quick, simple },
  } = useTheme()

  const start = useCallback(() => {
    dispatch({ type: 'START' })
    isInRef.current = true
  }, [])

  const end = useCallback(() => {
    isInRef.current = false
    if (!isLockedRef.current) {
      dispatch({ type: 'END' })
    }
  }, [])

  useEffect(() => {
    let t: ReturnType<typeof setTimeout>
    if (rippling === 'IN') {
      isLockedRef.current = true
      t = setTimeout(() => {
        isLockedRef.current = false
        if (!isInRef.current) {
          dispatch({ type: 'END' })
        }
      }, simple)
    }
    if (rippling === 'OUT') {
      t = setTimeout(() => {
        dispatch({ type: 'DONE' })
      }, quick)
    }
    return () => {
      clearTimeout(t)
    }
  }, [rippling, quick, simple])

  return { className: getRippleClassName(rippling), end, start }
}
