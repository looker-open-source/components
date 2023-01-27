/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React, { useState } from 'react'
import { Calendar } from '../..'
import type { RangeModifier } from '../types'
import type { CalendarProps } from '../Calendar'

export default function Range({
  onSelectRange,
  selectedRange,
  viewMonth: viewMonthProp = new Date('Mon Feb 07, 2022'),
  ...args
}: Partial<CalendarProps>) {
  const [range, setRange] = useState(selectedRange)
  const handleSelect = (newRange: RangeModifier) => {
    onSelectRange?.(newRange)
    setRange(newRange)
  }
  const [viewMonth, setViewMonth] = useState(viewMonthProp)
  return (
    <Calendar
      isRange
      onSelectRange={handleSelect}
      selectedRange={range}
      viewMonth={viewMonth}
      onMonthChange={setViewMonth}
    />
  )
}
