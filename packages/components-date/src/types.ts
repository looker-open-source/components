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

import type { ValidationType } from '@looker/components'
import type { CalendarLocaleProps } from './Calendar'

export type InputDateBaseProps = CalendarLocaleProps & {
  'aria-labelledby'?: string
  /**
   * Format to display the date string in, may vary by locale.
   * Supports full, long, medium, and short as well as all patterns supported by date-fns
   * @default medium
   */
  dateStringFormat?: string
  disabled?: boolean
  id?: string
  onValidationFail?: (value: string) => void
  validationType?: ValidationType
}

// TODO delete when localization on date components is removed
export interface CalendarLocalization {
  firstDayOfWeek: number
  months: string[]
  weekdaysShort: string[]
}
