/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import type { ConfigureStoreOptions, Middleware, ReducersMapObject } from '@reduxjs/toolkit';
import type { Store } from '../types';
export interface CreateStoreOptions<State> extends Partial<ConfigureStoreOptions<State>> {
    middleware?: Middleware[];
    reducer?: ReducersMapObject<State>;
}
/**
 * Creates a store that is pre-configured for Looker usage and is enhanced to dynamically add reducers and sagas.
 *
 * @param preloadedState The initial state to preload into the store.
 * @param reducer The initial reducer that goes along with initial state.
 */
export declare const createStore: <State>({ devTools, middleware, preloadedState, reducer, }?: CreateStoreOptions<State>) => Store<State, import("redux").AnyAction>;
