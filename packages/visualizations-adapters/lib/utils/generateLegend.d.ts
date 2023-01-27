/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import type { CAll, Fields } from '../types';
export declare type Legend = {
    dimension: string;
    measure: string;
};
export declare const generateLegend: (fields: Fields | undefined, config: Partial<CAll>) => Legend;
