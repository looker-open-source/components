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

import padStart from 'lodash/padStart'
import toString from 'lodash/toString'
import map from 'lodash/map'

export type TimeFormats = '12h' | '24h'

// if format is `12h`, repeat hours 1-12 twice
export const cycleHourDisplay = (format: TimeFormats, hour: number) => {
  if (format === '12h') {
    if (hour === 0) {
      return 12 // 12:00 am
    } else if (hour > 12) {
      return hour - 12 // 1:00 pm - 11:00 pm
    }
  }
  return hour
}

// returns "01", "02", "03" instead of integers 1, 2, 3
export const formatTimeString = (number: number) => {
  return padStart(toString(number), 2, '0')
}

export const parseBase10Int = (value: string) =>
  value.length ? parseInt(value, 10) : 0

// take a 24 hour formatted time string ('14:34') and check whether it's a real time of day
// rejects non-numeric inputs and illogical times ('64:1928')
export const isValidTime = (value?: string) => {
  if (!value) {
    return true
  }
  const [hour = 0, minute = 0] = map(value.split(':'), parseBase10Int)

  if (hour < 24 && minute <= 60) {
    return true
  }

  return false
}
