/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import type { DateFilterType, FilterModel } from '@looker/filter-expressions'
import { sanitizeDate } from '@looker/filter-expressions'

/**
 * Used when adding a new row to an advanced date filter
 * @param item The item in the previous row
 * @returns An item based on the previous item but with a conventional default, e.g. 1 month
 */
export const newDateItem = ({
  value,
  unit,
  ...restItem
}: FilterModel<DateFilterType>) => {
  return sanitizeDate(restItem)
}
