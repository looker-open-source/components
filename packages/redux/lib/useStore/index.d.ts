/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import type { Store } from '../types';
export declare function useStore<S = any>(): Store<S, import("redux").AnyAction>;
