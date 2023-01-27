/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React, { useState } from 'react'
import { InputChips } from '..'

export default function AutoResize() {
  const [values, setValues] = useState<string[]>([])

  return (
    <InputChips
      autoResize={true}
      values={values}
      onChange={setValues}
      placeholder="shrink to fit content"
    />
  )
}
