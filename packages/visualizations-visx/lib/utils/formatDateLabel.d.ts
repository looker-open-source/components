/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import type { Fields } from '@looker/visualizations-adapters';
declare type FormatDateLabelProps = {
    dateString: string;
    fields: Fields;
    timespan?: number;
};
/**
 * Converts a Looker date string into a presentable date label based on
 * the date dimension's type and the data's total timespan.
 */
export declare const formatDateLabel: ({ dateString, fields, }: FormatDateLabelProps) => string;
export {};
