/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import React from 'react'
import { Space, Button } from '../../../..'
import type { SpaceHelperProps } from '../Space'

export default function Around(props: SpaceHelperProps) {
  const { around = true, ...rest } = props
  return (
    <Space {...rest} around={around}>
      <Button>Button A</Button>
      <Button>Button B</Button>
      <Button>Button C</Button>
    </Space>
  )
}
