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
import type { FilterDateTimeModel } from '../../types'

export const dateToFilterDateTimeModel = (date: Date = new Date()) => ({
  year: date.getFullYear(),
  month: date.getMonth() + 1,
  day: date.getDate(),
  hour: date.getHours(),
  minute: date.getMinutes(),
  second: date.getSeconds(),
})

export const filterDateTimeModelToDate = ({
  year,
  month,
  day,
  hour = 0,
  minute = 0,
  second = 0,
}: FilterDateTimeModel) => new Date(year, month - 1, day, hour, minute, second)

export const addDays = (date: Date, days: number) => {
  const result = new Date(date)
  result.setDate(result.getDate() + days)
  return result
}

/**
 * Removes time (hour, minute and second) part from the filter date time model.
 * @param model The filter date time model to remove time part from.
 */
export const clearTimeFilterDateTimeModel = (model: FilterDateTimeModel) => ({
  year: model.year,
  month: model.month,
  day: model.day,
})

/**
 * Returns true if model has defined time (hour, minute and second) part.
 * @param model The filter date time model to check defined time part from.
 */
export const hasTimeFilterDateTimeModel = (
  model: FilterDateTimeModel | undefined
) =>
  model !== undefined &&
  model.hour !== undefined &&
  model.minute !== undefined &&
  model.second !== undefined
