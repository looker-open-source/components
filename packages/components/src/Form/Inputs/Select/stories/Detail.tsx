/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import { Select } from '..'

export default function Detail() {
  return (
    <Select
      maxWidth={400}
      placeholder="Select food"
      options={[
        { detail: 'Cheese', value: 'Gouda' },
        { detail: 'Fruit', value: 'Apple' },
      ]}
    />
  )
}
