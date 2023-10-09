/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import {
  createFetchHooks,
  createSliceHooks,
  createSlice,
  createStore,
  deepCombineReducers,
  Store,
  useSaga,
  useSagas,
  useSlice,
  useStore,
} from '.';

test('api', () => {
  expect(typeof createFetchHooks).toBe('function');
  expect(typeof createSliceHooks).toBe('function');
  expect(typeof createSlice).toBe('function');
  expect(typeof createStore).toBe('function');
  expect(typeof deepCombineReducers).toBe('function');
  expect(typeof Store).toBe('function');
  expect(typeof useSaga).toBe('function');
  expect(typeof useSagas).toBe('function');
  expect(typeof useSlice).toBe('function');
  expect(typeof useStore).toBe('function');
});
