/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import { Box2, InputDateRange } from '@looker/components'
import React from 'react'
import type { DayRange } from '../../../../types/day_range'
import type { RelativeTimeframeModel } from '../../../../types/relative_timeframe_types'
import { FILTERS_DATE_FORMAT } from '../../../../utils/format_date'

interface RelativeTimeframeCustomProps {
  value: RelativeTimeframeModel
  onCustomChange: (range: DayRange) => void
}

const defaultValue = {
  from: new Date(Date.now()),
  to: new Date(Date.now()),
}

export const RelativeTimeframeCustom = ({
  value,
  onCustomChange,
}: RelativeTimeframeCustomProps) => {
  const range = typeof value === 'string' ? defaultValue : value

  const handleCustomChange = (d: Partial<DayRange> = {}) => {
    const newDateRange = {
      from: new Date(Date.now()),
      to: new Date(Date.now()),
      ...d,
    }
    onCustomChange(newDateRange)
  }

  return (
    <Box2 p="u3">
      <InputDateRange
        // hardcoding 'yyyy/MM/dd' for legacy reasons
        // eventually this should be replaced with the user's preferred locale
        dateStringFormat={FILTERS_DATE_FORMAT}
        value={range}
        onChange={handleCustomChange}
      />
    </Box2>
  )
}
