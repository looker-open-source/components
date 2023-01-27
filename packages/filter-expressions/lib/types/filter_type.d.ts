/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
export declare type FilterExpressionType = 'number' | 'string' | 'location' | 'date' | 'date_time' | 'tier';
export declare const dateFilterTypes: readonly ["null", "anyvalue", "notnull", "past", "pastAgo", "this", "next", "last", "year", "month", "before", "after", "range", "thisRange", "on", "relative", "user_attribute", "day"];
export declare type DateFilterType = typeof dateFilterTypes[number];
export declare const numberFilterTypes: readonly ["=", ">", "<", ">=", "<=", "between", "null", "user_attribute"];
export declare type NumberFilterType = typeof numberFilterTypes[number];
export declare const stringFilterTypes: readonly ["null", "contains", "match", "startsWith", "endsWith", "blank", "user_attribute"];
export declare type StringFilterType = typeof stringFilterTypes[number];
export declare const tierFilterTypes: readonly ["anyvalue", "match", "user_attribute"];
export declare type TierFilterType = typeof tierFilterTypes[number];
export declare const locationFilterTypes: readonly ["location", "circle", "box", "anyvalue", "null", "notnull", "user_attribute"];
export declare type LocationFilterType = typeof locationFilterTypes[number];
