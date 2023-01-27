/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import { Select } from '..'
import type { SelectProps } from '../'

export default function Basic(props: SelectProps) {
  return (
    <Select
      {...props}
      options={[
        { label: 'Cheddar', value: 'cheddar' },
        { label: 'Gouda', value: 'gouda' },
        { label: 'Swiss', value: 'swiss' },
      ]}
    />
  )
}
