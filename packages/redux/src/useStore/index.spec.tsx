/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import { renderHook } from '@testing-library/react-hooks'
import { useStore as useStoreReactRedux } from 'react-redux'
import { useStore } from '.'

jest.mock('react-redux', () => ({
  useStore: jest.fn(),
}))

const mockStore = {
  addReducer: () => {},
  addSaga: () => {},
  replaceReducer: () => {},
}

beforeEach(() => {
  ;(useStoreReactRedux as jest.Mock).mockReset().mockReturnValue(mockStore)
})

test('calls useStore and returns a store with correct typescript type', () => {
  const res = renderHook(() => useStore())
  expect(useStoreReactRedux).toHaveBeenCalledTimes(1)
  // expect redux toolkit type to compile
  expect(res.result.current.replaceReducer).toBeDefined()
  // expect our custom types to compile
  expect(res.result.current.addReducer).toBeDefined()
  expect(res.result.current.addSaga).toBeDefined()
})
