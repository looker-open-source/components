/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import { useStore } from '../useStore'

/**
 * Adds sagas to the nearest store.
 *
 * @param sagas The sagas to register on the nearest store.
 */
export const useSagas = (sagas: any[]) => {
  const store = useStore()
  sagas.forEach(saga => store.addSaga(saga))
}
