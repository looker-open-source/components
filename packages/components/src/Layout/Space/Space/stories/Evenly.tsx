/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import React from 'react'
import type { SpaceHelperProps } from '../Space'
import { Space, Button } from '../../../..'

export default function Evenly(props: SpaceHelperProps) {
  const { evenly = true, ...rest } = props
  return (
    <Space {...rest} evenly={evenly}>
      <Button>Button A</Button>
      <Button>Button B</Button>
      <Button>Button C</Button>
    </Space>
  )
}
