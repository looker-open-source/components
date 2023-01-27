/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import React, { useState } from 'react'
import type { RangeModifier } from '../../../../Calendar'
import { FieldDateRange } from '../FieldDateRange'

export default function Value(value: RangeModifier) {
  return (
    <FieldDateRange
      value={{
        from: new Date('May 18, 2020'),
        to: new Date('May 21, 2020'),
      }}
      onChange={useState<RangeModifier>(value)[1]}
      label={'Pick a Date'}
    />
  )
}
