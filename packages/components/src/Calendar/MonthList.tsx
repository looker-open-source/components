/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import { getMonth, setMonth } from 'date-fns'
import React from 'react'
import { ScrollableDateList } from './ScrollableDateList'
import type { MonthListProps } from './types'
import { Month } from './Month'

const getItemMonth = (baseDate: Date, offset: number) => {
  const currentMonthIndex = getMonth(baseDate)
  return setMonth(baseDate, currentMonthIndex + offset)
}

export const MonthList = ({
  currentDate,
  baseMonth,
  setBaseMonth,
  onMonthChange,
  ...props
}: MonthListProps) => {
  return (
    <ScrollableDateList
      currentDate={currentDate}
      baseMonth={baseMonth}
      setBaseMonth={setBaseMonth}
      onMonthChange={onMonthChange}
      buffer={12}
      getItemDate={getItemMonth}
      itemComponent={Month}
      itemProps={props}
      thresholdRatio={5 / 7}
    />
  )
}
