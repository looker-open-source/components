/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import type { ChartData, Fields } from '@looker/visualizations-adapters';
export declare const dimensionToDate: (data: ChartData, fields: Fields) => ChartData | {
    dimension: Date;
}[];
