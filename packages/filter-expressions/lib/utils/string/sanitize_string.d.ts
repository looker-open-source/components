/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import type { FilterModel, UserAttributeWithValue } from '../../types';
export declare const sanitizeString: (item: FilterModel, userAttributes?: UserAttributeWithValue[]) => {
    id: string;
    is: boolean;
    type: "match";
    value: any;
    attributeName: string;
    attributeValue: string;
} | {
    attributeName: string;
    attributeValue: string;
    id: string;
    type: string;
    is: boolean;
    date?: import("../../types").FilterDateTimeModel | undefined;
    start?: import("../../types").FilterDateTimeModel | undefined;
    end?: import("../../types").FilterDateTimeModel | undefined;
    value?: undefined;
};
