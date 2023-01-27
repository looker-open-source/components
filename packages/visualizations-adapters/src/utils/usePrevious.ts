/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import { useRef, useEffect } from 'react'

export function usePrevious<T>(value: T) {
  const ref = useRef<T>()

  // Store current value in ref
  useEffect(() => {
    ref.current = value
  }, [value])

  // Return previous value (happens before update in useEffect above)
  return ref.current
}
