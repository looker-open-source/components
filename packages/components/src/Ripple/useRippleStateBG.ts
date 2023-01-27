/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
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
