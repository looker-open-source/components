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
import type { DayRange } from './day_range'

export enum PresetTimeframes {
  Today = 'Today',
  Yesterday = 'Yesterday',
  Last7 = 'Last 7 Days',
  Last14 = 'Last 14 Days',
  Last30 = 'Last 30 Days',
  Last90 = 'Last 90 Days',
  YearToDate = 'Year To Date',
}

export enum PresetTimeframesMostRecent {
  Today = 'Today',
  Yesterday = 'Yesterday',
}

export enum PresetTimeframesRecent {
  Last7 = 'Last 7 Days',
  Last14 = 'Last 14 Days',
  Last28 = 'Last 28 Days',
}

export enum PresetTimeframesLeastRecent {
  Last30 = 'Last 30 Days',
  Last90 = 'Last 90 Days',
  Last180 = 'Last 180 Days',
  Last365 = 'Last 365 Days',
  YearToDate = 'Year To Date',
}

export enum PresetTimeframesThis {
  ThisWeek = 'This Week',
  ThisMonth = 'This Month',
  ThisQuarter = 'This Quarter',
  ThisYear = 'This Year',
}

export enum PresetTimeframesPrevious {
  PreviousWeek = 'Previous Week',
  PreviousMonth = 'Previous Month',
  PreviousQuarter = 'Previous Quarter',
  PreviousYear = 'Previous Year',
}

export enum AllPresetTimeframes {
  Today = 'Today',
  Yesterday = 'Yesterday',

  Last7 = 'Last 7 Days',
  Last14 = 'Last 14 Days',
  Last28 = 'Last 28 Days',
  Last30 = 'Last 30 Days',
  Last90 = 'Last 90 Days',
  Last180 = 'Last 180 Days',
  Last365 = 'Last 365 Days',
  YearToDate = 'Year To Date',

  ThisWeek = 'This Week',
  ThisMonth = 'This Month',
  ThisQuarter = 'This Quarter',
  ThisYear = 'This Year',

  PreviousWeek = 'Previous Week',
  PreviousMonth = 'Previous Month',
  PreviousQuarter = 'Previous Quarter',
  PreviousYear = 'Previous Year',
}

export type RelativeTimeframeModel = AllPresetTimeframes | DayRange
