/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import { formatDateString } from '@looker/components'

// hardcoding yyyy/MM/dd for legacy reasons
export const FILTERS_DATE_FORMAT = 'yyyy/MM/dd'

export const formatDate = (date: Date) => {
  return formatDateString(date, FILTERS_DATE_FORMAT)
}
