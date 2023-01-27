/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import { SwapVert } from '@styled-icons/material';
import type { TFunction } from 'react-i18next';
import type { ColumnSort } from '@tanstack/table-core';
declare type StyledIcon = typeof SwapVert;
declare type SortAssets = {
    ariaSort: 'none' | 'ascending' | 'descending' | 'other';
    SortIcon: StyledIcon;
    sortText: string;
};
/**
 * Returns appropriate Icon and label text to render
 * based on the given ColumnSort values
 * @param t a react-i18next translation function
 * @param columnSortState a configuration object that only exists if column is already sorted
 * @returns
 */
export declare const getSortAssets: (t: TFunction<string | string[]>, columnSortState?: ColumnSort | undefined) => SortAssets;
export {};
