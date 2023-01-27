/// <reference types="react" />
/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import type { FilterModel } from '@looker/filter-expressions';
import type { ILookmlModelExploreField } from '@looker/sdk';
interface ThisNextLastProps {
    item: FilterModel;
    field: ILookmlModelExploreField;
    onChange: (id: string, item: Partial<FilterModel>) => void;
}
export declare const ThisNextLast: ({ item, onChange, field }: ThisNextLastProps) => JSX.Element;
export {};
