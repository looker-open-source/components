/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import type { Reducer, AnyAction, Action } from 'redux';
export declare type DeepReducersMapObject<S = any, A extends Action = AnyAction> = {
    [K in keyof S]: Reducer<S[K], A> | DeepReducersMapObject<S[K]>;
};
declare type HelltoolActionType = any;
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
export declare const deepCombineReducers: <S>(reducers: DeepReducersMapObject<S, any> | Reducer<S, any>) => Reducer<S, any>;
export {};
