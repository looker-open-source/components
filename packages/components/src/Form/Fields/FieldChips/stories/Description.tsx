/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React, { useState } from 'react'
import { FieldChips } from '../../FieldChips'

export default function Description() {
  const [values, setValues] = useState<string[]>(['apples'])

  return (
    <FieldChips
      description="A nice description"
      values={values}
      onChange={setValues}
    />
  )
}
