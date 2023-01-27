/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React, { useState } from 'react'
import { InputChips } from '../'

export default function Summary() {
  const [values, setValues] = useState<string[]>(['cheddar', 'gouda'])
  function handleChange(newValues: string[]) {
    setValues(newValues)
  }
  return (
    <InputChips
      placeholder="Enter multiple values"
      summary={
        values.length > 0 ? `You've entered ${values.length} items` : undefined
      }
      values={values}
      onChange={handleChange}
    />
  )
}
