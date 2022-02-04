/*

 MIT License

 Copyright (c) 2022 Looker Data Sciences, Inc.

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all
 copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 SOFTWARE.

 */

import type { Fields } from '@looker/visualizations-adapters'
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
  if (!isDateQuery(fields)) {
    return dateString
  }

  const { type } = fields.dimensions[0]

  const dateObj = parseISO(dateString)

  if (type === 'date_year') {
    return format(dateObj, 'yyyy')
  } else if (type === 'date_month') {
    return format(dateObj, 'MMMM \u2018yy')
  } else if (type === 'date_date' || type === 'date_week') {
    return format(dateObj, 'LLL d')
  } else {
    // fallback for unsupported date types
    return dateString
  }
}
