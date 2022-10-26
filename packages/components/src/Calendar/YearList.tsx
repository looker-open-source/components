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

import { getYear, setYear } from 'date-fns'
import React from 'react'
import { ScrollableDateList } from './ScrollableDateList'
import type { YearListProps } from './types'
import { Year } from './Year'

const getItemMonth = (baseDate: Date, offset: number) => {
  const currentMonthIndex = getYear(baseDate)
  return setYear(baseDate, currentMonthIndex + offset)
}

export const YearList = ({
  baseMonth,
  setBaseMonth,
  onMonthChange,
  currentDate,
  ...props
}: YearListProps) => {
  return (
    <ScrollableDateList
      currentDate={currentDate}
      baseMonth={baseMonth}
      setBaseMonth={setBaseMonth}
      onMonthChange={onMonthChange}
      buffer={10}
      getItemDate={getItemMonth}
      itemComponent={Year}
      itemProps={props}
      thresholdRatio={7 / 11}
    />
  )
}
