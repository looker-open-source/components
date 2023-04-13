/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import type { Slice } from '@reduxjs/toolkit';
/**
 * Adds a slice to the nearest store.
 *
 * @param slice The slice containing reducers to register on the nearest store.
 */
export declare const useSlice: (slice: Slice) => void;
