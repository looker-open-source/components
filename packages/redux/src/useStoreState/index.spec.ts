/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import { renderHook } from '@testing-library/react-hooks'
import { createSlice } from '@reduxjs/toolkit'
import { useSelector } from 'react-redux'
import { useStoreState } from '.'
import { useSaga } from '../useSaga'
import { useSlice } from '../useSlice'

jest.mock('react-redux', () => ({
  useSelector: jest.fn((fn: (state: any) => any) =>
    fn({ test: { test: true } })
  ),
}))

jest.mock('../useSaga', () => ({
  useSaga: jest.fn(),
}))

jest.mock('../useSlice', () => ({
  useSlice: jest.fn(),
}))

const mockUseSaga = useSaga as jest.Mock
const mockUseSelector = useSelector as jest.Mock
const mockUseSlice = useSlice as jest.Mock

function* saga() {}

const slice = createSlice({
  initialState: { test: false },
  name: 'test',
  reducers: {},
})

beforeEach(() => {
  jest.clearAllMocks()
})

test('calls useSlice', () => {
  renderHook(() => useStoreState(slice))
  expect(mockUseSlice).toHaveBeenCalledTimes(1)
  expect(mockUseSlice).toHaveBeenCalledWith(slice)
})

test('calls useSaga', () => {
  renderHook(() => useStoreState(slice, saga))
  expect(mockUseSaga).toHaveBeenCalledTimes(1)
  expect(mockUseSaga).toHaveBeenCalledWith(saga)
})

test('calls useSelector', () => {
  renderHook(() => useStoreState(slice))
  expect(mockUseSelector).toHaveBeenCalledTimes(1)
})

test('returns the store state', () => {
  const state = renderHook(() => useStoreState(slice))
  expect(state.result.current).toEqual({ test: true })
})

test('returns initial state if selector returns nothing', () => {
  mockUseSelector.mockImplementation(fn => fn({}))
  const state = renderHook(() => useStoreState(slice))
  expect(state.result.current).toBe(slice.getInitialState())
})
