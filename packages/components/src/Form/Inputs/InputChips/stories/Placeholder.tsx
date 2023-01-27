/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React, { useState } from 'react'
import { InputChips } from '../'

export default function Placeholder() {
  const [values, setValues] = useState<string[]>([])

  return (
    <InputChips
      placeholder="Enter more chips here"
      values={values}
      onChange={setValues}
    />
  )
}
