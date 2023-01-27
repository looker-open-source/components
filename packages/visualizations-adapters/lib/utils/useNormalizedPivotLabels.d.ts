/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import type { Pivots } from '../types';
export declare const useNormalizedPivotLabels: (pivots?: Pivots | undefined) => {
    label: string;
    data: Record<string, string | null>;
    key: string;
    is_total: boolean;
    labels: Record<string, string>;
    metadata?: Record<string, {
        value: string;
    }> | undefined;
    sort_values?: Record<string, string> | undefined;
}[] | undefined;
