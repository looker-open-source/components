/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import React from 'react'
import { Text } from '..'

export default function Nesting() {
  return (
    <div style={{ color: '#c00' }}>
      <Text>This text should be red</Text>
    </div>
  )
}
