/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React, { useState } from 'react'
import type { RangeModifier } from '../../../../Calendar'
import { Space, SpaceVertical } from '../../../../Layout'
import { DateFormat } from '../../DateFormat'
import { InputDateRange } from '../InputDateRange'

export default function OnChange() {
  const [selectedDate, setSelectedDate] = useState<RangeModifier>({
    from: new Date(),
    to: new Date(),
  })
  const handleChange = (dateRange: RangeModifier) => {
    setSelectedDate(dateRange)
  }
  return (
    <SpaceVertical>
      <Space gap="xsmall">
        <strong>Selected:</strong>
        <DateFormat>{selectedDate.from}</DateFormat>
        <span>&ndash;</span>
        <DateFormat>{selectedDate.to}</DateFormat>
      </Space>
      <InputDateRange onChange={handleChange} value={selectedDate} />
    </SpaceVertical>
  )
}
