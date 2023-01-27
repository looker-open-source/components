/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import type { SDKRecord, TableProps } from '@looker/visualizations-adapters';
import type { ColumnDef } from '@tanstack/table-core';
declare type FlatColumnsProps = Pick<TableProps, 'config' | 'fields'>;
/**
 * Renders a flat array of column definitions to render
 * a single header row. For use with non-pivoted queries.
 *
 * @param {Object} props
 * @param {Object} props.fields - Fields configuration from the sdk response
 * @param {Object} props.config - A vis config object
 * @returns an array of column configured for use with tanstack table
 */
export declare const buildFlatColumns: ({ fields, config, }: FlatColumnsProps) => ColumnDef<SDKRecord>[];
export {};
