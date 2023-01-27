/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React, { useState } from 'react'
import { Calendar } from '../..'
import type { CalendarProps } from '../Calendar'

export default function Basic({
  onSelectDate,
  selectedDate,
  viewMonth: viewMonthProp = new Date('Jul 1, 2021'),
  ...args
}: Partial<CalendarProps>) {
  const [date, setDate] = useState(selectedDate)
  const handleSelect = (newDate: Date) => {
    onSelectDate?.(newDate)
    setDate(newDate)
  }
  const [viewMonth, setViewMonth] = useState(viewMonthProp)
  return (
    <Calendar
      {...args}
      onSelectDate={handleSelect}
      selectedDate={date}
      viewMonth={viewMonth}
      onMonthChange={setViewMonth}
    />
  )
}
