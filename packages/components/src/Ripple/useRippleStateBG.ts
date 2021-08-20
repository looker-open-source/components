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

import type { Reducer } from 'react'
import { useCallback, useReducer } from 'react'

export interface RippleActionBG {
  type: 'START' | 'END'
}

export type RippleStateBG = 'ON' | 'DOUBLE_ON' | 'OFF'

const reducer: Reducer<RippleStateBG, RippleActionBG> = (state, action) => {
  switch (action.type) {
    // 'DOUBLE_ON' allows detection of "hover & focus" state
    // background should only turn off when hovered out AND blurred
    case 'START':
      return state === 'ON' ? 'DOUBLE_ON' : 'ON'
    case 'END':
      return state === 'DOUBLE_ON' ? 'ON' : 'OFF'
  }
}

export const useRippleStateBG = () => {
  const [state, dispatch] = useReducer(reducer, 'OFF')
  return {
    className: state === 'OFF' ? '' : 'bg-on',
    end: useCallback(() => {
      dispatch({ type: 'END' })
    }, []),
    start: useCallback(() => {
      dispatch({ type: 'START' })
    }, []),
  }
}
