/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import type { CaseReducerActions, Slice } from '@reduxjs/toolkit'
import type { Saga } from 'redux-saga'
import { useActions } from '../useActions'
import { useStoreState } from '../useStoreState'

type ExtractReducer<T> = T extends Slice<any, infer R> ? R : never
type ExtractState<T> = T extends Slice<infer S, any> ? S : never

/**
 * Returns hooks that are automatically bound to your typed state, slices and sagas.
 *
 * @param slice The slice containing reducers to register on the nearest store.
 * @param saga The saga to register on the nearest store.
 */
export const createSliceHooks = <T extends Slice>(slice: T, saga?: Saga) => ({
  useActions: (): CaseReducerActions<ExtractReducer<T>> => {
    return useActions(slice)
  },
  useStoreState: () => {
    return useStoreState<ExtractState<T>>(slice, saga)
  },
})

export const setupSlice = <T extends Slice>({
  store,
  slice,
  saga,
}: {
  store: any
  slice: T
  saga?: Saga
}) => {
  if (saga) {
    store.addSaga(saga)
  }
  store.addReducer(slice.name, slice.reducer)
}
