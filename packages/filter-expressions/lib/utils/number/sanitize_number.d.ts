/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import type { FilterModel } from '../../types';
export declare const sanitizeNumber: (item: FilterModel) => {
    id: string;
    is: boolean;
    type: "=";
    value: any;
    bounds?: undefined;
    low?: undefined;
    high?: undefined;
} | {
    id: string;
    is: boolean;
    type: ">=" | "<=" | ">" | "<";
    value: any[];
    bounds?: undefined;
    low?: undefined;
    high?: undefined;
} | {
    id: string;
    is: boolean;
    type: "between";
    bounds: any;
    low: any;
    high: any;
    value?: undefined;
} | {
    type: string;
    id: string;
    is: boolean;
    date?: import("../../types").FilterDateTimeModel | undefined;
    start?: import("../../types").FilterDateTimeModel | undefined;
    end?: import("../../types").FilterDateTimeModel | undefined;
    value?: undefined;
    bounds?: undefined;
    low?: undefined;
    high?: undefined;
};
