/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React, { useState } from 'react'
import { InputChips } from '../'

export default function FormatInput() {
  const [values, setValues] = useState<string[]>([])
  return (
    <InputChips
      placeholder="Transform values to UPPERCASE"
      values={values}
      onChange={setValues}
      formatInputValue={val => val.toUpperCase()}
    />
  )
}
