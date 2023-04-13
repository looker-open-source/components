/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import type { Slice } from '@reduxjs/toolkit'
import { bindActionCreators } from 'redux'
import { useDispatch } from 'react-redux'

const dispatchMap = new WeakMap()

/**
 * Binds a slice's action creators to dispatch().
 *
 * @param slice The slice who's actions we will pass to bindActionCreators.
 */
export const useActions = (slice: Slice) => {
  const dispatch = useDispatch()

  // We must keep record of which bound action creators belong to which
  // dispatch instance so that if a new store instance is created (i.e. tests)
  // they get rebound and stored.
  if (!dispatchMap.has(dispatch)) {
    dispatchMap.set(dispatch, new WeakMap())
  }

  const boundActionCreatorsMap = dispatchMap.get(dispatch)

  if (!boundActionCreatorsMap.has(slice)) {
    boundActionCreatorsMap.set(
      slice,
      bindActionCreators(slice.actions, dispatch)
    )
  }

  return boundActionCreatorsMap.get(slice)
}
