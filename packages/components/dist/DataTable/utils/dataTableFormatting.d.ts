/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import type { DataTableColumns } from '..';
export declare const getNumericColumnIndices: (columns: DataTableColumns, visibleColumns: string[]) => number[];
export declare const numericColumnCSS: (columnIndices: number[]) => import("styled-components").FlattenSimpleInterpolation;
