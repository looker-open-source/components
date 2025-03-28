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

import type { IError, IValidationError } from '@looker/sdk';
import type {
  Action,
  AnyAction,
  CaseReducerActions,
  ConfigureStoreOptions,
  EnhancedStore,
  Middleware,
  Reducer,
  ReducersMapObject,
  Slice,
  SliceCaseReducers,
} from '@reduxjs/toolkit';
import type { Saga } from 'redux-saga';

/**
 * The options passed to createSliceHooks().
 */
export type CreateSliceHooksOptions<
  State,
  // This is required for RtSlice
  Actions extends SliceCaseReducers<State>
> = {
  autoExpire?: boolean;
  saga?: Saga;
  slice: Slice<State, Actions>;
};

/**
 * The return value from createSliceHooks().
 */
export type CreateSliceHooksReturn<
  State,
  Actions extends CaseReducerActions<SliceCaseReducers<State>>
> = {
  setupStore: (store: CreateStoreReturn<State>) => void;
  useSlice: () => readonly [State, Actions];
  /**
   * @deprecated Use useSlice and destructure [_, actions] instead.
   */
  useActions: () => Actions;
  /**
   * @deprecated Use useSlice and destructure [state] instead.
   */
  useStoreState: () => State;
};

/**
 * The options passed to createFetchHooks().
 */
export type CreateFetchHooksOptions<DataType, FetchArgs> = {
  initialState: DataType;
  fetch: (params: FetchArgs) => Promise<DataType>;
  name: string;
};

/**
 * The return value from createFetchHooks().
 */
export type CreateFetchHooksReturn<DataType, FetchArgs> = {
  setupStore: (store: CreateStoreReturn<FetchState<DataType>>) => void;
  useSlice: () => readonly [FetchStateItem<DataType>, FetchActions<FetchArgs>];
};

/**
 * Options given to createStore.
 */
export interface CreateStoreOptions<State>
  extends Partial<ConfigureStoreOptions<State>> {
  middleware?: Middleware[];
  reducer?: ReducersMapObject<State>;
}

/**
 * The custom, enhanced store returned from createStore.
 */
export type CreateStoreReturn<
  State,
  A extends Action<any> = AnyAction
> = EnhancedStore<State, A> & {
  isLookerRedux: true;
  addReducer: <S, A extends Action<any>>(
    path: string | string[],
    reducer: ReducersMapObject<S, A> | Reducer<S, A>
  ) => void;
  removeReducer: (reducer: Reducer) => void;
  addSaga: (saga: Saga) => void;
  removeSaga: (saga: Saga) => void;
};

/**
 * This utility type makes overriding actions for composite implementations
 * simpler than attempting to extract the tuple value to get the argument and
 * return types.
 */
export type FetchActions<FetchArgs> = {
  fetch: (params?: FetchArgs) => void;
};

/**
 * Read/GET requests can use any number of concurrent arguments across
 * components so all endpoint states are stored on a key that matches the
 * payload for the SDK.
 */
export type FetchState<DataType> = {
  [key: string]: FetchStateItem<DataType>;
};

/**
 * The state maintained in redux and returned from a selector.
 */
export type FetchStateItem<DataType> = {
  abortController: AbortController;
  completed: boolean;
  data: DataType;
  error: IError | IValidationError | null;
  loading: boolean;
  expired: boolean;
};
