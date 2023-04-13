/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import type {
  ConfigureStoreOptions,
  Middleware,
  ReducersMapObject,
} from '@reduxjs/toolkit'
import { configureStore } from '@reduxjs/toolkit'
// @ts-ignore - this causes compile issues because it doesn't have types.
import createSagaMiddleware from 'redux-saga'
import type { Store } from '../types'
import set from 'lodash/set'
import { deepCombineReducers } from '../deepCombineReducers'

export interface CreateStoreOptions<State>
  extends Partial<ConfigureStoreOptions<State>> {
  middleware?: Middleware[]
  reducer?: ReducersMapObject<State>
}

/**
 * Creates a store that is pre-configured for Looker usage and is enhanced to dynamically add reducers and sagas.
 *
 * @param preloadedState The initial state to preload into the store.
 * @param reducer The initial reducer that goes along with initial state.
 */
export const createStore = <State>({
  devTools = false,
  middleware = [],
  preloadedState = {} as any,
  reducer = {
    // If no reducer is provided initially we
    // must start with at least one reducer
    _: (state: State) => state ?? null,
    // cast as unknown because _ doesn't exist on State
  } as unknown as ReducersMapObject<State>,
}: CreateStoreOptions<State> = {}): Store<State> => {
  const currentReducers = {
    ...reducer,
  }
  const reducerSet = new WeakSet()
  const sagasSet = new WeakSet()
  const sagaMiddleware = createSagaMiddleware()
  const store = configureStore({
    devTools: process.env.NODE_ENV !== 'production' || devTools,
    middleware: [sagaMiddleware, ...middleware],
    reducer: currentReducers,
    preloadedState: preloadedState as any,
  }) as Store<State>

  // Dynamically adds a reducer to the store if it has not been added yet.
  store.addReducer = (path, reducer) => {
    if (!reducerSet.has(reducer)) {
      reducerSet.add(reducer)
      set(currentReducers, path, reducer)
      store.replaceReducer(deepCombineReducers(currentReducers))
    }
  }

  // Dynamically adds a saga to the store if it has not been added yet.
  store.addSaga = saga => {
    if (!sagasSet.has(saga)) {
      sagasSet.add(saga)
      sagaMiddleware.run(saga)
    }
  }

  return store
}
