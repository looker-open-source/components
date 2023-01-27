/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import type { SDKRecord } from '@looker/visualizations-adapters';
import type { Header, Table } from '@tanstack/react-table';
/**
 * If any header elements span multiple columns, we need
 * to fill in empty array elements to keep data columns aligned
 * with header columns.
 * @param table: a tanstack table object
 * @returns An array of header rows that all have the same amount of columns.
 */
export declare const normalizeHeaderColumns: (table: Table<SDKRecord>) => {
    headers: (Header<SDKRecord, unknown> | null)[];
    id: string;
    depth: number;
}[];
