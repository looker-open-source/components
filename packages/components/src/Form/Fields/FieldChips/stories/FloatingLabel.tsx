/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React, { useState } from 'react'
import { FieldChips } from '../../FieldChips'

export default function FloatingLabel() {
  const [values, setValues] = useState<string[]>(['apples'])

  return (
    <FieldChips
      externalLabel={false}
      label="Floating Label"
      values={values}
      onChange={setValues}
    />
  )
}
