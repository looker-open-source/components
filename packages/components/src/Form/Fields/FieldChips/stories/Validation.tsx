/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React, { useState } from 'react'
import { FieldChips } from '../../FieldChips'

export default function Validation() {
  const [values, setValues] = useState<string[]>(['apples'])

  return (
    <FieldChips
      values={values}
      onChange={setValues}
      validationMessage={{
        message: 'This is an error',
        type: 'error',
      }}
    />
  )
}
