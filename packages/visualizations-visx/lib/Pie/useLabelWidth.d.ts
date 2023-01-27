/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import type { CPie } from '@looker/visualizations-adapters';
export declare const MIN_LABEL_SPACE = 90;
/**
 * Utility function measures the actual dom space required for the longest label in
 * a pie chart data set.
 *
 * @param measureTotal the total value represented by the pie chart data
 * @param keyValData the data used to render a pie chart
 * @param legend the legend config
 * @returns the width in pixels of the longest label
 */
export declare const useLabelWidth: (measureTotal: number, keyValData: Record<string, number>, legend: CPie['legend']) => number;
