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

import { Reducer, useCallback, useEffect, useReducer } from 'react'

export interface UseToggleReturn {
  value: boolean
  change: (value: boolean) => void
  setOn: () => void
  setOff: () => void
  toggle: () => void
}

interface ToggleAction {
  type: 'ON' | 'OFF' | 'TOGGLE' | 'CHANGE'
  payload?: boolean
}

const reducer: Reducer<boolean, ToggleAction> = (state, action) => {
  switch (action.type) {
    case 'ON':
      return true
    case 'OFF':
      return false
    case 'TOGGLE':
      return !state
    case 'CHANGE':
      return action.payload || false
  }
}

export function useToggle(initialValue = false): UseToggleReturn {
  const [value, dispatch] = useReducer(reducer, initialValue)
  const setOn = useCallback(() => dispatch({ type: 'ON' }), [])
  const setOff = useCallback(() => dispatch({ type: 'OFF' }), [])
  const toggle = useCallback(() => dispatch({ type: 'TOGGLE' }), [])
  const change = useCallback(
    (payload: boolean) => dispatch({ payload, type: 'CHANGE' }),
    []
  )

  useEffect(() => {
    dispatch({ payload: initialValue, type: 'CHANGE' })
  }, [initialValue])
  return { change, setOff, setOn, toggle, value }
}
