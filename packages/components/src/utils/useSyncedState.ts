/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import type { Dispatch, SetStateAction } from 'react'
import { useRef, useEffect, useState } from 'react'

/**
 * A version of useState that is synced with a prop
 * @param prop The prop to sync state to
 * @returns the current state value
 */
export const useSyncedState = <S>(
  prop: S
): [S, Dispatch<SetStateAction<S>>] => {
  const [state, setState] = useState(prop)
  const isMountedRef = useRef(false)
  useEffect(() => {
    if (isMountedRef.current) {
      setState(prop)
    }
    isMountedRef.current = true
  }, [prop])
  return [state, setState]
}
