/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import { useStore } from '../useStore'
import type { Saga } from 'redux-saga'

/**
 * Adds a saga to the nearest store.
 *
 * @param saga The saga to register on the nearest store.
 */
export const useSaga = (saga?: Saga) => {
  const store = useStore()
  if (saga) {
    store.addSaga(saga)
  }
}
