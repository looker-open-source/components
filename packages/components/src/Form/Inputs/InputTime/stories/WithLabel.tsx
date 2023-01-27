/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import { InputTime } from '..'
import type { InputTimeProps } from '..'
import { Label, Space } from '../../../..'

export default function WithLabel(props: InputTimeProps) {
  return (
    <Space>
      <Label htmlFor="demo-id">Label Text</Label>
      <InputTime id="demo-id" {...props} />
    </Space>
  )
}
