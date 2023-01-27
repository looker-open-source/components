/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import type { CCartesian, Fields } from '@looker/visualizations-adapters';
/**
 * Return the properly formatted field name when provided a series key.
 *
 * @param fields the Fields object as returned by the sdk
 * @param series the config.series object or array
 * @param item a string representing the field name
 * @returns string
 */
export declare const seriesLabelFormatter: (fields: Fields, config: CCartesian, item: string) => string;
