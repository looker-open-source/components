/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import React, { useState } from 'react'
import type { RangeModifier } from '../../../../Calendar'
import type { FieldInputDateRangeProps } from '../FieldDateRange'
import { FieldDateRange } from '../FieldDateRange'

export default function Controlled(externalLabel: true, value: RangeModifier) {
  const [range, setRange] = useState<FieldInputDateRangeProps['value']>({
    from: new Date('May 18, 2020'),
    to: new Date('May 21, 2020'),
  })
  return (
    <FieldDateRange value={range} onChange={setRange} label={'Pick a Date'} />
  )
}
