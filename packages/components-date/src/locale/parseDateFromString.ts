/*

 MIT License

 Copyright (c) 2021 Looker Data Sciences, Inc.

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
