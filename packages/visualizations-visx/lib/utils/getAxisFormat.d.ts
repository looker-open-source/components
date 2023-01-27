/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import type { Fields, CCartesian } from '@looker/visualizations-adapters';
/**
 * Sets format of y-axis based on value_format property within config.series object
 *
 * @param config a configuration object
 * @returns a string for numeral to use to format
 */
export declare const getYAxisFormat: (config: CCartesian) => string | undefined;
/**
 * Sets format of x-axis based on value_format property within fields.dimensions object
 *
 * @param fields a fields object
 * @returns a string for numeral to use to format
 */
export declare const getXAxisFormat: (fields: Fields) => string | null | undefined;
