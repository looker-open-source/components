/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import React from 'react'
import type { SpaceHelperProps } from '../Space'
import { Space, Button } from '../../../..'

export default function Basic(props: SpaceHelperProps) {
  return (
    <Space {...props}>
      <Button>Button A</Button>
      <Button>Button B</Button>
      <Button>Button C</Button>
    </Space>
  )
}
