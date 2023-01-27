/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import { useRef, useEffect } from 'react'

type UsePreviousValue =
  | boolean
  | number[]
  | string
  | number
  | string[]
  | undefined

export const usePreviousValue = <T extends UsePreviousValue>(value: T) => {
  const ref = useRef<T>()
  useEffect(() => {
    ref.current = value
  })
  return ref.current
}
