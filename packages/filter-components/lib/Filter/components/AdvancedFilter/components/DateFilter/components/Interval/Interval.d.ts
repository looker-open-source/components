/// <reference types="react" />
/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import type { FilterModel } from '@looker/filter-expressions';
import type { ILookmlModelExploreField } from '@looker/sdk';
export interface IntervalItemProps {
    value: number;
    unit: string;
}
interface IntervalParamProps {
    placement?: 'middle' | 'right';
    item: FilterModel;
    suffix?: string;
    onChange: (item: IntervalItemProps) => void;
    field: ILookmlModelExploreField;
}
export declare const Interval: ({ placement, item: { unit, value }, onChange, field, }: IntervalParamProps) => JSX.Element;
export {};
