/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import React, { useState } from 'react'
import type { RangeModifier } from '../../../../Calendar'
import { FieldDateRange } from '../FieldDateRange'

export default function Basic(value: RangeModifier) {
  const [range, setRange] = useState<RangeModifier>(value)
  return (
    <FieldDateRange value={range} onChange={setRange} label={'Pick a Date'} />
  )
}
