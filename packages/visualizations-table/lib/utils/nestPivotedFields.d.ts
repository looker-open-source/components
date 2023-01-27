/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import type { SDKRecord, Fields, PivotMetadata } from '@looker/visualizations-adapters';
import type { ColumnDef } from '@tanstack/table-core';
declare type NestPivotedFieldsProps = {
    pivotList: Fields['pivots'];
    pivotIndex: number;
    nestedPivots: ColumnDef<SDKRecord> | ColumnDef<SDKRecord>[];
    pivotValues?: PivotMetadata;
};
/**
 * Recursively nests a list of columns inside columnHelper.group,
 * each recursive level representing a pivoted column.
 * @param {Object} columnGroups - all the metadata required to nest columns nested columnHelper group
 * @param {Array} columnGroups.pivotList - fields.pivots sdk response
 * @param {number} columnGroups.pivotIndex - which pivot from pivotList to format
 * @param {Object} columnGroups.nestedPivots - the accumulated nesting of columnHelper.group functions
 * @param {Object} columnGroups.pivotValues - optional additional pivot header values, used with grouped measures
 * @returns Column groups for use with Tanstack Table
 */
export declare const nestPivotedFields: ({ pivotList, pivotIndex, nestedPivots, pivotValues, }: NestPivotedFieldsProps) => ColumnDef<SDKRecord>;
export {};
