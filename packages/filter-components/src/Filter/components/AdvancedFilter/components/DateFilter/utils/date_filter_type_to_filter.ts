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
import type { ElementType } from 'react'
import type { DateFilterType, FilterTypeMap } from '@looker/filter-expressions'
import defaultTo from 'lodash/defaultTo'
import { MatchesAdvanced } from '../../MatchesAdvanced'
import { UserAttributes } from '../../UserAttributes'
import { BeforeAfter } from '../components/BeforeAfter'
import { DateRange } from '../components/DateRange'
import { OnDate } from '../components/OnDate'
import { Past } from '../components/Past'
import { Relative } from '../components/Relative'
import { ThisNextLast } from '../components/ThisNextLast'
import { Year } from '../components/Year'
import { YearMonth } from '../components/YearMonth'

const Blank = () => ''

const filterTypeToDateMap: FilterTypeMap<DateFilterType> = {
  null: Blank,
  anyvalue: Blank,
  notnull: Blank,
  past: Past,
  pastAgo: MatchesAdvanced,
  day: MatchesAdvanced,
  this: ThisNextLast,
  next: ThisNextLast,
  last: ThisNextLast,
  year: Year,
  month: YearMonth,
  before: BeforeAfter,
  after: BeforeAfter,
  range: DateRange,
  thisRange: MatchesAdvanced,
  on: OnDate,
  relative: Relative,
  user_attribute: UserAttributes,
}

export const dateFilterTypeToFilter = (type: DateFilterType): ElementType =>
  defaultTo(filterTypeToDateMap[type], MatchesAdvanced)
