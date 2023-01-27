/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React, { useState } from 'react'
import { FieldChips } from '../../FieldChips'

export default function AutoResize() {
  const [values, setValues] = useState<string[]>(['apples'])

  return (
    <FieldChips
      label="Auto Resize"
      placeholder="Auto Resize"
      values={values}
      onChange={setValues}
      maxWidth="50vw"
      autoResize={true}
    />
  )
}
