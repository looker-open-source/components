/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import type { Reducer, ReducersMapObject, AnyAction, Action } from 'redux'

export type DeepReducersMapObject<S = any, A extends Action = AnyAction> = {
  [K in keyof S]: Reducer<S[K], A> | DeepReducersMapObject<S[K]>
}

// We use many action types throughout helltool that are not
// all the same type.   Ideally this would default to AnyAction
// rather than Any.   Before trying to engineer these action types
// to be more type safe, consider looking at existing solutions such as
// the typescript-fsa library.
type HelltoolActionType = any

/**
 * Same function as combineReducers from react-redux with the additional functionality
 * of being able to combine nested reducers.
 * @example
 * const reducer = deepCombineReducers({
 *   foo: fooReducer
 *   bar: {
 *     nestedBar: nestedBarReducer
 *   }
 * })
 */
export const deepCombineReducers = <S>(
  reducers:
    | DeepReducersMapObject<S, HelltoolActionType>
    | Reducer<S, HelltoolActionType>
): Reducer<S, HelltoolActionType> => {
  // the majority of this implementation is copy pasted from redux
  // https://github.com/reduxjs/redux/blob/master/src/combineReducers.ts
  const reducerKeys = Object.keys(reducers)

  if (!reducerKeys.length) {
    return reducers as Reducer
  }

  return function combination(state: S = {} as S, action: HelltoolActionType) {
    const nextState: S = { ...state }
    // Most of this function is copy pasted from redux.  They might be doing a loop like this
    // for performance reasons.
    for (let i = 0; i < reducerKeys.length; i++) {
      const key = reducerKeys[i] as keyof S
      const reducer = deepCombineReducers((reducers as ReducersMapObject)[key])
      const previousStateForKey = nextState[key]
      const nextStateForKey = reducer(previousStateForKey, action)
      nextState[key] = nextStateForKey
    }
    return typeof reducers === 'function'
      ? reducers(nextState, action)
      : nextState
  }
}
