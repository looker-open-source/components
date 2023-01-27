/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import { Select } from '..'

export default function Error() {
  return (
    <Select
      options={[
        { label: 'Cheddar', value: 'cheddar' },
        { label: 'Gouda', value: 'gouda' },
        { label: 'Swiss', value: 'swiss' },
      ]}
      validationType="error"
    />
  )
}
