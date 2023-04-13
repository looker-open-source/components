/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import {
  createSliceHooks,
  createStore,
  useActions,
  useSaga,
  useSagas,
  useSlice,
  useStoreState,
} from '.'

test('api', () => {
  expect(typeof createSliceHooks).toBe('function')
  expect(typeof createStore).toBe('function')
  expect(typeof useActions).toBe('function')
  expect(typeof useSaga).toBe('function')
  expect(typeof useSagas).toBe('function')
  expect(typeof useSlice).toBe('function')
  expect(typeof useStoreState).toBe('function')
})
