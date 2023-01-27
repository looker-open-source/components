/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React, { useState } from 'react'
import { FieldChips } from '../../FieldChips'

export default function Controlled() {
  const [values, setValues] = useState<string[]>(['bananas'])
  const [inputValue, setInputValue] = useState('oranges')
  const handleChange = (vals: string[]) => setValues(vals)
  const handleInputChange = (value: string) => setInputValue(value)

  return (
    <FieldChips
      values={values}
      inputValue={inputValue}
      onChange={handleChange}
      onInputChange={handleInputChange}
      summary="summary"
    />
  )
}
