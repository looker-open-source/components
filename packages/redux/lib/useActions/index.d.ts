/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import type { Slice } from '@reduxjs/toolkit';
/**
 * Binds a slice's action creators to dispatch().
 *
 * @param slice The slice who's actions we will pass to bindActionCreators.
 */
export declare const useActions: (slice: Slice) => any;
