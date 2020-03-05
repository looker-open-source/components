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

type DateFormats = 'short' | 'medium' | 'long' | 'full'

export interface DateTimeFormatProps {
  children?: Date
  format?: DateFormats
  locale?: string
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
  date,
  format,
  locale,
  time,

  timeZone,
}) => {
  const options: ExtendedDateTimeFormatOptions = {
    dateStyle: date ? format : undefined,
    timeStyle: time ? format : undefined,
    timeZone,
  }

  try {
    const formatted = children.toLocaleDateString(locale, options)
    return <>{formatted}</>
  } catch (error) {
    return <>{error}</>
  }
}

DateTimeFormat.defaultProps = {
  date: true,
  format: 'medium',
  time: true,
}
