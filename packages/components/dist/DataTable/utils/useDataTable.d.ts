/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
/// <reference types="react" />
import type { DataTableColumns } from '../Column';
import type { DataTableData } from './sort_utils';
export declare const useDataTable: (data: DataTableData, columns: DataTableColumns, caption: string) => JSX.Element;
