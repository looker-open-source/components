/// <reference types="react" />
/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import type { FilterModel } from '@looker/filter-expressions';
interface OnDateParamProps {
    item: FilterModel;
    onChange: (id: string, item: Partial<FilterModel>) => void;
}
export declare const OnDate: ({ item, onChange }: OnDateParamProps) => JSX.Element;
export {};
