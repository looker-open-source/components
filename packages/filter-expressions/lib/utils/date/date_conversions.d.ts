/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import type { FilterDateTimeModel } from '../../types';
export declare const dateToFilterDateTimeModel: (date?: Date) => {
    year: number;
    month: number;
    day: number;
    hour: number;
    minute: number;
    second: number;
};
export declare const filterDateTimeModelToDate: ({ year, month, day, hour, minute, second, }: FilterDateTimeModel) => Date;
export declare const addDays: (date: Date, days: number) => Date;
/**
 * Removes time (hour, minute and second) part from the filter date time model.
 * @param model The filter date time model to remove time part from.
 */
export declare const clearTimeFilterDateTimeModel: (model: FilterDateTimeModel) => {
    year: number;
    month: number;
    day: number;
};
/**
 * Returns true if model has defined time (hour, minute and second) part.
 * @param model The filter date time model to check defined time part from.
 */
export declare const hasTimeFilterDateTimeModel: (model: FilterDateTimeModel | undefined) => boolean;
