/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React, { useState } from 'react'
import type { FormEvent } from 'react'
import { FieldColor } from '../../FieldColor'

export default function Validation() {
  const [value, setValue] = useState('purple')
  const handleChange = (e: FormEvent<HTMLInputElement>) =>
    setValue(e.currentTarget.value)

  return (
    <FieldColor
      label="Basic"
      value={value}
      onChange={handleChange}
      validationMessage={{ message: 'Error!', type: 'error' }}
    />
  )
}
