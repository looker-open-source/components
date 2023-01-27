/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import React from 'react'
import type { SpaceHelperProps } from '../Space'
import { Space, Button } from '../../../..'

export default function Between(props: SpaceHelperProps) {
  const { between = true, ...rest } = props
  return (
    <Space {...rest} between={between}>
      <Button>Button A</Button>
      <Button>Button B</Button>
      <Button>Button C</Button>
    </Space>
  )
}
