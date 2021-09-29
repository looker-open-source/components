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

import type { FC } from 'react'
import React from 'react'
import type { Locale } from 'date-fns'
import type { DateFormats, DateTimeOptions } from '../locale'
import { formatDateString } from '../locale'
import type { Locales } from '../locale/deprecated'
import { getLocale } from '../locale/deprecated'

export type DateTimeFormatProps = {
  children?: Date
  format?: DateFormats | string
  // TODO delete Locales when enum is removed
  locale?: Locale | Locales
  timeZone?: string
}

type DateTimeFormatExtensionProps = DateTimeFormatProps & DateTimeOptions

// TODO delete when Locales enum is removed
const localeIsString = (
  locale: DateTimeFormatProps['locale']
): locale is Locales => {
  return typeof locale === 'string'
}

export const DateTimeFormat: FC<DateTimeFormatExtensionProps> = ({
  children = new Date(Date.now()),
  date = true,
  format = 'medium',
  locale: propsLocale,
  time = true,
  timeZone,
}) => {
  const locale = localeIsString(propsLocale)
    ? getLocale(propsLocale)
    : propsLocale

  try {
    return (
      <>
        {formatDateString(children, locale, format, timeZone, { date, time })}
      </>
    )
  } catch (error) {
    return <>{error}</>
  }
}
