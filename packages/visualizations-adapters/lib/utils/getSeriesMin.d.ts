/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import type { SDKRecord } from '../types';
/**
 * Returns the smallest numeric value from a data array for a specific series
 *
 * Used by Scatter chart to calibrate the size-by functionality
 */
export declare const getSeriesMin: (seriesName: string, data: SDKRecord[]) => number;
