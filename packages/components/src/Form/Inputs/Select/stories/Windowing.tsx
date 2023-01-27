/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import { Select } from '..'

export default function Windowing() {
  const options1k = Array.from(Array(1000), (_, index) => ({
    value: `${index}`,
  }))
  return (
    <Select
      maxWidth={400}
      placeholder="So many options..."
      options={options1k}
    />
  )
}
