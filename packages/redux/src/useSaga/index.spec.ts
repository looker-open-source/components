/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import { renderHook } from '@testing-library/react-hooks'
import { useStore } from 'react-redux'
import { useSaga } from '.'

jest.mock('react-redux', () => ({
  useStore: jest.fn(),
}))

function* saga() {}

const mockUseStore = {
  addSaga: jest.fn(),
}

beforeEach(() => {
  mockUseStore.addSaga.mockReset()

  // @ts-ignore
  useStore.mockReset().mockReturnValue(mockUseStore)
})

test('calls useStore', () => {
  renderHook(() => useSaga(saga))
  expect(useStore).toHaveBeenCalledTimes(1)
  expect(useStore).toHaveBeenCalledWith()
})

test('calls addSaga', () => {
  renderHook(() => useSaga(saga))
  expect(mockUseStore.addSaga).toHaveBeenCalledTimes(1)
  expect(mockUseStore.addSaga).toHaveBeenCalledWith(saga)
})

test('does not call addSaga if no saga is provided', () => {
  renderHook(() => useSaga())
  expect(mockUseStore.addSaga).toHaveBeenCalledTimes(0)
})
