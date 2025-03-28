/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React, { useState } from 'react';
import { Calendar } from '../..';
import type { CalendarProps } from './Calendar';
import type { RangeModifier } from './types';

export function Basic({
  onSelectDate,
  selectedDate,
  viewMonth: viewMonthProp = new Date('Jul 1, 2021'),
  ...args
}: Partial<CalendarProps>) {
  const [date, setDate] = useState(selectedDate);
  const handleSelect = (newDate: Date) => {
    onSelectDate?.(newDate);
    setDate(newDate);
  };
  const [viewMonth, setViewMonth] = useState(viewMonthProp);
  return (
    <Calendar
      {...args}
      onSelectDate={handleSelect}
      selectedDate={date}
      viewMonth={viewMonth}
      onMonthChange={setViewMonth}
    />
  );
}

export function Range({
  onSelectRange,
  selectedRange,
  viewMonth: viewMonthProp = new Date('Mon Feb 07, 2022'),
  ...args
}: Partial<CalendarProps>) {
  const [range, setRange] = useState(selectedRange);
  const handleSelect = (newRange: RangeModifier) => {
    onSelectRange?.(newRange);
    setRange(newRange);
  };
  const [viewMonth, setViewMonth] = useState(viewMonthProp);
  return (
    <Calendar
      isRange
      onSelectRange={handleSelect}
      selectedRange={range}
      viewMonth={viewMonth}
      onMonthChange={setViewMonth}
    />
  );
}
