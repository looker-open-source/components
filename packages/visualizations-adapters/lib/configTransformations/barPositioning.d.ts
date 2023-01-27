/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import type { CBar, CColumn } from '../adapters';
import type { ConfigHelper } from '../types';
/**
 * Convert 'stacking' prop to 'positioning' and set Bar chart default value
 */
export declare const barPositioning: ConfigHelper<CBar | CColumn>;
