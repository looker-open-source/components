/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import React from 'react'
import type { SpaceHelperProps } from '../Space'
import { Space, SpaceVertical, Button } from '../../../..'

export default function Properties(props: SpaceHelperProps) {
  return (
    <Space {...props}>
      <SpaceVertical>
        <Button>Button A</Button>
        <Button size="small">Button B</Button>
        <Button size="large">Button C</Button>
      </SpaceVertical>
      <SpaceVertical align="center">
        <Button>Button A</Button>
        <Button size="small">Button B</Button>
        <Button size="large">Button C</Button>
      </SpaceVertical>
      <SpaceVertical align="end">
        <Button>Button A</Button>
        <Button size="small">Button B</Button>
        <Button size="large">Button C</Button>
      </SpaceVertical>
    </Space>
  )
}
