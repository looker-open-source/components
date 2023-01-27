/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import React from 'react'
import type { SpaceVerticalProps } from '../SpaceVertical'
import { Space, SpaceVertical, Button } from '../../../..'

export default function VerticalProperties(props: SpaceVerticalProps) {
  return (
    <SpaceVertical {...props}>
      <Space>
        <Button>Button A</Button>
        <Button size="small">Button B</Button>
        <Button size="large">Button C</Button>
      </Space>
      <Space align="start">
        <Button>Button A</Button>
        <Button size="small">Button B</Button>
        <Button size="large">Button C</Button>
      </Space>
      <Space align="end">
        <Button>Button A</Button>
        <Button size="small">Button B</Button>
        <Button size="large">Button C</Button>
      </Space>
    </SpaceVertical>
  )
}
