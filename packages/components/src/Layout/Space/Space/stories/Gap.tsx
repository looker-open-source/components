/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import React from 'react'
import type { SpaceHelperProps } from '../Space'
import { Space, Button } from '../../../..'

export default function Gap(props: SpaceHelperProps) {
  const { gap = 'u8', ...rest } = props
  return (
    <Space {...rest} gap={gap}>
      <Button>Button A</Button>
      <Button>Button B</Button>
      <Button>Button C</Button>
    </Space>
  )
}
