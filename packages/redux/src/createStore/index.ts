/*

 MIT License

 Copyright (c) 2023 Google LLC

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all
 copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 SOFTWARE.

 */

import type {
  ReducersMapObject,
  PreloadedState,
  CombinedState,
} from '@reduxjs/toolkit';
import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import type { CreateStoreOptions, CreateStoreReturn } from '../types';
import set from 'lodash/set';
import unset from 'lodash/unset';
import { deepCombineReducers } from '../deepCombineReducers';

/**
 * Creates a store that is pre-configured for Looker usage and is enhanced to dynamically add reducers and sagas.
 *
 * @param preloadedState The initial state to preload into the store.
 * @param reducer The initial reducer that goes along with initial state.
 */
export const createStore = <State>({
  devTools = false,
  middleware = [],
  preloadedState = {} as PreloadedState<CombinedState<State>>,
  reducer = {} as ReducersMapObject<State>,
}: CreateStoreOptions<State> = {}): CreateStoreReturn<State> => {
  const currentReducers = {
    // Default reducer because if no reducers are preloaded, Redux will error.
    _: () => null,

    // Create reducers for any preloadedState just in case reducers for it does
    // not exist yet. This eases testability and also is a safe default where
    // Redux falls short.
    ...Object.entries(preloadedState).reduce((p, [key, state]) => {
      p[key as keyof State] = () => state as State[keyof State];
      return p;
    }, {} as ReducersMapObject<State>),

    // Pass in any initial reducers. This overrides preloadedState reducers
    // intentionally because they would only be added as defaults. Adding
    // reducers here also helps to ensure parent / child rendering conflicts
    // don't occur.
    ...reducer,
  } as ReducersMapObject<State>;
  const reducerMap = new WeakMap();
  const sagaMap = new WeakMap();
  const sagaMiddleware = createSagaMiddleware();
  const store = configureStore({
    devTools: process.env.NODE_ENV !== 'production' || devTools,
    middleware: [sagaMiddleware, ...middleware],
    reducer: currentReducers,
    preloadedState: preloadedState as any,
  }) as CreateStoreReturn<State>;

  // Dynamically adds a reducer - if it hasn't already been added - to the store.
  store.addReducer = (path, reducer) => {
    if (!reducerMap.has(reducer)) {
      reducerMap.set(reducer, path);
      set(currentReducers, path, reducer);
      store.replaceReducer(deepCombineReducers(currentReducers));
    }
  };

  // Dynamically removes a reducer - if it exists - from the store.
  store.removeReducer = reducer => {
    const path = reducerMap.get(reducer);
    if (path) {
      unset(currentReducers, path);
      reducerMap.delete(reducer);
      store.replaceReducer(deepCombineReducers(currentReducers));
      // Although state is _supposed_ to be immutable, we can take advantage
      // of the fact that it is mutable and not introduce any overhead. There
      // is no need to dispatch and cause renders because all components
      // using this state will have been unmounted.
      unset(store.getState(), path);
    }
  };

  // Dynamically adds a saga - if it hasn't already been added - to the store.
  store.addSaga = saga => {
    if (!sagaMap.has(saga)) {
      sagaMap.set(saga, sagaMiddleware.run(saga));
    }
  };

  // Dynamically removes a saga - if it exists - from the store.
  store.removeSaga = saga => {
    sagaMap.get(saga)?.cancel();
    sagaMap.delete(saga);
  };

  // Enables a runtime check in <Store /> so we can make sure we are using
  // a compatible store down the tree.
  store.isLookerRedux = true;

  return store;
};
