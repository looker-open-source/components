/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React, { useState } from 'react'
import type { FormEvent } from 'react'
import { FieldColor } from '../../FieldColor'

export default function Required() {
  const [value, setValue] = useState('purple')
  const handleChange = (e: FormEvent<HTMLInputElement>) =>
    setValue(e.currentTarget.value)

  return (
    <FieldColor
      label="required"
      value={value}
      onChange={handleChange}
      required={true}
    />
  )
}
