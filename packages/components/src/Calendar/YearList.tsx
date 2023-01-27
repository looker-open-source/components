/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
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
