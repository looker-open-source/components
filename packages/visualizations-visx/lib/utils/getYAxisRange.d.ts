/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import type { ContinuousDomain } from '@visx/scale';
import type { GetDataRangeProps } from '@looker/visualizations-adapters';
/**
 * Returns a 2-tuple where the first element is the y-axis min
 * and the second element is the y-axis max
 */
export declare const getYAxisRange: ({ config, data, fields, }: GetDataRangeProps) => ContinuousDomain;
