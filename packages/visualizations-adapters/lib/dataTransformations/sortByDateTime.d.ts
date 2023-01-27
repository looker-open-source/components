/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import type { ConfigHelper, CAll } from '../types';
/**
 * Data transformation enforces chronological order on the dataset
 * when dealing with a timeframe-based dataset with a single dimension.
 */
export declare const sortByDateTime: ConfigHelper<CAll>;
