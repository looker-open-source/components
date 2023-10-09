/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import type { FilterExpressionType } from '@looker/filter-expressions';
import type { UserAttributeValueMap } from '../types';

const filterTypeMap: Partial<Record<FilterExpressionType, string>> = {
  number: 'number',
  date: 'datetime',
  date_time: 'datetime',
};

export const getUserAttributeType = (
  filterType: FilterExpressionType
): string => filterTypeMap[filterType] || 'string';

export const getUserAttributes = (
  userAttributeValueMap: UserAttributeValueMap,
  filterType: FilterExpressionType
) => userAttributeValueMap?.[getUserAttributeType(filterType)];
