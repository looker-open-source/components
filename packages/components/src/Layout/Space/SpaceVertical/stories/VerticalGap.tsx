/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import React from 'react'
import type { SpaceVerticalProps } from '../SpaceVertical'
import { SpaceVertical, Button } from '../../../..'

export default function VerticalGap(props: SpaceVerticalProps) {
  const { gap = 'u8', ...rest } = props
  return (
    <SpaceVertical {...rest} gap={gap}>
      <Button>Button A</Button>
      <Button>Button B</Button>
      <Button>Button C</Button>
    </SpaceVertical>
  )
}
