/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import type { EnhancedStore, ReducersMapObject, Reducer, Action, AnyAction } from '@reduxjs/toolkit';
import type { Saga } from 'redux-saga';
/**
 * The enhanced store type that types the new methods we enhance it with.
 */
export declare type Store<S, A extends Action<any> = AnyAction> = EnhancedStore<S, A> & {
    /**
     * dynamically add reducer to a specific path.  Example
     * store.addReducer('scenes.admin', newReducer)
     */
    addReducer: <S, A extends Action<any>>(path: string | string[], reducer: ReducersMapObject<S, A> | Reducer<S, A>) => void;
    addSaga: (saga: Saga) => void;
};
