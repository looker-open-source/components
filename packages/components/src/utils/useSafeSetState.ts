/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import { useState, useCallback } from 'react'
import { useMounted } from './'

/**
 * An alternative utility hook to React.useState, this function
 * only updates state when the parent component is mounted.
 *
 * Prevents async setState errors and memory leaks.
 * @param initialState any data needed to be stored in state
 * @returns [currentState, stateUpdater]
 */
export const useSafeSetState = <T>(initialState: T): [T, (arg: T) => void] => {
  const [state, setState] = useState(initialState)
  const mounted = useMounted()

  const safeSetState = useCallback(
    (value: T) => {
      if (mounted.current) setState(value)
    },
    [mounted]
  )

  return [state, safeSetState]
}
