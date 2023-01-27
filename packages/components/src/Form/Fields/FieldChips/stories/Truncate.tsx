/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React, { useState } from 'react'
import { FieldChips } from '../../FieldChips'

export default function Truncate() {
  const [values, setValues] = useState<string[]>([
    'A very long token that will truncate',
  ])

  return (
    <FieldChips
      label="Truncate"
      values={values}
      onChange={setValues}
      width={250}
    />
  )
}
