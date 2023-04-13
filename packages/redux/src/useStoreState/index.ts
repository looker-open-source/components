/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import type { Slice } from '@reduxjs/toolkit'
import { useSelector } from 'react-redux'
import type { Saga } from 'redux-saga'
import { useSaga } from '../useSaga'
import { useSlice } from '../useSlice'
import get from 'lodash/get'

/**
 * Adds a saga and slice to the nearest store and returns the root state for the slice.
 *
 * @param slice The slice containing reducers to register on the nearest store.
 * @param saga The saga to register on the nearest store.
 */
export const useStoreState = <SliceState>(slice: Slice, saga?: Saga) => {
  useSaga(saga)
  useSlice(slice)
  return useSelector(
    (state: any): SliceState => get(state, slice.name, slice.getInitialState())
  )
}
