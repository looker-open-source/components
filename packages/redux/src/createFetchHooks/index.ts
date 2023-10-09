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
  CreateFetchHooksOptions,
  CreateFetchHooksReturn,
  FetchStateItem,
  FetchState,
} from '../types';
import type { PayloadAction, Slice } from '@reduxjs/toolkit';
import { useRef } from 'react';
import { call, put, takeEvery } from 'typed-redux-saga/macro';
import { createSlice, createSliceHooks } from '..';

function toString<T>(params: T): string {
  return typeof params === 'string' ? params : JSON.stringify(params);
}

function handleRequest<DataType, FetchArgs>({
  fetch,
  slice,
}: {
  fetch: (params: FetchArgs) => Promise<DataType>;
  slice: Slice<FetchState<DataType>>;
}) {
  return function* (action: PayloadAction<FetchArgs>) {
    const request_key = toString(action.payload);
    try {
      const response = yield* call(() => fetch(action.payload));
      yield put(slice.actions.success({ request_key, response }));
    } catch (error: any) {
      if (error.status === 401) {
        yield put(slice.actions.expired({ request_key }));
      } else if (error.status === 499) {
        // handle aborting
      } else {
        yield put(
          slice.actions.failure({ request_key, response: error.message })
        );
      }
    }
    yield put(slice.actions.ended({ request_key }));
  };
}

function getDefaultState<DataType>(
  initialState: DataType
): FetchStateItem<DataType> {
  return {
    abortController: new AbortController(),
    data: initialState,
    error: null,
    expired: false,
    loading: false,
  };
}

export const createFetchHooks = <DataType, FetchArgs>(
  options: CreateFetchHooksOptions<DataType, FetchArgs>
): CreateFetchHooksReturn<DataType, FetchArgs> => {
  const slice = createSlice({
    initialState: {} as FetchState<DataType>,
    name: options.name,
    reducers: {
      request: (state, action) => ({
        ...state,
        [toString(action.payload)]: {
          ...state[toString(action.payload)],
          loading: true,
          error: null,
        },
      }),
      success: (state, action) => ({
        ...state,
        [action.payload.request_key]: {
          ...state[action.payload.request_key],
          data: action.payload.response,
        },
      }),
      ended: (state, action) => ({
        ...state,
        [action.payload.request_key]: {
          ...state[action.payload.request_key],
          loading: false,
        },
      }),
      failure: (state, action) => ({
        ...state,
        [action.payload.request_key]: {
          ...state[action.payload.request_key],
          error: action.payload.response,
        },
      }),
      expired: (state, action) => ({
        ...state,
        [action.payload.request_key]: {
          ...state[action.payload.request_key],
          expired: true,
        },
      }),
    },
  });

  const hooks = createSliceHooks({
    saga: function* saga() {
      yield takeEvery(
        `${slice.name}/request` as any,
        handleRequest<DataType, FetchArgs>({ fetch: options.fetch, slice })
      );
    },
    slice,
  });

  function useSlice(
    hookParams: FetchArgs = { request: {} } as unknown as FetchArgs
  ) {
    const ref = useRef(toString(hookParams));
    const [state, actions] = hooks.useSlice();
    return [
      {
        ...getDefaultState<DataType>(options.initialState),
        ...state[ref.current],
      },
      {
        fetch: (fetchParams: FetchArgs = hookParams) => {
          ref.current = toString(fetchParams);
          actions.request(fetchParams);
        },
      },
    ] as const;
  }

  return {
    ...hooks,
    useSlice,
  };
};
