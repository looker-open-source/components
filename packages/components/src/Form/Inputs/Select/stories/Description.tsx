/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import { Select } from '..'

export default function Description() {
  return (
    <Select
      maxWidth={400}
      options={[
        {
          description: 'Popular in the US',
          label: 'Cheddar',
          value: 'cheddar',
        },
        { description: 'Dutch sheeps milk', label: 'Gouda', value: 'gouda' },
        { description: 'Full of holes', label: 'Swiss', value: 'swiss' },
      ]}
    />
  )
}
