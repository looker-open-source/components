/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import type { CArea, CLine } from '../adapters';
import type { ConfigHelper } from '../types';
/**
 * Convert 'stacking' prop to 'positioning' and set Area chart default value
 */
export declare const linePositioning: ConfigHelper<CArea | CLine>;
