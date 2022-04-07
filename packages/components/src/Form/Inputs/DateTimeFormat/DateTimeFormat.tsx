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

import type { FC } from 'react'
import React from 'react'
import type { Locale } from 'date-fns'
import type { DateFormats, DateTimeOptions } from '../../../Calendar/utils'
import { formatDateString } from '../../../Calendar/utils'

export type DateTimeFormatProps = {
  children?: Date
  format?: DateFormats | string
  /**
   * Locale object from date-fns.
   * @example
   * import ko from 'date-fns/locale/ko'
   */
  locale?: Locale
  timeZone?: string
}

type DateTimeFormatExtensionProps = DateTimeFormatProps & DateTimeOptions

export const DateTimeFormat: FC<DateTimeFormatExtensionProps> = ({
  children = new Date(Date.now()),
  date = true,
  format = 'medium',
  locale,
  time = true,
  timeZone,
}) => {
  try {
    return (
      <>
        {formatDateString(children, format, locale, timeZone, { date, time })}
      </>
    )
  } catch (error) {
    return <>{error}</>
  }
}
