/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import { Select } from '..'

export default function AutoResize() {
  return (
    <Select
      autoResize
      placeholder="Width adjusts to current value"
      options={[
        {
          label: 'Short label',
          value: 'short',
        },
        {
          label: 'Very long label that widens the input considerably',
          value: 'long',
        },
      ]}
    />
  )
}
