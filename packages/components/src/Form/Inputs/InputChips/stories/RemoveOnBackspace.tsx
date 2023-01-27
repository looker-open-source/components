/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React, { useState } from 'react'
import { InputChips } from '../'

export default function RemoveOnBackspace() {
  const [values, setValues] = useState<string[]>(['cheddar', 'gouda'])
  function handleChange(newValues: string[]) {
    setValues(newValues)
  }
  return (
    <InputChips
      placeholder="Backspace does not remove values"
      values={values}
      onChange={handleChange}
      removeOnBackspace={false}
    />
  )
}
