/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import type { StringFilterType, TierFilterType } from './filter_type';

export interface FilterInterval {
  value?: number;
  unit: string;
  complete?: boolean;
  type?: string;
}

export interface FilterDateTimeModel {
  year: number;
  month: number;
  day: number;
  hour?: number;
  minute?: number;
  second?: number;
}

type ConditionalString<T extends string> = T extends
  | StringFilterType
  | TierFilterType
  ? { value?: string[] }
  : { value?: number | number[] | string[] };

/**
 * Interface for the Filter Item properties
 */
export type FilterModel<T extends string = string> = ConditionalString<T> &
  Partial<Omit<FilterDateTimeModel, 'day' | 'month'>> & {
    id: string;
    type: T;
    is: boolean;
    expression?: string;
    attributeName?: string;
    attributeValue?: number | string;

    // Date & Location
    unit?: string;

    // Date
    date?: FilterDateTimeModel;
    start?: FilterDateTimeModel;
    end?: FilterDateTimeModel;
    startInterval?: FilterInterval | string;
    endInterval?: FilterInterval | string;
    intervalType?: string;
    complete?: boolean;
    range?: string;
    fromnow?: boolean;
    day?: string | number;
    month?: string | number;
    from?: Date;
    to?: Date;

    // Number
    bounds?: string;
    low?: number | string;
    high?: number | string;

    // Location
    lon?: number;
    lat?: number;
    lon1?: number;
    lat1?: number;
    distance?: number;
  };
