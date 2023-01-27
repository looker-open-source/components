/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import { isSameYear, getMonth } from 'date-fns'

export const confirmToday = (i: number) => getMonth(new Date()) === i

export const isThisMonth = (
  date: Date,
  monthNumber: number,
  selectedMonth?: Date
) =>
  selectedMonth &&
  isSameYear(selectedMonth, date) &&
  getMonth(selectedMonth) === monthNumber
