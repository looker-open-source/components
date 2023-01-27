/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import React from 'react'
import { Space } from '../../../../Layout'
import { Radio } from '../Radio'

export default function Checked() {
  return (
    <Space>
      <Radio />
      <Radio checked />
    </Space>
  )
}
