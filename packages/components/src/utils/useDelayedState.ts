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
import { undefinedCoalesce } from './undefinedCoalesce'

interface DelayedStateBase<T> {
  delay: number | false
  value: T
}

interface DelayedStateState<T> extends DelayedStateBase<T> {
  futureValue?: T
}

interface DelayedStateAction<T> {
  type: 'CHANGE' | 'DELAY_CHANGE'
  payload?: Partial<DelayedStateBase<T>>
}

type DelayReducer<T> = Reducer<DelayedStateState<T>, DelayedStateAction<T>>

const reducer = <T>(
  state: DelayedStateState<T>,
  { type, payload = {} }: DelayedStateAction<T>
): DelayedStateState<T> => {
  switch (type) {
    case 'CHANGE':
      return {
        delay: false,
        futureValue: undefined,
        value: undefinedCoalesce([payload.value, state.futureValue]) as T,
      }
    case 'DELAY_CHANGE':
      // If value is already false, no need to turn on the delay
      return {
        ...state,
        delay: state.value === payload.value ? false : payload.delay || 0,
        futureValue: payload.value,
        value: state.value,
      }
  }
}

export interface UseDelayedStateReturn<T> {
  change: (value: T) => void
  delayChange: (value: T, delay?: number) => void
  value: T
}

export function useDelayedState<T>(initialValue: T): UseDelayedStateReturn<T> {
  const [{ delay, value }, dispatch] = useReducer<DelayReducer<T>>(reducer, {
    delay: false,
    value: initialValue as T,
  })
  const change = useCallback(
    (newValue: T) => dispatch({ payload: { value: newValue }, type: 'CHANGE' }),
    []
  )
  const delayChange = useCallback(
    (newValue: T, delay?: number) =>
      dispatch({ payload: { delay, value: newValue }, type: 'DELAY_CHANGE' }),
    []
  )

  useEffect(() => {
    let t: number
    if (delay !== false) {
      t = setTimeout(() => {
        dispatch({ type: 'CHANGE' })
      }, delay)
    }
    return () => {
      clearTimeout(t)
    }
  }, [delay])

  return { change, delayChange, value }
}
