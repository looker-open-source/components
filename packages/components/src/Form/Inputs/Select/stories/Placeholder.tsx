/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import { Select } from '..'

export default function Placeholder() {
  return (
    <Select
      placeholder="Select your cheese of choice..."
      options={[
        { label: 'Cheddar', value: 'cheddar' },
        { label: 'Gouda', value: 'gouda' },
        { label: 'Swiss', value: 'swiss' },
      ]}
    />
  )
}
