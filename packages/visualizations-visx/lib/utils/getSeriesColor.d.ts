/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import type { Theme } from '@looker/components';
import type { CSeriesBasic } from '@looker/visualizations-adapters';
/**
 * Sets chart color based on series configuration, with theme fallback
 *
 * @param series a series configuration object
 * @param lookerTheme our default theme context
 * @returns a color code
 */
export declare const getSeriesColor: (series: CSeriesBasic, lookerTheme: Theme) => string;
