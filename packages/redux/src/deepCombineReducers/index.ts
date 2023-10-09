/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import type { Reducer, ReducersMapObject, AnyAction, Action } from 'redux';

export type DeepReducersMapObject<S = any, A extends Action = AnyAction> = {
  [K in keyof S]: Reducer<S[K], A> | DeepReducersMapObject<S[K]>;
};

// Before trying to engineer these action types to be more type safe, consider
// looking at existing solutions such as the typescript-fsa library.
type ActionType = any;

/**
 * Same function as combineReducers from react-redux with the additional functionality
 * of being able to combine nested reducers.
 *
 * @example
 * const reducer = deepCombineReducers({
 *   foo: fooReducer
 *   bar: {
 *     nestedBar: nestedBarReducer
 *   }
 * })
 */
export const deepCombineReducers = <S>(
  reducers: DeepReducersMapObject<S, ActionType> | Reducer<S, ActionType>
): Reducer<S, ActionType> => {
  const reducerKeys = Object.keys(reducers);

  if (!reducerKeys.length) {
    return reducers as Reducer;
  }

  return function combination(state: S = {} as S, action: ActionType) {
    const nextState: S = { ...state };
    for (let i = 0; i < reducerKeys.length; i++) {
      const key = reducerKeys[i] as keyof S;
      const reducer = deepCombineReducers((reducers as ReducersMapObject)[key]);
      const previousStateForKey = nextState[key];
      if (typeof reducer === 'function') {
        nextState[key] = reducer(previousStateForKey, action);
      }
    }
    return typeof reducers === 'function'
      ? reducers(nextState, action)
      : nextState;
  };
};
