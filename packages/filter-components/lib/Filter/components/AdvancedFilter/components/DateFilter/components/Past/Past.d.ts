/// <reference types="react" />
/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import type { FilterModel } from '@looker/filter-expressions';
import type { ILookmlModelExploreField } from '@looker/sdk';
interface PastProps {
    item: FilterModel;
    onChange: (id: string, item: Partial<FilterModel>) => void;
    field: ILookmlModelExploreField;
}
export declare const Past: ({ item, onChange, field }: PastProps) => JSX.Element;
export {};
