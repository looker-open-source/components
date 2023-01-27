/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import type { SDKRecord, CTable, MeasureMetadata } from '@looker/visualizations-adapters';
import type { ColumnDef } from '@tanstack/table-core';
/**
 * Renders dimension columns from fields.dimensions response.
 * @param measures: an array of measure metadata
 * @param config: vis config object
 * @returns A list of measures which are grouped by their pivot key name where applicable.
 */
export declare const buildMeasureColumns: (measures: MeasureMetadata[], config: CTable) => Record<string, ColumnDef<SDKRecord>[]>;
