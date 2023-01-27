/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
/// <reference types="react" />
import type { DateFilterType } from '@looker/filter-expressions';
import type { FilterParamProps } from '../../../../types/filter_param_props';
export declare const DateFilter: ({ item, filterType, onChange, onAdd, showAdd, showMatchesAdvanced, validationMessage, userAttributes, field, ...rest }: FilterParamProps<DateFilterType>) => JSX.Element;
