/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import type { Slice } from '@reduxjs/toolkit';
import type { Saga } from 'redux-saga';
/**
 * Adds a saga and slice to the nearest store and returns the root state for the slice.
 *
 * @param slice The slice containing reducers to register on the nearest store.
 * @param saga The saga to register on the nearest store.
 */
export declare const useStoreState: <SliceState>(slice: Slice, saga?: Saga<any[]> | undefined) => SliceState;
