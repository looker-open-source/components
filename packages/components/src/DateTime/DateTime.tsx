/*

 MIT License

 Copyright (c) 2019 Looker Data Sciences, Inc.

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

type FormatStyles = 'short' | 'medium' | 'long' | 'full'

export interface DateTimeProps extends Intl.DateTimeFormatOptions {
  children?: Date
  dateStyle?: FormatStyles
  hideDate?: boolean
  hideTime?: boolean
  locale?: string
  style?: FormatStyles
  timeStyle?: FormatStyles
  timeZone?: string
}

export interface ExtendedDateTimeFormatOptions
  extends Intl.DateTimeFormatOptions {
  dateStyle?: FormatStyles
  timeStyle?: FormatStyles
}

export const DateTime: FC<DateTimeProps> = ({
  children = new Date(Date.now()),
  dateStyle,
  hideDate,
  hideTime,
  locale,
  style,
  timeStyle,
  timeZone,
}) => {
  const options: ExtendedDateTimeFormatOptions = {
    dateStyle,
    timeStyle,
    timeZone,
  }

  options.dateStyle = hideDate ? undefined : style
  options.timeStyle = hideTime ? undefined : style

  if (timeZone) {
    options.dateStyle = 'long'
    options.timeStyle = 'long'
  }

  const format = children.toLocaleDateString(locale, options)

  return <>{format}</>
}

DateTime.defaultProps = {
  style: 'medium',
}
