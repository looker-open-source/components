/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import type { CAll, ConfigHelper, SupportedChartTypes, ValueOf, KnownChartTypes } from '../types';
export declare const CHART_TYPE_MAP: Record<KnownChartTypes | '', ValueOf<SupportedChartTypes>>;
/**
 * This function should be ran BEFORE all other config helpers.
 * It normalizes the chart type names (i.e. 'line' instead of 'looker_line')
 */
export declare const normalizeChartTypes: ConfigHelper<CAll>;
