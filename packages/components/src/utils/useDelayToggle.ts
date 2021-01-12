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

interface ToggleAction {
  type: 'ON' | 'OFF' | 'CHANGE' | 'DELAY_OFF' | 'DELAY_ON' | 'TOGGLE'
  payload?: boolean
}

const reducer: Reducer<{ value: boolean; delayed: boolean }, ToggleAction> = (
  state,
  action
) => {
  switch (action.type) {
    case 'ON':
      return { delayed: false, value: true }
    case 'OFF':
      return { delayed: false, value: false }
    case 'CHANGE':
      return { delayed: false, value: action.payload || false }
    case 'DELAY_OFF':
      // If value is already false, no need to turn on the delay
      return { delayed: state.value, value: state.value }
    case 'DELAY_ON':
      // If value is already true, no need to turn on the delay
      return { delayed: !state.value, value: state.value }
    case 'TOGGLE':
      // If value is already true, no need to turn on the delay
      return { delayed: false, value: !state.value }
  }
}

export const useDelayToggle = (delaySetting: number, initialValue = false) => {
  const [{ delayed, value }, dispatch] = useReducer(reducer, {
    delayed: false,
    value: initialValue,
  })
  const setOn = useCallback(() => dispatch({ type: 'ON' }), [])
  const setOff = useCallback(() => dispatch({ type: 'OFF' }), [])
  const change = useCallback(
    (newValue: boolean) => dispatch({ payload: newValue, type: 'CHANGE' }),
    []
  )
  const delayOn = useCallback(() => dispatch({ type: 'DELAY_ON' }), [])
  const delayOff = useCallback(() => dispatch({ type: 'DELAY_OFF' }), [])

  useEffect(() => {
    let t: number
    if (delayed) {
      t = setTimeout(() => {
        dispatch({ type: 'TOGGLE' })
      }, delaySetting)
    }
    return () => {
      clearTimeout(t)
    }
  }, [delayed, delaySetting])

  return { change, delayOff, delayOn, setOff, setOn, value }
}
