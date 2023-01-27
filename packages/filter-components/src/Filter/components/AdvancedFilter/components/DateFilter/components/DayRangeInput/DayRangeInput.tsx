/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import { Box, InputDateRange, Popover } from '@looker/components'
import React from 'react'
import { TokenBase } from '../../../../../../../Token'
import type { DayRange } from '../../types/day_range'
import { FILTERS_DATE_FORMAT, formatDate } from '../../utils/format_date'

interface DayRangePickerProps {
  value: DayRange
  onChange: (range: DayRange) => void
}

export const DayRangeInput = ({ value, onChange }: DayRangePickerProps) => {
  const handleChange = (d: Partial<DayRange> = {}) => {
    const newFrom = d.from || new Date(Date.now())
    const newTo = d.to || new Date(Date.now())
    const newDateRange = {
      from: new Date(
        newFrom.getFullYear(),
        newFrom.getMonth(),
        newFrom.getDate()
      ),
      to: new Date(newTo.getFullYear(), newTo.getMonth(), newTo.getDate()),
    }
    onChange(newDateRange)
  }

  const formattedValue = `${formatDate(value.from)} \u2013 ${formatDate(
    value.to
  )}`

  return (
    <Popover
      content={
        <Box p="u3">
          <InputDateRange
            onChange={handleChange}
            value={value}
            // hardcoding 'yyyy/MM/dd' for legacy reasons
            // eventually this should be replaced with the user's preferred locale
            dateStringFormat={FILTERS_DATE_FORMAT}
          />
        </Box>
      }
      placement="bottom-start"
    >
      <TokenBase aria-selected="true">{formattedValue}</TokenBase>
    </Popover>
  )
}
