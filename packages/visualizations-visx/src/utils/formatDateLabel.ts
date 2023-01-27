/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import type { Fields } from '@looker/visualizations-adapters'
import { isValid } from 'date-fns'
import format from 'date-fns/format'
import parseISO from 'date-fns/parseISO'
import { isDateQuery } from './isDateQuery'

type FormatDateLabelProps = {
  dateString: string
  fields: Fields
  timespan?: number
}

/**
 * Converts a Looker date string into a presentable date label based on
 * the date dimension's type and the data's total timespan.
 */
export const formatDateLabel = ({
  dateString,
  fields,
}: FormatDateLabelProps) => {
  const dateObj = parseISO(dateString)

  if (isDateQuery(fields) && isValid(dateObj)) {
    const { type } = fields.dimensions[0]

    if (type === 'date_year') {
      return format(dateObj, 'yyyy')
    } else if (type === 'date_month') {
      return format(dateObj, 'MMMM \u2018yy')
    } else if (type === 'date_date' || type === 'date_week') {
      return format(dateObj, 'LLL d')
    }
  }

  // fallback for unsupported date types
  return dateString
}
