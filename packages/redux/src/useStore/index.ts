/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import { useStore as useStoreReactRedux } from 'react-redux'
import type { Store } from '../types'

export function useStore<S = any>() {
  return useStoreReactRedux() as Store<S>
}
