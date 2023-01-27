/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import React from 'react'
import { ProgressCircular } from '../ProgressCircular'
import { Space } from '../../Layout'

export default function Size() {
  return (
    <Space justify="center">
      <ProgressCircular size="xsmall" />
      <ProgressCircular size="small" />
      <ProgressCircular size="medium" />
      <ProgressCircular />
    </Space>
  )
}
