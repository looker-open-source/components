/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import type { Slice } from '@reduxjs/toolkit'
import type { Store } from '../types'
import { useEffect } from 'react'
import { useStore } from 'react-redux'

/**
 * Adds a slice to the nearest store.
 *
 * @param slice The slice containing reducers to register on the nearest store.
 */
export const useSlice = (slice: Slice) => {
  const store = useStore() as Store<unknown>
  useEffect(() => {
    store.addReducer(slice.name, slice.reducer)
  }, [slice, store])
}
