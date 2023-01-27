/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import type { TimeFormatProps } from './format_time'
import { get24HourTime } from './format_time'

const hoursInDay = 24

/**
 * Outputs and array of 24 hour format time in TimeFormatProps form
 */
export const generateTimes = () => {
  const timeValues: TimeFormatProps[] = []

  for (let i = 0; i < hoursInDay; i++) {
    timeValues.push(get24HourTime({ hour: i }))
  }

  return timeValues
}
