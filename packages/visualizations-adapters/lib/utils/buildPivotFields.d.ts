/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import type { MeasureMetadata, Fields, Pivots } from '../types';
/**
 * Creates a new fields metadata object, replacing the existing fields.measures
 * property with pivot metadata objects. These pivot metadata objects are identical
 * to normal measure metadata objects from the Looker SDK, but use the query's
 * pivot values to derive their label, key and other relevant metadata.
 */
export declare const buildPivotFields: ({ fields, pivots, }: {
    fields: Fields;
    pivots: Pivots;
}) => {
    pivots: import("../types").DimensionMetadata[];
    dimensions: import("../types").DimensionMetadata[];
    measures: MeasureMetadata[];
};
