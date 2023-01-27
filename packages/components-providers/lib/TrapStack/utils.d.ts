/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import type { TrapMap } from './types';
export declare const getActiveTrap: <O = unknown>(trapMap: TrapMap<O>) => import("./types").Trap<O> | undefined;
