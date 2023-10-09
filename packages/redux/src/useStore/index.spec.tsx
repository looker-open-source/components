/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import { renderHook } from '@testing-library/react-hooks';
import { configureStore } from '@reduxjs/toolkit';
import { useStore as useStoreReactRedux } from 'react-redux';
import { useStore } from '.';
import { createStore } from '../createStore';

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useStore: jest.fn(),
}));

beforeEach(() => {
  (useStoreReactRedux as jest.Mock).mockImplementation(
    jest.requireActual('react-redux').useStore
  );
});

test('errors with default redux error if no store is provided', () => {
  const h = renderHook(() => useStore());
  expect(h.result.error?.message).toBe(
    'could not find react-redux context value; please ensure the component is wrapped in a <Provider>'
  );
});

test('errors if an incompatible store is not provided', () => {
  (useStoreReactRedux as jest.Mock).mockImplementation(() =>
    configureStore({ reducer: () => {} })
  );
  const h = renderHook(() => useStore());
  expect(h.result.error?.message).toBe(
    'The store provided is not compatible with @looker/redux. Please use createStore from @looker/redux when creating your store.'
  );
});

test('returns a compatible store', () => {
  (useStoreReactRedux as jest.Mock).mockImplementation(() => createStore());
  const h = renderHook(() => useStore());
  expect(h.result.current.isLookerRedux).toBe(true);
});
