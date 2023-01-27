/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import type { Reducer } from 'react'
import { useCallback, useEffect, useReducer } from 'react'

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
