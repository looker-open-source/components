/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import type { DeepReducersMapObject } from '.'
import { deepCombineReducers } from '.'

test('should handle plain function reducers', () => {
  const reducer = (state: any) => state
  expect(deepCombineReducers(reducer)).toBe(reducer)
})

test('should handle reducer object maps', () => {
  interface IState {
    a?: string
    b?: string
  }
  const reducer = {
    a: () => 'a',
    b: () => 'b',
  }
  const combined = deepCombineReducers<IState>(reducer)
  expect(combined({}, { type: 'init' })).toEqual({ a: 'a', b: 'b' })
})

test('should handle recursive reducer object maps', () => {
  interface IState {
    a?: string
    b?: string
    c?: {
      nested?: string
    }
  }
  const reducer = {
    a: () => 'a',
    b: () => 'b',
    c: {
      nested: () => 'nested',
    },
  }
  const combined = deepCombineReducers<IState>(reducer)
  expect(combined({}, { type: 'init' })).toEqual({
    a: 'a',
    b: 'b',
    c: { nested: 'nested' },
  })
})

test('should handle reducers that are both functions and nested objects', () => {
  interface IState {
    a?: string
    b?: string
    c?: {
      nested?: string
      notNested?: string
    }
  }
  const reducerAndNested = ((state: Record<string, unknown>) => {
    return { ...state, notNested: 'notNested' }
  }) as DeepReducersMapObject<IState['c']>
  reducerAndNested!.nested = () => 'nested'
  const reducer = {
    a: () => 'a',
    b: () => 'b',
    c: reducerAndNested,
  }
  const initialState = {
    a: 'initiala',
    b: 'initialb',
    c: {},
  }
  const combined = deepCombineReducers<IState>(reducer)
  expect(combined(initialState, { type: 'init' })).toEqual({
    a: 'a',
    b: 'b',
    c: { notNested: 'notNested', nested: 'nested' },
  })
})
