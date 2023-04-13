/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import type { CaseReducerActions, Slice } from '@reduxjs/toolkit';
import type { Saga } from 'redux-saga';
declare type ExtractReducer<T> = T extends Slice<any, infer R> ? R : never;
declare type ExtractState<T> = T extends Slice<infer S, any> ? S : never;
/**
 * Returns hooks that are automatically bound to your typed state, slices and sagas.
 *
 * @param slice The slice containing reducers to register on the nearest store.
 * @param saga The saga to register on the nearest store.
 */
export declare const createSliceHooks: <T extends Slice<any, import("@reduxjs/toolkit").SliceCaseReducers<any>, string>>(slice: T, saga?: Saga<any[]> | undefined) => {
    useActions: () => CaseReducerActions<ExtractReducer<T>>;
    useStoreState: () => ExtractState<T>;
};
export declare const setupSlice: <T extends Slice<any, import("@reduxjs/toolkit").SliceCaseReducers<any>, string>>({ store, slice, saga, }: {
    store: any;
    slice: T;
    saga?: Saga<any[]> | undefined;
}) => void;
export {};
