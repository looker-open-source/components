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
import type { Option } from '../../types/option'

// prettier-ignore
const agoDateUnits: Option[] = [
  { value: 'year', unit: 'years', label: 'years ago' },
  { value: 'quarter', unit: 'quarters', label: 'quarters ago' },
  { value: 'month', unit: 'months', label: 'months ago' },
  { value: 'week', unit: 'weeks', label: 'weeks ago' },
  { value: 'day', unit: 'days', label: 'days ago' },
  { value: 'hour', unit: 'hours', label: 'hours ago' },
  { value: 'minute', unit: 'minutes', label: 'minutes ago' },
  { value: 'second', unit: 'seconds', label: 'seconds ago' },
  { value: 'now', unit: 'now', label: 'now' },
]

// prettier-ignore
const fromNowDateUnits: Option[] = [
  { value: 'f_second',  unit: 'second',  label: 'seconds from now',  fromnow: true },
  { value: 'f_minute',  unit: 'minute',  label: 'minutes from now',  fromnow: true },
  { value: 'f_hour',    unit: 'hour',    label: 'hours from now',    fromnow: true },
  { value: 'f_day',     unit: 'day',     label: 'days from now',     fromnow: true },
  { value: 'f_week',    unit: 'week',    label: 'weeks from now',    fromnow: true },
  { value: 'f_month',   unit: 'month',   label: 'months from now',   fromnow: true },
  { value: 'f_quarter', unit: 'quarter', label: 'quarters from now', fromnow: true },
  { value: 'f_year',    unit: 'year',    label: 'years from now',    fromnow: true },
]

export const beforeOrAfterUnits: Option[] = [
  ...agoDateUnits,
  ...fromNowDateUnits,
]

// prettier-ignore
export const fiscalBeforeOrAfterUnits: Option[] = [
  { value: 'fiscal year',     unit: 'fiscal year',    label: 'fiscal years ago' },
  { value: 'fiscal quarter',  unit: 'fiscal quarter', label: 'fiscal quarters ago',},
  ...agoDateUnits,
  ...fromNowDateUnits,
  { value: 'f_fiscal quarter', unit: 'fiscal quarter', label: 'fiscal quarter from now',},
  { value: 'f_fiscal year',    unit: 'fiscal year',    label: 'fiscal years from now',},
]
