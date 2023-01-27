/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React, { useState } from 'react'
import { FieldChips } from '../../FieldChips'

export default function Overflow() {
  const [values, setValues] = useState<string[]>([
    'California',
    'Wyoming',
    'Nevada',
    'Wisconsin',
    'Mississippi',
    'Missouri',
    'New York',
    'New Jersey',
  ])

  return (
    <FieldChips
      label="Overflow"
      values={values}
      onChange={setValues}
      width={200}
      maxHeight={145}
    />
  )
}
