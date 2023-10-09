/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import { createSlice } from '@reduxjs/toolkit';
import { renderHook } from '@testing-library/react-hooks';
import { useEffect } from 'react';
import { useStore } from 'react-redux';
import { useSlice } from '.';

jest.mock('react', () => {
  const actualReact = jest.requireActual('react');
  return {
    ...actualReact,
    useEffect: jest.fn(actualReact.useEffect),
  };
});

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useStore: jest.fn(() => ({
    addReducer: mockAddReducer,
  })),
}));

const mockAddReducer = jest.fn();
const mockUseEffect = useEffect as jest.Mock;
const mockUseStore = useStore as jest.Mock;

const slice = createSlice({
  initialState: {},
  name: 'test',
  reducers: {
    test() {},
  },
});

beforeEach(() => {
  jest.clearAllMocks();
});

test('calls useStore', () => {
  renderHook(() => useSlice(slice));
  expect(mockUseStore).toHaveBeenCalledTimes(1);
  expect(mockUseStore).toHaveBeenCalledWith();
});

test('calls addReducer', () => {
  renderHook(() => useSlice(slice));
  expect(mockAddReducer).toHaveBeenCalledTimes(1);
  expect(mockAddReducer).toHaveBeenCalledWith(slice.name, slice.reducer);
});

test('calls addReducer in useEffect', async () => {
  mockUseEffect.mockImplementation(() => {});
  renderHook(() => useSlice(slice));
  expect(mockUseEffect).toHaveBeenCalledTimes(1);
  expect(mockAddReducer).toHaveBeenCalledTimes(0);
});
