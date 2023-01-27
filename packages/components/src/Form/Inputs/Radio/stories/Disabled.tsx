/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import React from 'react'
import { Space } from '../../../../Layout'
import { Radio } from '../Radio'

export default function Disabled() {
  return (
    <Space>
      <Radio disabled />
      <Radio disabled checked />
    </Space>
  )
}
