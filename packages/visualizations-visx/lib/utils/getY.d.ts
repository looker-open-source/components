/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import type { SDKRecord } from '@looker/visualizations-adapters';
/**
 * Get X value from sdk data response
 *
 * @param d a single tabular formatted data point
 * @param i is the position in the data response hash
 * @returns a number
 */
export declare const getY: (d: SDKRecord, i: number) => any;
