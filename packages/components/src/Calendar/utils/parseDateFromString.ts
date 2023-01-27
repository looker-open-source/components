/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import isValid from 'date-fns/isValid'
import en from 'date-fns/locale/en-US'
import parse from 'date-fns/parse'
import type { DateFormats } from './formatDateString'

export const formatYear = (date: Date): number => {
  const year = date.getFullYear()
  if (year < 100) {
    // convert 2-digit year (2/2/20) to 4-digit year (2/2/2020)
    return year + 2000
  } else if (year < 1000) {
    // convert 3-digit partial-year (2/2/201) to 4-digit year (2/2/2010)
    return parseInt(`${year}0`)
  }
  return year
}

export const parseDateFromString = (
  value: string,
  locale: Locale = en,
  format: DateFormats | string = 'P'
): Date | false => {
  // Date format 'P' represents localized dates in date-fns
  const parsedValue = parse(value, format, new Date(), {
    locale,
  })

  parsedValue.setFullYear(formatYear(parsedValue))

  return isValid(parsedValue) && parsedValue
}
