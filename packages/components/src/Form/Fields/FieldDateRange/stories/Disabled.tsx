/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import React, { useState } from 'react'
import type { RangeModifier } from '../../../../Calendar'
import { FieldDateRange } from '../FieldDateRange'

export default function Disabled(value: RangeModifier) {
  const [range, setRange] = useState<RangeModifier>(value)
  return (
    <FieldDateRange
      value={range}
      onChange={setRange}
      disabled={true}
      label={'Pick a Date'}
    />
  )
}
