/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import type { FilterModel } from '../../types';

export const sanitizeNumber = (item: FilterModel): FilterModel => {
  const {
    id = '0',
    is = true,
    type,
    value = [],
    bounds = '[]',
    high,
    low,
  } = item;
  const arrayValue = Array.isArray(value) ? value : [value];
  const [firstValue] = arrayValue;
  switch (type) {
    case '=':
      return { id, is, type, value };
    case '>':
    case '<':
    case '>=':
    case '<=':
      return {
        id,
        is,
        type,
        value: firstValue !== undefined ? arrayValue.slice(0, 1) : [],
      };
    case 'between':
      return {
        id,
        is,
        type,
        bounds,
        low: low ?? firstValue,
        high: high ?? firstValue,
      };
    case 'null':
      return { id, is, type };
    default:
      return { ...item, type };
  }
};
