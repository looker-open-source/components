/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import type { SDKRecord, TableProps } from '@looker/visualizations-adapters';
import type { ColumnDef } from '@tanstack/table-core';
declare type GroupedColumnProps = Required<Pick<TableProps, 'fields' | 'pivots' | 'config'>>;
/**
 * Configures nested/grouped table headers
 * which are displayed for pivoted queries.
 * @param props: fields and pivots metadata
 * @returns nested column configuration for tanstack table
 */
export declare const buildGroupedColumns: (props: GroupedColumnProps) => ColumnDef<SDKRecord>[];
export {};
