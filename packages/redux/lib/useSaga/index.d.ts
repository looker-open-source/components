/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import type { Saga } from 'redux-saga';
/**
 * Adds a saga to the nearest store.
 *
 * @param saga The saga to register on the nearest store.
 */
export declare const useSaga: (saga?: Saga<any[]> | undefined) => void;
