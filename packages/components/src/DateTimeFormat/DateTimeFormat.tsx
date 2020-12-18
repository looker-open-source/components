/*

 MIT License

 Copyright (c) 2020 Looker Data Sciences, Inc.

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

import React, { FC } from 'react'
import repeat from 'lodash/repeat'
import trim from 'lodash/trim'
import { LocaleCodes, Locales, formatDateString } from '../utils/i18n'

type DateFormats = 'short' | 'medium' | 'long' | 'full'

export interface DateTimeFormatProps {
  children?: Date
  format?: DateFormats
  locale?: LocaleCodes
  timeZone?: string
}

interface DateTimeFormatExtensionProps extends DateTimeFormatProps {
  date?: boolean
  time?: boolean
}

export interface ExtendedDateTimeFormatOptions
  extends Intl.DateTimeFormatOptions {
  dateStyle?: DateFormats
  timeStyle?: DateFormats
}

export const DateTimeFormat: FC<DateTimeFormatExtensionProps> = ({
  children = new Date(Date.now()),
  date = true,
  format = 'medium',
  locale = Locales.English,
  time = true,
  timeZone,
}) => {
  const repetitions = {
    full: 4,
    long: 3,
    medium: 2,
    short: 1,
  }

  const dateFormat = repeat('P', repetitions[format]) // PPP... is localized date format in date-fns
  const timeFormat = repeat('p', repetitions[format]) // ppp... is localized time format in date-fns
  const timeZoneFormat = repeat('z', repetitions[format]) /// zzz... is localize timezone format in date-fns

  const combinedDateTimeFormat = trim(
    `${date ? dateFormat : ''}${time ? timeFormat : ''} ${
      timeZone ? timeZoneFormat : ''
    }`
  )

  try {
    return (
      <>
        {formatDateString(children, locale, combinedDateTimeFormat, timeZone)}
      </>
    )
  } catch (error) {
    return <>{error}</>
  }
}
