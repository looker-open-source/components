/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
/// <reference types="react" />
import type { NumberFilterType } from '@looker/filter-expressions';
import type { FilterParamProps } from '../../../../types/filter_param_props';
export declare const NumberFilter: ({ item, filterType, onChange, validationMessage, userAttributes, showMatchesAdvanced, ...rest }: FilterParamProps<NumberFilterType>) => JSX.Element;
